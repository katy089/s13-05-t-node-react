const { Schema, model } = require('mongoose')

const UsuariosSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Debe Ingresar un nombre de usuario']
  },
  correo: {
    type: String,
    required: [true, 'Debe Ingresar un correo'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Debe ingresar una contraseña']
  },
  miGenero: { type: String },

  fotos: [{ type: String }],

  bandas: {
    type: [{ type: String }],
    required: [true, 'debe Ingresar al menos una banda']
  },

  generos: {
    type: [{ type: String }],
    required: [true, 'Al menos debe seleccionar un género músical']
  },

  enBuscaDe: [{ type: String }],

  activo: { type: Boolean, default: true }
})

UsuariosSchema.methods.toJSON = function () {
  const { __v, _id: id, password, ...usuario } = this.toObject()
  return { id, ...usuario }
}

module.exports = model('Usuario', UsuariosSchema)