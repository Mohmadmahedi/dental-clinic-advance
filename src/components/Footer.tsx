import React from "react";
import Link from "next/link";
import { CLINIC_INFO, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-navy-800/70">
          {/* Col 1 & 2: Brand & Clinic Story */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus:outline-none"
              aria-label="BrightSmile Dental Clinic"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-primary-400 flex items-center justify-center text-white shadow-teal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 2.2 1.2 4.2 2.5 6.5C7.8 17 8 22 12 22s4.2-5 5.5-7.5C18.8 12.2 20 10.2 20 8c0-3.5-3.5-6-8-6z" />
                  <path d="M9 10c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold font-heading text-white tracking-tight leading-none">
                  Bright<span className="text-primary-400">Smile</span>
                </span>
                <span className="block text-xs font-medium tracking-wider uppercase text-navy-400 mt-1">
                  Dental Clinic • Bengaluru
                </span>
              </div>
            </Link>

            <p className="text-navy-300 text-sm leading-relaxed max-w-md">
              {CLINIC_INFO.shortDescription}
            </p>

            {/* Quality & Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 border border-navy-800 text-navy-200">
                <ShieldCheck className="w-4 h-4 text-primary-400" />
                <span>OSHA & CDC Certified Sterilization</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 border border-navy-800 text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>4.9★ Rated on Google (1,200+ Reviews)</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-navy-400 font-semibold block mb-3">
                Follow Our Smile Stories
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={CLINIC_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-primary hover:text-white text-navy-300 flex items-center justify-center transition-all duration-200 border border-navy-800"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-primary hover:text-white text-navy-300 flex items-center justify-center transition-all duration-200 border border-navy-800"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-primary hover:text-white text-navy-300 flex items-center justify-center transition-all duration-200 border border-navy-800"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-primary hover:text-white text-navy-300 flex items-center justify-center transition-all duration-200 border border-navy-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-primary-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-navy-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/offer"
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Special Offers & Deals</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Treatments & Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-4 tracking-tight">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-navy-300 hover:text-primary-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-navy-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-primary-400 hover:text-primary-300 font-medium text-xs inline-flex items-center gap-1 mt-1"
                >
                  <span>View All 8 Specialties</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinic Hours & Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-base mb-4 tracking-tight">
              Visit Clinic
            </h4>

            <div className="text-xs space-y-3">
              <div className="flex items-start gap-2.5 text-navy-300">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="text-white hover:text-primary-300 font-semibold"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-navy-300">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-primary-400 font-semibold mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Working Hours</span>
              </div>
              <div className="flex justify-between text-navy-200">
                <span>Mon - Sat:</span>
                <span className="font-medium text-white">9:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between text-navy-300">
                <span>Sunday:</span>
                <span className="font-medium text-amber-300">10:00 AM - 2:00 PM</span>
              </div>
              <p className="text-[11px] text-navy-400 pt-1 border-t border-navy-800">
                24/7 Dental Emergency On-Call
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Agency Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-navy-400 gap-4">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <p>
              &copy; {currentYear} {CLINIC_INFO.name}. All rights reserved.
            </p>
            <span className="hidden sm:inline text-navy-700">•</span>
            <Link href="/privacy" className="hover:text-navy-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-navy-700">•</span>
            <Link href="/terms" className="hover:text-navy-200 transition-colors">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-1 text-navy-300 bg-navy-900/90 px-3.5 py-1.5 rounded-xl border border-navy-800">
            <span>Concept project by</span>
            <a
              href={CLINIC_INFO.agency.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>{CLINIC_INFO.agency.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
