"use client";

import { CheckCircle1Outlined, Spinner3Solid } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { useActionState } from "react";
import { sendEmail } from "@/actions";

type ActionState = {
  errors?: {
    ratelimit?: string;
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    sendMail?: string;
  };
  success?: string;
};

const initialState: ActionState = {};

export default function Contact() {
  const [state, dispatchAction, isPending] = useActionState<
    ActionState,
    FormData
  >(sendEmail, initialState);

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Contact</h1>

      <p className="text-center">
        Feel free to reach out if you'd like to work together or have any
        questions.
      </p>

      <form action={dispatchAction} className="grid gap-4">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border-neutral-2 rounded-xl border px-3 py-2"
          />
          <p aria-live="polite" className="text-red-600">
            {state?.errors?.name}
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border-neutral-2 rounded-xl border px-3 py-2"
          />
          <p aria-live="polite" className="text-red-500">
            {state?.errors?.email}
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="subject" className="font-bold">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="border-neutral-2 rounded-xl border px-3 py-2"
          />
          <p aria-live="polite" className="text-red-600">
            {state?.errors?.subject}
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="border-neutral-2 resize-none rounded-xl border px-3 py-2"
          ></textarea>
          <p aria-live="polite" className="text-red-600">
            {state?.errors?.message}
          </p>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary flex items-center justify-center gap-x-4 justify-self-start rounded-xl px-6 py-3 transition hover:brightness-110"
          >
            {isPending ? (
              <>
                <Lineicons
                  icon={Spinner3Solid}
                  size={20}
                  className="animate-spin"
                />{" "}
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>

          <p
            aria-live="polite"
            className={`flex items-center gap-x-2 text-center ${state?.success ? "text-green-600" : "text-red-600"}`}
          >
            {!isPending &&
              ((state?.success && (
                <>
                  <Lineicons
                    icon={CheckCircle1Outlined}
                    size={25}
                    color="#00a63e"
                  />{" "}
                  {state?.success}
                </>
              )) ||
                state?.errors?.ratelimit ||
                state?.errors?.sendMail)}
          </p>
        </div>
      </form>
    </>
  );
}
