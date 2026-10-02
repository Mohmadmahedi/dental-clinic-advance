import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  CheckCircle2,
  Calendar,
  Phone,
  Clock,
  MapPin,
  Star,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About BrightSmile Dental Clinic | Indiranagar, Bengaluru",
  description:
    "Learn about BrightSmile Dental Clinic's 10-year journey of pain-free, modern dentistry in Bengaluru. Meet our founders, our OSHA sterilization protocols, and core values.",
  openGraph: {
    title: "About BrightSmile Dental Clinic Bengaluru",
    description:
      "Our story, values, 6-step sterilization standards, and commitment to pain-free dental healthcare.",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2015",
      title: "Clinic Foundation",
      description:
        "Founded in Indiranagar, Bengaluru by Dr. Ananya Sharma with 2 dental operatories and a mission for zero-anxiety dentistry.",
    },
    {
      year: "2018",
      title: "Digital Microscopy & Rotary Endodontics",
      description:
        "Pioneered single-sitting microscopic root canal therapy with Dr. Rohan Mehta joining as lead endodontist.",
    },
    {
      year: "2021",
      title: "Invisalign Platinum Accreditation",
      description:
        "Expanded into high-precision 3D digital clear aligners under Dr. Priya Nair, becoming a leading orthodontic hub.",
    },
    {
      year: "2024",
      title: "Hospital-Grade Class-B Sterilization Upgrade",
      description:
        "Installed medical-grade fractionated vacuum sterilization and low-dose 3D CBCT digital scanning operatories.",
    },
    {
      year: "2026",
      title: "15,000+ Happy Patients",
      description:
        "Celebrating over a decade of trustworthy, transparent oral care with 1,200+ 5-star Google reviews.",
    },
  ];

  const clinicPhotos = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      title: "Modern Ergonomic Operatory",
      desc: "Designed with memory foam dental chairs and soothing ambient lighting.",
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      title: "Swiss Digital 3D Scanner",
      desc: "Instant intraoral scans replace messy traditional impression pastes.",
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      title: "Sterilization Suite",
      desc: "Class-B fractionated autoclaves and tamper-evident indicator pouches.",
    },
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      title: "Patient Consultation Lounge",
      desc: "Relaxing, spa-like environment with zero medicinal odor.",
    },
  ];

  return (
    <>
      {/* Header Hero */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <Heart className="w-3.5 h-3.5 text-primary" />
            <span>Compassionate, Patient-Centered Dental Care</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            About BrightSmile Dental Clinic
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            Founded with a singular vision: to eliminate dental phobia through state-of-the-art European technology, gentle touch, and complete price transparency.
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
              href="/doctors"
              variant="white"
              size="md"
              leftIcon={<Users className="w-4 h-4 text-primary" />}
            >
              Meet Our Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* Clinic Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Heritage & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
                A Decade of Reimagining Dentistry in Bengaluru
              </h2>

              <p className="text-base text-navy-700 leading-relaxed">
                For decades, visiting the dentist was synonymous with anxiety, uncomfortable needles, noisy drills, and unpredictable bills. In 2015, Dr. Ananya Sharma and Dr. Rohan Mehta set out to change that narrative completely.
              </p>

              <p className="text-base text-navy-700 leading-relaxed">
                Located in the heart of Indiranagar, Bengaluru, BrightSmile was built around patient comfort. We replaced traditional drills with quiet micro-motor systems, harsh overhead spotlights with ceiling television screens, and messy physical molds with high-speed 3D optical cameras.
              </p>

              <div className="p-6 rounded-2xl bg-aqua-50 border border-primary-200/70 space-y-2">
                <h4 className="font-heading font-bold text-navy-900 text-base">
                  Our Mission
                </h4>
                <p className="text-sm text-navy-700 leading-relaxed">
                  To provide gentle, evidence-based dental care of international standards that protects your natural teeth for a lifetime, delivered with transparent pricing and human empathy.
                </p>
              </div>
            </div>

            {/* Visual Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Ananya Sharma consulting a smiling patient at BrightSmile Bengaluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold font-heading">
                    &ldquo;Dentistry should never be scary or unpredictable.&rdquo;
                  </p>
                  <p className="text-xs text-primary-300 mt-1">
                    — Dr. Ananya Sharma, Founder & Chief Surgeon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counters Bar */}
      <section className="py-12 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CLINIC_INFO.stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-amber mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-navy-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (4 Points) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Core Principles
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Values That Guide Every Decision
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              The ethical compass that makes BrightSmile Bengaluru’s most recommended dental clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                Pain-Free Comfort
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We invest in computerized local anesthesia, fine needles, and gentle clinical methods to ensure pain-free visits.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                Absolute Honesty
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We never recommend unnecessary fillings or crowns. You view your tooth photos on the screen before any decision.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                Clinical Mastery
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                All doctors are MDS degree holders who participate in annual international masterclasses across Europe and the US.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-teal mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                Lifelong Patient Care
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We stand behind our work with written warranty cards and scheduled complimentary post-treatment hygiene checkups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sterilization & Safety Standards (OSHA / CDC 6-Step Protocol) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-8 sm:p-14 shadow-soft-xl">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary-300 text-xs font-bold border border-primary/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Cross-Contamination Guarantee</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                Hospital-Grade 6-Step Sterilization Protocol
              </h2>
              <p className="text-navy-200 text-sm sm:text-base leading-relaxed">
                Your safety is non-negotiable. We follow strict sterilization standards that meet or exceed US CDC (Centers for Disease Control) and OSHA regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Ultrasonic Debris Disruption",
                  desc: "Instruments undergo high-frequency ultrasonic chemical baths to break down microscopic biofilm and organic debris.",
                },
                {
                  step: "02",
                  title: "Enzymatic Scrub & Rinse",
                  desc: "Hospital-grade multi-enzyme solutions cleanse internal lumens and hard-to-reach instrument joints.",
                },
                {
                  step: "03",
                  title: "Heat-Sealed Indicator Pouches",
                  desc: "Every instrument set is vacuum-sealed into sterile medical pouches with chemical color-changing sterilization strips.",
                },
                {
                  step: "04",
                  title: "Class-B Fractionated Vacuum Autoclave",
                  desc: "Pouches are heated under pressure to 134°C (273°F) for 35 minutes, killing 100% of bacterial spores and viruses.",
                },
                {
                  step: "05",
                  title: "UV-Chamber Storage",
                  desc: "Sterilized pouches are stored in dedicated UV radiation germicidal cabinets until ready for use.",
                },
                {
                  step: "06",
                  title: "Chairside Unpacking In Front of You",
                  desc: "The sealed pouch is opened exclusively in your presence right before your treatment commences.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-2"
                >
                  <span className="text-xs font-bold font-heading text-primary-400">
                    Step {item.step}
                  </span>
                  <h4 className="text-base font-bold text-white font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-navy-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Interior Photo Grid */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Inside Our Indiranagar Clinic
            </h2>
            <p className="text-sm text-navy-600">
              A soothing, welcoming atmosphere designed to make you feel right at home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicPhotos.map((photo, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-heading font-bold text-sm text-navy-900">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-navy-500 leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Key Milestones (2015 – 2026)
            </h2>
          </div>

          <div className="relative border-l-2 border-primary-200 pl-6 sm:pl-8 ml-4 sm:ml-8 space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary group-hover:bg-primary transition-colors" />

                <span className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-bold font-heading mb-1.5">
                  {m.year}
                </span>
                <h3 className="text-lg font-bold font-heading text-navy-950">
                  {m.title}
                </h3>
                <p className="text-sm text-navy-600 mt-1 max-w-2xl leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
