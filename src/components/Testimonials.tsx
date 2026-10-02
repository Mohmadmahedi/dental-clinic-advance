import React from "react";
import Image from "next/image";
import { TESTIMONIALS, TestimonialItem } from "@/data/testimonials";
import { Star, CheckCircle, Quote } from "lucide-react";

interface TestimonialsProps {
  items?: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

export function Testimonials({
  items,
  title = "What Our Patients Say",
  subtitle = "Real stories from people whose smiles we’ve transformed in Bengaluru.",
}: TestimonialsProps) {
  const displayItems = items || TESTIMONIALS.filter((t) => t.featuredHome);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-aqua-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-semibold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>4.9 Out of 5 Stars Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950">
            {title}
          </h2>
          <p className="text-navy-600 text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayItems.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-100 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary-200" />
                </div>

                {/* Treatment Pill */}
                <div className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-semibold">
                  {testimonial.treatment}
                </div>

                {/* Review Text */}
                <p className="text-sm text-navy-700 leading-relaxed italic">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>

              {/* Patient Profile */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-primary/20 shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-navy-900 truncate flex items-center gap-1">
                    <span>{testimonial.name}</span>
                    {testimonial.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    )}
                  </h4>
                  <p className="text-xs text-navy-500 truncate">
                    {testimonial.location}
                  </p>
                  <p className="text-[11px] text-primary-600 font-medium">
                    Dr: {testimonial.doctor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
