import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BrightSmile Dental Clinic",
  description:
    "Learn about BrightSmile Dental Clinic's patient privacy policy, data security, and medical records confidentiality in Bengaluru, India.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Patient Data Security</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
            Privacy Policy
          </h1>
          <p className="text-xs text-navy-500">
            Last Updated: January 2026 • BrightSmile Dental Clinic, Bengaluru, India
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-navy-800 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            At <strong>{CLINIC_INFO.name}</strong>, we respect your privacy and are committed to protecting your personal health information. This Privacy Policy describes how we collect, store, and safeguard your clinical information when you book an appointment, visit our clinic in Indiranagar, Bengaluru, or browse our website ({CLINIC_INFO.siteUrl}).
          </p>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information necessary to deliver clinical oral healthcare, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Patient identification details: Full name, age, gender, contact number, email, and residential city.</li>
            <li>Medical & Dental history: Relevant systemic conditions (diabetes, cardiac history, bleeding tendencies, pregnancy), medication allergies, and dental symptoms.</li>
            <li>Diagnostic records: Intraoral photos, digital radiographs (RVG), 3D optical scans, and treatment plans.</li>
          </ul>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is strictly used for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scheduling and coordinating your dental appointments.</li>
            <li>Formulating accurate clinical diagnoses and treatment alternatives.</li>
            <li>Sending appointment reminders, prescription instructions, and follow-up notices via SMS/WhatsApp.</li>
            <li>Submitting insurance pre-authorization documents upon your explicit request.</li>
          </ul>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            3. Medical Records Confidentiality
          </h2>
          <p>
            We strictly comply with the Code of Medical Ethics Regulations laid out by the Dental Council of India (DCI) and the Information Technology Act. We never sell, rent, or trade your personal or health data to third-party marketing companies.
          </p>

          <h2 className="text-xl font-bold font-heading text-navy-900 mt-6">
            4. Contact Our Privacy Officer
          </h2>
          <p>
            For any inquiries regarding your health records or privacy rights, please contact our clinic administrative desk at <a href={`mailto:${CLINIC_INFO.email}`} className="text-primary font-bold">{CLINIC_INFO.email}</a> or call us at <a href={CLINIC_INFO.phoneTel} className="text-primary font-bold">{CLINIC_INFO.phone}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
