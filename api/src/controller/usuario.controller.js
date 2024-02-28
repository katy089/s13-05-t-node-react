const { request, response } = require("express");

const googleCheck = require("../../helpers/googleCheck");
const serviceUser = require("../services/serviceUser");

const signUp = async (req = request, res = response) => {
  const { nombre, correo, password, ...rest } = req.body;

  try {
    await serviceUser.signUp(nombre, correo, password, rest, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Hubo un error inesperado al grabar los datos",
      error: e.message,
    });
  }
};

const logIn = async (req = request, res = response) => {
  const { correo, password, ...rest } = req.body;
  try {
    await serviceUser.logIn(correo, password, rest, res);
  } catch (e) {
    console.log("Error! no se pudo hacer Log-in".red, e);
    res.status(400).json({
      message: "No fué posible hacer Log-in",
      error: e.message,
    });
  }
};

const googleAuth = async (req, res = response) => {
  let distancia = "No tenemos tus coordenadas";
  const { id_token, ultimaPosicion } = req.body;
  try {
    const { correo, nombre, img } = await googleCheck(id_token);

    await serviceUser.googleAuth(correo, nombre, img, ultimaPosicion, res);
  } catch (error) {
    res.status(400).json({
      msg: "Token de Google no es válido",
      error: error.message,
    });
  }
};

/*  
  test13@gmail.com  / _id: 65d64275114bffc51bfab4e5
  brandon@gmail.com / _id: 65d66c03a3404872f147fe5f
  test20@gmail.com / _id: 65d80f90447ba575bbcaf98a
  test21@gmail.com / _id: 65d8101a447ba575bbcaf98c
*/
const matchProfile = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    await serviceUser.matchProfile(id, res);
  } catch (err) {
    console.log(err);
  }
};

const getTuneMatch = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    await serviceUser.getTuneMatch(id, res);
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  await serviceUser.getUser(id, res);
};

//para modificar el perfil de usuario

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, miGenero, distancia, bandas, generos, fotos, enBuscaDe } =
    req.body;

  try {
    await serviceUser.updateUser(
      id,
      { nombre, miGenero, distancia, bandas, generos, fotos, enBuscaDe },
      res
    );
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

module.exports = {
  signUp,
  logIn,
  googleAuth,
  getUser,
  matchProfile,
  getTuneMatch,
  updateUser,
};

