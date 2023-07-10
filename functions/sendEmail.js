const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../backend/env.js");

exports.handler = async function (event, context) {
  let { userName, userEmail, userMessage } = event.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  let message = {
    from: EMAIL,
    to: `${userEmail}`,
    bcc: EMAIL,
    subject: `Thank you for your message via my portfolio site`,
    text: `
        Hi ${userName},
        
        This is an automated message from Maria Panagos just letting you know I have recieved your message via my portfolio site! Here's what you wrote:
    
            "${userMessage}"
    
        I usually reply within 1-2 business days. Looking forward to connecting!
    
        Thank you,
        Maria
        `,
    html: `
          <p>
            Hi ${userName},
            <br />
            <br />
            This is an automated message from Maria Panagos just letting you know I
            have recieved your message via my portfolio site! Here's what you wrote:
            <br />
            <br />
            "${userMessage}"
            <br />
            <br />
            I usually reply within 1-2 business days. Looking forward to connecting!
            <br />
            Thank you, Maria
          </p>
        `,
  };


  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "Sending an email to the user and BCCing Maria Panagos.",
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });

};
