const nodemailer = require("nodemailer");
// const { EMAIL, PASSWORD } = require("./env.js");

exports.handler = async function (event, context) {
  console.log("Trying to send an email....");
    const { userName, userEmail, userMessage } = event.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let message = {
      from: process.env.EMAIL,
      to: `${userEmail}`,
      bcc: process.env.EMAIL,
      subject: `Thank you for your message via my portfolio site`,
      text: `
        Hi ${userName},
        
        This is an automated message from Maria Panagos just letting you know I have recieved your message via my portfolio site! Here's what you wrote:
    
            "${userMessage}"
    
        I usually reply within 1-2 business days. Looking forward to connecting!
    
        Thank you,
        Maria
        `
      // html: `
      //       <p>
      //         Hi ${userName},
      //         <br />
      //         <br />
      //         This is an automated message from Maria Panagos just letting you know I
      //         have recieved your message via my portfolio site! Here's what you wrote:
      //         <br />
      //         <br />
      //         "${userMessage}"
      //         <br />
      //         <br />
      //         I usually reply within 1-2 business days. Looking forward to connecting!
      //         <br />
      //         Thank you, Maria
      //       </p>
      //     `,
    };
    try {
      
      // .sendMail({
      //   from: process.env.EMAIL,
      //   to: process.env.EMAIL,
      //   subject: 'test email',
      //   text: 'test text'
      // })
    transporter
      .sendMail(message)
      .then(() => {
        console.log('Transporter sent email')
        return {
          statusCode: 200,
          body: JSON.stringify({
            msg: "Sending an email to the user and BCCing Maria Panagos."
          }),
        };
      })
      .catch((err) => {
        console.log('Transporter tried but NO')
        return {
          statusCode: 500,
          body: JSON.stringify({
            msg: "Transporter tried to deliver msg, but something went wrong."
            // err: err.stack,
          }),
        };
      });
    } catch {
      console.log('transporter failed')
      return {
        statusCode: 500,
        body: JSON.stringify({
          msg: "transporter failed. :("
        })
      }
    }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: "this is the sendEmail file.",
  //     bodtype: typeof event.body,
  //     bod: event.body,
  //     userEmail: event.body['userEmail'],
  //     userMessage: event.body['userMessage'],
  //     userName: event.body['userName']
  //   }),
  // };
};
