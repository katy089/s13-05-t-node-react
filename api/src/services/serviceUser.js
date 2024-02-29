const Usuario = require('../models/usuarios.models')



const bycript = require('bcryptjs')

const calcularDistancia = require('../../helpers/distance/haversine')


const coordTuneMatch = {
  lat: 60.16952,
  lon: 24.93545
}

module.exports = {
  signUp: async (nombre, correo, password, rest, res) => {
    try {
      const salt = bycript.genSaltSync()
      const usuario = new Usuario({ nombre, correo, password, rest })
      usuario.password = bycript.hashSync(password, salt)

      let distancia = 'No tenemos tus coordenadas'

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
      return res.status(201).json({
        message: `Gracias por Inscribirte ${nombre}`,
        usuario,
        distancia
      })


    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack
      })
    }
  },

  logIn: async (correo, password, rest, res) => {
    let distancia = 'No tenemos tus coordenadas'

    try {
      const usuario = await Usuario.findOne({ correo, activo: true })

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

      return res.status(200).json({
        message: `Gracias por volver ${usuario.nombre}`,
        usuario, distancia
      })
    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack
      })
    }
  },

  googleAuth: async (correo, nombre, img, ultimaPosicion, res) => {
    try {
      const salt = bycript.genSaltSync()
      let usuario = await Usuario.findOne({ correo })
      let distancia = 'No tenemos tus coordenadas'

      if (!usuario) {
        const data = {
          nombre,
          correo,
          password: bycript.hashSync(process.env.GOOGLE_PASSWORD, salt),
          fotos: [img],
          google: true
        }
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
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack
      })
    }
  },



  getUser: async (id, res) => {

    try {
      const user = await Usuario.findOne({ _id: id })
      if (!user) return res.json({ error: "No existe el usuario" })
      res.json(user)

    } catch (error) {
      return res.status(400).json({
        error: `Se ha producido un error: ${error.message}`,
        type: error.name,
        stack: error.stack
      })

    }

  },

  like: async (idUser, idLike, res) => {
    try {
      const [user, likeado] = await Promise.all([
        Usuario.findOne({ _id: idUser, activo: true }),
        Usuario.findOne({ _id: idLike, activo: true })
      ])
      if (!user || !likeado)
        return res.status(404).json({
          message: "No existe algún Id en la base de datos"
        })
      const likedUpdated = await Usuario.findOneAndUpdate(
        { _id: idLike, 'likes.userId': { $ne: idUser } },
        { $addToSet: { likes: { userId: idUser } } },
        { new: true }
      );

      if (!likedUpdated) {
        return res.status(200).json({
          message: "Like ya existe para este usuario."
        });
      }

      const CoincidenciasLikes = () => {
        const coincidencia1 = user.likes.some(like => like.userId.toString() === idLike.toString())
        const coincidencia2 = likedUpdated.likes.some(like => like.userId.toString() === idUser.toString())
        return coincidencia1 && coincidencia2
      };

      const result = CoincidenciasLikes()

      if (result) {
        const [, TuneMatch] = await Promise.all([
          Usuario.findByIdAndUpdate(idUser,
            { $addToSet: { tuneMatch: idLike }, $pull: { likes: { userId: idLike } } }, { new: true }),
          Usuario.findByIdAndUpdate(idLike,
            { $addToSet: { tuneMatch: idUser }, $pull: { likes: { userId: idUser } } }, { new: true })
        ])

        const tuneMatch = TuneMatch.toJSON();
        delete tuneMatch.correo;
        delete tuneMatch.tuneMatch;

        return res.status(200).json({
          message: 'Tienes un TuneMatch!',
          tuneMatch
        })
      }

      return res.status(200).json({
        message: "Like agregado con éxito."
      });

    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: "Error interno del servidor"
      })
    }
  }
} 
