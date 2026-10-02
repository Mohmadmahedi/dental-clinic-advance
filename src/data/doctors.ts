export interface DoctorItem {
  id: string;
  name: string;
  role: string;
  qualification: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  education: string[];
  memberships: string[];
  rating: number;
  reviewsCount: number;
  availableDays: string;
}

export const DOCTORS: DoctorItem[] = [
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    role: "Chief Dental Surgeon & Implantologist",
    qualification: "BDS, MDS (Prosthodontics & Implantology), FICOI (USA)",
    specialty: "Dental Implants & Full Mouth Rehabilitation",
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Ananya Sharma is a fellowship-trained implantologist and master prosthodontist renowned for pain-free smile reconstructions. Having placed over 4,500 successful implants across India and the UK, she combines gentle precision with state-of-the-art digital surgical navigation.",
    education: [
      "BDS – Government Dental College, Bengaluru (Gold Medalist)",
      "MDS in Prosthodontics – Rajiv Gandhi University of Health Sciences",
      "Fellowship in Oral Implantology – ICOI, USA",
      "Advanced Digital Occlusion – Zurich, Switzerland",
    ],
    memberships: [
      "Indian Prosthodontic Society (IPS)",
      "International Congress of Oral Implantologists (ICOI)",
      "Indian Dental Association (IDA)",
    ],
    rating: 4.9,
    reviewsCount: 384,
    availableDays: "Mon, Wed, Fri, Sat (10 AM - 7 PM)",
  },
  {
    id: "dr-rohan-mehta",
    name: "Dr. Rohan Mehta",
    role: "Senior Micro-Endodontist & Cosmetic Specialist",
    qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialty: "Microscopic Root Canals & Smile Design",
    experience: "11+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Passionate about preserving natural teeth, Dr. Rohan specializes in single-visit microscopic root canal therapies and laser cosmetic dentistry. He has a gentle bedside manner that immediately puts nervous and phobic patients at absolute ease.",
    education: [
      "BDS – Manipal College of Dental Sciences",
      "MDS (Conservative Dentistry & Endodontics) – A.B. Shetty Institute",
      "Certified Digital Smile Designer (DSD) – Madrid, Spain",
    ],
    memberships: [
      "Indian Endodontic Society (IES)",
      "Federation of Operative Dentistry of India (FODI)",
      "American Association of Endodontists (International Member)",
    ],
    rating: 5.0,
    reviewsCount: 290,
    availableDays: "Tue, Thu, Sat, Sun (9 AM - 6 PM)",
  },
  {
    id: "dr-priya-nair",
    name: "Dr. Priya Nair",
    role: "Lead Orthodontist & Clear Aligner Specialist",
    qualification: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    specialty: "Invisalign Platinum Provider & Damon Braces",
    experience: "9+ Years",
    image: "https://images.unsplash.com/photo-1594824813583-0570b5bfa081?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Priya Nair is a certified Invisalign Platinum Doctor who has transformed smiles for hundreds of teenagers and corporate executives. Her clinical focus combines aesthetic facial balancing with rapid, non-extraction orthodontic techniques.",
    education: [
      "BDS – Sri Ramachandra University, Chennai",
      "MDS (Orthodontics) – Oxford Dental College, Bengaluru",
      "Invisalign Masterclass Certification – Align Technology",
    ],
    memberships: [
      "Indian Orthodontic Society (IOS)",
      "World Federation of Orthodontists (WFO)",
      "Indian Dental Association (IDA)",
    ],
    rating: 4.9,
    reviewsCount: 245,
    availableDays: "Mon, Tue, Thu, Fri (11 AM - 8 PM)",
  },
];
