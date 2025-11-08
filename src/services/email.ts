import nodemailer from "nodemailer";
export const sendEmail = async (to: string, subject: string, text: string) => {
  // Placeholder function for sending email
  console.log(
    `Sending email to ${to} with subject "${subject}" and text: ${text}`
  );

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };
  await transporter.sendMail(mailOptions);
};
export const sendOTPEmail = async (to: string, name: string, otp: string) => {
  const subject = "Your Verification Code";
  const text = `Your OTP code is: ${otp}`;
  await sendEmail(to, subject, text);
};
