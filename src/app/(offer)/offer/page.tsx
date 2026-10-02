import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { TESTIMONIALS } from "@/data/testimonials";
import { CountdownTimer } from "@/components/CountdownTimer";
import { OfferForm } from "@/components/OfferForm";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronDown,
  Quote,
  HelpCircle,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Special Offer: Teeth Cleaning + Full Checkup for ₹499 | BrightSmile",
  description:
    "Limited time dental offer in Indiranagar, Bengaluru. Professional ultrasonic teeth cleaning + full mouth checkup + digital x-ray for just ₹499 (worth ₹2,200).",
  openGraph: {
    title: "Teeth Cleaning & Checkup Offer ₹499 | BrightSmile Bengaluru",
    description:
      "Save 77% on your dental checkup and ultrasonic cleaning. 100% pain-free guarantee.",
  },
};

export default function OfferLandingPage() {
  const offerReviews = TESTIMONIALS.filter((t) => t.featuredOffer);

  const offerFaqs = [
    {
      q: "Is ₹499 really the final price, or are there hidden clinic charges?",
      a: "₹499 is your complete, all-inclusive price. It covers your full doctor consultation, high-definition intraoral camera scan, ultrasonic scaling (teeth cleaning), stain polishing, and digital RVG x-ray if clinically needed. There are zero hidden equipment fees.",
    },
    {
      q: "Does teeth cleaning make teeth loose or cause enamel damage?",
      a: "Not at all! This is a widespread misconception. Modern ultrasonic scaling tips oscillate at high frequencies with water spray to loosen hardened bacterial tartar without touching or scratching tooth enamel.",
    },
    {
      q: "How long will the appointment take?",
      a: "The entire visit takes roughly 40 to 45 minutes. Because we honor pre-booked appointment slots, you will be seated in the dental operatory without waiting in queues.",
    },
    {
      q: "Can I pay at the clinic after the checkup?",
      a: "Yes! There is no online payment required right now. You can pay ₹499 directly at our clinic reception via Google Pay, PhonePe, credit/debit card, or cash after your visit.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Distraction-Free Header (Logo + Click-to-Call ONLY) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-primary-400 flex items-center justify-center text-white shadow-teal">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 2C7.5 2 4 4.5 4 8c0 2.2 1.2 4.2 2.5 6.5C7.8 17 8 22 12 22s4.2-5 5.5-7.5C18.8 12.2 20 10.2 20 8c0-3.5-3.5-6-8-6z" />
                <path d="M9 10c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-bold font-heading text-navy-950 leading-none">
                Bright<span className="text-primary">Smile</span>
              </span>
              <span className="block text-[10px] font-semibold text-navy-500 uppercase tracking-wider mt-0.5">
                Indiranagar, Bengaluru
              </span>
            </div>
          </div>

          {/* Click to Call Button */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-navy-900 font-bold text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="hidden sm:inline">Call to Claim:</span>
            <span>{CLINIC_INFO.phone}</span>
          </a>
        </div>
      </header>

      {/* 2. Top Urgency Banner with Countdown Timer */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border-b border-amber-200 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <CountdownTimer />
          <span className="text-xs font-semibold text-navy-800">
            ⚡ Special online allocation: Only <strong>8 slots</strong> remaining at ₹499 today!
          </span>
        </div>
      </div>

      {/* 3. Hero Section Above the Fold */}
      <section className="relative overflow-hidden bg-gradient-to-b from-aqua-50/70 via-white to-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Price Tag, Trust Proof */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Exclusive Google / Meta Ad Promotion</span>
              </div>

              {/* Single H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy-950 tracking-tight leading-[1.15]">
                Professional Teeth Cleaning + Full Checkup for Just{" "}
                <span className="text-amber-600 underline decoration-amber-400">
                  ₹499
                </span>
              </h1>

              {/* Price comparison card */}
              <div className="inline-flex items-baseline gap-3 p-3 px-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
                <span className="text-xs text-navy-500 font-semibold uppercase">
                  Special Tariff:
                </span>
                <span className="text-3xl font-extrabold font-heading text-primary">
                  ₹499
                </span>
                <span className="text-sm line-through text-navy-400">
                  ₹2,200 (Save 77%)
                </span>
              </div>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Refresh your breath, eliminate stubborn coffee and food stains, and get a complete 32-tooth digital evaluation by certified MDS dentists in Indiranagar, Bengaluru.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-2 text-center text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500 mx-auto mb-1" />
                  <p className="font-bold text-navy-900">4.9★ Google</p>
                  <p className="text-[10px] text-navy-500">1,200+ Reviews</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="font-bold text-navy-900">100% Pain-Free</p>
                  <p className="text-[10px] text-navy-500">Ultrasonic Scalers</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Clock className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <p className="font-bold text-navy-900">Zero Wait Time</p>
                  <p className="text-[10px] text-navy-500">Scheduled Slots</p>
                </div>
              </div>
            </div>

            {/* Right Column: Short Offer Form Above the Fold */}
            <div className="lg:col-span-5" id="offer-form">
              <OfferForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3 Core Package Benefits */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              What Is Included In ₹499
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              3 Comprehensive Benefits in One Session
            </h2>
            <p className="text-sm text-navy-600">
              Zero compromises on medical quality. You receive the exact same hospital-grade care as regular visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-950">
                1. Ultrasonic Calculus & Stain Scaling
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Piezoelectric ultrasonic technology vibrates hard tartar and yellow tea/tobacco stains away safely with zero enamel scratching and zero pain.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-950">
                2. Intraoral Camera Scan & Doctor Consult
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                A senior MDS dentist examines all 32 teeth with our high-definition intraoral camera, displaying any hidden micro-cavities on your personal chairside monitor.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-950">
                3. Diamond Paste Buffing & Polish
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Micro-fine diamond polishing paste leaves tooth surfaces glassy and slippery so plaque cannot easily re-adhere, keeping breath fresh for months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 2 Patient Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Real Patient Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Loved by Over 15,000 Bengaluru Residents
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {offerReviews.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-soft space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary-200" />
                  </div>
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed italic">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-950 flex items-center gap-1">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    </h4>
                    <p className="text-[11px] text-navy-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Short FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Offer Questions & Clarifications
            </h2>
            <p className="text-xs sm:text-sm text-navy-600">
              Clear answers before you step into our clinic.
            </p>
          </div>

          <div className="space-y-3">
            {offerFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft"
              >
                <h4 className="font-heading font-bold text-sm sm:text-base text-navy-950 mb-1.5">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Conversion Section */}
      <section className="py-14 bg-gradient-to-r from-navy-950 to-primary-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">
            Don&apos;t Put Off Your Oral Health Any Longer
          </h2>
          <p className="text-xs sm:text-sm text-navy-200 max-w-lg mx-auto leading-relaxed">
            Catch cavities early and walk out with sparkling, smooth teeth. Book your ₹499 checkup now before today&apos;s allocation fills up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#offer-form"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber text-navy-950 hover:bg-amber-400 font-bold text-sm shadow-amber transition-colors"
            >
              Claim ₹499 Checkup Above
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              Call {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 8. Minimal Distraction-Free Footer */}
      <footer className="py-8 bg-navy-950 text-navy-400 text-xs border-t border-navy-800 text-center px-4 space-y-2">
        <p className="font-semibold text-white">
          BrightSmile Dental Clinic • Plot No. 428, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru
        </p>
        <p>
          Direct Line: <a href={`tel:${CLINIC_INFO.phone}`} className="text-primary-300 font-bold">{CLINIC_INFO.phone}</a> | Emergency: {CLINIC_INFO.emergencyPhone}
        </p>
        <div className="flex items-center justify-center gap-4 pt-2 text-[11px]">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        <p className="text-[10px] text-navy-500 pt-1">
          &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. Concept project for portfolio.
        </p>
      </footer>
    </div>
  );
}
