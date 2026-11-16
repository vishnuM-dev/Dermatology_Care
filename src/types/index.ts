export type TreatmentCategory = 'skin' | 'hair' | 'aesthetic' | 'laser';

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: TreatmentCategory;
  categoryLabel: string;
  iconName: 'acne' | 'pigmentation' | 'hair' | 'laser' | 'sparkles' | 'shield';
  image: string;
  concerns: string[];
  procedureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  duration: string;
  recoveryTime: string;
  recommendedSessions: string;
  aftercareTips: string[];
  faqs: TreatmentFAQ[];
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  role: string;
  qualification: string;
  image: string;
  bio: string;
  quote?: string;
  specializations: string[];
  experienceYears: number;
  consultationDays: string[];
  consultationHours: string;
  languages: string[];
  education: string[];
  certifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  concern: string;
  treatment: string;
  rating: number;
  comment: string;
  verified: boolean;
  date: string;
  location?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Appointments' | 'Preparation';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'skin' | 'hair' | 'laser' | 'clinic';
  categoryLabel: string;
  image: string;
  description: string;
  tag: string;
}

export interface BookingFormData {
  treatmentId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  patientName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  visitType: 'first_visit' | 'follow_up' | 'consultation';
  concerns: string;
  bookingRef?: string;
}
