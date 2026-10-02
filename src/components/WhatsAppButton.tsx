"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip once after 3 seconds to attract attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center flex-col sm:flex-row-reverse gap-2">
      {/* Floating Button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BrightSmile Dental Clinic on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Radar ping animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current transition-transform group-hover:rotate-6" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </a>

      {/* Floating Interactive Tooltip */}
      {showTooltip && (
        <div className="relative bg-white text-navy-900 text-xs px-3.5 py-2 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-2 max-w-[210px] animate-fade-in">
          <p className="leading-tight font-medium">
            👋 Need quick advice or appointment slot?{" "}
            <span className="text-emerald-600 font-semibold">We&apos;re online!</span>
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Dismiss WhatsApp tip"
            className="text-slate-400 hover:text-slate-600 shrink-0 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
