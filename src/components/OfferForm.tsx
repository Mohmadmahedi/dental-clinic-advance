"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Phone,
  User,
  Clock,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function OfferForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "Today Evening (4:00 PM - 8:30 PM)",
    honeypot: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please provide a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: "Teeth Cleaning + Free Checkup (₹499 Promotional Offer)",
          doctor: "Senior Dental Surgeon",
          time: formData.timeSlot,
          message: "Booked via ₹499 Google Ad Landing Page",
          honeypot: formData.honeypot,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        router.push(
          `/thank-you?bookingId=${result.bookingId}&name=${encodeURIComponent(
            formData.name
          )}&service=${encodeURIComponent(
            "Teeth Cleaning + Free Checkup ₹499"
          )}`
        );
      } else {
        setErrorMessage(
          result.error || "Failed to submit booking. Please call directly."
        );
        setIsLoading(false);
      }
    } catch {
      setErrorMessage("A network error occurred. Please call to claim offer.");
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber shadow-soft-xl relative overflow-hidden">
      {/* Top Banner Ribbon */}
      <div className="bg-amber text-navy-950 text-center py-1.5 px-4 font-bold text-xs uppercase tracking-wider -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 shadow-sm flex items-center justify-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-navy-900" />
        <span>Save 77% • Just ₹499 (Valued at ₹2,200)</span>
      </div>

      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
          Claim Your ₹499 Offer
        </h3>
        <p className="text-xs text-navy-600">
          Takes 20 seconds. No advance online payment required. Pay at the clinic.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden Honeypot */}
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

        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Mobile Number (for SMS & WhatsApp Confirmation) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-navy-500">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Preferred Time Slot */}
        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Preferred Appointment Window
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="Today Evening (4:00 PM - 8:30 PM)">
                Today Evening (4:00 PM - 8:30 PM)
              </option>
              <option value="Tomorrow Morning (9:00 AM - 1:00 PM)">
                Tomorrow Morning (9:00 AM - 1:00 PM)
              </option>
              <option value="Tomorrow Evening (4:00 PM - 8:30 PM)">
                Tomorrow Evening (4:00 PM - 8:30 PM)
              </option>
              <option value="This Weekend (Saturday / Sunday)">
                This Weekend (Saturday / Sunday)
              </option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="amber"
          size="lg"
          isLoading={isLoading}
          className="w-full justify-center shadow-amber text-base font-bold py-3.5 mt-2"
          leftIcon={<Calendar className="w-5 h-5" />}
        >
          Book Checkup for Just ₹499
        </Button>

        {/* Trust Points */}
        <div className="pt-2 flex flex-col gap-1.5 text-[11px] text-navy-600 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Pay ₹499 directly at the clinic after your checkup</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Includes Full Digital RVG X-Ray & Doctor Consultation</span>
          </div>
        </div>
      </form>
    </div>
  );
}
