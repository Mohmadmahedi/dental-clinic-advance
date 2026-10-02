import React from "react";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import { Calendar, Phone, Clock, ShieldCheck, Sparkles } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 text-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-primary-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Accepting New Patients This Week</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Ready for a Healthy,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-200 to-amber-300">
              Pain-Free Smile?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto">
            Book your appointment online in 30 seconds. Experience compassionate care, zero wait times, and world-class dental technology in Indiranagar, Bengaluru.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Button
              href="/book-appointment"
              variant="amber"
              size="lg"
              className="w-full sm:w-auto text-base font-bold shadow-amber"
              leftIcon={<Calendar className="w-5 h-5" />}
            >
              Book Your Appointment
            </Button>

            <Button
              href={CLINIC_INFO.phoneTel}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base text-white border-white/30 hover:bg-white/10 hover:border-white"
              leftIcon={<Phone className="w-5 h-5 text-primary-300" />}
            >
              Call {CLINIC_INFO.phone}
            </Button>
          </div>

          {/* Mini Reassurance Footer */}
          <div className="pt-8 border-t border-navy-800/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-navy-300">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-primary-400" />
              <span>Same-Day Appointments Available</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-400" />
              <span>100% Sterile & Hospital Grade</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Transparent Pricing Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
