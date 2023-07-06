const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../env.js");

// send mail from random Ethereal testing account
const messageTestAccount = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  //   creates random username and pw

  // create reusable transporter object using the default STMP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      // replace with real account when ready
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let messageInfo = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "You have successfully registered! Thank you for doin business together.", // plain text body
    // html: "<b>successfully</b>", // html body
  };

  transporter
    .sendMail(messageInfo)
    .then((info) => {
      return res.status(201).json({
        msg: "You should recieve an email :))",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });

  //   res.status(201).json("You have successfully logged a message!!");
};

// send mail from real Gmail account
const messageGmail = async (req, res) => {
  let { userEmail } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: EMAIL,
    to: EMAIL,
    subject: "Message from someone through your portfolio email",
    text: `This is an example message from ${userEmail}`,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "You should recieve a gmail response.",
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });

  //   res.status(201).json("Trying to send message with Gmail");
};

module.exports = { messageTestAccount, messageGmail };
