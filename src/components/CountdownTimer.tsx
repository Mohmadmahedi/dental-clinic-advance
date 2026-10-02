"use client";

import React, { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export function CountdownTimer({
  initialHours = 4,
  initialMinutes = 38,
  initialSeconds = 15,
}: CountdownTimerProps) {
  // Store remaining seconds in state
  const [secondsLeft, setSecondsLeft] = useState(
    initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 bg-amber-500/15 border border-amber-400/50 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-sm">
      <span className="flex items-center gap-1 text-amber-700 animate-pulse">
        <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
        <span className="hidden sm:inline uppercase tracking-wider text-[11px]">
          Limited-Time Ad Offer:
        </span>
      </span>

      <div className="flex items-center gap-1 font-mono font-extrabold text-navy-950 text-xs sm:text-sm">
        <span className="bg-white px-2 py-0.5 rounded-md shadow-sm border border-amber-200">
          {pad(hours)}h
        </span>
        <span>:</span>
        <span className="bg-white px-2 py-0.5 rounded-md shadow-sm border border-amber-200">
          {pad(minutes)}m
        </span>
        <span>:</span>
        <span className="bg-white px-2 py-0.5 rounded-md shadow-sm border border-amber-200 text-red-600">
          {pad(seconds)}s
        </span>
      </div>

      <span className="text-[11px] text-amber-800 font-semibold hidden md:inline">
        Remaining Today
      </span>
    </div>
  );
}
