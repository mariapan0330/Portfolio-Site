const router = require("express").Router();
const { messageGmail } = require("../controller/appController.js");

// HTTP Request
router.post("/user/message", messageGmail);
// you can make a post request from this point (/user/message) 
// and recieve the response from appController

module.exports = router;