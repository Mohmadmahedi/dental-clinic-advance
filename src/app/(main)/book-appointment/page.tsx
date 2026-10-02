import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Calendar,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Loader2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Dental Appointment Online | BrightSmile Clinic Bengaluru",
  description:
    "Schedule your dental consultation or checkup online at BrightSmile Indiranagar. Same-day emergency slots available. 100% pain-free care promise.",
  openGraph: {
    title: "Book Your Appointment | BrightSmile Dental Clinic Bengaluru",
    description:
      "Quick 30-second dental appointment reservation with top MDS specialists.",
  },
};

export default function BookAppointmentPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>Instant Online Slot Reservation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Book Your Dental Appointment
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-3 leading-relaxed">
            Reserve your consultation with our specialist doctors in Indiranagar, Bengaluru. We honor scheduled appointment times with zero waiting queues.
          </p>
        </div>
      </section>

      {/* Main Booking Content */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: The Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-soft-xl">
              <div className="mb-6 pb-6 border-b border-slate-100">
                <h2 className="text-2xl font-bold font-heading text-navy-950">
                  Patient & Appointment Details
                </h2>
                <p className="text-xs sm:text-sm text-navy-600 mt-1">
                  Please provide your details so our reception can schedule and confirm your operatory.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="py-16 text-center text-navy-500 space-y-2">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                    <p className="text-xs">Loading appointment form...</p>
                  </div>
                }
              >
                <BookingForm />
              </Suspense>
            </div>

            {/* Right Column: Sticky Side Panel */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Emergency Hotline Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-soft-lg space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold font-heading text-base">
                    In Acute Dental Pain?
                  </h3>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Severe tooth throbbing, facial swelling, or knocked-out tooth trauma? Skip the form and call our emergency surgeon right now.
                </p>
                <a
                  href={CLINIC_INFO.emergencyPhoneTel}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-red-700 font-bold text-sm shadow-md hover:bg-red-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Call Emergency: {CLINIC_INFO.emergencyPhone}</span>
                </a>
              </div>

              {/* Clinic Hours & Address Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4 text-xs sm:text-sm text-navy-700">
                <h3 className="text-base font-bold font-heading text-navy-950 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Clinic Consulting Hours</span>
                </h3>

                <div className="space-y-2 py-1">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="font-medium text-navy-600">Monday – Saturday:</span>
                    <span className="font-bold text-navy-950">9:00 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="font-medium text-navy-600">Sunday:</span>
                    <span className="font-bold text-amber-600">10:00 AM – 2:00 PM</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{CLINIC_INFO.address.full}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>Regular Desk: {CLINIC_INFO.phone}</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-aqua-50/80 border border-primary-200/80 shadow-soft space-y-3.5">
                <h3 className="text-sm font-bold font-heading text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>What Happens Next?</span>
                </h3>

                <ol className="space-y-3 text-xs text-navy-800">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      1
                    </span>
                    <span>
                      <strong>Instant Slot Hold:</strong> Your appointment request is immediately logged on our doctor scheduling dashboard.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      2
                    </span>
                    <span>
                      <strong>Coordination Call / WhatsApp:</strong> Our clinic manager calls within 30 minutes to confirm your specific timing and doctor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      3
                    </span>
                    <span>
                      <strong>Zero-Wait Seating:</strong> Arrive at the clinic, park comfortably with valet assistance, and walk directly to your operatory.
                    </span>
                  </li>
                </ol>
              </div>

              {/* Patient Trust Guarantee */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-navy-600 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <p>
                  <strong>No Penalty Rescheduling:</strong> Change or cancel anytime at zero charge by messaging our WhatsApp support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
