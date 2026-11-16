import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { FAQS } from '../../data/faqs';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
export const FAQSection = () => {
    return (<section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="COMMON QUESTIONS" title="Frequently Asked Questions." description="Everything you need to know about your consultation, treatments, and clinical standards." align="center" className="mb-14"/>

        <Accordion items={FAQS} defaultOpenIndex={0}/>

        {/* Bottom Help Box in Kombu Green */}
        <div className="mt-12 bg-derma-kombu-subtle border border-derma-border rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-derma-kombu text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6"/>
            </div>
            <div>
              <h4 className="text-base font-bold text-derma-kombu">
                Have a specific dermatological question?
              </h4>
              <p className="text-xs sm:text-sm text-derma-text-muted mt-0.5">
                Our clinical support team is here to guide your pre-consultation inquiries.
              </p>
            </div>
          </div>

          <Link to="/contact" className="shrink-0 px-6 py-2.5 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark transition-all duration-200 shadow-sm hover:shadow-glow-kombu">
            Contact Clinic
          </Link>
        </div>
      </div>
    </section>);
};
