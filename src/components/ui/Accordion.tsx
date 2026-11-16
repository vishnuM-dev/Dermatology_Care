import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface AccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
              ? 'bg-derma-kombu-subtle border-derma-kombu/40 shadow-soft'
              : 'bg-white hover:bg-derma-kombu-subtle border-derma-border shadow-sm'
              }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-derma-kombu hover:text-derma-purple transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen
                  ? 'bg-derma-kombu text-white rotate-180'
                  : 'bg-derma-kombu-light text-derma-kombu'
                  }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out px-6 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                } overflow-hidden`}
            >
              <div className="pt-2 border-t border-derma-border text-sm md:text-base text-derma-text leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
