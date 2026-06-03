"use client";

import {
  Bolt2Outlined,
  CheckCircle1Outlined,
  Spinner3Solid,
} from "@lineiconshq/free-icons";
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

const inputClassName =
  "border-neutral-2/40 bg-neutral-1/60 focus:border-accent focus:ring-accent/30 rounded-xl border px-3 py-2 transition duration-300 outline-none focus:ring-2";

export default function ContactForm() {
  const [state, dispatchAction, isPending] = useActionState<
    ActionState,
    FormData
  >(sendEmail, initialState);

  return (
    <div className="space-y-5">
      {/* Response time */}
      <div className="bg-secondary mx-auto flex w-64 items-center gap-x-3 rounded-xl p-5">
        <span className="bg-primary/40 text-accent flex size-11 items-center justify-center rounded-full">
          <Lineicons icon={Bolt2Outlined} size={22} />
        </span>

        <span className="flex flex-col">
          <span className="text-accent text-sm tracking-wide">
            RESPONSE TIME
          </span>

          <span className="font-bold">Usually within a day</span>
        </span>
      </div>

      {/* Form */}
      <form
        action={dispatchAction}
        className="bg-secondary mx-auto grid max-w-2xl gap-5 rounded-xl p-5 shadow-sm sm:grid-cols-2"
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={inputClassName}
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
            className={inputClassName}
          />
          <p aria-live="polite" className="text-red-500">
            {state?.errors?.email}
          </p>
        </div>

        <div className="flex flex-col gap-y-1 sm:col-span-full">
          <label htmlFor="subject" className="font-bold">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className={inputClassName}
          />
          <p aria-live="polite" className="text-red-600">
            {state?.errors?.subject}
          </p>
        </div>

        <div className="flex flex-col gap-y-1 sm:col-span-full">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className={`${inputClassName} resize-none`}
          ></textarea>
          <p aria-live="polite" className="text-red-600">
            {state?.errors?.message}
          </p>
        </div>

        <div className="flex items-center gap-x-4 sm:col-span-full">
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary flex cursor-pointer items-center justify-center gap-x-4 justify-self-start rounded-xl px-4 py-3 transition duration-300 enabled:hover:brightness-110 disabled:cursor-not-allowed"
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
            className={`flex items-center gap-x-2 text-left ${state?.success ? "text-green-700" : "text-red-600"}`}
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
    </div>
  );
}
