const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const conversationRoute = require("../routes/chat.routes.js");
const messageRoute = require("../routes/message.routes.js");
const connection = require("../dataBase/connection.dataBase.js");
const message = require("../../helpers/message.js");
const openapiSpecification = require("../utils/swagger.utils");
const swaggerUi = require("swagger-ui-express");

class ExpressServer {
    #PORT = process.env.PORT;
    #usuario = {
        route: "/api/usuario",
        path: require("../routes/usuario.routes.js"),
    };

    #band = {
        route: "/api/band",
        path: require("../routes/band.routes.js"),
    };

    #musicalGenre = {
        route: "/api/musicalGenre",
        path: require("../routes/musicalGenre.routes.js"),
    };

    #chat = {
        route: "/api/chat",
        path: require("../routes/chat.routes.js"),
    };

    constructor() {
        this.app = express();
        this.middlewares();
        this.dataBase();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    async dataBase() {
        await connection();
    }

    listen() {
        this.setupSocket(this.app.listen(this.#PORT, message(this.#PORT)));
    }

    routes() {
        this.app.get("/", (req, res) =>
            res.send(
                `<a href="${process.env.URL_BACK}/docs">Ir a la documentacion</a>`
            )
        );
        this.app.use("/api/messages", messageRoute);
        this.app.use(
            "/docs",
            swaggerUi.serve,
            swaggerUi.setup(openapiSpecification)
        );
        this.app.use(this.#usuario.route, this.#usuario.path);
        this.app.use(this.#band.route, this.#band.path);
        this.app.use(this.#musicalGenre.route, this.#musicalGenre.path);
        this.app.use(this.#chat.route, this.#chat.path);
    }
    setupSocket(server) {
        //const server = http.createServer(expressServer); // Crear el servidor HTTP utilizando tu aplicación Express
        const io = new Server(server, {
            // Crear una instancia de socket.io utilizando el servidor HTTP
            cors: {
                //origin: "http://localhost:8080",
                methods: ["GET", "POST"],
            },
        });

        let users = [];

        const addUser = (userId, socketId) => {
            !users.some((user) => user.userId === userId) &&
                users.push({ userId, socketId });
        };

        const removeUser = (socketId) => {
            users = users.filter((user) => user.socketId !== socketId);
        };

        const getUser = (userId) => {
            return users.find((user) => user.userId === userId);
        };

        io.on("connection", (socket) => {
            //when ceonnect
            console.log("a user connected.");

            //take userId and socketId from user
            socket.on("addUser", (userId) => {
                addUser(userId, socket.id);
                io.emit("getUsers", users);
            });

            //send and get message
            socket.on("sendMessage", ({ senderId, receiverId, text }) => {
                const user = getUser(receiverId);
                io.to(user.socketId).emit("getMessage", {
                    senderId,
                    text,
                });
            });

            //when disconnect
            socket.on("disconnect", () => {
                console.log("a user disconnected!");
                removeUser(socket.id);
                io.emit("getUsers", users);
            });
        });
    }
}

module.exports = ExpressServer;
