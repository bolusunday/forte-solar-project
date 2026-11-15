"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I qualify for the 30% Federal Tax Credit?",
    answer:
      "Any homeowner who purchases a solar system (either with cash or a solar loan) qualifies for the federal residential clean energy credit, which equals 30% of the total installation cost.",
  },
  {
    question: "What happens to my solar panels during a power outage?",
    answer:
      "Standard grid-tied solar systems automatically shut off during a blackout for utility worker safety. However, if you opt for our battery backup integration, your home stays fully powered seamlessly.",
  },
  {
    question: "Will solar panels damage my roof?",
    answer:
      "No. Professional installation uses specialized flashing and waterproof mounts engineered to protect your roof integrity. In fact, panels often shield your roof deck from UV degradation and weathering.",
  },
  {
    question: "What maintenance do solar panels require?",
    answer:
      "Very little! Solar panels have no moving parts. Occasional rainfall keeps them clean in most climates, and our systems include 25-year performance monitoring so you can track production live.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold mt-4 mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base px-2">
            Everything you need to know about switching to clean, reliable solar
            energy.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-6 text-left flex justify-between items-center gap-3 sm:gap-4 cursor-pointer font-bold text-base sm:text-lg hover:text-emerald-400 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-xs sm:text-sm transition-transform duration-300 ${openIndex === index ? "rotate-180 bg-emerald-500/20 text-emerald-400" : "text-slate-400"}`}
                >
                  ↓
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-5 pt-2 sm:px-6 sm:pb-6 sm:pt-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}