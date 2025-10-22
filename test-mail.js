import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  subject: "Nodemailer Test",
  text: "This is a test email from JIDI backend setup.",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Success:", info.response);
  }
});
