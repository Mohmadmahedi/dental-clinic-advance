"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC_INFO, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Announcement & Quick Contact Bar (Hidden on small mobile) */}
      <div className="bg-navy-950 text-white text-xs py-2 px-4 border-b border-navy-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-navy-200">
              <MapPin className="w-3.5 h-3.5 text-primary-400" />
              <span>{CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}</span>
            </span>
            <span className="flex items-center gap-1.5 text-navy-200">
              <Clock className="w-3.5 h-3.5 text-primary-400" />
              <span>Mon-Sat: 9AM - 8:30PM</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Patient Offer: ₹499 Checkup</span>
            </span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="text-white hover:text-primary-300 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100 py-3"
            : "bg-white border-b border-slate-100/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="BrightSmile Dental Clinic Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-primary to-primary-400 flex items-center justify-center text-white shadow-teal transition-transform group-hover:scale-105">
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
              <span className="block text-xl font-bold font-heading text-navy-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                Bright<span className="text-primary">Smile</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wider uppercase text-navy-500 mt-1">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-primary bg-aqua font-semibold"
                      : "text-navy-700 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-primary transition-colors px-3 py-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call Us</span>
            </a>

            <Button
              href="/book-appointment"
              variant="amber"
              size="sm"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/book-appointment"
              variant="amber"
              size="sm"
              className="text-xs px-3 py-2 sm:hidden"
            >
              Book
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-navy-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-navy-900" /> : <Menu className="w-6 h-6 text-navy-900" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="p-5 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-lg font-bold font-heading text-navy-900 leading-none">
                        Bright<span className="text-primary">Smile</span>
                      </span>
                      <p className="text-[10px] text-navy-500 font-medium">Bengaluru</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-navy-600 hover:bg-slate-100 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="p-4 space-y-1">
                  {NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? "bg-primary text-white font-semibold shadow-teal"
                            : "text-navy-800 hover:bg-aqua hover:text-primary"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-navy-400"}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer & Contact Details */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 space-y-4">
                <Button
                  href="/book-appointment"
                  variant="amber"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book Appointment
                </Button>

                <div className="space-y-2 pt-2 text-xs text-navy-600">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="flex items-center gap-2 font-medium text-navy-800 hover:text-primary py-1"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{CLINIC_INFO.phone}</span>
                  </a>
                  <div className="flex items-start gap-2 py-1">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{CLINIC_INFO.address.street}, {CLINIC_INFO.address.area}</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>Mon - Sat: 9:00 AM - 8:30 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
