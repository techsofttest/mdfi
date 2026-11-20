"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="container-shell py-20 lg:py-28 border-t border-line">
      {/* Editorial Header with generous left negative space */}
      <div className="grid grid-cols-12 pb-12 lg:pb-16">
        <div className="col-span-12 lg:col-span-9 lg:col-start-4 xl:col-span-8 xl:col-start-4">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.18]">
            Frequently Asked
            <br />
            questions
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq, index) => {
          const isActive = openFaq === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-md border border-line shadow-sm transition"
            >
              <button
                onClick={() => setOpenFaq(isActive ? -1 : index)}
                className={`flex w-full items-center justify-between p-5 text-left text-xs font-bold tracking-wider uppercase transition ${
                  isActive
                    ? "bg-red text-white"
                    : "bg-surface text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <span>{faq.question}</span>
                {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {isActive && (
                <div className="bg-white p-6 text-sm text-neutral-700 leading-relaxed border-t border-line">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
