// pages/api/sendEmail.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function POST(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    try {
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: 'New message from your website',
            text: message,
        });

        console.log('Message sent: %s', info.messageId);

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
}
