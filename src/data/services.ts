export interface ServiceProcedureStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  priceRange: string;
  duration: string;
  recovery: string;
  popular?: boolean;
  benefits: string[];
  whoIsItFor: string[];
  procedureSteps: ServiceProcedureStep[];
  faqs: ServiceFAQ[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "checkup-and-cleaning",
    title: "Checkup and Cleaning",
    category: "Preventive Care",
    shortDescription:
      "Comprehensive digital oral examination, ultrasonic plaque removal, and diamond paste polishing for sparkling healthy teeth.",
    fullDescription:
      "Routine dental cleaning and checkups are the cornerstone of lifelong oral health. Using high-frequency ultrasonic scalers and gentle airflow technology, our hygienists remove hardened tartar (calculus) and surface stains without scratching your enamel. Every session includes an intraoral camera scan and oral cancer screening.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹999 - ₹2,499",
    duration: "45 minutes",
    recovery: "Immediate",
    popular: true,
    benefits: [
      "Prevents gum disease (gingivitis & periodontitis)",
      "Removes stubborn coffee, tea, and smoke stains",
      "Eliminates bad breath (halitosis) causing bacteria",
      "Early detection of hidden micro-cavities before they ache",
      "Includes fluoride therapy for anti-sensitivity protection",
    ],
    whoIsItFor: [
      "Adults & children due for their 6-month preventive checkup",
      "Anyone experiencing bleeding gums during brushing",
      "Smokers or regular coffee/tea drinkers wanting stain removal",
      "Patients preparing for orthodontic or cosmetic treatments",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Intraoral Digital Examination",
        description: "High-definition intraoral camera photos show you real-time tooth conditions on our chairside monitor.",
      },
      {
        step: 2,
        title: "Ultrasonic Scaler Debridement",
        description: "Piezoelectric ultrasonic tips gently vibrate tartar loose with warm water cooling, avoiding discomfort.",
      },
      {
        step: 3,
        title: "Air-Flow Stain Cleansing",
        description: "Fine bicarbonate and glycine micro-particles eliminate micro-stains from tight interdental spaces.",
      },
      {
        step: 4,
        title: "Enamel Buffing & Fluoride",
        description: "Micro-diamond polishing paste smooths enamel surfaces followed by a remineralizing fluoride glaze.",
      },
    ],
    faqs: [
      {
        question: "Does teeth cleaning make teeth loose or cause enamel damage?",
        answer:
          "Not at all. This is a common myth. Ultrasonic cleaning merely removes the hardened bacterial tartar that was falsely wedged between teeth. Your enamel is the hardest substance in the human body and is completely unharmed.",
      },
      {
        question: "How frequently should I get my teeth cleaned?",
        answer:
          "The Indian Dental Association and global standards recommend a professional prophylaxis cleaning every 6 months for adults and children.",
      },
      {
        question: "Will cleaning eliminate deep yellowing completely?",
        answer:
          "Cleaning removes extrinsic stains (food, tea, smoking). If your intrinsic tooth shade is naturally darker or yellowed, professional teeth whitening is recommended.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Laser Teeth Whitening",
    category: "Cosmetic Dentistry",
    shortDescription:
      "Get up to 8 shades brighter in a single 60-minute session with Philips Zoom! LED cold-light laser whitening technology.",
    fullDescription:
      "Transform your smile with clinical-grade in-office teeth whitening. We utilize gentle hydrogen peroxide formulas activated by customized cool LED spectrum wavelengths that penetrate deep enamel pores to dissolve years of stubborn staining while preserving sensitivity barriers.",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹6,999 - ₹12,999",
    duration: "60 minutes",
    recovery: "Same day (avoid dark foods for 48h)",
    popular: true,
    benefits: [
      "Lightens enamel by 6 to 8 shades in just 1 visit",
      "Customized gingival barrier prevents gum burn or irritation",
      "Specialized ACP (Amorphous Calcium Phosphate) prevents post-treatment sensitivity",
      "Long-lasting results up to 2 years with proper care",
      "Safe and non-invasive cosmetic enhancement",
    ],
    whoIsItFor: [
      "Individuals with yellowed teeth from tea, coffee, wine, or spices",
      "Grooms, brides, and professionals before major events or weddings",
      "Patients looking to regain youthful enamel radiance",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Shade Matching & Preparation",
        description: "We record your baseline shade with a VITA master guide and polish the tooth surface.",
      },
      {
        step: 2,
        title: "Gingival Protection Barrier",
        description: "A liquid resin dam is cured with UV light across your gums to seal soft tissues safely.",
      },
      {
        step: 3,
        title: "3x 15-Minute Laser Cycles",
        description: "Clinical bleaching gel is applied and energized under our blue wavelength dental lamp.",
      },
      {
        step: 4,
        title: "Anti-Sensitivity Fluoride Glaze",
        description: "Relief ACP gel is applied to soothe micro-tubules for a pain-free bright smile.",
      },
    ],
    faqs: [
      {
        question: "Is teeth whitening painful?",
        answer:
          "Most patients feel zero pain. A small percentage may experience mild, transient sensitivity for 12-24 hours. We apply specialized desensitizing agents immediately following the procedure to prevent this.",
      },
      {
        question: "How long do the whitening results last?",
        answer:
          "Typically between 12 to 24 months depending on dietary habits (intake of dark gravies, black coffee, tobacco). We also offer home touch-up kits to prolong brightness.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Single-Sitting Root Canal",
    category: "Endodontics",
    shortDescription:
      "Painless rotary endodontic root canal therapy using dental microscopes and digital 3D apex locators in a single visit.",
    fullDescription:
      "Save your infected or severely aching natural tooth without fear. At BrightSmile, modern root canals are virtually painless. With German rotary nickel-titanium files, high-precision digital apex locators, and computer-controlled anesthesia, over 95% of our root canals are completed seamlessly in a single appointment.",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹3,999 - ₹7,499",
    duration: "45 - 60 minutes",
    recovery: "1 - 2 days mild soreness",
    popular: true,
    benefits: [
      "Immediate and permanent relief from severe toothache and throbbing",
      "Saves your natural tooth structure and jawbone density",
      "Completed in a comfortable single sitting for 90% of cases",
      "Prevents facial swelling and dangerous jaw infections",
      "Restores normal biting and chewing functionality",
    ],
    whoIsItFor: [
      "Severe or persistent toothache that worsens while chewing or lying down",
      "Extreme sensitivity to hot and cold liquids that lingers",
      "Pimple on the gums or localized jaw swelling",
      "Deep dental decay or cracked teeth reaching the inner nerve pulp",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Digital Anesthesia & Isolation",
        description: "Precise local numbing and rubber dam isolation ensure a sterile, pain-free field.",
      },
      {
        step: 2,
        title: "Pulp Canal Cleansing",
        description: "Rotary NiTi instruments gently clear infected nerve tissue to the root apex.",
      },
      {
        step: 3,
        title: "Laser Canal Sterilization",
        description: "Canals are irrigated with warm sonic activators to eliminate all residual bacteria.",
      },
      {
        step: 4,
        title: "Hermetic Biocompatible Sealing",
        description: "Gutta-percha cones and bioceramic sealer seal the canal against future re-infection.",
      },
    ],
    faqs: [
      {
        question: "Is root canal treatment really pain-free?",
        answer:
          "Yes! Modern local anesthetics completely numb the tooth and surrounding bone. Most patients report feeling no more discomfort than having a regular filling.",
      },
      {
        question: "Do I always need a crown after a root canal?",
        answer:
          "For premolars and molars (back chewing teeth), a crown is strongly advised because root-treated teeth lose moisture and can crack under biting pressure without a protective cap.",
      },
    ],
  },
  {
    slug: "braces-and-aligners",
    title: "Clear Aligners & Invisible Braces",
    category: "Orthodontics",
    shortDescription:
      "Straighten crooked teeth discreetly with 3D digital scanned custom invisible aligners and Damon ceramic self-ligating braces.",
    fullDescription:
      "Achieve the picture-perfect symmetrical smile you've always desired without clunky metal train-tracks. We offer certified clear aligners (Invisalign and premium Indian clear aligner systems) alongside aesthetic ceramic brackets. Digital 3D iTero simulation allows you to preview your new smile before you even start.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹35,000 - ₹1,40,000",
    duration: "6 - 18 months",
    recovery: "No downtime",
    popular: true,
    benefits: [
      "Virtually invisible – clear plastic trays undetectable at conversational distance",
      "Removable while eating, brushing, and attending special events",
      "No food restrictions or broken wire emergencies",
      "3D digital treatment simulation with predictable completion timeline",
      "Fewer clinic appointments needed compared to traditional metal braces",
    ],
    whoIsItFor: [
      "Adults & teens with crowded, overlapping, or rotated teeth",
      "Gaps and spaces between front teeth (diastema)",
      "Overbite, underbite, crossbite, or open bite corrections",
      "Working professionals seeking discrete orthodontic correction",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "3D Digital Intraoral Scan",
        description: "No messy alginate impressions. A high-speed digital scanner captures thousands of optical photos in seconds.",
      },
      {
        step: 2,
        title: "ClinCheck 3D Treatment Video",
        description: "Our orthodontist maps your tooth trajectory and shows you a week-by-week 3D transformation video.",
      },
      {
        step: 3,
        title: "Aligner Trays Delivery",
        description: "You receive your custom laser-trimmed medical polyurethane aligner set with wear instructions.",
      },
      {
        step: 4,
        title: "Remote & In-Clinic Check-ins",
        description: "Switch aligners every 10-14 days with brief monthly reviews until your perfect smile is achieved.",
      },
    ],
    faqs: [
      {
        question: "How many hours a day must I wear the clear aligners?",
        answer:
          "For optimal tooth movement, aligners must be worn 20 to 22 hours daily, removing them only for meals and brushing.",
      },
      {
        question: "Are clear aligners suitable for severe crowding?",
        answer:
          "Yes! Modern attachment techniques allow aligners to correct complex malocclusions, bite misalignments, and deep bites reliably.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Permanent Dental Implants",
    category: "Implantology",
    shortDescription:
      "Restore missing teeth permanently with Swiss titanium and zirconia implants that feel, chew, and look 100% natural.",
    fullDescription:
      "Say goodbye to removable dentures or grinding down adjacent healthy teeth for bridges. Our implant specialists use computer-guided surgical 3D templates for millimeter-precise implant placement with lifetime warranties on dental implant fixtures from world-renowned Swiss and Swedish systems.",
    iconName: "Anchor",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹24,999 - ₹48,000",
    duration: "45 minutes per implant",
    recovery: "2 - 3 days mild swelling",
    popular: true,
    benefits: [
      "Permanent replacement that mimics natural tooth roots into the jawbone",
      "Preserves facial contour and prevents bone resorption after tooth loss",
      "100% natural bite strength – eat nuts, apples, and crunchy foods freely",
      "Lifetime fixture warranty with premium European implant brands",
      "No damage to adjacent virgin teeth (unlike dental bridges)",
    ],
    whoIsItFor: [
      "Anyone missing one, several, or all natural teeth",
      "Patients frustrated with loose, slipping, or painful dentures",
      "Those who had tooth extractions following accidents or trauma",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "CBCT 3D Bone Scan & Planning",
        description: "A low-dose 3D CT scan measures your jawbone height, width, and nerve canals with sub-millimeter precision.",
      },
      {
        step: 2,
        title: "Guided Implant Placement",
        description: "A precision surgical guide places the titanium implant into bone under local anesthesia in 30 minutes.",
      },
      {
        step: 3,
        title: "Osseointegration Period",
        description: "The jawbone fuses with the biocompatible titanium surface over 8 to 12 weeks for rock-solid stability.",
      },
      {
        step: 4,
        title: "Zirconia Crown Placement",
        description: "A custom CAD/CAM monolithic zirconia crown is screwed or cemented onto the abutment.",
      },
    ],
    faqs: [
      {
        question: "Are dental implants safe for diabetic or older patients?",
        answer:
          "Yes. Controlled diabetes and advanced age are not contraindications. With thorough medical evaluation and sterile surgical protocols, success rates exceed 98%.",
      },
      {
        question: "How long does a dental implant last?",
        answer:
          "With proper brushing, flossing, and semi-annual cleanings, dental implants can easily last a lifetime.",
      },
    ],
  },
  {
    slug: "kids-dentistry",
    title: "Gentle Pediatric Dentistry",
    category: "Pediatric Care",
    shortDescription:
      "Tear-free, playful, and compassionate dental care for infants, toddlers, and young teens in a welcoming pediatric environment.",
    fullDescription:
      "We believe a child's early dental experiences shape their oral health habits for life. Our child-friendly clinic features ceiling cartoon screens, gentle behavioral guidance, painless laughing gas sedation (nitrous oxide) if needed, cavity-preventing sealants, and fluoride varnishes.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc593020?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹799 - ₹3,499",
    duration: "30 - 45 minutes",
    recovery: "Immediate",
    popular: false,
    benefits: [
      "Friendly, child-focused dentists who specialize in behavioral psychology",
      "Cavity prevention with deep pit & fissure dental sealants",
      "Fluoride varnish strengthens enamel against milk bottle caries",
      "Tear-free, fun, game-based consultations that eliminate dental phobia",
      "Early orthodontic monitoring to prevent severe crowding later",
    ],
    whoIsItFor: [
      "Babies getting their first teeth (around 1st birthday)",
      "Toddlers and school children with sweet cravings or bottle rot",
      "Children who feel anxious or terrified of medical visits",
      "Kids needing habit-breaking appliances (thumb-sucking, tongue thrusting)",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Meet & Greet Play Consultation",
        description: "We show the child our dental mirror and magical chair in a warm, non-threatening playroom environment.",
      },
      {
        step: 2,
        title: "Gentle Plaque Cleansing",
        description: "Bubblegum or strawberry flavored cleaning paste polishes little teeth comfortably.",
      },
      {
        step: 3,
        title: "Sealants & Fluoride Varnish",
        description: "Protective resin is painted into tooth grooves to physically bar bacteria from penetrating.",
      },
      {
        step: 4,
        title: "Bravery Badge & Dental Goodie Kit",
        description: "Every champion patient leaves with a BrightSmile medal, sticker sheet, and kid toothbrush kit.",
      },
    ],
    faqs: [
      {
        question: "Why treat milk teeth if they fall out anyway?",
        answer:
          "Milk teeth hold space for permanent teeth, enable proper speech, and allow healthy chewing. Untreated infections can damage the permanent tooth bud developing directly beneath.",
      },
      {
        question: "At what age should my child first visit the dentist?",
        answer:
          "The IDA recommends the first visit when the first tooth erupts, or no later than the child's 1st birthday.",
      },
    ],
  },
  {
    slug: "smile-makeover",
    title: "Porcelain Veneers & Smile Makeover",
    category: "Cosmetic Dentistry",
    shortDescription:
      "Custom handcrafted porcelain veneers and digital smile design to redesign your tooth shape, color, proportions, and symmetry.",
    fullDescription:
      "A smile makeover is a comprehensive cosmetic treatment plan tailored to your facial harmony, lip line, and skin tone. Combining ultra-thin E.max porcelain veneers, composite bonding, and gum recontouring, we correct chipped, discolored, undersized, or slightly crooked teeth in just two visits.",
    iconName: "Sparkle",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹8,500 - ₹18,000 per tooth",
    duration: "2 visits over 7 days",
    recovery: "Immediate",
    popular: false,
    benefits: [
      "Custom E.max lithium disilicate veneers matching natural tooth translucency",
      "Resistant to permanent stains from turmeric, coffee, and red wine",
      "Closes unsightly gaps and balances asymmetrical front teeth",
      "Minimal or zero preparation options to preserve maximum natural tooth enamel",
      "Instant confidence boost for professional and social life",
    ],
    whoIsItFor: [
      "People with permanently stained, fluorosis-affected, or tetracycline teeth",
      "Chipped, cracked, or worn down tooth edges",
      "Peg laterals or unusually small front teeth",
      "Anyone desiring an Instagram-ready, celebrity-level radiant smile",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Digital Smile Design (DSD)",
        description: "Studio facial portraits and 3D mockups allow you to visualize and try in your proposed smile mockup.",
      },
      {
        step: 2,
        title: "Micro-Preparation & Impression",
        description: "Under 0.3mm of enamel is gently prepared under magnification before high-precision digital scanning.",
      },
      {
        step: 3,
        title: "Master Lab Ceramic Crafting",
        description: "Our certified master ceramists hand-layer porcelain to replicate authentic dental enamel texture.",
      },
      {
        step: 4,
        title: "Bonding & Final Reveal",
        description: "Veneers are bonded with high-strength light-cure resin, revealing your breathtaking transformation.",
      },
    ],
    faqs: [
      {
        question: "Do veneers look artificial or too white?",
        answer:
          "Never at BrightSmile. We calibrate shade, surface luminescence, and subtle incisal translucency so your veneers look like healthy, beautiful natural teeth.",
      },
      {
        question: "Can veneers chip or fall off?",
        answer:
          "High-tech dental bonding agents fuse porcelain directly with enamel. With routine hygiene, porcelain veneers typically last 15-20 years.",
      },
    ],
  },
  {
    slug: "emergency-care",
    title: "24/7 Emergency Dental Care",
    category: "Urgent Care",
    shortDescription:
      "Rapid same-day relief for severe toothache, knocked-out teeth, broken restorations, facial swelling, or dental trauma.",
    fullDescription:
      "Dental emergencies are stressful and agonizing. Whether you suffered a sports injury, cracked a tooth on food, or woke up with unbearable throbbing pain at night, our emergency on-call team provides immediate same-day interventions, antibiotics, drainage, and pain relief protocols.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    priceRange: "₹800 - ₹3,500",
    duration: "Immediate triage",
    recovery: "Varies by procedure",
    popular: false,
    benefits: [
      "Priority same-day walk-in or phone-ahead appointments",
      "Immediate analgesia and pain-relieving nerve soothing medications",
      "Emergency reimplantation of knocked-out natural teeth (within 60 mins)",
      "Digital x-ray diagnosis in under 5 minutes",
      "Dedicated emergency phone helpline available 7 days a week",
    ],
    whoIsItFor: [
      "Unbearable, throbbing dental pain keeping you awake",
      "Knocked out (avulsed) or loosened tooth from sports or accidents",
      "Rapidly spreading facial or gum swelling",
      "Dislodged crown, broken denture, or sharp fractured tooth edge cutting the tongue",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Immediate Triage & Comfort",
        description: "Immediate vitals check, ice pack application, and targeted fast-acting local anesthesia.",
      },
      {
        step: 2,
        title: "Instant Digital Radiograph",
        description: "High-resolution digital sensor confirms whether the root, nerve, or alveolar bone is affected.",
      },
      {
        step: 3,
        title: "Emergency Stabilization",
        description: "Pulp extirpation, temporary splinting, or composite bonding eliminates immediate pain.",
      },
      {
        step: 4,
        title: "Follow-up Treatment Plan",
        description: "Prescription medications are provided alongside scheduled appointments for definitive restoration.",
      },
    ],
    faqs: [
      {
        question: "What should I do if a tooth gets knocked out completely?",
        answer:
          "Pick the tooth up ONLY by the crown (never touch the root). Rinse gently in cold milk or saline (do not scrub). Place the tooth back into its socket if possible, or keep it submerged in a cup of cold milk, and reach our clinic within 45-60 minutes for reimplantation.",
      },
      {
        question: "Do you accept emergency walk-in patients?",
        answer:
          "Yes! We keep emergency slots open daily. Calling our priority hotline (+91 98765 43211) while traveling lets us prepare the surgical operatory for your arrival.",
      },
    ],
  },
];

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Book & Consult",
    description: "Book online or via WhatsApp in 30 seconds. Choose your preferred time and specialist doctor.",
  },
  {
    step: "02",
    title: "Digital Checkup",
    description: "Get a high-def intraoral 3D scan and low-radiation digital x-rays with transparent consultation.",
  },
  {
    step: "03",
    title: "Pain-Free Treatment",
    description: "Relax in ergonomic memory foam chairs with gentle computer-guided anesthesia and Netflix screens.",
  },
  {
    step: "04",
    title: "Lifelong Follow-up",
    description: "Enjoy transparent warranty cards, automated hygiene reminders, and complimentary post-care checkups.",
  },
];
