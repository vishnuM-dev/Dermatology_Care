import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { TREATMENTS } from '../data/treatments';
import { DOCTORS } from '../data/doctors';
import confetti from 'canvas-confetti';
import { CheckCircle2, ChevronRight, ChevronLeft, Info } from 'lucide-react';
export const Appointment = () => {
    const [searchParams] = useSearchParams();
    const preSelectedTreatment = searchParams.get('treatment') || TREATMENTS[0].id;
    const preSelectedDoctor = searchParams.get('doctor') || DOCTORS[0].id;
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        treatmentId: preSelectedTreatment,
        doctorId: preSelectedDoctor,
        date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // default 2 days ahead
        timeSlot: '10:30 AM',
        patientName: '',
        email: '',
        phone: '',
        age: '28',
        gender: 'Female',
        visitType: 'first_visit',
        concerns: '',
        bookingRef: '',
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (searchParams.get('treatment')) {
            setFormData((prev) => ({ ...prev, treatmentId: searchParams.get('treatment') }));
        }
        if (searchParams.get('doctor')) {
            setFormData((prev) => ({ ...prev, doctorId: searchParams.get('doctor') }));
        }
    }, [searchParams]);
    const timeSlots = [
        '09:00 AM',
        '09:45 AM',
        '10:30 AM',
        '11:15 AM',
        '01:30 PM',
        '02:15 PM',
        '03:00 PM',
        '03:45 PM',
        '04:30 PM',
    ];
    const validateStep4 = () => {
        const err = {};
        if (!formData.patientName.trim()) {
            err.patientName = 'Please enter your full name.';
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            err.email = 'Please provide a valid email address.';
        }
        if (!formData.phone.trim() || formData.phone.length < 7) {
            err.phone = 'Please provide a valid contact number.';
        }
        setErrors(err);
        return Object.keys(err).length === 0;
    };
    const handleNext = () => {
        if (currentStep === 4) {
            if (!validateStep4())
                return;
            // Generate booking reference
            const randomCode = 'DC-' + Math.floor(100000 + Math.random() * 900000);
            setFormData((prev) => ({ ...prev, bookingRef: randomCode }));
            setCurrentStep(5);
            // Trigger Confetti
            try {
                confetti({
                    particleCount: 80,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#354024', '#FFD400', '#7F27A8', '#53B0C9', '#F76400', '#C1008F', '#E885CF'],
                });
            }
            catch (e) {
                // Safe fallback
            }
        }
        else {
            setCurrentStep((prev) => prev + 1);
            window.scrollTo({ top: 120, behavior: 'smooth' });
        }
    };
    const handleBack = () => {
        setCurrentStep((prev) => Math.max(1, prev - 1));
        window.scrollTo({ top: 120, behavior: 'smooth' });
    };
    const selectedTreatmentObj = TREATMENTS.find((t) => t.id === formData.treatmentId) || TREATMENTS[0];
    const selectedDoctorObj = DOCTORS.find((d) => d.id === formData.doctorId) || DOCTORS[0];
    return (<div className="bg-white min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-derma-kombu-subtle via-derma-kombu-light/30 to-white py-12 md:py-16 border-b border-derma-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-derma-kombu uppercase mb-2 inline-block">
            DEMO CLINIC BOOKING
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-derma-purple">
            Schedule Your <span className="text-derma-orange">Dermatology</span> Consultation
          </h1>
          <p className="mt-3 text-sm sm:text-base text-derma-text-muted max-w-xl mx-auto">
            Choose your service, preferred doctor, and timing below.
          </p>

          {/* Stepper Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 max-w-xl mx-auto">
            {[1, 2, 3, 4, 5].map((step) => {
            const labels = ['Treatment', 'Doctor', 'Date & Time', 'Details', 'Done'];
            const isActive = currentStep === step;
            const isPast = currentStep > step;
            return (<div key={step} className="flex items-center gap-1 sm:gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${isActive
                    ? 'bg-derma-purple text-white ring-4 ring-derma-yellow/50 scale-105 shadow-glow-purple'
                    : isPast
                        ? 'bg-derma-kombu text-white'
                        : 'bg-derma-kombu-subtle border border-derma-border text-derma-text-muted'}`}>
                    {isPast ? <CheckCircle2 className="w-4 h-4 text-white"/> : step}
                  </div>
                  <span className={`hidden md:inline text-xs font-semibold ${isActive ? 'text-derma-purple font-bold' : 'text-derma-text-muted'}`}>
                    {labels[step - 1]}
                  </span>
                  {step < 5 && (<span className="w-4 sm:w-8 h-0.5 bg-derma-border mx-0.5"/>)}
                </div>);
        })}
          </div>
        </div>
      </section>

      {/* Booking Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        {/* Step 1: Select Treatment */}
        {currentStep === 1 && (<div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-derma-border pb-4">
              <h2 className="text-xl font-bold text-derma-purple">
                Step 1: Select Desired Treatment
              </h2>
              <p className="text-xs text-derma-text-muted mt-1">
                Choose the clinical service or concern you would like evaluated.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TREATMENTS.map((treatment) => {
                const isSelected = formData.treatmentId === treatment.id;
                return (<div key={treatment.id} onClick={() => setFormData({ ...formData, treatmentId: treatment.id })} className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${isSelected
                        ? 'border-derma-kombu bg-derma-kombu-subtle shadow-md'
                        : 'border-derma-border bg-white hover:border-derma-kombu/40'}`}>
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-derma-kombu-subtle border border-derma-border">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-derma-purple truncate">
                          {treatment.title}
                        </h3>
                        <span className="text-[10px] font-semibold text-derma-kombu uppercase">
                          {treatment.duration}
                        </span>
                      </div>
                      <p className="text-xs text-derma-text-muted mt-1 line-clamp-2">
                        {treatment.shortDescription}
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-derma-kombu-light text-derma-kombu border border-derma-border">
                        {treatment.categoryLabel}
                      </span>
                    </div>
                  </div>);
            })}
            </div>
          </div>)}

        {/* Step 2: Select Doctor */}
        {currentStep === 2 && (<div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-derma-border pb-4">
              <h2 className="text-xl font-bold text-derma-purple">
                Step 2: Choose Your Dermatologist
              </h2>
              <p className="text-xs text-derma-text-muted mt-1">
                Select from our board-certified clinical dermatology team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {DOCTORS.map((doc) => {
                const isSelected = formData.doctorId === doc.id;
                return (<div key={doc.id} onClick={() => setFormData({ ...formData, doctorId: doc.id })} className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col items-center text-center ${isSelected
                        ? 'border-derma-kombu bg-derma-kombu-subtle shadow-md'
                        : 'border-derma-border bg-white hover:border-derma-kombu/40'}`}>
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-derma-border">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-derma-purple">{doc.name}</h3>
                    <p className="text-xs text-derma-kombu font-semibold mt-0.5">{doc.role}</p>
                    <p className="text-[11px] text-derma-text-muted mt-2 line-clamp-2">
                      {doc.qualification}
                    </p>
                    <span className="mt-3 text-[10px] font-semibold px-2.5 py-1 bg-derma-kombu-light border border-derma-border rounded-md text-derma-kombu">
                      {doc.consultationHours}
                    </span>
                  </div>);
            })}
            </div>
          </div>)}

        {/* Step 3: Date & Time */}
        {currentStep === 3 && (<div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-derma-border pb-4">
              <h2 className="text-xl font-bold text-derma-purple">
                Step 3: Select Date &amp; Preferred Time Slot
              </h2>
              <p className="text-xs text-derma-text-muted mt-1">
                Available slots with {selectedDoctorObj.name} for {selectedTreatmentObj.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Date Input */}
              <div className="md:col-span-5 space-y-3">
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider">
                  Preferred Date:
                </label>
                <input type="date" value={formData.date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full p-3.5 bg-derma-kombu-subtle border border-derma-border rounded-2xl text-sm font-semibold text-derma-kombu focus:outline-none focus:ring-2 focus:ring-derma-kombu"/>
                <div className="p-3 bg-derma-kombu-subtle border border-derma-border rounded-xl text-xs text-derma-text space-y-1">
                  <p><strong>Doctor Days:</strong> {selectedDoctorObj.consultationDays.join(', ')}</p>
                  <p><strong>Clinic Hours:</strong> {selectedDoctorObj.consultationHours}</p>
                </div>
              </div>

              {/* Time Slots */}
              <div className="md:col-span-7 space-y-3">
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider">
                  Available Consultation Slots:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => {
                const isSelected = formData.timeSlot === slot;
                return (<button key={slot} type="button" onClick={() => setFormData({ ...formData, timeSlot: slot })} className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all ${isSelected
                        ? 'bg-derma-kombu text-white shadow-sm ring-2 ring-derma-yellow'
                        : 'bg-white border border-derma-border text-derma-kombu hover:bg-derma-kombu-light/50'}`}>
                        {slot}
                      </button>);
            })}
                </div>
              </div>
            </div>
          </div>)}

        {/* Step 4: Patient Details */}
        {currentStep === 4 && (<div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-derma-border pb-4">
              <h2 className="text-xl font-bold text-derma-purple">
                Step 4: Enter Patient Details
              </h2>
              <p className="text-xs text-derma-text-muted mt-1">
                Please provide your contact information to prepare your consultation file.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input type="text" placeholder="e.g. Eleanor Vance" value={formData.patientName} onChange={(e) => setFormData({ ...formData, patientName: e.target.value })} className={`w-full p-3 bg-derma-soft border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 ${errors.patientName ? 'border-red-400 focus:ring-red-400' : 'border-derma-border focus:ring-derma-purple'}`}/>
                {errors.patientName && <p className="text-xs text-red-500 mt-1">{errors.patientName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input type="email" placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full p-3 bg-derma-soft border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-derma-border focus:ring-derma-purple'}`}/>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full p-3 bg-derma-soft border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-derma-border focus:ring-derma-purple'}`}/>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Visit Type */}
              <div>
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                  Visit Category
                </label>
                <select value={formData.visitType} onChange={(e) => setFormData({ ...formData, visitType: e.target.value })} className="w-full p-3 bg-derma-soft border border-derma-border rounded-xl text-sm text-derma-purple focus:outline-none focus:ring-2 focus:ring-derma-purple">
                  <option value="first_visit">New Patient Initial Consultation</option>
                  <option value="follow_up">Existing Patient Follow-up</option>
                  <option value="consultation">Second Opinion Review</option>
                </select>
              </div>

              {/* Primary Concerns Notes */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-derma-purple uppercase tracking-wider mb-1">
                  Brief Description of Skin or Hair Concern (Optional)
                </label>
                <textarea rows={3} placeholder="Tell us about active breakouts, duration of hair shedding, previous treatments used, or allergies..." value={formData.concerns} onChange={(e) => setFormData({ ...formData, concerns: e.target.value })} className="w-full p-3 bg-derma-soft border border-derma-border rounded-xl text-sm text-derma-text focus:outline-none focus:ring-2 focus:ring-derma-purple"/>
              </div>
            </div>
          </div>)}

        {/* Step 5: Confirmation (Demo Success) */}
        {currentStep === 5 && (<div className="bg-derma-kombu-subtle rounded-3xl p-8 sm:p-12 border-2 border-derma-border text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-derma-kombu text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9"/>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-derma-kombu bg-derma-kombu-light px-3 py-1 rounded-full">
                Demo Booking Recorded
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-derma-purple mt-3">
                Consultation Request Received!
              </h2>
              <p className="text-sm text-derma-text-muted mt-1 max-w-md mx-auto">
                Thank you, <strong className="text-derma-kombu">{formData.patientName || 'Patient'}</strong>. We have generated a demonstration reservation for your doctor review.
              </p>
            </div>

            {/* Confirmation Summary Card */}
            <div className="bg-white rounded-2xl p-6 border border-derma-border max-w-lg mx-auto text-left space-y-3 shadow-soft">
              <div className="flex items-center justify-between pb-3 border-b border-derma-border">
                <span className="text-xs text-derma-text-muted font-semibold uppercase">Booking Ref:</span>
                <span className="text-sm font-black text-derma-purple-deep bg-derma-yellow px-3 py-1 rounded-md shadow-xs">
                  {formData.bookingRef}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-derma-text-muted block">Treatment:</span>
                  <span className="font-bold text-derma-kombu">{selectedTreatmentObj.title}</span>
                </div>
                <div>
                  <span className="text-derma-text-muted block">Specialist:</span>
                  <span className="font-bold text-derma-kombu">{selectedDoctorObj.name}</span>
                </div>
                <div>
                  <span className="text-derma-text-muted block">Date:</span>
                  <span className="font-bold text-derma-kombu">{formData.date}</span>
                </div>
                <div>
                  <span className="text-derma-text-muted block">Time Slot:</span>
                  <span className="font-bold text-derma-kombu">{formData.timeSlot}</span>
                </div>
              </div>
            </div>

            {/* Prominent Demo Notice */}
            <div className="max-w-lg mx-auto p-4 bg-white border border-derma-kombu/30 rounded-2xl flex items-center gap-3 text-xs text-derma-kombu text-left">
              <Info className="w-5 h-5 text-derma-kombu shrink-0"/>
              <span>
                <strong>Demonstration Notice:</strong> This is a frontend demo interface for doctor presentation. No data has been submitted to external servers.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button onClick={() => {
                setCurrentStep(1);
                setFormData({
                    ...formData,
                    patientName: '',
                    email: '',
                    phone: '',
                    concerns: '',
                    bookingRef: '',
                });
            }} className="px-6 py-2.5 bg-derma-kombu text-white text-sm font-semibold rounded-full hover:bg-derma-kombu-dark transition-all shadow-sm">
                Book Another Appointment
              </button>
              <Link to="/" className="px-6 py-2.5 bg-white border border-derma-border text-derma-kombu text-sm font-semibold rounded-full hover:bg-derma-kombu-light/50 transition-all">
                Back to Home
              </Link>
            </div>
          </div>)}

        {/* Navigation Buttons for Steps 1-4 */}
        {currentStep < 5 && (<div className="mt-8 pt-6 border-t border-derma-border flex items-center justify-between">
            {currentStep > 1 ? (<button type="button" onClick={handleBack} className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-derma-kombu hover:text-derma-kombu-dark bg-derma-kombu-subtle border border-derma-border rounded-full transition-all">
                <ChevronLeft className="w-4 h-4"/>
                <span>Back</span>
              </button>) : <div />}

            <button type="button" onClick={handleNext} className="inline-flex items-center gap-2 px-7 py-3 bg-derma-yellow text-derma-purple-deep text-xs sm:text-sm font-bold rounded-full hover:bg-derma-yellow-hover shadow-glow-yellow transition-all active:scale-98">
              <span>{currentStep === 4 ? 'Confirm Demo Appointment' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4 text-derma-purple-deep"/>
            </button>
          </div>)}

      </div>
    </div>);
};
