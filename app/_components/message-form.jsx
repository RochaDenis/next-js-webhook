"use client";

import Form from "next/form";
import { useActionState } from "react";
import { sendDiscordMessage } from "../actions";
import { useEffect } from "react";
import { toast } from "sonner";

const MessageForm = () => {
  const [formState, formAction, isPending] = useActionState(
    sendDiscordMessage,
    null
  );

  useEffect(() => {
    if (formState?.success) {
      toast.success(formState?.message);
    } else if (formState?.success === false) {
      toast.error(formState?.message);
    }
  }, [formState?.success]);

  return (
    <Form
      className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.5)] border border-gray-700"
      action={formAction}
    >
      <h2 className="text-2xl text-neon-pink font-semibold mb-6 animate-pulse">
      Send a message to Denis Rocha
      </h2>

      <input
        type="text"
        placeholder="Your name"
        name="username"
        className="bg-transparent border border-pink-500 text-pink-500 placeholder-pink-400 p-3 rounded-lg w-[300px] my-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
        required
      />

      <input
        type="email"
        placeholder="Your e-mail"
        name="email"
        className="bg-transparent border border-green-500 text-green-500 placeholder-green-400 p-3 rounded-lg w-[300px] my-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
        required
      />

      <input
        type="text"
        placeholder="Your Image Url"
        name="dp"
        className="bg-transparent border border-blue-500 text-blue-500 placeholder-blue-400 p-3 rounded-lg w-[300px] my-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      <select
        name="type"
        className="bg-transparent border border-yellow-500 text-yellow-500 p-3 rounded-lg w-[300px] my-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
        required
      >
        <option value="" className="bg-black">Message Type</option>
        <option value="thanks" className="bg-black">Say, Thanks!</option>
        <option value="qa" className="bg-black">QA</option>
        <option value="general" className="bg-black">General</option>
      </select>

      <textarea
        placeholder="What do you want to say?"
        name="message"
        className="bg-transparent border border-purple-500 text-purple-500 placeholder-purple-400 p-3 rounded-lg w-[300px] my-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        required
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-purple-500 w-[120px] p-3 text-white rounded-lg shadow-lg hover:opacity-80 hover:scale-105 transition-all duration-300"
      >
        {isPending ? "Sending..." : "Send"}
      </button>
    </Form>
  );
};

export default MessageForm;
