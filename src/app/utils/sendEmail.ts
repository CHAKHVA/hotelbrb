"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "info@hotelbrb.ge",
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
};
