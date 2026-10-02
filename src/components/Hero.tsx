import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Award,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-aqua-50/80 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -translate-x-1/4 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subheadline, Buttons, Trust Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-200/80 shadow-soft text-navy-800 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-primary-700">Top-Rated Dental Clinic in Indiranagar, Bengaluru</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-navy-950 tracking-tight leading-[1.12]">
              Pain-Free Dental Care{" "}
              <span className="text-primary relative inline-block">
                You Can Trust
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary-300 -z-10"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C40 2 120 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-navy-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience gentle, anxiety-free dentistry with computerized anesthesia,
              Swiss 3D digital scanners, and transparent pricing. Over 15,000 happy smiles created in Bengaluru.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/book-appointment"
                variant="amber"
                size="lg"
                className="w-full sm:w-auto text-base shadow-amber font-bold"
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book Free Checkup
              </Button>

              <Button
                href={`tel:${CLINIC_INFO.phone}`}
                variant="white"
                size="lg"
                className="w-full sm:w-auto text-base border-slate-200"
                leftIcon={<Phone className="w-5 h-5 text-primary" />}
              >
                Call Now: {CLINIC_INFO.phone}
              </Button>
            </div>

            {/* Reassurance Micro-points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-navy-600 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Zero Waiting Time
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                100% Pain-Free Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                0% Interest EMI Available
              </span>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-soft text-center">
                <div className="flex items-center justify-center text-primary-600 mb-1">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-navy-900 leading-tight">
                  10+ Years
                </div>
                <div className="text-[11px] sm:text-xs text-navy-500 font-medium">
                  Clinical Excellence
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-soft text-center">
                <div className="flex items-center justify-center text-primary-600 mb-1">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-navy-900 leading-tight">
                  15,000+
                </div>
                <div className="text-[11px] sm:text-xs text-navy-500 font-medium">
                  Treated Patients
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-soft text-center">
                <div className="flex items-center justify-center text-amber-500 mb-1">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-navy-900 leading-tight">
                  4.9 / 5
                </div>
                <div className="text-[11px] sm:text-xs text-navy-500 font-medium">
                  Google Patient Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Social Proof Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Clinic/Doctor Photo */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor treating patient gently at BrightSmile Dental Clinic Bengaluru"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Comfortable, Spa-Like Operatory
                  </p>
                  <p className="text-xs text-navy-200">
                    Netflix ceiling screens & ergonomic memory foam dental chairs
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Next Available Slot */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-navy-500 font-medium">Next Slot Available</p>
                  <p className="text-sm font-bold text-navy-900">Today, 5:00 PM</p>
                </div>
              </div>

              {/* Floating Card 2: 99% Pain-Free Rating */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-navy-900 mt-0.5">99% Pain-Free Rating</p>
                  <p className="text-[10px] text-navy-500">From 1,200+ patient reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
