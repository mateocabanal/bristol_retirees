"use client";

import { useMemo, useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const body = [
      name ? `Name: ${name}` : "Name:",
      "",
      "Constructive website comment:",
      message,
    ].join("\n");

    return `mailto:mateocabanal@gmail.com?subject=${encodeURIComponent(
      "3005 Retirees Chapter website comment",
    )}&body=${encodeURIComponent(body)}`;
  }, [name, message]);

  return (
    <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Your name
        <input
          className="rounded-md border border-slate-300 px-3 py-2 text-base font-normal text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Comment
        <textarea
          className="min-h-32 resize-y rounded-md border border-slate-300 px-3 py-2 text-base font-normal text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Share a helpful note about the website or its content."
          value={message}
        />
      </label>
      <a
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-sky-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-900"
        href={mailtoHref}
      >
        Send Comment
      </a>
    </form>
  );
}
