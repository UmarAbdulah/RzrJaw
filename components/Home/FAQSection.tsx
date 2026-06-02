"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { FAQ } from "@/types/faq";

const FAQItem = ({ faq }: { faq: FAQ }) => {
  const [open, setOpen] = useState(faq.id === 1);

  return (
    <div
      className={`border rounded-sm transition-all duration-300 ${
        open ? "border-[#2dd4c8]" : "border-[#2f2f2f] hover:border-[#2dd4c8]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span
          className={`font-bold text-sm transition-colors duration-300 ${
            open ? "text-[#2dd4c8]" : "text-white group-hover:text-[#2dd4c8]"
          }`}
        >
          {faq.question}
        </span>
        <span className="text-[#2dd4c8] text-xl shrink-0 ml-4">
          {open ? "×" : "+"}
        </span>
      </button>

      {/* Smooth open/close */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed px-6 pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="w-full bg-[#1a1a1a] py-20 px-6">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-[#2dd4c8] text-xs tracking-[0.3em] uppercase mb-3">
          Information
        </p>
        <h2 className="text-white font-bold uppercase tracking-widest text-lg mb-3">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-[3px] bg-[#2dd4c8]" />
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-3 max-w-2xl mx-auto">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
