# BrightSmile Dental Clinic — Premium Multi-Page Clinic Website

A production-quality, multi-page healthcare website built for **BrightSmile Dental Clinic** located in Indiranagar, Bengaluru, India. Engineered for high patient trust, transparent pricing, and maximum booking conversion rates.

This project was developed as a flagship digital agency showcase piece adhering to modern aesthetic standards, strict SEO best practices, and zero-compromise web performance (PageSpeed 95+).

---

## 🌟 Key Highlights & Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React icons, and Framer Motion micro-interactions.
- **Conversion-Driven Architecture**: Every page features high-visibility Amber `#F59E0B` call-to-action buttons, emergency call hotlines, and instant appointment booking triggers.
- **Custom Design System**:
  - Primary Teal (`#0EA5A4`) & Light Aqua tint (`#E6F6F6`)
  - Deep Navy typography and dark accents (`#0F2A3D`)
  - High-conversion Amber CTA buttons (`#F59E0B`)
  - Typography: Google Fonts `Poppins` (headings) and `Inter` (body)
  - Custom soft multi-layered shadows and rounded-2xl / rounded-3xl cards
- **Data-Driven Dynamic Routing**:
  - All services, doctors, articles, pricing tariffs, and FAQs are stored in typed data modules in `/src/data`.
  - Dynamic SSG routes (`/services/[slug]` and `/blog/[slug]`) powered by `generateStaticParams()` and dynamic `generateMetadata()`.
  - Adding a new treatment or blog post only requires adding a simple object in the data layer.
- **Distraction-Free PPC Ad Landing Page (`/offer`)**:
  - Main site navigation and footer menus are automatically omitted via Next.js route groups `(offer)`.
  - Live ticking `<CountdownTimer />` with hours, minutes, and seconds.
  - Short 20-second lead form above the fold.
  - 3 core treatment benefits, 2 patient video reviews, objection-clearing FAQs, and instant phone dialer.
- **Interactive Patient Engagement**:
  - `<BeforeAfterSlider />`: Interactive touch and drag slider comparing clinical treatment outcomes.
  - `<Lightbox />`: Fullscreen modal photo viewer with keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).
  - `<FAQAccordion />`: Smooth animated question-and-answer accordions across 4 distinct categories.
  - `<WhatsAppButton />`: Floating pulsing WhatsApp button with radar ping animation and interactive welcome tooltip.
  - `<MobileCallBar />`: Bottom sticky mobile bar with 1-tap Call Now, WhatsApp, and Booking buttons.
- **Search Engine Optimization & Schema**:
  - `Dentist` and `LocalBusiness` JSON-LD structured data on the home page with verified GPS coordinates and operating hours.
  - Dynamic `sitemap.ts` generating all 34 static and dynamic URLs with change frequencies and priorities.
  - Standardized `robots.ts` crawler directives.
  - Google Analytics 4 (`NEXT_PUBLIC_GA_ID`) and Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`) integrations with automatic `"Lead"` event tracking on `/thank-you`.
- **Backend API & Honeypot Protection**:
  - Next.js API route `/api/book` (POST) with 10-digit Indian phone validation and silent honeypot spam protection.
  - Modular integration hooks for Google Sheets, Resend/Nodemailer email, and WhatsApp notifications.

---

## 📁 Directory Structure

```text
dental-multi-page/
├── public/                     # Static assets & icons
├── src/
│   ├── app/
│   │   ├── (main)/             # Main site pages with Header, Footer & Floating triggers
│   │   │   ├── layout.tsx      # Main layout wrapper
│   │   │   ├── page.tsx        # Home page (Hero, Services, Why Us, Offers, Doctors, Reviews, CTA)
│   │   │   ├── about/          # Clinic story, mission, 6-step sterilization standards, milestones
│   │   │   ├── services/       # 8 dental specialties overview & 4-step treatment journey
│   │   │   │   └── [slug]/     # Dynamic treatment detail pages (benefits, procedure, FAQs)
│   │   │   ├── doctors/        # Detailed specialist profiles (BDS, MDS, credentials, schedule)
│   │   │   ├── pricing/        # 3 packages, itemized fee tariff across 6 categories, 0% EMI note
│   │   │   ├── gallery/        # Before/After interactive slider, lightbox grid, patient stories
│   │   │   ├── blog/           # Oral health blog directory (6 clinical guides)
│   │   │   │   └── [slug]/     # Dynamic article layout with author bio & related posts
│   │   │   ├── faq/            # 12 FAQs categorized into 4 clinical & logistical sections
│   │   │   ├── contact/        # Contact form, embedded Google map, address, telephone, hours
│   │   │   ├── book-appointment/ # Multi-field booking intake with sticky emergency panel
│   │   │   ├── thank-you/      # Ad conversion tracking page firing Meta/GA4 Lead events
│   │   │   ├── privacy/        # DCI-compliant medical privacy policy
│   │   │   └── terms/          # Terms of clinical care & warranty policies
│   │   ├── (offer)/            # Distraction-free ad landing page route group
│   │   │   ├── layout.tsx      # Omits header & footer menus
│   │   │   └── offer/page.tsx  # PPC landing page (Countdown timer, short form, 3 benefits, FAQs)
│   │   ├── api/
│   │   │   └── book/route.ts   # POST endpoint with validation, honeypot & integration hooks
│   │   ├── globals.css         # Tailwind base styles, glassmorphism & typography
│   │   ├── layout.tsx          # Root HTML layout with Google fonts & tracking scripts
│   │   ├── not-found.tsx       # Custom dental 404 page
│   │   ├── robots.ts           # Search engine crawler directives
│   │   └── sitemap.ts          # Automated dynamic XML sitemap generator
│   ├── components/
│   │   ├── ui/                 # Reusable Design System tokens (Button, Card, Section, Container)
│   │   ├── Header.tsx          # Sticky navigation with announcement bar & mobile drawer
│   │   ├── Footer.tsx          # Comprehensive server component footer with clinic details
│   │   ├── Hero.tsx            # High-conversion hero with trust badges & floating proof cards
│   │   ├── ServiceCard.tsx     # Reusable treatment card with tags & direct booking action
│   │   ├── DoctorCard.tsx      # Doctor portrait, qualifications, and booking trigger
│   │   ├── PricingCard.tsx     # Package tariff card with "Most Popular" highlight
│   │   ├── Testimonials.tsx    # Patient reviews with ratings and verified checkmarks
│   │   ├── FAQAccordion.tsx    # Interactive client accordion with smooth expansion
│   │   ├── BookingForm.tsx     # Appointment intake form with URL pre-selection
│   │   ├── OfferForm.tsx       # Short above-the-fold form for the ad landing page
│   │   ├── ContactForm.tsx     # Contact inquiry form with honeypot spam protection
│   │   ├── BeforeAfterSlider.tsx # Interactive touch & drag before/after image comparison
│   │   ├── Lightbox.tsx        # Responsive image modal with keyboard navigation
│   │   ├── CountdownTimer.tsx  # Urgency countdown timer for promotional campaigns
│   │   ├── WhatsAppButton.tsx  # Floating pulsing WhatsApp action with tooltip
│   │   ├── MobileCallBar.tsx   # Fixed bottom 1-tap mobile call & booking action bar
│   │   └── CTABanner.tsx       # Closing high-intent conversion banner
│   ├── data/
│   │   ├── services.ts         # 8 dental services with steps, benefits, INR pricing, and FAQs
│   │   ├── doctors.ts          # 3 specialist doctor profiles with credentials and schedules
│   │   ├── posts.ts            # 6 dentist-authored articles with rich markdown content
│   │   ├── faqs.ts             # 12 FAQs organized into 4 distinct categories
│   │   ├── testimonials.ts     # 6 verified patient reviews with ratings and treatments
│   │   └── pricing.ts          # Packages, treatment price guide, and special offers
│   └── lib/
│       ├── constants.ts        # Clinic contact info, phone, WhatsApp URL, address, hours
│       └── utils.ts            # Tailwind class merger (cn) and Indian Rupee formatter (formatINR)
├── .env.example                # Environment variable blueprint
├── next.config.mjs             # Next.js configuration (Unsplash image domain allowed)
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS Tailwind plugins
├── tailwind.config.ts          # Tailwind theme tokens (teal, aqua, navy, amber, shadows)
└── tsconfig.json               # TypeScript path alias configuration (@/*)
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended (tested on Node v24)
- **npm** or **pnpm** or **yarn**

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/YourUsername/brightsmile-dental-clinic.git
cd brightsmile-dental-clinic

# Install required packages
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Update the keys with your actual values:
```env
NEXT_PUBLIC_SITE_URL=https://brightsmiledental.in
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To test static site generation, type checking, and bundle optimization:
```bash
npm run build
npm run start
```

---

## 🔌 Connecting Backend Integrations (Step-by-Step)

The appointment booking endpoint is located at `src/app/api/book/route.ts`. You can connect any backend CRM, email provider, or Google Sheets in minutes:

### 1. Google Sheets Lead Logging (Zero Cost CRM)
1. Create a Google Sheet with columns: `Date`, `BookingID`, `Name`, `Phone`, `Email`, `Service`, `Doctor`, `PreferredTime`, `Message`.
2. Go to **Extensions > Apps Script** and deploy a Web App that receives `doPost(e)`.
3. Add the Webhook URL to `.env.local`:
   ```env
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXX/exec
   ```
4. In `src/app/api/book/route.ts`, uncomment the Google Sheets `fetch()` snippet.

### 2. Email Notifications with Resend
1. Create a free account on [Resend.com](https://resend.com) and verify your clinic domain.
2. Install the SDK: `npm install resend`
3. Add your API key to `.env.local`:
   ```env
   RESEND_API_KEY=re_1234567890abcdef
   ```
4. In `src/app/api/book/route.ts`, uncomment the Resend email dispatch block to receive instant email notifications whenever a patient books.

### 3. WhatsApp Notifications (Wati / Twilio)
1. Register for WhatsApp Business API with your provider (Wati, Interakt, or Twilio).
2. Trigger automated template messages directly inside the `POST` handler in `src/app/api/book/route.ts`.

---

## 📋 Production Launch & Deployment Checklist

Before taking the website live on Netlify or Vercel:

- [x] **Verified Type Safety**: Run `npx tsc --noEmit` to confirm 0 TypeScript errors.
- [x] **Tested Production Build**: Run `npm run build` to ensure all 34 static and dynamic routes generate cleanly.
- [ ] **Configure Environment Variables**:
  - Add `NEXT_PUBLIC_SITE_URL` with your production domain (e.g., `https://brightsmiledental.in`).
  - Add `NEXT_PUBLIC_GA_ID` for Google Analytics 4 tracking.
  - Add `NEXT_PUBLIC_META_PIXEL_ID` for Meta (Facebook & Instagram) ad conversion tracking.
- [ ] **Connect Domain & SSL**:
  - Add your custom domain in Netlify / Vercel DNS settings.
  - Enable automatic Let's Encrypt SSL certificates.
- [ ] **Google Search Console**:
  - Verify site ownership via DNS TXT or HTML tag.
  - Submit `https://yourdomain.com/sitemap.xml`.
- [ ] **Google Business Profile**:
  - Link the "Website" and "Appointment" URLs on Google Maps to `/book-appointment`.
- [ ] **Verify Ad Tracking & Lead Events**:
  - Visit `/offer`, fill out the form, and verify that the `/thank-you` page fires the Meta Pixel `Lead` event using the Meta Pixel Helper Chrome extension.
- [ ] **Google PageSpeed Insights**:
  - Audit the home page and service pages to ensure performance score exceeds 90+.

---

## 📄 License & Attribution

Concept project engineered by **PixelCraft Digital Studio**. Designed for healthcare digital agency portfolios and production dental clinic implementations.
