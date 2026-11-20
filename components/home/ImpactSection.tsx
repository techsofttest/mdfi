import { Ear, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ApproachStep {
  number: string;
  title: string;
  description: string;
  icon: typeof Ear;
}

const stepsData: ApproachStep[] = [
  {
    number: "01",
    title: "Listen deeply",
    description: "Make space for women to name what matters in their lives.",
    icon: Ear,
  },
  {
    number: "02",
    title: "Learn together",
    description: "Build on local knowledge with useful information and skills.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Try boldly",
    description: "Turn ideas into small, practical actions led by the community.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Keep growing",
    description: "Share what works and strengthen the networks around it.",
    icon: TrendingUp,
  },
];

export function ImpactSection() {
  return (
    <section id="approach" className="container-shell py-20 lg:py-28 border-t border-line">
      {/* Centered Editorial Header */}
      <Reveal direction="up">
        <div className="pb-12 lg:pb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
            Listen first,
            <br />
            build together
          </h2>
        </div>
      </Reveal>

      {/* 4 Clean Columns Grid without lines */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stepsData.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <Reveal key={step.number} delayMs={idx * 100} direction="up">
              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="flex h-16 w-16 items-center justify-center text-red transition">
                  <IconComponent size={36} strokeWidth={2} />
                </div>

                {/* Step Title */}
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-neutral-900 sm:text-2xl">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
