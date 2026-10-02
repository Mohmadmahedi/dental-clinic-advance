import React from "react";
import Link from "next/link";
import { PricingPackage } from "@/data/pricing";
import { Check, Sparkles, Calendar } from "lucide-react";
import { formatINR } from "@/lib/utils";

interface PricingCardProps {
  pkg: PricingPackage;
}

export function PricingCard({ pkg }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
        pkg.popular
          ? "bg-navy-900 text-white shadow-soft-xl border-2 border-amber ring-4 ring-amber/10 scale-105 z-10"
          : "bg-white text-navy-900 shadow-soft border border-slate-200 hover:shadow-soft-lg"
      }`}
    >
      <div>
        {/* Popular Badge */}
        <div className="flex items-center justify-between min-h-[32px] mb-4">
          {pkg.popular ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber text-navy-950 font-bold text-xs shadow-amber">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MOST POPULAR CHOICE</span>
            </span>
          ) : (
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Preventive Plan
            </span>
          )}

          {pkg.originalPrice > pkg.price && (
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
              Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Package Title & Tagline */}
        <h3 className={`text-2xl font-bold font-heading mb-2 ${pkg.popular ? "text-white" : "text-navy-950"}`}>
          {pkg.name}
        </h3>
        <p className={`text-xs sm:text-sm mb-6 ${pkg.popular ? "text-navy-200" : "text-navy-600"}`}>
          {pkg.tagline}
        </p>

        {/* Price Display */}
        <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-slate-100/20">
          <span className="text-4xl sm:text-5xl font-extrabold font-heading text-amber">
            {formatINR(pkg.price)}
          </span>
          {pkg.originalPrice > pkg.price && (
            <span className={`text-base line-through ${pkg.popular ? "text-navy-400" : "text-navy-400"}`}>
              {formatINR(pkg.originalPrice)}
            </span>
          )}
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          <p className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? "text-primary-300" : "text-navy-500"}`}>
            What&apos;s Included:
          </p>
          {pkg.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  pkg.popular
                    ? "bg-primary-500/20 text-primary-300"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className={pkg.popular ? "text-navy-100" : "text-navy-700"}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA & Recommended For */}
      <div className="space-y-3 pt-4 border-t border-slate-100/10">
        <Link
          href={`/book-appointment?package=${pkg.id}`}
          className={`w-full py-3.5 px-4 rounded-2xl text-center text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            pkg.popular
              ? "bg-amber text-navy-950 hover:bg-amber-500 shadow-amber"
              : "bg-primary text-white hover:bg-primary-600 shadow-teal"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Book This Package</span>
        </Link>
        <p className={`text-[11px] text-center ${pkg.popular ? "text-navy-300" : "text-navy-500"}`}>
          Ideal for: {pkg.recommendedFor}
        </p>
      </div>
    </div>
  );
}
