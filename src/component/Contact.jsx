"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "bd4dd274-1ce8-421d-a271-09c54dfbd380"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log(data);

    setResult(data.success ? "Success!" : data.message);
  };

  return (
  <>
  <section id="Contact" >
  <h2 className="text-center text-4xl font-bold">Contact</h2>
<form
  onSubmit={onSubmit}
  className="mx-auto flex w-full max-w-md flex-col gap-4"
>
  <input
    type="text"
    name="name"
    placeholder="name"
    required
    className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  />

  <input
    type="email"
    name="email"
    placeholder="email"
    required
    className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  />

  <textarea
    name="message"
    placeholder="message"
    required
    className="min-h-32 resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  />

  <button
    type="submit"
    className="rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
  >
    Submit
  </button>

  <p className="text-center text-sm text-green-600">
    {result}
  </p>
</form>
</section>
</>
  );
}