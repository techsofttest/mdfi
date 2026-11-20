"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface SlideData {
  image: string;
  lines: string[];
}

const slides: SlideData[] = [
  {
    image: "/hero/b1.png",
    lines: ["PURPOSE LED,", "PERFORMANCE DRIVEN,", "FUTURE READY."],
  },
  {
    image: "/hero/b2.png",
    lines: ["EMPOWERING COMMUNITIES,", "STRENGTHENING VOICES,", "BUILDING TOMORROW."],
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-advance slide every 6.5 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full bg-neutral-950 text-white overflow-hidden">
      {/* Background Slider Container covering Hero and Docked Stats Bar */}
      <div className="relative min-h-[38rem] w-full overflow-hidden sm:min-h-[44rem] lg:min-h-[90vh] flex flex-col justify-between">
        {/* Cross-fading background images */}
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt="MDFI Community Empowerment"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/95 via-transparent to-transparent" />

        {/* Hero Typography & Non-Overlapping Behind-the-Text Red Slices */}
        <div className="container-shell relative z-10 flex flex-1 flex-col justify-center pt-12 pb-16">
          <div key={currentSlide} className="relative max-w-5xl">
            {/* Top Red Diagonal Slash Accent: sliced edges (skew in other direction), non-rounded, passes BEHIND text (z-0) */}
            <div
              className="pointer-events-none absolute -top-8 sm:-top-12 left-44 sm:left-64 h-2 w-28 sm:w-36 -rotate-25 skew-x-30 bg-red z-0 animate-slash-in"
            />

            {/* Bottom-Left Red Diagonal Slash Accent: sliced edges (skew in other direction), non-rounded, passes BEHIND text (z-0) */}
            <div
              className="pointer-events-none absolute -bottom-5 sm:-bottom-7 -left-10 sm:-left-16 h-2 w-24 sm:w-32 -rotate-25 skew-x-30 bg-red z-0 animate-slash-in"
            />

            {/* Animated Title positioned on higher z-index (z-10) to stay in front of the red slashes */}
            <h1 className="relative z-10 text-3xl font-extrabold uppercase tracking-[0.06em] text-white sm:text-5xl md:text-6xl lg:text-5xl leading-[1.12]">
              {activeSlide.lines.map((line, idx) => (
                <span
                  key={`${currentSlide}-${line}`}
                  style={{ animationDelay: `${idx * 120}ms` }}
                  className="block animate-fade-in-up"
                >
                  {line}
                </span>
              ))}
            </h1>
          </div>

          {/* CTA Action Buttons replacing slide indicator */}
          <div className="mt-8 flex flex-wrap items-center gap-4 z-10">
            <Button href="#what-we-do" variant="primary-red" size="md">
              Discover Our Work
            </Button>
          </div>
        </div>

        {/* Docked Stats Bar Overlay (KEPT FIXED WITH NO CHANGE) */}
        <div className="relative z-20 container-shell pb-6">
          <div className="grid grid-cols-2 divide-y divide-white/10 text-white sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:p-8">
            <div className="p-3 text-center sm:p-4">
              <p className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">15,000+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider text-white/70 uppercase">
                Women in Collectives
              </p>
            </div>
            <div className="p-3 text-center sm:p-4">
              <p className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">120+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider text-white/70 uppercase">
                Community Initiatives
              </p>
            </div>
            <div className="p-3 text-center sm:p-4">
              <p className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">85%+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider text-white/70 uppercase">
                Nutrition & Health Aware
              </p>
            </div>
            <div className="p-3 text-center sm:p-4">
              <p className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">100%</p>
              <p className="mt-2 text-xs font-semibold tracking-wider text-white/70 uppercase">
                Dignity-Centred
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
