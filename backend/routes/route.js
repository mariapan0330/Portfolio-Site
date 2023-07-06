const router = require("express").Router();
const { message } = require("../controller/appController.js");

// HTTP Request
router.post("/user/message", message);
// you can make a post request from this point (/user/message) and reciece the response from appController

module.exports = router;