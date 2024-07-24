import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "hadi27767@gmail.com",
    pass: "zlkdqmcpsztsmeqh",
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text, html } = req.body;

    try {
      const info = await transporter.sendMail({
        from: '"Rental HUB" <hadi27767@gmail.com>', // sender address
        to,
        subject,
        text,
        html,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
