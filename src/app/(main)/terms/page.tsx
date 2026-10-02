import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | BrightSmile Dental Clinic",
  description:
    "Review our terms of clinical service, appointment scheduling, cancellations, and guarantees at BrightSmile Dental Clinic Bengaluru.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4 mb-10 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>Clinical Terms & Policies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
            Terms of Service
          </h1>
          <p className="text-xs text-navy-500">
            Effective Date: January 2026 • BrightSmile Dental Clinic, Bengaluru, India
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-navy-800 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong>{CLINIC_INFO.name}</strong>. By booking an appointment through our website or attending an in-person consultation at our Indiranagar clinic, you agree to the following terms and clinical policies.
          </p>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            1. Appointments & Rescheduling Policy
          </h2>
          <p>
            We strive to maintain a strict zero-wait schedule. To help us serve all patients effectively:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Please arrive 5 to 10 minutes prior to your designated appointment time.</li>
            <li>If you must reschedule or cancel, please notify us at least 2 hours in advance via call or WhatsApp. We do not charge cancellation or rescheduling penalties.</li>
            <li>In the event of an unavoidable emergency delay on our end, our front-office will immediately notify you.</li>
          </ul>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            2. Clinical Estimates & Treatment Plans
          </h2>
          <p>
            All website pricing and package tariffs represent standard indications. Definitive treatment quotes are provided in writing following a comprehensive clinical examination, intraoral photos, and necessary digital x-rays.
          </p>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            3. Treatment Warranties
          </h2>
          <p>
            Specific dental prosthetics (such as CAD/CAM Zirconia crowns, E.max veneers, and Swiss implant fixtures) carry manufacturer warranties ranging from 5 years to lifetime fixture guarantees. Warranties are contingent upon maintaining routine 6-month hygiene recall appointments and adhering to prescribed oral hygiene instructions.
          </p>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            4. Emergency Dental Triage
          </h2>
          <p>
            Emergency slots are triaged strictly based on medical acuity (acute swelling, active bleeding, trauma). Walk-in patients with non-emergency conditions may experience brief wait times if scheduled appointments are ongoing.
          </p>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            5. Contact Information
          </h2>
          <p>
            For questions regarding these terms, please contact us at <a href={`mailto:${CLINIC_INFO.email}`} className="text-primary font-bold">{CLINIC_INFO.email}</a> or visit us at {CLINIC_INFO.address.full}.
          </p>
        </div>
      </div>
    </div>
  );
}
