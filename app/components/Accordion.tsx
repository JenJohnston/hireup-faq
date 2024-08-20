"use client";

import React, { useState } from 'react';
import { HiOutlineChevronDown, HiChevronUp } from 'react-icons/hi';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  isExpanded: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, isExpanded }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border w-full rounded-lg overflow-hidden">
          <button
            onClick={() => handleToggle(index)}
            className="w-full px-4 py-2 text-left bg-gradient-to-r from-teal-700 via-violet-400 to-violet-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 flex items-center justify-between"
          >
            <h2 className="text-lg font-semibold">{item.question}</h2>
            <span>
              {openIndex === index ? (
                <HiChevronUp className="text-slate-50" />
              ) : (
                <HiOutlineChevronDown className="text-slate-50" />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-400 ease-out overflow-hidden ${
              (openIndex === index || isExpanded) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 py-2 bg-gradient-to-r from-teal-700 via-violet-400 to-violet-300">
              <p className="text-left">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;