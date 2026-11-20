"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export function GallerySection({ items }: { items: GalleryItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="container-shell py-20 lg:py-28 border-t border-line overflow-hidden">
      {/* Editorial Header with generous left negative space */}
      <Reveal direction="up">
        <div className="grid grid-cols-12 pb-12 lg:pb-16">
          <div className="col-span-12 lg:col-span-9 lg:col-start-4 xl:col-span-8 xl:col-start-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
                Our Moments & Impact,
                <br />
                voices from the ground
              </h2>

              {/* Carousel Navigation Controls */}
              <div className="flex items-center gap-3 self-start sm:self-end">
                <button
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Embla Carousel Viewport */}
      <Reveal delayMs={150} direction="up">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4"
              >
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition hover:shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient & Hover Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-sm font-bold text-white line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="relative h-[65vh] w-[85vw] max-w-4xl">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-neutral-950 p-6 text-white border-t border-neutral-800">
              <h3 className="text-lg font-bold sm:text-xl">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
