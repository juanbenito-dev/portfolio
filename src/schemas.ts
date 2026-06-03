import * as z from "zod";

export const ContactForm = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email("Invalid email"),
  subject: z.string().trim().min(1, "Subject is required"),
  message: z.string().trim().min(1, "Message is required"),
});
