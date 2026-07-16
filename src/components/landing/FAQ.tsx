"use client";

import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need a finance team to use this?",
      answer: "No. This tool is built specifically for SME owners who do not have a dedicated CFO or finance team. All recommendations are presented in plain language, explaining the business logic and action items.",
    },
    {
      question: "What data do I need to connect?",
      answer: "We support simple spreadsheet imports of your transaction logs, order records, and supply cost lines. If you use basic accounting softwares, exports from them can be uploaded directly.",
    },
    {
      question: "How is this different from a normal dashboard?",
      answer: "A standard dashboard displays charts and expects you to extract insights. Our Gemma-powered agent reads the raw logs, correlates trends (e.g. rising input cost + payment delay), and lists ranked action items with their 'why'.",
    },
    {
      question: "Is my business data secure?",
      answer: "Yes. Your uploaded numbers are processed locally on sandbox models and used strictly to execute context prompts. We do not sell your transactional data or share it with external vendors.",
    },
    {
      question: "What does it cost?",
      answer: "The platform is completely free to use and test during the Google Build with Gemma hackathon demo phase.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Got Questions?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-slate-800 text-sm sm:text-base hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    {isOpen ? <LuMinus size={14} /> : <LuPlus size={14} />}
                  </div>
                </button>
                
                {/* Collapsible Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[200px] border-t border-slate-50" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
