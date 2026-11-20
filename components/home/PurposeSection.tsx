import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export interface PurposeCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface PurposeSectionProps {
  cards?: PurposeCardItem[];
}

const defaultCards: PurposeCardItem[] = [
  {
    id: "p1",
    title: "Dignity in Every Choice",
    description: "Recognising people's knowledge and ability to shape their own futures.",
    image: "/about-home/dignity in every choice.png",
  },
  {
    id: "p2",
    title: "Empowered Local Leadership",
    description: "Women coming together to solve local village challenges and make their voices count.",
    image: "/about-home/EMPOWERED LOCAL LEADERSHIP.png",
  },
  {
    id: "p3",
    title: "Strength in Collectives",
    description: "Change grows best when it grows together across peer self-help groups.",
    image: "/about-home/STRENGTH IN COLLECTIVES.png",
  },
  {
    id: "p4",
    title: "Progress that Lasts",
    description: "Sustainable, multi-generational impact across health, nutrition and livelihoods.",
    image: "/about-home/PROGRESS THAT LASTS.png",
  },
];

export function PurposeSection({ cards = defaultCards }: PurposeSectionProps) {
  return (
    <section id="why" className="bg-[#f4f2ee] py-20 lg:py-28">
      <div className="container-shell">
        {/* Godrej-inspired editorial header layout: wide left offset / negative space */}
        <Reveal direction="up">
          <div className="grid grid-cols-12 pb-12 lg:pb-16">
            <div className="col-span-12 lg:col-span-9 lg:col-start-4 xl:col-span-8 xl:col-start-4">
              {/* Main Heading spanning full width of the right block */}
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
                Who We Are,
                <br />
                Purpose Led
              </h2>

              {/* 2-Column Description below the heading */}
              <div className="mt-8 grid gap-8 sm:grid-cols-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  When women have the knowledge, resources and freedom to shape their lives, families and
                  communities grow stronger too. Women&apos;s empowerment means more than access to services.
                </p>
                <p>
                  It means having a say in decisions, the confidence to make choices, and a fair opportunity
                  to participate in community life and the economy across Kannur and beyond.
                </p>
              </div>

              {/* Pill Action Button */}
              <div className="mt-8">
                <Button href="#companies" variant="secondary-stroke" size="md">
                  More About Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dynamic 2x2 Grid of Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((card, idx) => (
            <Reveal key={card.id} delayMs={idx * 120} direction="up" className="h-full">
              <div
                className="group relative flex min-h-[20rem] sm:min-h-[22rem] lg:min-h-[24rem] h-full flex-col justify-end overflow-hidden rounded-xl bg-neutral-900 p-8 text-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Card Background Image: Grayscale by default, color on hover */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for optimal text readability from the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Card Content: Fixed to the bottom */}
                <div className="relative z-10 mt-auto w-full">
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-200 leading-relaxed max-w-md">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
