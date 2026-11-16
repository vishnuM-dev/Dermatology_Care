import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Emily R. (Demo Patient)',
    concern: 'Persistent Adult Acne & Texture',
    treatment: 'Acne & Acne Scars Protocol',
    rating: 5,
    comment: 'The personalized approach completely changed my skin journey. Within three sessions, my inflammatory breakouts were under control, and the scarring had softened noticeably. The clinic atmosphere is calming and professional.',
    verified: true,
    date: 'Demo Review',
    location: 'Metro Clinic'
  },
  {
    id: 'test-2',
    name: 'Marcus K. (Demo Patient)',
    concern: 'Melasma & Sun Damage',
    treatment: 'Pigmentation & Melasma Protocol',
    rating: 5,
    comment: 'I had struggled with stubborn melasma on both cheeks for years. The laser toning combined with prescribed home serums delivered clear, even-toned skin without any harsh downtime or irritation.',
    verified: true,
    date: 'Demo Review',
    location: 'Westside Clinic'
  },
  {
    id: 'test-3',
    name: 'Sophia L. (Demo Patient)',
    concern: 'Diffuse Hair Shedding',
    treatment: 'Hair & Scalp PRP Therapy',
    rating: 5,
    comment: 'Dr. Marcus’s trichology evaluation uncovered the root reason for my seasonal shedding. The scalp rejuvenation sessions helped restore thickness and revived my confidence completely.',
    verified: true,
    date: 'Demo Review',
    location: 'Downtown Clinic'
  }
];
