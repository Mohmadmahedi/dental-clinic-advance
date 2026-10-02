import React from "react";
import type { Metadata } from "next";
import { CLINIC_INFO } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  Sparkles,
  ExternalLink,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact BrightSmile Dental Clinic | Indiranagar, Bengaluru",
  description:
    "Get in touch with BrightSmile Dental Clinic in Indiranagar, Bengaluru. Phone: +91 98765 43210. WhatsApp, clinic location directions, and working hours.",
  openGraph: {
    title: "Contact BrightSmile Dental Clinic Bengaluru",
    description:
      "Find our clinic address, telephone, WhatsApp hotline, working hours, and book your visit.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Indiranagar • Bengaluru • Karnataka</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Contact BrightSmile Dental Clinic
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            Have a question, need an urgent dental appointment, or seeking a second opinion? Reach out via phone, WhatsApp, or drop by our clinic.
          </p>
        </div>
      </section>

      {/* Main Contact Grid (Details & Form) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  We Are Here To Help
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 mt-1">
                  Get in Touch With Us
                </h2>
                <p className="text-sm text-navy-600 mt-2">
                  Our front-office team is available Monday through Saturday from 9:00 AM to 8:30 PM.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-teal">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-navy-900">
                      Clinic Location
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                      {CLINIC_INFO.address.full}
                    </p>
                    <a
                      href={CLINIC_INFO.address.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-2"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Get Driving Directions</span>
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-teal">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-navy-900">
                      Telephone & Reception
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-600 mt-1">
                      Direct Line:{" "}
                      <a
                        href={`tel:${CLINIC_INFO.phone}`}
                        className="font-bold text-navy-900 hover:text-primary"
                      >
                        {CLINIC_INFO.phone}
                      </a>
                    </p>
                    <p className="text-xs text-red-600 font-medium mt-1">
                      24/7 Dental Emergency: {CLINIC_INFO.emergencyPhone}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-navy-900">
                      Instant WhatsApp Chat
                    </h3>
                    <p className="text-xs text-navy-600 mt-1">
                      Quick slot reservations & report reviews via WhatsApp.
                    </p>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:underline mt-1.5"
                    >
                      <span>Start Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email & Hours */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-teal">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-navy-900">
                      Opening Hours
                    </h3>
                    <div className="text-xs text-navy-600 mt-1 space-y-0.5">
                      <p>Mon - Sat: 9:00 AM – 8:30 PM</p>
                      <p>Sunday: 10:00 AM – 2:00 PM (Emergency on Call)</p>
                      <p className="text-primary font-medium pt-1">
                        Email: {CLINIC_INFO.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-soft-xl space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-navy-950">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 mt-1">
                    Fill out the form below and our medical team will get back to you promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-2xl font-bold font-heading text-navy-950">
                Clinic Location Map
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 mt-0.5">
                Conveniently located off 12th Main Road, Indiranagar with dedicated basement parking.
              </p>
            </div>
            <a
              href={CLINIC_INFO.address.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Map Iframe Container */}
          <div className="relative w-full aspect-[21/9] min-h-[350px] rounded-3xl overflow-hidden shadow-soft-lg border-2 border-slate-200 bg-slate-200">
            <iframe
              src={CLINIC_INFO.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BrightSmile Dental Clinic Indiranagar Bengaluru Google Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
