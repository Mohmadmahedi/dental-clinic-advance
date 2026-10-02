"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItemData[];
  allowMultiple?: boolean;
}

export function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First item open by default

  const toggle = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-primary-200/80 shadow-soft"
                : "bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-navy-950 text-base sm:text-lg focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "bg-primary text-white rotate-180 shadow-teal"
                    : "bg-white text-navy-600 border border-slate-200"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-sm sm:text-base text-navy-600 leading-relaxed border-t border-slate-100 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
