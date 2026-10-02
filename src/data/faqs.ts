export interface FAQItem {
  id: string;
  category: "Treatments" | "Pain and Safety" | "Cost and Insurance" | "Appointments";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  // Treatments
  {
    id: "faq-treatments-1",
    category: "Treatments",
    question: "What is the difference between teeth cleaning and teeth whitening?",
    answer:
      "Teeth cleaning (scaling and polishing) is a clinical health procedure that removes bacterial plaque, hard tartar (calculus), and external food stains to prevent gum disease and decay. Teeth whitening is a cosmetic procedure that uses specialized dental-grade bleaching gels activated by cold LED light to penetrate enamel and lighten the intrinsic tooth shade by 6 to 8 shades.",
  },
  {
    id: "faq-treatments-2",
    category: "Treatments",
    question: "Can dental implants replace multiple missing teeth or full jaws?",
    answer:
      "Yes. Dental implants are extremely versatile. We can replace a single missing tooth with one implant, bridge 3-4 teeth with two implants, or reconstruct an entire arch of teeth with modern All-on-4 or All-on-6 computer-guided implant protocols.",
  },
  {
    id: "faq-treatments-3",
    category: "Treatments",
    question: "Am I too old to get clear aligners or braces?",
    answer:
      "You are never too old! As long as your gums and supporting jawbone are healthy, teeth can be safely shifted into alignment at any age. In fact, over 40% of our orthodontic and Invisalign patients in Bengaluru are working adults aged 25 to 55.",
  },

  // Pain and Safety
  {
    id: "faq-pain-1",
    category: "Pain and Safety",
    question: "Will I feel pain during root canal treatment or tooth extraction?",
    answer:
      "No. At BrightSmile, we use the 'Pain-Free Dental Promise'. Before touching your tooth, we apply a flavored topical numbing gel followed by computer-buffered local anesthesia. The treated area will be completely numb. Most of our root canal and extraction patients feel only slight pressure and zero pain.",
  },
  {
    id: "faq-pain-2",
    category: "Pain and Safety",
    question: "What sterilization and infection control protocols do you follow?",
    answer:
      "We strictly adhere to OSHA (USA) and CDC Class-B 6-step hospital sterilization standards. All dental instruments undergo ultrasonic pre-cleaning, vacuum sealing in antimicrobial indicator pouches, and high-pressure fractionated vacuum autoclaving at 134°C. Operatory chairs and touch surfaces are disinfected with medical-grade hospital sprays between every single patient.",
  },
  {
    id: "faq-pain-3",
    category: "Pain and Safety",
    question: "Are dental digital x-rays safe for children and pregnant women?",
    answer:
      "We use ultra-low-dose digital sensor radiography that emits up to 85% less radiation than conventional film x-rays. The exposure of a single dental digital x-ray is roughly equivalent to eating two bananas or spending 10 minutes in natural sunlight. Lead aprons with thyroid collars are provided for total peace of mind.",
  },

  // Cost and Insurance
  {
    id: "faq-cost-1",
    category: "Cost and Insurance",
    question: "Are your dental treatment charges fixed or are there hidden fees?",
    answer:
      "We maintain 100% price transparency. Prior to starting any procedure, you will receive a printed or digital itemized treatment estimate detailing exact costs, materials, and warranty periods. There are never any surprise charges or hidden add-ons.",
  },
  {
    id: "faq-cost-2",
    category: "Cost and Insurance",
    question: "Do you accept health insurance or provide No-Cost EMI options?",
    answer:
      "Yes. While routine dental OPD is typically out-of-pocket in India, major surgical procedures (jaw trauma, impactions, cysts) may qualify for corporate health insurance or cashless corporate tie-ups. Furthermore, for treatments over ₹15,000 (such as aligners, implants, and smile makeovers), we offer 0% interest EMI options through Bajaj Finserv, HDFC, and leading credit cards for 3, 6, or 12 months.",
  },
  {
    id: "faq-cost-3",
    category: "Cost and Insurance",
    question: "What is included in the ₹499 New Patient Dental Checkup offer?",
    answer:
      "The introductory ₹499 package includes: (1) Full mouth comprehensive doctor consultation, (2) High-definition intraoral camera video scan, (3) Digital single RVG x-ray if clinically needed, and (4) Personalized digital smile report and prevention plan. (Actual value ₹1,800).",
  },

  // Appointments
  {
    id: "faq-appt-1",
    category: "Appointments",
    question: "Do I need to book in advance or can I walk in directly?",
    answer:
      "We strongly recommend booking your appointment online or through WhatsApp in advance to eliminate waiting times. Walk-ins are warmly accepted, though scheduled appointments receive priority seating. In case of acute dental emergencies (severe pain, swelling, trauma), walk-in triage is immediate.",
  },
  {
    id: "faq-appt-2",
    category: "Appointments",
    question: "Can I reschedule or cancel my appointment if my schedule changes?",
    answer:
      "Of course. We understand work and personal schedules change unexpectedly. Simply drop us a WhatsApp message or call us at +91 98765 43210 at least 2 hours in advance, and our reception team will seamlessly reschedule you to your preferred alternative slot at zero charge.",
  },
  {
    id: "faq-appt-3",
    category: "Appointments",
    question: "Is there car and two-wheeler parking available at the clinic?",
    answer:
      "Yes. Our Indiranagar clinic premises feature dedicated basement parking and street-level valet assistance for cars, as well as designated safe parking bays for two-wheelers.",
  },
];
