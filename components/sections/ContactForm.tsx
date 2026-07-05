"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // NOTE: wire this up to your email/CRM endpoint (e.g. an API route,
    // Formspree, or HubSpot) before going live.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-20 border border-line bg-gray-light"
      >
        <CheckCircle2 className="size-10 text-red" strokeWidth={1.5} />
        <h3 className="mt-5 text-xl font-bold text-navy">Message Sent</h3>
        <p className="mt-2 text-gray max-w-sm">
          Thank you for reaching out. A member of our team will get back to
          you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Full Name" name="fullName" required />
        <Field label="Company Name" name="company" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase kicker text-gray mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-line bg-white px-4 py-3 text-navy placeholder:text-gray/60 focus:outline-none focus:border-navy transition-colors resize-none"
          placeholder="Tell us about your catering needs..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide uppercase bg-red text-white hover:bg-red-dark transition-colors duration-300 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase kicker text-gray mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-line bg-white px-4 py-3 text-navy placeholder:text-gray/60 focus:outline-none focus:border-navy transition-colors"
      />
    </div>
  );
}
