export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  treatment: string;
  doctor: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
  verified: boolean;
  featuredHome?: boolean;
  featuredOffer?: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Vikramaditya Sengupta",
    location: "Koramangala, Bengaluru",
    treatment: "Dental Implants (Upper Molar)",
    doctor: "Dr. Ananya Sharma",
    rating: 5,
    review:
      "I put off replacing my missing molar for three years because I was terrified of dental surgery. Dr. Ananya explained the 3D guided procedure patiently. The entire implant surgery took barely 35 minutes and was genuinely 100% pain-free. Eating crisp dosas and nuts again feels wonderful!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago",
    verified: true,
    featuredHome: true,
    featuredOffer: true,
  },
  {
    id: "review-2",
    name: "Sneha Radhakrishnan",
    location: "Indiranagar, Bengaluru",
    treatment: "Invisalign Clear Aligners",
    doctor: "Dr. Priya Nair",
    rating: 5,
    review:
      "As a marketing director constantly presenting in board meetings, metal braces were not an option. Dr. Priya mapped out my 9-month aligner journey on the 3D screen. Nobody in my office even noticed I was wearing aligners. My smile is now completely straight and confident!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    date: "1 month ago",
    verified: true,
    featuredHome: true,
    featuredOffer: true,
  },
  {
    id: "review-3",
    name: "Arjun Venugopal",
    location: "Whitefield, Bengaluru",
    treatment: "Single-Sitting Root Canal",
    doctor: "Dr. Rohan Mehta",
    rating: 5,
    review:
      "Came in with terrible throbbing pain at 7 PM on a Friday. Dr. Rohan attended to me immediately, identified the nerve infection on the digital sensor, and finished the root canal in just one 45-minute sitting. I felt zero pain during or after. Absolutely world-class care.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "1 month ago",
    verified: true,
    featuredHome: true,
    featuredOffer: false,
  },
  {
    id: "review-4",
    name: "Deepika Narayan",
    location: "Domlur, Bengaluru",
    treatment: "Teeth Cleaning & Laser Whitening",
    doctor: "Dr. Rohan Mehta",
    rating: 5,
    review:
      "Booked the ₹499 checkup offer and decided to get the laser whitening before my wedding. My teeth went from shade A3 to B1 in an hour! The clinic is spotless, smells like a luxury spa, and the staff is exceptionally courteous.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "2 months ago",
    verified: true,
    featuredHome: false,
    featuredOffer: false,
  },
  {
    id: "review-5",
    name: "Rajeshwar Rao",
    location: "HSR Layout, Bengaluru",
    treatment: "Full Mouth Smile Makeover",
    doctor: "Dr. Ananya Sharma",
    rating: 5,
    review:
      "BrightSmile gave me back my youth. Due to severe grinding and old worn fillings, I could barely smile in family photos. The custom zirconia crowns and veneers Dr. Ananya designed feel completely natural. Worth every single rupee.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    date: "3 months ago",
    verified: true,
    featuredHome: false,
    featuredOffer: false,
  },
  {
    id: "review-6",
    name: "Meera Subramanian",
    location: "Kalyan Nagar, Bengaluru",
    treatment: "Kids Pediatric Dental Care",
    doctor: "Dr. Priya Nair",
    rating: 5,
    review:
      "My 6-year-old son was terrified of dentists after a bad experience elsewhere. At BrightSmile, he watched Peppa Pig on the ceiling TV while getting his cavity filled. He actually asked when we can visit Dr. Priya again! Cannot thank the team enough.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    date: "3 months ago",
    verified: true,
    featuredHome: false,
    featuredOffer: false,
  },
];
