"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SERVICES } from "@/data/services";
import { DOCTORS } from "@/data/doctors";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  Sparkles,
  AlertCircle,
  Loader2,
  CheckCircle,
} from "lucide-react";

export function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const preselectedService = searchParams.get("service") || "";
  const preselectedDoctor = searchParams.get("doctor") || "";
  const preselectedPackage = searchParams.get("package") || "";
  const preselectedOffer = searchParams.get("offer") || "";

  // Get today's date formatted for min date attribute (YYYY-MM-DD)
  const todayDateString = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    doctor: "",
    date: "",
    time: "Morning (9:00 AM - 12:00 PM)",
    message: "",
    honeypot: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Populate preselected values from URL queries
  useEffect(() => {
    let initialService = "";

    if (preselectedService) {
      const match = SERVICES.find((s) => s.slug === preselectedService);
      if (match) initialService = match.title;
    } else if (preselectedOffer) {
      initialService = "₹499 New Patient Consultation Offer";
    } else if (preselectedPackage) {
      initialService = `Package: ${preselectedPackage}`;
    }

    let initialDoctor = "";
    if (preselectedDoctor) {
      const matchDoc = DOCTORS.find((d) => d.id === preselectedDoctor);
      if (matchDoc) initialDoctor = matchDoc.name;
    }

    setFormData((prev) => ({
      ...prev,
      service: initialService || prev.service || "Routine Oral Checkup & Cleaning",
      doctor: initialDoctor || prev.doctor || "Any Available Specialist",
    }));
  }, [preselectedService, preselectedDoctor, preselectedOffer, preselectedPackage]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // 1. Validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Redirect to /thank-you with booking reference
        router.push(
          `/thank-you?bookingId=${result.bookingId}&name=${encodeURIComponent(
            formData.name
          )}&service=${encodeURIComponent(formData.service)}&date=${encodeURIComponent(
            formData.date || "Next Available"
          )}`
        );
      } else {
        setErrorMessage(
          result.error || "Failed to submit booking. Please call us directly."
        );
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(
        "A network error occurred. Please call +91 98765 43210 to book directly."
      );
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot Spam Trap */}
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

      {/* Error Banner */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Step 1: Personal Details */}
      <div className="space-y-4">
        <h3 className="text-base font-bold font-heading text-navy-950 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
            1
          </span>
          <span>Your Contact Information</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy-800 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-800 mb-1">
              Mobile Number (10 digits) <span className="text-red-500">*</span>
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
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Email Address (Optional, for calendar invite)
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul.sharma@example.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Step 2: Treatment & Doctor Selection */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <h3 className="text-base font-bold font-heading text-navy-950 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
            2
          </span>
          <span>Treatment & Doctor Preference</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy-800 mb-1">
              Select Treatment / Service
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="Routine Oral Checkup & Cleaning">
                  Routine Oral Checkup & Cleaning (₹499 Offer)
                </option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title} ({s.priceRange})
                  </option>
                ))}
                <option value="Emergency Toothache Care">
                  Emergency Toothache Care
                </option>
                <option value="Second Opinion / Consultation">
                  Second Opinion / Smile Consultation
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-800 mb-1">
              Preferred Doctor
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="Any Available Specialist">
                Any Available Specialist (Fastest Slot)
              </option>
              {DOCTORS.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name} — {d.specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Step 3: Preferred Date & Time */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <h3 className="text-base font-bold font-heading text-navy-950 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
            3
          </span>
          <span>Preferred Appointment Slot</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy-800 mb-1">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <input
                type="date"
                name="date"
                min={todayDateString}
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-800 mb-1">
              Preferred Time Window
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="Morning (9:00 AM - 12:00 PM)">
                  Morning (9:00 AM - 12:00 PM)
                </option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">
                  Afternoon (12:00 PM - 4:00 PM)
                </option>
                <option value="Evening (4:00 PM - 8:30 PM)">
                  Evening (4:00 PM - 8:30 PM)
                </option>
                <option value="Immediate Emergency Triage">
                  Immediate Emergency Triage
                </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-800 mb-1">
            Symptoms or Specific Requests (Optional)
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. Tooth sensitivity on cold water, severe throbbing on lower molar, or desire to straighten front gap..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
          />
        </div>
      </div>

      {/* Submit Button & Guarantees */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="amber"
          size="lg"
          isLoading={isLoading}
          className="w-full justify-center shadow-amber text-base font-bold py-4"
          leftIcon={<Calendar className="w-5 h-5" />}
        >
          Confirm Appointment Request
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs text-navy-500 pt-3">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            Zero Cancellation Fee
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            Confirmation Call within 30 Mins
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            100% Confidential
          </span>
        </div>
      </div>
    </form>
  );
}
