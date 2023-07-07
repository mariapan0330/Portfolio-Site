const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../env.js");

// send mail from real Gmail account
const messageGmail = async (req, res) => {
  let { userName, userEmail, userMessage } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  // send email from myself to myself with contents of their email
  let messageToSelf = {
    from: EMAIL,
    to: EMAIL,
    subject: `${userName} via MP Portfolio Site`,
    text: `
    From: ${userName} (${userEmail})
    Message: ${userMessage}
    `,
  };

  transporter
    .sendMail(messageToSelf)
    .then(() => {
      return res.status(201).json({
        msg: "You should recieve a gmail response.",
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });

  // this is a message to the user letting them know I have recieved the email and what they sent.
  let message = {
    from: EMAIL,
    to: `${userEmail}`,
    subject: `Thank you for your message via my portfolio site`,
    text: `
    Hi ${userName},
    
    This is an automated message from Maria Panagos just letting you know I have recieved your message via my portfolio site! Here's what you wrote:

        "${userMessage}"

    I usually reply within 1-2 business days. Looking forward to connecting!

    Thank you,
    Maria
    `,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "They should recieve a gmail response.",
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });

};

module.exports = { messageGmail };
