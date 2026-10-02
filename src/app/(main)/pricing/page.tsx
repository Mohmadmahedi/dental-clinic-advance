import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRICING_PACKAGES, TREATMENT_PRICING_TABLE } from "@/data/pricing";
import { FAQS } from "@/data/faqs";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
  Phone,
  FileText,
  BadgePercent,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Treatment Pricing & Cost in Bengaluru | BrightSmile Clinic",
  description:
    "Transparent dental treatment pricing in Indiranagar, Bengaluru. Basic Checkup ₹499, Cleaning ₹1,499, Whitening ₹6,999. No hidden fees. 0% EMI available.",
  openGraph: {
    title: "Dental Pricing & Packages | BrightSmile Clinic Bengaluru",
    description:
      "100% price transparency. Itemized dental estimates with 0% interest EMI options.",
  },
};

export default function PricingPage() {
  const costFaqs = FAQS.filter((f) => f.category === "Cost and Insurance");

  return (
    <>
      {/* Pricing Header Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <BadgePercent className="w-3.5 h-3.5 text-primary" />
            <span>100% Transparent Dental Care</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Transparent Dental Pricing & Packages
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            No surprise add-ons, no hidden clinic charges. We provide printed itemized treatment estimates before starting any procedure, with convenient 0% interest EMI options.
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
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Featured Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Popular Preventative Plans
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Featured Care Packages
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              Save up to 60% compared to individual procedure pricing with our bundled care plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Complete Itemized Treatment Price Table */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Standard Treatment Rates
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Treatment Fee Guide (INR)
            </h2>
            <p className="text-sm text-navy-600 max-w-2xl mx-auto">
              Indicative fees for our dental treatments. A doctor consultation and digital x-ray will establish the exact personalized estimate.
            </p>
          </div>

          <div className="space-y-8">
            {TREATMENT_PRICING_TABLE.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-soft"
              >
                <div className="bg-gradient-to-r from-navy-900 to-navy-950 text-white px-6 py-4 flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base sm:text-lg">
                    {category.category}
                  </h3>
                  <span className="text-xs text-primary-300 font-medium">
                    Standard Tariff
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/70 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-navy-900">
                          {item.name}
                        </p>
                        {item.details && (
                          <p className="text-xs text-navy-500 mt-0.5">
                            {item.details}
                          </p>
                        )}
                      </div>

                      <div className="sm:text-right shrink-0">
                        <span className="font-bold text-base sm:text-lg text-primary font-heading">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <FileText className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Price Guarantee Note:</strong> All fees are subject to clinical diagnosis. We provide a full itemized quotation in writing before beginning any procedure. No hidden diagnostic or equipment surcharges will ever be added.
            </p>
          </div>
        </div>
      </section>

      {/* Payment & Insurance Note */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-aqua-50/80 border border-primary-200/80 p-8 sm:p-12 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-primary-800 text-xs font-bold border border-primary-200">
                  <CreditCard className="w-3.5 h-3.5 text-primary" />
                  <span>Flexible Payment Solutions</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                  Payment Plans, 0% EMI & Insurance Support
                </h3>

                <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                  We believe cost should never stand between you and a healthy smile. That is why BrightSmile offers flexible payment plans tailored to your budget.
                </p>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-navy-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>0% Interest EMI:</strong> Available for 3, 6, 9, or 12 months on all treatments over ₹15,000 via Bajaj Finserv and major credit cards.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Corporate Insurance & Cashless:</strong> Assistance with medical claims, cashless hospital tie-ups, and reimbursement claim documentation.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>All Digital Modes Accepted:</strong> UPI (Google Pay, PhonePe, Paytm), Visa, Mastercard, RuPay, Net Banking, and Cash.
                    </span>
                  </div>
                </div>
              </div>

              {/* Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-4 text-center">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto" />
                <h4 className="text-lg font-bold font-heading text-navy-950">
                  Need an Exact Cost Estimate?
                </h4>
                <p className="text-xs sm:text-sm text-navy-600">
                  Book our ₹499 New Patient Consultation. Our specialist doctor will conduct a digital scan and present you with all viable treatment options and exact costs.
                </p>
                <Button
                  href="/book-appointment"
                  variant="amber"
                  size="md"
                  className="w-full justify-center shadow-amber font-bold"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book ₹499 Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span>Cost & Insurance Clarifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Pricing & Insurance FAQs
            </h2>
          </div>

          <FAQAccordion items={costFaqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
