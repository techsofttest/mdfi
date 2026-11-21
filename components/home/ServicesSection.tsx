import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  features: string[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "microfinance-loan",
    title: "Microfinance Loan",
    category: "Financial Inclusion",
    description:
      "Accessible, low-ticket credit designed to support daily household needs, small-scale enterprises, and income-generating activities for individuals.",
    image: "/services/MICROFINANCE LOAN.png",
    href: "#connect",
    features: ["Quick disbursement", "Minimal documentation", "Flexible repayment terms"],
  },
  {
    id: "msme-loan",
    title: "Business / MSME Loan",
    category: "Enterprise Growth",
    description:
      "Customized working capital and expansion capital for small business owners, local entrepreneurs, traders, and growing micro-enterprises.",
    image: "/services/BUSINESS MSME LOAN.png",
    href: "#connect",
    features: ["Working capital support", "Competitive interest", "Tailored to business cash flow"],
  },
  {
    id: "jlg-loan",
    title: "JLG / Ladies Group Loan",
    category: "Community Collectives",
    description:
      "Joint Liability Group financing fostering peer solidarity, self-reliance, and mutual trust among women collectives building micro-businesses together.",
    image: "/services/JLG  LADIES GROUP LOAN.png",
    href: "#connect",
    features: ["Collateral-free group lending", "Peer support model", "Empowering women collectives"],
  },
];

interface ServicesSectionProps {
  services?: ServiceItem[];
}

export function ServicesSection({ services = defaultServices }: ServicesSectionProps) {
  return (
    <section id="services" className="container-shell py-20 lg:py-28 border-t border-line">
      {/* Editorial Header Layout */}
      <Reveal direction="up">
        <div className="grid grid-cols-12 pb-12 lg:pb-16">
          <div className="col-span-12 lg:col-span-9 lg:col-start-4 xl:col-span-8 xl:col-start-4">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
              Our Financial Services,
              <br />
              fueling aspirations
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
              <p>
                We believe that financial independence begins with fair, transparent, and dignified access to credit.
                Our loan offerings are crafted to meet the real, evolving needs of people on the ground.
              </p>
              <p>
                Whether launching a village initiative, scaling a small enterprise, or uniting as a women-led collective,
                our credit solutions provide the stability to move forward.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3-Column Services Grid */}
      <div className="mt-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delayMs={index * 120} direction="up">
            <div id={service.id} className="group flex h-full flex-col justify-between scroll-mt-24">
              <div>
                {/* Service Card Image (4:3 aspect ratio) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Title & Info */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 transition group-hover:text-red">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-1.5 border-t border-neutral-200/80 pt-4 text-xs font-medium text-neutral-700">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <Button
                  href={service.href}
                  variant="secondary-stroke"
                  size="sm"
                  className="w-full gap-2 justify-center"
                >
                  <span>Apply / Enquire Now</span>
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
