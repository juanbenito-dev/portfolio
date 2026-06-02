import { Message2Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Juan Benito, a full-stack web developer based in Donostia / San Sebastián, to discuss working together, collaborations, or any questions you may have.",
};

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center gap-2.5 text-center">
        <span className="bg-primary/40 text-accent flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
          <Lineicons icon={Message2Outlined} size={32} />
        </span>

        <h1 className="text-2xl font-bold tracking-wide">CONTACT</h1>

        <p className="max-w-prose">
          Feel free to reach out if you'd like to work together or have any
          questions.
        </p>
      </div>

      <ContactForm />
    </>
  );
}
