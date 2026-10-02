import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorItem } from "@/data/doctors";
import { Star, Calendar, Clock, Award, CheckCircle } from "lucide-react";

interface DoctorCardProps {
  doctor: DoctorItem;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const firstName = doctor.name.split(" ")[1] || doctor.name;

  return (
    <div className="group rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Doctor Headshot Photo */}
        <div className="relative aspect-[4/4] w-full overflow-hidden bg-slate-100">
          <Image
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.role} at BrightSmile Dental Clinic`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />

          {/* Experience Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-900/85 backdrop-blur-md text-amber-300 text-xs font-semibold border border-white/10">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{doctor.experience} Experience</span>
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm flex items-center gap-1.5 text-xs font-bold text-navy-900">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>{doctor.rating}</span>
            <span className="text-navy-400 font-normal">({doctor.reviewsCount} reviews)</span>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="p-6 space-y-3">
          <div>
            <h3 className="text-xl font-bold font-heading text-navy-900 group-hover:text-primary transition-colors">
              {doctor.name}
            </h3>
            <p className="text-xs font-semibold text-primary mt-0.5">
              {doctor.qualification}
            </p>
            <p className="text-xs text-navy-500 font-medium">
              {doctor.role}
            </p>
          </div>

          {/* Specialty Tag */}
          <div className="inline-block px-3 py-1 rounded-xl bg-aqua text-primary-800 text-xs font-medium">
            {doctor.specialty}
          </div>

          <p className="text-sm text-navy-600 leading-relaxed line-clamp-3">
            {doctor.bio}
          </p>

          {/* Schedule */}
          <div className="pt-2 text-xs text-navy-500 flex items-center gap-1.5 border-t border-slate-100">
            <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{doctor.availableDays}</span>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-6 pt-0">
        <Link
          href={`/book-appointment?doctor=${doctor.id}`}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-amber text-navy-950 hover:bg-amber-600 hover:text-white font-bold text-sm transition-all shadow-amber hover:shadow-soft"
        >
          <Calendar className="w-4 h-4" />
          <span>Book with {doctor.name}</span>
        </Link>
      </div>
    </div>
  );
}
