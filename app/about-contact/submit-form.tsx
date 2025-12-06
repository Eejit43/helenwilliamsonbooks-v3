'use server';

import nodemailer from 'nodemailer';

const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY!;

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD },
});

/**
 * Escapes HTML syntax in a string.
 * @param input String to be modified.
 */
function escapeHtml(input: string): string {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

export interface SubmitResponse {
    message: string;
    data: { name: string; email: string; message: string; recaptchaResponse: string };
}

export default async function submitForm(previousResponse: SubmitResponse, formData: FormData): Promise<SubmitResponse> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const recaptchaResponse = formData.get('recaptcha-response') as string;

    const html = [
        '<div style="font-family: \'Verdana\', sans-serif; color: #20242c">',
        '<h1>New <a href="https://www.helenwilliamsonbooks.com/contact" target="_blank">Contact Form</a> Submission:</h1>',
        '<div style="background-color: #3f92ff; padding: 10px; max-width: 80%; border-radius: 10px">',
        `<p><b>Name:</b> <span style="background-color: #7588b5; border-radius: 5px; padding: 5px; display: inline-block; min-width: 20px;">${escapeHtml(name)}</span></p>`,
        `<p><b>Email:</b> <span style="background-color: #7588b5; border-radius: 5px; padding: 5px; display: inline-block; min-width: 20px;">${escapeHtml(email)}</span></p>`,
        '<p><b>Message:</b></p>',
        `<div style="background-color: #7588b5; border-radius: 5px; padding: 5px">${escapeHtml(message)}</div>`,
        '<br />',
        `<p><b>Sent At:</b> ${new Date().toLocaleTimeString([], { timeZone: 'America/New_York' })}, ${new Date().toLocaleDateString([], { timeZone: 'America/New_York' })} (EST)</p>`,
        '</div>',
        '</div>',
    ].join('');

    const mailOptions = {
        from: `"Helen Williamson Books" <${process.env.EMAIL_USERNAME}>`,
        to: process.env.DESTINATION_EMAIL,
        cc: process.env.CARBON_COPY_EMAIL,
        subject: 'Contact form submission - Helen Williamson Books',
        html,
    };

    const googleResponse = (await (
        await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`, {
            method: 'post',
        })
    ).json()) as { success: boolean };

    if (googleResponse.success)
        try {
            await transport.sendMail(mailOptions);

            return { message: 'success', data: { name: '', email: '', message: '', recaptchaResponse: '' } };
        } catch (error) {
            console.error(error);
            return { message: 'error', data: { name, email, message, recaptchaResponse } };
        }
    else return { message: 'captcha-failure', data: { name, email, message, recaptchaResponse } };
}
