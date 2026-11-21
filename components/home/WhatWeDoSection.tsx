import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export interface WhatWeDoCardItem {
  title: string;
  headline: string;
  desc: string;
  image: string;
  href: string;
}

interface WhatWeDoSectionProps {
  cards: WhatWeDoCardItem[];
}

export function WhatWeDoSection({ cards }: WhatWeDoSectionProps) {
  return (
    <section id="work" className="container-shell py-20 lg:py-28">
      {/* Centered Editorial Header with scroll interaction */}
      <Reveal direction="up">
        <div className="pb-12 lg:pb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
            What We Do,
            <br />
            for a stronger everyday
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Reveal key={card.title} delayMs={index * 100} direction="up">
            <div className="group flex h-full flex-col justify-between">
              {/* Image Container that reduces height smoothly on hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl transition-all duration-500 ease-out group-hover:aspect-[16/10]">
                <Image
                  src={card.image}
                  alt={card.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition duration-300 group-hover:bg-red">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>

              {/* Content area below the image */}
              <div className="flex flex-1 flex-col justify-between pt-5">
                {/* Title & Description: pushed slightly upward on hover */}
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-red">
                    {card.headline}
                  </h3>
                  {card.desc && (
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  )}
                </div>

                {/* Reveal Secondary Button below on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:pt-4">
                  <div className="overflow-visible pb-1">
                    <Button
                      href={card.href}
                      variant="secondary-stroke"
                      size="sm"
                      className="gap-2"
                    >
                      <span>Explore Intervention</span>
                      <ArrowUpRight size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* View All Services Primary Button with scroll interaction */}
      {/* <Reveal delayMs={200} direction="up">
        <div className="mt-14 flex items-center justify-center">
          <Button
            href="#connect"
            variant="primary-red"
            size="md"
            className="gap-2"
          >
            <span>View All Services</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </Reveal> */}
    </section>
  );
}
