// src/app/api/sendEmail/route.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;


export async function POST(req) {
    // Parse the JSON body from the request
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Check for environment variables
    if (!EMAIL_USER || !EMAIL_PASSWORD) {
        console.error('Email configuration is missing');
        return NextResponse.json({ error: 'Email configuration is missing' }, { status: 500 });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
        secure: true, // Use TLS/SSL
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: EMAIL_USER,
        subject: 'New Message From portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
