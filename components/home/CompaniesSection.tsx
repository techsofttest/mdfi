import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CompaniesSection() {
  const companies = [
    {
      number: "01",
      name: "MDFI Agro & Marketing",
      legal: "Multistate Co-operative Society Ltd.",
      desc: "An agricultural and marketing-focused group company, contributing to enterprise, local livelihoods, supply chain connections and rural economic opportunities.",
      logo: "/company/MDFI LOGO.png",
      href: "#connect",
    },
    {
      number: "02",
      name: "MDFI Finance",
      legal: "Private Limited",
      desc: "A financial services company within the MDFI group, focused on making accessible, transparent and fair financial opportunities available to individuals and enterprises.",
      logo: "/company/MDFI Finance Red Logo.png",
      href: "#connect",
    },
    {
      number: "03",
      name: "MDFI Gold Loan",
      legal: "Gold Loan Services",
      desc: "A dedicated gold loan business within the MDFI ecosystem, offering a reliable, customer-focused financial service tailored for community convenience and security.",
      logo: "/company/mdfi-gold-loan.png",
      href: "#connect",
    },
  ];

  return (
    <section id="companies" className="relative overflow-hidden border-t border-line py-20 lg:py-28">
      {/* Background large logo watermark in top-left corner */}
      <div className="pointer-events-none absolute -top-12 -left-16 sm:-top-16 sm:-left-20 lg:-top-20 lg:-left-24 z-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] opacity-[0.05] select-none">
        <Image
          src="/logo/logo-m.png"
          alt=""
          fill
          sizes="(max-width: 768px) 320px, 450px"
          className="object-contain object-top-left"
          aria-hidden="true"
        />
      </div>

      <div className="container-shell relative z-10">
        {/* Godrej-inspired editorial header layout: wide left offset / negative space */}
        <Reveal direction="up">
          <div className="grid grid-cols-12 pb-12 lg:pb-16">
            <div className="col-span-12 lg:col-span-9 lg:col-start-4 xl:col-span-8 xl:col-start-4">
              {/* Main Heading spanning full width */}
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
                The MDFI Group,
                <br />
                different strengths
              </h2>

              {/* 2-Column Description below the heading */}
              <div className="mt-8 grid gap-8 sm:grid-cols-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  The MDFI ecosystem brings together organisations with distinct areas of focus,
                  united by a shared commitment to community trust and empowerment.
                </p>
                <p>
                  Each company has its own identity, expertise and role in creating opportunities across
                  agriculture, finance and gold loan services throughout Kannur and regional networks.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, idx) => (
            <Reveal key={company.number} delayMs={idx * 120} direction="up">
              <div className="group flex h-full flex-col justify-between">
                <div>
                  {/* Full-width white background logo container */}
                  <div className="flex h-42 w-full items-center justify-center rounded-xl bg-gray-100 p-6  transition duration-300 group-hover:shadow-md group-hover:border-neutral-300">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={220}
                      height={80}
                      className="max-h-32 w-auto object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Company Info */}
                  <div className="mt-6">
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-neutral-900 group-hover:text-red transition">
                      {company.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {company.legal}
                    </p>
                    <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                      {company.desc}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-8">
                  <Button href={company.href} variant="primary-red" size="sm" className="gap-2">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
