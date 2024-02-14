const express = require('express')
const cors = require('cors')
const connection = require('../dataBase/connection')
const message = require('../helpers/message')
const path = require('path')


class Server {

  #PORT = process.env.PORT
  #usuario = {
    route: '/api/usuario',
    path: require('../routes/routes.usuario')
  }


  constructor() {
    this.app = express()
    this.middlewares()
    this.dataBase()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  async dataBase() {
    await connection()
  }

  listen() {
    this.app.listen(this.#PORT, message(this.#PORT))
  }

  routes() {
    this.app.get('/', (_, res) =>
      res.sendFile(path.join(__dirname, 'public', 'index.html')))
    this.app.use(this.#usuario.route, this.#usuario.path)
  }
}

module.exports = Server