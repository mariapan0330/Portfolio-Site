const nodemailer = require("nodemailer");

const message = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    res.status(201).json("You have successfully logged a message!!");
};

module.exports = { message };
