import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES } from "@/data/services";
import { DOCTORS } from "@/data/doctors";
import { HOME_SPECIAL_OFFERS } from "@/data/pricing";
import { CLINIC_INFO } from "@/lib/constants";
import {
  ShieldCheck,
  Sparkles,
  Award,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BrightSmile Dental Clinic | Pain-Free Dental Care in Indiranagar, Bengaluru",
  description:
    "Leading dental clinic in Indiranagar, Bengaluru. Pain-free root canals, dental implants, Invisalign clear aligners, and cosmetic dentistry. Book your ₹499 checkup.",
  alternates: {
    canonical: CLINIC_INFO.siteUrl,
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_INFO.name,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "@id": CLINIC_INFO.siteUrl,
    url: CLINIC_INFO.siteUrl,
    telephone: CLINIC_INFO.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.area,
      addressRegion: CLINIC_INFO.address.state,
      postalCode: CLINIC_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9727788,
      longitude: 77.6384261,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1240",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const previewServices = SERVICES.slice(0, 6);

  return (
    <>
      {/* Schema.org Dentist JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Preview Section */}
      <section className="py-16 md:py-24 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>World-Class Dental Specialties</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
                Comprehensive Dental Care for the Whole Family
              </h2>
              <p className="text-navy-600 text-base">
                From preventive hygiene to full-mouth digital smile makeovers, our MDS specialists use Swiss technology for gentle, predictable results.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-700 transition-colors group shrink-0"
            >
              <span>View All 8 Specialties</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-navy-800 font-semibold text-sm shadow-soft hover:bg-slate-50 hover:shadow-soft-md transition-all"
            >
              <span>Explore All Procedures & Treatments</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (4 Points) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-aqua text-primary-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>The BrightSmile Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
              Why Bengaluru Families Choose Us
            </h2>
            <p className="text-navy-600 text-base">
              We redesigned the dental experience from the ground up to eliminate anxiety, discomfort, and uncertainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Point 1 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-aqua-50/60 hover:border-primary-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                100% Pain-Free Promise
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Computer-controlled local anesthesia, vibration-free rotary drills, and topical numbing gels ensure zero pain during treatments.
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-aqua-50/60 hover:border-primary-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                Hospital Sterilization
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Class-B fractionated vacuum autoclaves and single-use sealed tool pouches meet strict US CDC and OSHA infection-control protocols.
              </p>
            </div>

            {/* Point 3 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-aqua-50/60 hover:border-primary-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-5">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                Transparent Pricing & 0% EMI
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Printed itemized estimates before treatment begins. Zero surprise bills, plus interest-free EMI options for braces and implants.
              </p>
            </div>

            {/* Point 4 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-aqua-50/60 hover:border-primary-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                MDS Super Specialists
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Every procedure is performed by qualified postgraduate MDS doctors with international fellowships and over 10 years of clinical experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Special Offers Section (3 Offer Cards) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Exclusive Online Discounts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
              Limited-Time Promotional Packages
            </h2>
            <p className="text-navy-600 text-base">
              Claim these introductory packages online to experience our gold-standard care at special rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_SPECIAL_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  offer.popular
                    ? "bg-navy-900 text-white shadow-soft-xl border-2 border-amber ring-4 ring-amber/10 scale-105 z-10"
                    : "bg-white text-navy-900 shadow-soft border border-slate-100 hover:shadow-soft-lg"
                }`}
              >
                {/* Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        offer.popular
                          ? "bg-amber text-navy-950"
                          : "bg-primary-100 text-primary-800"
                      }`}
                    >
                      {offer.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      {offer.savings}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold font-heading mb-2 ${
                      offer.popular ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {offer.title}
                  </h3>

                  <p
                    className={`text-sm mb-6 ${
                      offer.popular ? "text-navy-200" : "text-navy-600"
                    }`}
                  >
                    {offer.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-slate-100/20">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-amber">
                      {offer.offerPrice}
                    </span>
                    <span
                      className={`text-sm line-through ${
                        offer.popular ? "text-navy-400" : "text-navy-400"
                      }`}
                    >
                      {offer.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <Link
                  href={offer.href}
                  className={`w-full py-3.5 px-4 rounded-2xl text-center text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    offer.popular
                      ? "bg-amber text-navy-950 hover:bg-amber-500 shadow-amber"
                      : "bg-primary text-white hover:bg-primary-600 shadow-teal"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{offer.cta}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Doctors Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span>Senior Dental Surgeons</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
                Meet Your Dental Specialists
              </h2>
              <p className="text-navy-600 text-base">
                Our fellowship-trained doctors combine years of clinical expertise with gentle bedside empathy to make every visit calm and reassuring.
              </p>
            </div>

            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-700 transition-colors group shrink-0"
            >
              <span>View Complete Profiles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section (3 Reviews) */}
      <Testimonials />

      {/* 7. Final Call to Action Banner */}
      <CTABanner />
    </>
  );
}
