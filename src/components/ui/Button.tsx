import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "amber"
    | "cta"
    | "secondary"
    | "outline"
    | "ghost"
    | "white";
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
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";

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
      ghost: "text-navy-700 hover:text-primary hover:bg-aqua/60",
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
        {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-1.5 shrink-0" />}
        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </>
    );

    // If an href is supplied, render as link
    if (href) {
      const isTel = href.startsWith("tel:");
      const isMail = href.startsWith("mailto:");
      const isExternal =
        external ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//");

      // Auto-strip spaces from tel: links so mobile/desktop dialers always open
      const formattedHref = isTel ? href.replace(/\s+/g, "") : href;

      // Native <a> for phone calls, email links, and external URLs
      if (isTel || isMail) {
        return (
          <a
            href={formattedHref}
            onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
            className={combinedClassName}
            {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }

      if (isExternal) {
        return (
          <a
            href={formattedHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
            className={combinedClassName}
            {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }

      // Next.js Link for internal routing with full onClick and prop forwarding
      return (
        <Link
          href={formattedHref}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          className={combinedClassName}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    // Standard button element
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        onClick={onClick}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
