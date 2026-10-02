import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Lightbox, GalleryPhoto } from "@/components/Lightbox";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Sparkles,
  Calendar,
  Star,
  Quote,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Before & After Smile Gallery | BrightSmile Bengaluru",
  description:
    "View real clinical before & after smile transformations from BrightSmile Dental Clinic Bengaluru. Teeth whitening, clear aligners, dental implants, and porcelain veneers.",
  openGraph: {
    title: "Smile Transformation Gallery | BrightSmile Dental Clinic",
    description:
      "Explore interactive before-and-after sliders and real patient journey stories in Indiranagar, Bengaluru.",
  },
};

export default function GalleryPage() {
  const galleryPhotos: GalleryPhoto[] = [
    {
      id: "photo-1",
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      title: "Ergonomic Treatment Operatory",
      category: "Clinic Facilities",
      description:
        "High-tech German dental suite equipped with ceiling multimedia entertainment screens and memory foam seating.",
    },
    {
      id: "photo-2",
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      title: "Philips Zoom! Laser Whitening Session",
      category: "Cosmetic Dentistry",
      description:
        "Chairside cold-LED laser light gently lifting stains 8 shades brighter in under an hour.",
    },
    {
      id: "photo-3",
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
      title: "Class-B Sterilization Station",
      category: "Sterilization & Safety",
      description:
        "Autoclaves maintaining vacuum fractionated sterilization for 100% infection prevention.",
    },
    {
      id: "photo-4",
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
      title: "3D Digital Clear Aligner Scanning",
      category: "Orthodontics",
      description:
        "Optical scanner capturing 6,000 frames per second to map precise orthodontic tooth movement.",
    },
    {
      id: "photo-5",
      url: "https://images.unsplash.com/photo-1590611936760-eeb9bc593020?auto=format&fit=crop&w=1200&q=80",
      title: "Pediatric Playful Care Room",
      category: "Pediatric Dentistry",
      description:
        "Tear-free children's operatory featuring cartoon ceiling displays and reward badges.",
    },
    {
      id: "photo-6",
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
      title: "Relaxing Patient Lounge",
      category: "Clinic Facilities",
      description:
        "Peaceful reception with complimentary espresso bar, soothing aroma, and zero clinical anxiety.",
    },
  ];

  return (
    <>
      {/* Gallery Header */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Proven Clinical Transformations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Smile Transformation Gallery
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            Real patients, real smiles. Explore our interactive before-and-after case comparisons, clinic facilities, and life-changing transformation stories.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button
              href="/book-appointment"
              variant="amber"
              size="md"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book Your Smile Makeover
            </Button>
            <Button
              href={CLINIC_INFO.phoneTel}
              variant="white"
              size="md"
              leftIcon={<Phone className="w-4 h-4 text-primary" />}
            >
              Ask Doctor Directly
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Sliders */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Interactive Comparisons
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Slide to Reveal Real Results
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              Drag the central divider bar horizontally to witness the before-and-after contrast.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Slider 1: Teeth Whitening */}
            <BeforeAfterSlider
              treatmentName="Laser Teeth Whitening"
              title="8 Shades Brighter in 60 Minutes"
              subtitle="Treated severe coffee and dietary yellowing with Philips Zoom! cold-light LED technology."
              beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            />

            {/* Slider 2: Clear Aligners & Veneers */}
            <BeforeAfterSlider
              treatmentName="Clear Aligners & Bonding"
              title="Symmetrical Smile Realignment"
              subtitle="Corrected upper spacing (diastema) and midline crowding in 8 months without metal brackets."
              beforeImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
              afterImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </div>
      </section>

      {/* Photo Grid with Interactive Lightbox */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Clinic Architecture
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Explore Our Clinic & Operatories
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              Click on any photograph below to launch the high-resolution lightbox view.
            </p>
          </div>

          {/* Client Lightbox Grid */}
          <Lightbox photos={galleryPhotos} />
        </div>
      </section>

      {/* Patient Stories / Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Real Patient Journeys
            </span>
            <h2 className="text-3xl font-bold font-heading text-navy-950">
              Inspiring Smile Stories
            </h2>
            <p className="text-sm sm:text-base text-navy-600">
              How our personalized dental care gave our patients their confidence back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between shadow-soft">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-bold">
                  Swiss Dental Implant
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950">
                  &ldquo;I Can Eat Crisp Apples & Dosas Again!&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed italic">
                  &ldquo;After an accident chipped two molars, I struggled to chew on my right side for three years. Dr. Ananya Sharma used 3D guided surgery. It took 35 minutes and was 100% painless. The new zirconia crowns match my teeth seamlessly.&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm">
                  VS
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900">Vikramaditya Sengupta</p>
                  <p className="text-[11px] text-navy-500">Koramangala • 42 yrs</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between shadow-soft">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-bold">
                  Invisalign Clear Aligners
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950">
                  &ldquo;No One at Work Knew I Was Wearing Aligners&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed italic">
                  &ldquo;Being in client presentations daily, I couldn’t wear metal braces. Dr. Priya mapped out my 9-month aligner journey. The digital 3D video predicted the final smile with 100% accuracy. Now I smile freely in every photo.&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm">
                  SR
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900">Sneha Radhakrishnan</p>
                  <p className="text-[11px] text-navy-500">Indiranagar • 29 yrs</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between shadow-soft">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-bold">
                  Porcelain Smile Makeover
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950">
                  &ldquo;Turned Back the Clock on My Teeth&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed italic">
                  &ldquo;Years of nocturnal teeth grinding had worn down my enamel and given my face a sunken look. Dr. Rohan and Dr. Ananya designed 8 E.max ceramic veneers. My bite is restored and my confidence has skyrocketed.&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm">
                  RR
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900">Rajeshwar Rao</p>
                  <p className="text-[11px] text-navy-500">HSR Layout • 54 yrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
