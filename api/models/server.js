const express = require('express')
const cors = require('cors')
const connection = require('../dataBase/connection')
const message = require('../helpers/message')
const openapiSpecification = require('../utils/swagger.utils')
const swaggerUi = require('swagger-ui-express')


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
  }

  async dataBase() {
    await connection()
  }

  listen() {
    this.app.listen(this.#PORT, message(this.#PORT))
  }

  routes() {
    this.app.get('/', (_, res) => res.json({ message: 'TuneMach Online' }))
    this.app.use(this.#usuario.route, this.#usuario.path)
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
  }
}

module.exports = Server