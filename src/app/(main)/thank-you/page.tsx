"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CLINIC_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Home,
  ShieldCheck,
  Navigation,
  Loader2,
} from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId") || "BS-108420";
  const patientName = searchParams.get("name") || "Valued Patient";
  const service = searchParams.get("service") || "Dental Consultation";
  const date = searchParams.get("date") || "Upcoming Slot";

  // Fire Lead conversion event for Meta Pixel and GA4
  useEffect(() => {
    try {
      // 1. Meta Pixel Lead Event
      if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
          content_name: service,
          currency: "INR",
          value: 499,
        });
      }

      // 2. Google Analytics 4 generate_lead Event
      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
          event_category: "Appointment",
          event_label: service,
          value: 499,
          currency: "INR",
        });
      }
    } catch (e) {
      console.error("Tracking firing error:", e);
    }
  }, [service]);

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft-xl text-center space-y-6">
      {/* Animated Success Badge */}
      <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm ring-8 ring-emerald-50">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
          Booking Request Received
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
          Thank You, {patientName}!
        </h1>
        <p className="text-sm sm:text-base text-navy-600 max-w-lg mx-auto">
          Your appointment request has been successfully recorded. Our front-desk coordinator is preparing your slot.
        </p>
      </div>

      {/* Reference ID Box */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto flex items-center justify-between text-left">
        <div>
          <p className="text-[11px] text-navy-500 font-medium">Booking Reference ID</p>
          <p className="text-lg font-bold font-heading text-primary tracking-wide">
            {bookingId}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-navy-500 font-medium">Requested Service</p>
          <p className="text-xs font-bold text-navy-900 truncate max-w-[160px]">
            {service}
          </p>
        </div>
      </div>

      {/* Next Steps Checklist */}
      <div className="py-6 border-y border-slate-100 text-left space-y-3 max-w-md mx-auto text-xs sm:text-sm text-navy-700">
        <p className="font-bold text-navy-900 text-center mb-2">
          What Happens Right Now:
        </p>
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <span>
            Our reception team will call or WhatsApp you within <strong>30 minutes</strong> to confirm the exact chair time.
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <span>
            Valet parking assistance is available at our Indiranagar clinic premises.
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <span>
            Need to reschedule? Message our WhatsApp desk anytime with your Booking ID.
          </span>
        </div>
      </div>

      {/* Action Triggers */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Button
          href={CLINIC_INFO.whatsappUrl}
          external
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
          leftIcon={<MessageCircle className="w-4 h-4" />}
        >
          Message Us on WhatsApp
        </Button>

        <Button
          href={CLINIC_INFO.address.directionsUrl}
          external
          variant="white"
          size="md"
          className="w-full sm:w-auto"
          leftIcon={<Navigation className="w-4 h-4 text-primary" />}
        >
          Get Directions
        </Button>

        <Button
          href="/"
          variant="ghost"
          size="md"
          className="w-full sm:w-auto"
          leftIcon={<Home className="w-4 h-4" />}
        >
          Return Home
        </Button>
      </div>

      {/* Clinic Address & Phone */}
      <div className="pt-4 text-xs text-navy-500 space-y-1">
        <p className="font-semibold text-navy-800">
          BrightSmile Dental Clinic • Indiranagar, Bengaluru
        </p>
        <p>{CLINIC_INFO.address.full}</p>
        <p>
          Front Desk:{" "}
          <a href={`tel:${CLINIC_INFO.phone}`} className="text-primary font-bold">
            {CLINIC_INFO.phone}
          </a>
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-aqua-50/60 via-white to-slate-50 py-16 md:py-24 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-3">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="text-xs text-navy-500 font-medium">
                Loading your appointment confirmation...
              </p>
            </div>
          }
        >
          <ThankYouContent />
        </Suspense>
      </div>
    </div>
  );
}
