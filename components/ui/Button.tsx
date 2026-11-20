import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary-red"
  | "primary-black"
  | "primary-white"
  | "secondary-stroke"
  | "secondary-stroke-white";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Primary filled variants
  "primary-red":
    "bg-red text-white border border-red hover:bg-red-dark hover:border-red-dark shadow-sm",
  "primary-black":
    "bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-900 shadow-sm",
  "primary-white":
    "bg-white text-neutral-950 border border-white hover:bg-neutral-100 shadow-sm",

  // Secondary stroke (outline) variants
  "secondary-stroke":
    "bg-transparent text-neutral-900 border border-neutral-400 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white",
  "secondary-stroke-white":
    "bg-transparent text-white border border-neutral-400 hover:border-white hover:bg-white hover:text-neutral-950",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs font-semibold tracking-wider",
  md: "px-7 py-3 text-xs font-semibold uppercase tracking-wider",
  lg: "px-9 py-4 text-sm font-semibold uppercase tracking-widest",
};

export function Button({
  variant = "secondary-stroke",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  // Dynamic stylish swell & shrink spring animation on hover & click
  const baseAnimation =
    "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer select-none text-center";

  const combinedClasses = `${baseAnimation} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
