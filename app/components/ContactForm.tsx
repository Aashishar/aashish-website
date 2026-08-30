"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  phone?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  phone: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message);
        setForm(initialForm);
      } else if (res.status === 422 && data.errors) {
        setStatus("idle");
        setErrors(data.errors);
      } else {
        setStatus("error");
        setServerMessage(data.message || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-foreground mb-2">Message sent!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">{serverMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent hover:text-accent-secondary font-medium transition-colors"
        >
          Send another &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          name="name"
          type="text"
          placeholder="Aashish Aryal"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="hello@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      {/* Subject + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Subject"
          name="subject"
          type="text"
          placeholder="Project inquiry"
          value={form.subject}
          onChange={handleChange}
          error={errors.subject}
          required
        />
        <Field
          label={
            <span className="flex items-center gap-1.5">
              Phone
              <span className="text-muted-foreground font-normal text-xs bg-muted border border-border px-1.5 py-0.5 rounded-md">
                optional
              </span>
            </span>
          }
          name="phone"
          type="tel"
          placeholder="+977 98XXXXXXXX"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-1">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project, idea, or just say hi..."
          value={form.message}
          onChange={handleChange}
          className={`w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            errors.message
              ? "border-red-500/60 focus:ring-red-500/40"
              : "border-border focus:border-accent/50 focus:ring-accent/20"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3">
          <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-red-500">{serverMessage}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-accent-foreground font-medium text-sm py-3.5 px-6 shadow-sm hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>

    </form>
  );
}

// ─────────────────────────────────────────────
//  Reusable Input Field
// ─────────────────────────────────────────────

interface FieldProps {
  label: React.ReactNode;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

function Field({ label, name, type, placeholder, value, onChange, error, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground flex items-center gap-1">
        {label}
        {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          error
            ? "border-red-500/60 focus:ring-red-500/40"
            : "border-border focus:border-accent/50 focus:ring-accent/20"
        }`}
      />
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}