import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import {
  Sparkles,
  Sun,
  ShieldAlert,
  Smile,
  Anchor,
  HeartHandshake,
  Sparkle,
  Stethoscope,
  ArrowRight,
  Clock,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Anchor: <Anchor className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Sparkle: <Sparkle className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white border border-slate-100 shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Thumbnail Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={`${service.title} at BrightSmile Dental Clinic Bengaluru`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-navy-800 text-xs font-semibold shadow-sm">
              {service.category}
            </span>
          </div>

          {/* Icon Badge */}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-primary/90 backdrop-blur-md text-white flex items-center justify-center shadow-teal">
            {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
          </div>

          {/* Price Range Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="font-semibold text-amber-300 bg-navy-900/80 px-2.5 py-1 rounded-lg backdrop-blur-sm">
              {service.priceRange}
            </span>
            <span className="flex items-center gap-1 text-slate-200 bg-navy-900/80 px-2.5 py-1 rounded-lg backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-primary-300" />
              {service.duration}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="text-xl font-bold font-heading text-navy-900 group-hover:text-primary transition-colors">
            <Link href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          </h3>

          <p className="text-sm text-navy-600 leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Bullet Highlight */}
          <div className="pt-2 text-xs text-navy-500 space-y-1.5 border-t border-slate-100">
            {service.benefits.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-semibold text-primary hover:text-primary-700 flex items-center gap-1 group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>

        <Link
          href={`/book-appointment?service=${service.slug}`}
          className="px-3.5 py-2 rounded-xl bg-amber text-navy-900 hover:bg-amber-600 hover:text-white text-xs font-bold transition-all shadow-amber hover:shadow-soft"
        >
          Book Treatment
        </Link>
      </div>
    </div>
  );
}
