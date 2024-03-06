const router = require("express").Router();
const {
    newMessage,
    getMessage,
} = require("../controller/message.controller.js");

//add

router.post("/", newMessage);

//get

router.get("/:conversationId", getMessage);

module.exports = router;
