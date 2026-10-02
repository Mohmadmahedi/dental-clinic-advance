import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SERVICE_PROCESS } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services & Treatments in Indiranagar | BrightSmile Clinic",
  description:
    "Explore our complete range of 8 gentle dental services: Checkups & Cleaning, Laser Teeth Whitening, Root Canal, Aligners & Braces, Swiss Dental Implants, and Pediatric Dentistry.",
  openGraph: {
    title: "Dental Services & Treatments | BrightSmile Dental Clinic Bengaluru",
    description:
      "World-class dental specialties in Indiranagar, Bengaluru. Advanced European technology and pain-free dentistry.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Header Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-semibold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Multi-Specialty Dental Care</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Our Dental Specialties & Treatments
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            From routine preventive hygiene to complex full-mouth rehabilitations, our MDS specialists utilize computerized technology and gentle protocols for a reassuring, pain-free experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button
              href="/book-appointment"
              variant="amber"
              size="md"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book an Appointment
            </Button>
            <Button
              href={`tel:${CLINIC_INFO.phone}`}
              variant="white"
              size="md"
              leftIcon={<Phone className="w-4 h-4 text-primary" />}
            >
              Consult a Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* 8 Services Cards Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Explore Our Clinical Services
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              Click on any procedure below to view treatment details, pricing, duration, and patient FAQs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Patient Journey Process */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-aqua text-primary-800 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>Predictable & Transparent</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
              Our 4-Step Treatment Process
            </h2>
            <p className="text-navy-600 text-base">
              How we ensure every visit is seamless, completely pain-free, and transparent from first contact to lifelong follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {SERVICE_PROCESS.map((item, index) => (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-7 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-heading text-primary-300">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-aqua text-primary-700 font-bold text-xs flex items-center justify-center">
                      Step
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-navy-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-navy-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-primary flex items-center gap-1">
                  <span>Guaranteed Comfort</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Dental Care Callout Box */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-navy-900 to-navy-950 text-white p-8 sm:p-12 shadow-soft-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
                24/7 Dental Emergency
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Suffering from Sudden Severe Tooth Pain?
              </h3>
              <p className="text-navy-200 text-sm max-w-xl">
                We accommodate same-day emergency walk-ins for root canals, trauma, knocked-out teeth, and facial swelling. Call our on-call dental surgeon immediately.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Button
                href={`tel:${CLINIC_INFO.emergencyPhone}`}
                variant="amber"
                size="lg"
                className="w-full sm:w-auto font-bold shadow-amber"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                Emergency: {CLINIC_INFO.emergencyPhone}
              </Button>
              <Button
                href="/book-appointment?service=emergency-care"
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Priority Slot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTABanner />
    </>
  );
}
