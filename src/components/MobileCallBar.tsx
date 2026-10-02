"use client";

import React from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { Phone, Calendar, MessageSquare } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 py-2.5 sm:hidden shadow-soft-xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Now */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 text-navy-800 border border-slate-200 text-xs font-semibold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-primary mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#25D366]/10 text-emerald-800 border border-[#25D366]/30 text-xs font-semibold active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <Link
          href="/book-appointment"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-amber text-navy-950 font-bold text-xs shadow-amber active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-navy-950" />
          <span>Book Visit</span>
        </Link>
      </div>
    </div>
  );
}
