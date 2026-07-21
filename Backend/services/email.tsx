import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
})

export default transporter


async function sendOTP(email: string, otp: string) {
    await transporter.sendMail({
        from: "[EMAIL_ADDRESS]",
        to: email,
        subject: "OTP for verification",
        text: `Your OTP is ${otp}`,
    })
}
