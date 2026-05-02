"use server";

import { headers } from "next/headers";
import * as z from "zod";
import { ratelimit } from "@/ratelimit";
import { ContactForm } from "@/schemas";

export async function sendEmail(prevState: any, formData: FormData) {
  const headerList = await headers();
  const ip = (headerList.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return { errors: { ratelimit: "Unable to process at this time" } };
  }

  const formDataObject = Object.fromEntries(formData);
  const validatedFields = ContactForm.safeParse(formDataObject);
  if (!validatedFields.success) {
    return { errors: z.flattenError(validatedFields.error).fieldErrors };
  }

  try {
    const { transporter } = await import("@/mailer");
    await transporter.sendMail({
      from: validatedFields.data.email,
      to: process.env.EMAIL,
      subject: `From ${validatedFields.data.name}: ${validatedFields.data.subject}`,
      text: validatedFields.data.message,
    });
    console.log("Message sent through contact form");
    return { success: "Message sent successfully!" };
  } catch (err) {
    console.log("Error while sending message through contact form:", err);
    return { errors: { sendMail: "Unable to send message" } };
  }
}
