import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WorkWithUsSection() {
  return (
    <section id="connect" className="w-full bg-[#111111] text-white">
      {/* Top Content Area - Godrej Inspired Layout */}
      <div className="container-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: Heading, intro & pill action */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal direction="up">
              <h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                The future
                <br />
                belongs to the bold
              </h2>
            </Reveal>

            <Reveal delayMs={100} direction="up">
              <p className="text-base text-neutral-300 max-w-xl leading-relaxed">
                Whether you represent a community collective, institutional partner, or want to
                support our grassroots programmes across Kannur, we welcome your collaboration.
                Change grows best when it grows together.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Mission statement and contact details */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delayMs={150} direction="up">
              <p className="text-base text-neutral-300 leading-relaxed">
                We believe in betting on potential. Wherever you are in your journey, you&apos;ll find
                opportunities to take on bigger challenges and create meaningful impact across our
                community initiatives.
              </p>
            </Reveal>

            {/* Contact Pills / Chips */}
            <Reveal delayMs={200} direction="up">
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:9292323916"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <Phone size={13} className="text-white" />
                  <span>Call: 92923 23916</span>
                </a>

                <a
                  href="tel:04972727916"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <span>0497-2727916</span>
                </a>

                <a
                  href="tel:18002334335"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <span>Toll-Free: 1800-233-4335</span>
                </a>

                <a
                  href="mailto:info@mdfigroup.in"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <Mail size={13} className="text-white" />
                  <span>info@mdfigroup.in</span>
                </a>
              </div>
            </Reveal>

            {/* Registered Office Info */}
            <Reveal delayMs={250} direction="up">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  <MapPin size={14} className="text-white" />
                  <span>Registered Office</span>
                </div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Vijaya Square, 2nd Floor, Thezhukkilpeedika, Edapally-Panvel Highway, Chova PO, Dist. Kannur-670006, Kerala.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vijaya+Square+Thezhukkilpeedika+Kannur+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-semibold text-white hover:underline"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Panoramic Bottom Image Banner matching uploaded Godrej reference */}
      <div className="relative w-full h-[55vh] min-h-[380px] max-h-[640px] overflow-hidden">
        <Image
          src="/banner/b2.png"
          alt="Professional walking through modern office concourse"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" /> */}
      </div>
    </section>
  );
}
