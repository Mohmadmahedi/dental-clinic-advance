import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, ServiceItem } from "@/data/services";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Phone,
  HelpCircle,
  Stethoscope,
  Info,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Indiranagar, Bengaluru | ${CLINIC_INFO.name}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${CLINIC_INFO.name}`,
      description: service.shortDescription,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} at BrightSmile Dental Clinic`,
        },
      ],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/70 py-3 text-xs text-navy-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-navy-400" />
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-navy-400" />
          <span className="text-navy-900 font-semibold truncate">
            {service.title}
          </span>
        </div>
      </div>

      {/* Service Header / Hero Section */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>{service.category} Specialty</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Treatment Quick Highlights Bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 py-4 border-y border-slate-200/80 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    ₹
                  </div>
                  <div>
                    <p className="text-[11px] text-navy-500 font-medium">Estimated Cost</p>
                    <p className="font-bold text-navy-900">{service.priceRange}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-800 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-navy-500 font-medium">Session Duration</p>
                    <p className="font-bold text-navy-900">{service.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-navy-500 font-medium">Recovery</p>
                    <p className="font-bold text-navy-900">{service.recovery}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  href={`/book-appointment?service=${service.slug}`}
                  variant="amber"
                  size="lg"
                  className="w-full sm:w-auto shadow-amber font-bold"
                  leftIcon={<Calendar className="w-5 h-5" />}
                >
                  Book This Treatment
                </Button>

                <Button
                  href={`tel:${CLINIC_INFO.phone}`}
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                  leftIcon={<Phone className="w-5 h-5 text-primary" />}
                >
                  Call for Doctor Consult
                </Button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} clinical procedure in Indiranagar`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold flex items-center gap-1.5 text-primary-300">
                    <ShieldCheck className="w-4 h-4" />
                    CDC & OSHA Sterilization Assured
                  </p>
                  <p className="text-xs text-navy-200 mt-0.5">
                    Pre-sterilized single-patient toolkits & digital imaging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Benefits Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Why Choose This Procedure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Key Clinical Benefits
            </h2>
            <p className="text-navy-600 text-sm sm:text-base">
              Engineered for maximum patient comfort, rapid healing, and long-term oral aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-soft-md transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-1">
                    {benefit}
                  </h3>
                  <p className="text-xs text-navy-500 leading-relaxed">
                    Performed strictly in accordance with certified Indian Dental Association guidelines.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Candidacy & Suitability
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Who Is This Treatment Recommended For?
              </h2>
              <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                If you relate to any of the following symptoms or oral health objectives, scheduling a clinical evaluation is the right first step.
              </p>
              <div className="pt-2">
                <Button
                  href={`/book-appointment?service=${service.slug}`}
                  variant="primary"
                  size="md"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Schedule Your Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {service.whoIsItFor.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-aqua-50/70 border border-primary-200/60 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-navy-900 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Procedure Steps */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Clinical Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Step-by-Step Procedure
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              Clear, step-by-step transparency so you know exactly what to expect in the dental chair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.procedureSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary font-heading font-extrabold text-lg flex items-center justify-center mb-4">
                    0{step.step}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Common Questions About {service.title}
              </h2>
              <p className="text-sm text-navy-600">
                Got a question not listed here? Our friendly doctors are happy to answer chairside.
              </p>
            </div>

            <FAQAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* Related Treatments Carousel/Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold font-heading text-navy-950">
                Other Treatments You May Need
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 mt-1">
                Explore complementary dental treatments available at BrightSmile.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-primary uppercase">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-navy-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-navy-600 mt-2 line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">
                    {item.priceRange}
                  </span>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CTABanner />
    </>
  );
}
