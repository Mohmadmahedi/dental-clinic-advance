import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import { Home, Calendar, Phone, Sparkles, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-aqua-50/50 via-white to-slate-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-soft-xl">
        {/* Dental Tooth Graphic with missing gap */}
        <div className="w-20 h-20 rounded-3xl bg-primary-100 text-primary flex items-center justify-center mx-auto shadow-teal">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10"
          >
            <path d="M12 2C7.5 2 4 4.5 4 8c0 2.2 1.2 4.2 2.5 6.5C7.8 17 8 22 12 22s4.2-5 5.5-7.5C18.8 12.2 20 10.2 20 8c0-3.5-3.5-6-8-6z" />
            <path d="M9 10c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Error 404 • Missing Page
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
            Oops! This Tooth Was Extracted.
          </h1>
          <p className="text-sm sm:text-base text-navy-600 leading-relaxed max-w-md mx-auto">
            The dental page or link you were looking for doesn&apos;t exist or may have been moved to a new root canal location.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href="/"
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Home
          </Button>

          <Button
            href="/book-appointment"
            variant="amber"
            size="md"
            className="w-full sm:w-auto shadow-amber font-bold"
            leftIcon={<Calendar className="w-4 h-4" />}
          >
            Book Appointment
          </Button>
        </div>

        {/* Quick Help */}
        <div className="pt-6 border-t border-slate-100 text-xs text-navy-500 space-y-2">
          <p>Need urgent assistance? Call our Indiranagar reception desk:</p>
          <a
            href={CLINIC_INFO.phoneTel}
            className="inline-flex items-center gap-1.5 font-bold text-navy-900 hover:text-primary transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>{CLINIC_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
