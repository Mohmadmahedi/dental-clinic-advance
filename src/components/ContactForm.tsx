"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Hidden spam trap
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic honeypot spam protection
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulate form submission or call /api/book
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-heading text-navy-950">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-navy-700 leading-relaxed max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our front-desk coordinator will review your inquiry and call you back within 30 minutes during operating hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              phone: "",
              email: "",
              subject: "",
              message: "",
              honeypot: "",
            });
          }}
          className="text-xs font-semibold text-primary underline pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Hidden Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Email & Subject Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Subject / Area of Concern
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select an inquiry topic...</option>
            <option value="New Patient Checkup">New Patient Checkup (₹499 Offer)</option>
            <option value="Tooth Pain / Emergency">Tooth Pain / Root Canal</option>
            <option value="Invisalign & Aligners">Invisalign & Clear Aligners</option>
            <option value="Dental Implants">Dental Implants & Crowns</option>
            <option value="Teeth Whitening">Teeth Cleaning & Whitening</option>
            <option value="Other Inquiry">General Question / Feedback</option>
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div>
        <label className="block text-xs font-bold text-navy-800 mb-1">
          Your Message / Dental Symptoms
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe what you are looking for or any symptoms you are experiencing..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="amber"
        size="lg"
        isLoading={status === "loading"}
        className="w-full justify-center shadow-amber font-bold"
        leftIcon={<Send className="w-4 h-4" />}
      >
        Send Message
      </Button>

      <p className="text-[11px] text-center text-navy-500 pt-1">
        🔒 Your contact information is kept strictly confidential. No spam, ever.
      </p>
    </form>
  );
}
