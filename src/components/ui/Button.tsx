import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "amber" | "cta" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      isLoading,
      disabled,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-600 shadow-teal hover:shadow-soft-lg hover:-translate-y-0.5",
      amber:
        "bg-amber text-navy-900 font-semibold hover:bg-amber-600 hover:text-white shadow-amber hover:shadow-soft-lg hover:-translate-y-0.5",
      cta:
        "bg-amber text-navy-900 font-semibold hover:bg-amber-600 hover:text-white shadow-amber hover:shadow-soft-lg hover:-translate-y-0.5",
      secondary:
        "bg-aqua text-primary-700 hover:bg-primary-100 hover:text-primary-800 border border-primary-200/50",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost:
        "text-navy-700 hover:text-primary hover:bg-aqua/60",
      white:
        "bg-white text-navy-900 hover:bg-slate-50 shadow-soft hover:shadow-soft-md border border-slate-100",
    };

    const sizeStyles = {
      sm: "text-sm px-4 py-2 rounded-xl gap-1.5",
      md: "text-base px-6 py-3 rounded-2xl gap-2",
      lg: "text-lg px-8 py-4 rounded-2xl gap-2.5 font-semibold",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-1" />}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
