// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIVING_MAIL,
      subject: `A new query from website!`,
      text: `A new email from Website!\n\nSender email: ${email}\n\nName: ${name}\n\nphone: ${phone}\n\nMessage: ${message}`,
    };

    try {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              return res.status(500).send({ success: false, message: err.toString() });
            }
            res.status(200).send({ success: true, message: "Email sent: " + info.response });
          })

    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Only POST method is allowed' });
  }
}
