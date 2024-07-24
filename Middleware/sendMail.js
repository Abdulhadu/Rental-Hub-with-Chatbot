// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com.",
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "hadi27767@gmail.com",
    pass: "zlkdqmcpsztsmeqh",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <hadi27767@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = {sendMail}