const { request, response } = require('express')
const scoring = require('../../helpers/scoring')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuarios.models.js')
const calcularDistancia = require('../../helpers/distance/haversine.js')
const googleCheck = require('../../helpers/googleCheck.js')
const usuarios = require('../models/usuarios.models.js')


const coordTuneMatch = {
  lat: 60.16952,
  lon: 24.93545
};

const signUp = async (req = request, res = response) => {
  const { nombre, correo, password, ...rest } = req.body
  try {
    const salt = bycript.genSaltSync()
    const usuario = new Usuario(
      { nombre, correo, password, ...rest }
    )
    usuario.password = bycript.hashSync(password, salt)

    if ('ultimaPosicion' in rest) {
      const { ultimaPosicion } = rest
      usuario.ultimaPosicion = ultimaPosicion
      await usuario.save()
      return res.status(201).json({
        message: `Gracias por Inscribirte ${nombre}`,
        usuario,
        distancia
      })
    }

    await usuario.save()

    res.status(201).json({
      message: `Gracias por Inscribirte ${nombre}`,
      usuario,
    })


  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Hubo un error inesperado al grabar los datos',
      error: e.message,
    })
  }
}

const logIn = async (req = request, res = response) => {
  let distancia = 'No tenemos tus coordenadas'
  try {
    const { correo, password, ...rest } = req.body
    const usuario = await Usuario.findOne({
      correo,
      activo: true
    })

    if ('ultimaPosicion' in rest) {
      const { ultimaPosicion } = rest
      usuario.ultimaPosicion = ultimaPosicion
      await usuario.save()
      distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)
    }

    if (!usuario) return res.status(404).json({
      message: 'No existe este usuario',
    })

    const noCrypt = bycript.compareSync(password, usuario.password)
    if (!noCrypt) return res.status(400).json({
      message: 'Contraseña incorrecta',
    })

    res.status(200).json({
      message: `Gracias por volver ${usuario.nombre}`,
      usuario,
      distancia
    })
  } catch (e) {
    console.log('Error! no se pudo hacer Log-in'.red, e)
    res.status(400).json({
      message: 'No fué posible hacer Log-in',
      error: e.message,
    })
  }
}

const googleAuth = async (req, res = response) => {

  let distancia = 'No tenemos tus coordenadas'
  const { id_token, ultimaPosicion } = req.body
  try {
    const { correo, nombre, img } = await googleCheck(id_token)
    const salt = bycript.genSaltSync()
    let usuario = await Usuario.findOne({ correo })


    if (!usuario) {
      const data = {
        nombre,
        correo,
        password: bycript.hashSync(process.env.GOOGLE_PASSWORD, salt),
        fotos: [img],
        google: true
      };
      usuario = new Usuario(data)

      if (ultimaPosicion) {
        distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)
        usuario.ultimaPosicion = ultimaPosicion
      }

      await usuario.save()
      return res.status(201).json({
        message: 'Gracias por inscribirte ' + nombre,
        usuario,
        distancia
      })
    }
    if (usuario && usuario.google) {
      if (ultimaPosicion) {
        usuario.ultimaPosicion = ultimaPosicion
        await usuario.save()
        distancia = calcularDistancia(ultimaPosicion, coordTuneMatch)
      }
      return res.status(200).json({
        message: `Gracias por volver ${usuario.nombre}`,
        usuario,
        distancia
      })
    }

  } catch (error) {

    res.status(400).json({
      msg: 'Token de Google no es válido',
      error: error.message
    })

  }
}

const getUser = async (req, res) => {
  const { id } = req.params
  const user = await usuarios.findOne({ _id: id })

  if (!user) return res.json({ error: "No existe el usuario" })
  res.json(user)
}

/*  
  test13@gmail.com  / _id: 65d64275114bffc51bfab4e5
  brandon@gmail.com / _id: 65d66c03a3404872f147fe5f
  test20@gmail.com / _id: 65d80f90447ba575bbcaf98a
  test21@gmail.com / _id: 65d8101a447ba575bbcaf98c
*/
const matchProfile = async (req = request, res = response) => {
  const start = new Date();
  const { id } = req.body
  try {
    const user = await Usuario.findOne({ _id: id }, ['bandas', 'generos']);
    const matchs = await Usuario.find({
      _id: { $ne: user._id },
      $or: [
        { generos: { $in: user.generos } }, 
        { bandas: { $in: user.bandas } }
      ]
    }, ['bandas', 'generos']).limit(10)//.explain("executionStats");
    // posibles problemas de performance: https://www.mongodb.com/docs/manual/reference/operator/query/in/#syntax

    const match_list = scoring(user._doc, matchs)
    
    const end = new Date();
    res.status(200).json({
           match_list,
           estimated_time: (end.getTime() - start.getTime()) + "ms"
        })

  } catch (err) {
    console.log(err);
  }

}

module.exports = {
  signUp,
  logIn,
  googleAuth,
  getUser,
  matchProfile
}
