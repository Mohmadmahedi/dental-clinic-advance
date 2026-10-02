import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "aqua" | "navy" | "muted" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Section({
  className,
  variant = "default",
  padding = "md",
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    default: "bg-white text-navy-800",
    aqua: "bg-gradient-to-b from-aqua-50 via-aqua-100/50 to-white text-navy-800",
    navy: "bg-navy-900 text-white",
    muted: "bg-slate-50 text-navy-800",
    gradient: "bg-gradient-to-br from-primary-900 via-navy-900 to-navy-950 text-white",
  };

  const paddingStyles = {
    none: "py-0",
    sm: "py-10 md:py-14",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      className={cn("relative overflow-hidden", variantStyles[variant], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
