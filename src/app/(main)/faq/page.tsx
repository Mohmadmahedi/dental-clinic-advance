import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/data/faqs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  HelpCircle,
  Stethoscope,
  ShieldCheck,
  CreditCard,
  Calendar,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | BrightSmile Dental Clinic",
  description:
    "Find answers to 12 common patient questions regarding pain-free dental treatments, sterilization standards, costs, 0% EMI, and appointment bookings in Bengaluru.",
  openGraph: {
    title: "Dental FAQs | BrightSmile Dental Clinic Bengaluru",
    description:
      "Clear answers to your dental concerns about pain, safety, costs, insurance, and booking.",
  },
};

export default function FAQPage() {
  const categories: Array<{
    id: "Treatments" | "Pain and Safety" | "Cost and Insurance" | "Appointments";
    label: string;
    icon: React.ReactNode;
    description: string;
  }> = [
    {
      id: "Treatments",
      label: "Treatments & Procedures",
      icon: <Stethoscope className="w-5 h-5 text-primary" />,
      description: "Questions about cleanings, whitening, aligners, root canals, and implants.",
    },
    {
      id: "Pain and Safety",
      label: "Pain & Sterilization Safety",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      description: "How we ensure 100% painless visits and US CDC hospital infection control.",
    },
    {
      id: "Cost and Insurance",
      label: "Cost, Pricing & Insurance",
      icon: <CreditCard className="w-5 h-5 text-primary" />,
      description: "Itemized estimates, 0% interest EMI options, and corporate insurance claims.",
    },
    {
      id: "Appointments",
      label: "Appointments & Clinic Visit",
      icon: <Calendar className="w-5 h-5 text-primary" />,
      description: "Booking slots, emergency triage, parking, and rescheduling policies.",
    },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            Find transparent answers to everything you need to know about our dental treatments, pain-free anesthesia, pricing, sterilization, and appointments.
          </p>
        </div>
      </section>

      {/* Main FAQs by Category */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category) => {
            const categoryFaqs = FAQS.filter(
              (faq) => faq.category === category.id
            );

            return (
              <div
                key={category.id}
                id={category.id.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24 p-6 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-soft"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-soft flex items-center justify-center shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading text-navy-950">
                      {category.label}
                    </h2>
                    <p className="text-xs sm:text-sm text-navy-600 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <FAQAccordion items={categoryFaqs} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-heading text-navy-950">
                Still Have an Unanswered Question?
              </h3>
              <p className="text-xs sm:text-sm text-navy-600">
                Our care coordinators are online and ready to assist you right away.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Button
                href={CLINIC_INFO.whatsappUrl}
                external
                variant="primary"
                size="md"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>
              <Button
                href={`tel:${CLINIC_INFO.phone}`}
                variant="white"
                size="md"
                leftIcon={<Phone className="w-4 h-4 text-primary" />}
              >
                Call Clinic
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
