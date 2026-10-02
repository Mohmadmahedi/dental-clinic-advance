"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title: string;
  subtitle: string;
  treatmentName: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before treatment smile",
  afterAlt = "After treatment smile",
  title,
  subtitle,
  treatmentName,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <div>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {treatmentName}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 mt-0.5">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-navy-600 mt-1">{subtitle}</p>
        </div>
        <div className="text-xs text-navy-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl self-start sm:self-auto font-medium">
          ↔ Drag slider to compare
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-inner bg-slate-100"
      >
        {/* After Image (Background) */}
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute top-4 right-4 bg-navy-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          AFTER
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[280px]">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            BEFORE
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-navy-900 border-2 border-primary shadow-soft-lg flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 active:scale-95">
            <span className="flex items-center gap-0.5">
              <span>‹</span>
              <span>›</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
