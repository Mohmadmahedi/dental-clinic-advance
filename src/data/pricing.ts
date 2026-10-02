export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  popular?: boolean;
  tagline: string;
  features: string[];
  recommendedFor: string;
}

export interface TreatmentPriceCategory {
  category: string;
  items: {
    name: string;
    price: string;
    details?: string;
  }[];
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "basic-checkup",
    name: "Basic Oral Checkup",
    price: 499,
    originalPrice: 1500,
    tagline: "Essential preventive diagnosis for new and returning patients.",
    features: [
      "Full mouth clinical dental examination",
      "High-definition intraoral camera scan",
      "Digital RVG diagnostic x-ray (if required)",
      "Smile assessment & prevention plan",
      "Doctor consultation report",
    ],
    recommendedFor: "Routine 6-month checkup & first-time visitors",
  },
  {
    id: "cleaning-polish",
    name: "Complete Cleaning & Polish",
    price: 1499,
    originalPrice: 2800,
    popular: true,
    tagline: "Our most requested hygiene package for fresh breath and healthy gums.",
    features: [
      "Everything in Basic Checkup included",
      "Full mouth ultrasonic scaling (tartar removal)",
      "Air-Flow micro-stain elimination",
      "Diamond paste enamel buffing & polishing",
      "Anti-sensitivity fluoride varnish application",
      "Free oral hygiene home care starter kit",
    ],
    recommendedFor: "Individuals with coffee/tea stains or bleeding gums",
  },
  {
    id: "whitening-special",
    name: "Laser Whitening Special",
    price: 6999,
    originalPrice: 12000,
    tagline: "Immediate red-carpet smile transformation up to 8 shades lighter.",
    features: [
      "Everything in Cleaning & Polish included",
      "60-minute Philips Zoom! cold LED laser whitening",
      "Custom protective gum barrier application",
      "Relief ACP desensitizing mineral glaze",
      "Before & after VITA shade guide documentation",
      "Take-home touchup pen (complimentary)",
    ],
    recommendedFor: "Weddings, interviews, and special occasions",
  },
];

export const TREATMENT_PRICING_TABLE: TreatmentPriceCategory[] = [
  {
    category: "Consultation & Diagnostics",
    items: [
      { name: "Specialist Doctor Consultation", price: "₹500", details: "Waived with ongoing treatment" },
      { name: "Digital RVG X-Ray (per tooth)", price: "₹250", details: "Instant high-definition imaging" },
      { name: "3D Digital Intraoral Scan", price: "₹1,500", details: "Included free with aligners" },
    ],
  },
  {
    category: "Hygiene & Preventive Care",
    items: [
      { name: "Standard Ultrasonic Scaling", price: "₹1,200", details: "Upper & lower arches" },
      { name: "Deep Scaling & Root Planing (per quadrant)", price: "₹1,500", details: "For periodontitis treatment" },
      { name: "Air-Flow Stain Blasting Polish", price: "₹800", details: "Removes dark tobacco/tea stains" },
      { name: "Fluoride Therapy / Sealant (per tooth)", price: "₹600", details: "Cavity protection for children & adults" },
    ],
  },
  {
    category: "Fillings & Restorations",
    items: [
      { name: "Tooth-Colored Composite Filling (Small)", price: "₹900", details: "Nano-hybrid invisible blend" },
      { name: "Tooth-Colored Composite Filling (Large)", price: "₹1,600", details: "Multi-surface anatomical build-up" },
      { name: "Inlay / Onlay (Ceramic)", price: "₹4,500", details: "Precision lab-milled porcelain" },
    ],
  },
  {
    category: "Root Canal & Crowns",
    items: [
      { name: "Single-Sitting Rotary Root Canal", price: "₹4,500", details: "Micro-endodontic precision" },
      { name: "Re-Root Canal Treatment", price: "₹6,000", details: "For previously failed root canals" },
      { name: "Metal-Ceramic (PFM) Crown", price: "₹3,500", details: "5-year warranty" },
      { name: "CAD/CAM Zirconia Crown (Premium)", price: "₹8,000", details: "15-year warranty, metal-free" },
      { name: "E.max All-Ceramic Crown", price: "₹9,500", details: "High translucency for front teeth" },
    ],
  },
  {
    category: "Implants & Surgery",
    items: [
      { name: "Swiss Titanium Dental Implant (Fixture)", price: "₹28,000", details: "Lifetime fixture guarantee" },
      { name: "Straumann SLActive Implant (Premium)", price: "₹45,000", details: "Rapid 4-week healing" },
      { name: "Surgical Tooth Extraction (Simple)", price: "₹1,200", details: "Gentle atraumatic extraction" },
      { name: "Wisdom Tooth Surgical Impaction", price: "₹4,500 - ₹6,500", details: "Includes suture removal & follow-up" },
    ],
  },
  {
    category: "Orthodontics & Aligners",
    items: [
      { name: "Traditional Metal Braces", price: "₹32,000", details: "Complete 12-18 month treatment" },
      { name: "Ceramic Tooth-Colored Braces", price: "₹45,000", details: "Discreet clear brackets" },
      { name: "Clear Aligners (Mild Crowding)", price: "₹55,000", details: "6-8 month treatment plan" },
      { name: "Invisalign Comprehensive", price: "₹1,25,000", details: "Unlimited aligners & 5-year guarantee" },
    ],
  },
];

export const HOME_SPECIAL_OFFERS = [
  {
    id: "offer-checkup",
    badge: "Limited Time Offer",
    title: "New Patient Checkup + X-Ray",
    originalPrice: "₹1,800",
    offerPrice: "₹499",
    savings: "Save 72%",
    description: "Full mouth intraoral video scan, doctor consultation, and digital RVG x-ray.",
    cta: "Claim ₹499 Checkup",
    href: "/book-appointment?offer=checkup-499",
    popular: false,
  },
  {
    id: "offer-cleaning",
    badge: "Most Popular",
    title: "Ultrasonic Cleaning + Polishing",
    originalPrice: "₹2,800",
    offerPrice: "₹1,299",
    savings: "Save 53%",
    description: "Complete plaque and stain removal, diamond buffing, and anti-sensitivity fluoride.",
    cta: "Book Cleaning Offer",
    href: "/book-appointment?offer=cleaning-1299",
    popular: true,
  },
  {
    id: "offer-aligner",
    badge: "Free Consultation",
    title: "Clear Aligner 3D Smile Scan",
    originalPrice: "₹3,500",
    offerPrice: "FREE",
    savings: "₹3,500 Value",
    description: "Get a complimentary 3D digital bite scan and preview your straight smile simulation.",
    cta: "Claim Free 3D Scan",
    href: "/book-appointment?offer=aligner-free-scan",
    popular: false,
  },
];
