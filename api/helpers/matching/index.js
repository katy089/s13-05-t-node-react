const { request, response } = require('express')
const Usuario = require('../../models/usuarios')

const match = async (req = request, res = response) => {

	try {

		const users = await Usuario.find({});
		console.log('*****Usuarios*****')
		console.log(users);

	} catch (err) {
		console.log(err);
	}

}

module.exports = match