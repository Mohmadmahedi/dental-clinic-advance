"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

interface LightboxProps {
  photos: GalleryPhoto[];
}

export function Lightbox({ photos }: LightboxProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex]);

  return (
    <>
      {/* Grid of Photos with Click Trigger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-soft cursor-pointer border border-slate-100 transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1"
          >
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
              <span className="self-end p-2 rounded-xl bg-white/20 backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-white" />
              </span>
              <div>
                <span className="text-[11px] font-semibold text-primary-300 uppercase tracking-wider">
                  {photo.category}
                </span>
                <h4 className="text-base font-bold font-heading text-white mt-0.5">
                  {photo.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox Popup */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
              <Image
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            {/* Caption */}
            <div className="w-full text-center mt-4 text-white">
              <span className="text-xs text-primary-300 font-semibold uppercase tracking-wider">
                {photos[selectedPhotoIndex].category}
              </span>
              <h3 className="text-lg font-bold font-heading">
                {photos[selectedPhotoIndex].title}
              </h3>
              {photos[selectedPhotoIndex].description && (
                <p className="text-xs sm:text-sm text-navy-200 mt-1 max-w-xl mx-auto">
                  {photos[selectedPhotoIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
