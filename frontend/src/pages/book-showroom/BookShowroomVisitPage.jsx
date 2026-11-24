import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const BookShowroomVisitPage = () => {
  const { addBooking } = useApp();

  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dates = [
    { dayName: 'Mon', dayNum: 14, available: true },
    { dayName: 'Tue', dayNum: 15, available: true },
    { dayName: 'Wed', dayNum: 16, available: true },
    { dayName: 'Thu', dayNum: 17, available: true },
    { dayName: 'Fri', dayNum: 18, available: true },
    { dayName: 'Sat', dayNum: 19, available: false }
  ];

  const timeSlots = [
    { time: '09:00 AM', available: true },
    { time: '09:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: false },
    { time: '01:00 PM', available: true },
    { time: '01:30 PM', available: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    addBooking({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message,
      date: `Oct ${selectedDay}, 2024`,
      time: selectedTime
    });

    setIsSubmitted(true);
  };

  return (
    <div className="pt-8 pb-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-12 text-left">
        <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
          Private Consultations
        </span>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">
          Book a Showroom Visit
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
          Experience our full textile collection in person. Our specialists will guide you through bespoke weaves, yarn options, and contract specifications.
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-surface-container-lowest p-10 md:p-16 rounded-2xl border border-outline-variant/40 text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-secondary-container text-primary rounded-full flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <h2 className="font-display-lg text-headline-md text-primary">Appointment Requested!</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Thank you, <span className="font-semibold text-primary">{formData.name}</span>. We have scheduled your consultation for <strong className="text-primary">Tue, Oct {selectedDay} at {selectedTime}</strong>. A confirmation email has been dispatched to {formData.email}.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', company: '', email: '', message: '' });
            }}
            className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-xs uppercase tracking-wider"
          >
            Book Another Consultation
          </button>
        </div>
      ) : (
        /* Asymmetric Grid Layout */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Calendar & Time */}
          <div className="md:col-span-7 space-y-12">
            {/* Section 1: Date Selection */}
            <section>
              <div className="flex justify-between items-end mb-6 border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline-md text-headline-md text-primary">October 2024</h2>
                <div className="flex gap-2">
                  <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x w-full">
                {dates.map((d) => {
                  const isSelected = selectedDay === d.dayNum;
                  if (!d.available) {
                    return (
                      <div
                        key={d.dayNum}
                        className="flex flex-col items-center justify-center w-[72px] h-[96px] border border-outline-variant/50 rounded-xl shrink-0 snap-start bg-surface-container-lowest opacity-40 cursor-not-allowed"
                      >
                        <span className="font-label-md text-xs uppercase mb-1">{d.dayName}</span>
                        <span className="font-headline-md text-xl">{d.dayNum}</span>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={d.dayNum}
                      type="button"
                      onClick={() => setSelectedDay(d.dayNum)}
                      className={`flex flex-col items-center justify-center w-[72px] h-[96px] rounded-xl shrink-0 snap-start transition-all ${
                        isSelected
                          ? 'border-2 border-primary bg-primary text-on-primary shadow-sm'
                          : 'border border-outline-variant hover:border-primary bg-surface'
                      }`}
                    >
                      <span className={`font-label-md text-xs uppercase mb-1 ${isSelected ? 'opacity-90' : 'text-on-surface-variant'}`}>
                        {d.dayName}
                      </span>
                      <span className="font-headline-md text-xl">
                        {d.dayNum}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Section 2: Time Slots */}
            <section>
              <h3 className="font-body-lg text-body-lg text-primary mb-6">
                Available times for <span className="font-bold">Oct {selectedDay}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot.time;
                  if (!slot.available) {
                    return (
                      <button
                        key={slot.time}
                        disabled
                        className="border border-outline-variant py-3 px-2 text-center rounded-lg font-body-md text-body-md text-on-surface opacity-35 cursor-not-allowed bg-surface-container-lowest"
                      >
                        {slot.time}
                      </button>
                    );
                  }
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`py-3 px-2 text-center rounded-lg font-body-md text-body-md transition-all ${
                        isSelected
                          ? 'border-2 border-primary text-primary bg-primary/10 font-semibold shadow-sm'
                          : 'border border-outline-variant text-on-surface hover:border-primary hover:text-primary bg-surface'
                      }`}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Atmospheric Image */}
            <div className="hidden md:block w-full h-48 mt-12 overflow-hidden rounded-xl bg-surface-container-low relative">
              <img
                className="object-cover w-full h-full opacity-80 mix-blend-multiply"
                alt="Linen Texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtYzFbA5Ct90swVjlxN8JTVq_dN3bZMbGYhmnErpaHnrmMag9nJ1jNXX70W_yRGwlUxdjjWUlPi_i9xjIIOEFTcF471XDq7LZkxAWMHsewQN2jHZj1Hikx2YpxUuTLewMY1USiSNCuUQo0_QKJ6sh7KUYvSeWd1uYP82lXks0uU-3JPLQbMMxALo63czjmZs9l6ksXckAZO7LoondXVYac-YlUhQRM6u4byPoJEXEoNZYADfMedPG3"
              />
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-5 md:pl-8 lg:pl-12 mt-12 md:mt-0 sticky top-24 md:top-32">
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-primary/20"></div>
              <h2 className="font-headline-md text-headline-md text-primary mb-8">
                Your Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase tracking-widest mb-1 transition-colors group-focus-within:text-primary">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-transparent border-0 border-b border-outline-variant pb-2 pt-2 px-0 focus:outline-none focus:border-primary font-body-md text-body-md text-primary placeholder-on-surface-variant/40"
                  />
                </div>

                <div className="relative group">
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase tracking-widest mb-1 transition-colors group-focus-within:text-primary">
                    Company / Studio
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Hill House Interiors"
                    className="w-full bg-transparent border-0 border-b border-outline-variant pb-2 pt-2 px-0 focus:outline-none focus:border-primary font-body-md text-body-md text-primary placeholder-on-surface-variant/40"
                  />
                </div>

                <div className="relative group">
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase tracking-widest mb-1 transition-colors group-focus-within:text-primary">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="work@designstudio.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant pb-2 pt-2 px-0 focus:outline-none focus:border-primary font-body-md text-body-md text-primary placeholder-on-surface-variant/40"
                  />
                </div>

                <div className="relative group">
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase tracking-widest mb-1 transition-colors group-focus-within:text-primary">
                    Message / Fabric Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specific fabrics, yardage estimations, or project briefs..."
                    className="w-full bg-transparent border-0 border-b border-outline-variant pb-2 pt-2 px-0 focus:outline-none focus:border-primary font-body-md text-body-md text-primary placeholder-on-surface-variant/40 resize-none"
                  />
                </div>

                {/* Summary Note */}
                <div className="bg-surface-container rounded-lg p-4 mt-6 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary/70 text-lg mt-0.5">info</span>
                  <p className="font-caption text-caption text-on-surface-variant">
                    You are booking a consultation on <strong className="text-primary font-medium">Tue, Oct {selectedDay} at {selectedTime}</strong>.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 px-6 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors duration-300 mt-6 flex justify-center items-center gap-2"
                >
                  Confirm Appointment
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
