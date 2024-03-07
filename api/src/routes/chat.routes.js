const router = require("express").Router();
const {
    newConversation,
    getUserIDconversation,
    getUsersInConversation,
} = require("../controller/chat.controller.js");

//new conv

router.post("/", newConversation);

//get conv of a user

router.get("/:userId", getUserIDconversation);

// get conv includes two userId

router.get("/find/:firstUserId/:secondUserId", getUsersInConversation);

module.exports = router;
