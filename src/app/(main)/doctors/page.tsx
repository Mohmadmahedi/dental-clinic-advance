import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "@/data/doctors";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Star,
  Award,
  GraduationCap,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialist Dental Surgeons in Bengaluru | BrightSmile Clinic",
  description:
    "Meet our team of fellowship-trained MDS dental specialists: Dr. Ananya Sharma (Implantologist), Dr. Rohan Mehta (Micro-Endodontist), and Dr. Priya Nair (Orthodontist).",
  openGraph: {
    title: "Meet Our Specialist Dental Surgeons | BrightSmile Bengaluru",
    description:
      "Expert MDS doctors in Indiranagar, Bengaluru dedicated to pain-free, world-class dental care.",
  },
};

export default function DoctorsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>MDS Postgraduate Specialists & Fellows</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Meet Our Specialist Dental Surgeons
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            At BrightSmile, every procedure is carried out by specialized postgraduate MDS doctors with over a decade of clinical experience, international fellowships, and a gentle bedside demeanor.
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
              Call Clinic Desk
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Detailed Doctor Profiles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {DOCTORS.map((doctor, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={doctor.id}
                className="rounded-3xl bg-slate-50/70 border border-slate-200/80 p-8 sm:p-12 shadow-soft hover:shadow-soft-xl transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Photo Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg bg-slate-200 border-4 border-white">
                      <Image
                        src={doctor.image}
                        alt={`${doctor.name} - ${doctor.role}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                      {/* Experience Pill */}
                      <div className="absolute top-4 left-4 bg-navy-900/90 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                        {doctor.experience} Clinical Practice
                      </div>

                      {/* Rating Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl flex items-center justify-between shadow-soft">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                          <span className="font-bold text-navy-900 text-sm">
                            {doctor.rating} / 5.0
                          </span>
                        </div>
                        <span className="text-xs text-navy-500">
                          {doctor.reviewsCount} Patient Reviews
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio & Credentials Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-semibold mb-2">
                        {doctor.specialty}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                        {doctor.name}
                      </h2>
                      <p className="text-sm font-semibold text-primary mt-1">
                        {doctor.qualification}
                      </p>
                      <p className="text-xs text-navy-500 mt-0.5">
                        {doctor.role}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                      {doctor.bio}
                    </p>

                    {/* Qualifications & Education */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>Education & Advanced Fellowships:</span>
                      </p>
                      <ul className="space-y-1.5 text-xs text-navy-600">
                        {doctor.education.map((edu, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Professional Memberships */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>Professional Associations:</span>
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {doctor.memberships.map((mem, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-navy-700 font-medium"
                          >
                            {mem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Schedule & Action Button */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-navy-600">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span>{doctor.availableDays}</span>
                      </div>

                      <Button
                        href={`/book-appointment?doctor=${doctor.id}`}
                        variant="amber"
                        size="md"
                        className="shadow-amber font-bold"
                        leftIcon={<Calendar className="w-4 h-4" />}
                      >
                        Book with {doctor.name}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why MDS Specialists Matter */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 shadow-soft-xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-300 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold font-heading">
                Postgraduate Mastery
              </h3>
              <p className="text-xs sm:text-sm text-navy-300 leading-relaxed">
                An MDS represents 3 additional intensive years of specialized hospital training beyond regular BDS dental degrees.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-300 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold font-heading">
                Zero Trial and Error
              </h3>
              <p className="text-xs sm:text-sm text-navy-300 leading-relaxed">
                From micro-root canals to sub-millimeter guided implant surgery, our procedures have predictable 98%+ clinical success rates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-300 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold font-heading">
                Gentle & Empathetic
              </h3>
              <p className="text-xs sm:text-sm text-navy-300 leading-relaxed">
                We believe in listening first. Every fear or question is addressed patiently before any instrument touches your tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
