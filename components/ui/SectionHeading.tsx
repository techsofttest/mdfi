import Link from "next/link";
import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  alignment?: "center" | "left";
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = alignment === "center";
  const isDark = theme === "dark";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            isDark ? "text-red" : "text-red"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`text-2xl font-extrabold uppercase tracking-[0.25em] sm:text-3xl lg:text-4xl ${
          isDark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-xs font-bold uppercase tracking-[0.2em] ${
            isDark ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
  external?: boolean;
}

export function ActionButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ActionButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition duration-200";

  const variants = {
    primary: "bg-red text-white shadow-md hover:bg-red-dark",
    secondary: "bg-neutral-900 text-white hover:bg-red",
    outline:
      "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black",
    white: "bg-white text-neutral-950 shadow-md hover:bg-neutral-100",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
