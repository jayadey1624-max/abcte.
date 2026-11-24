import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ContactPage = () => {
  const { showToast } = useApp();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!subject || !message) return;
    setSubmitted(true);
    showToast('Your message has been sent to our concierge.');
  };

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 min-h-screen">
      {/* Header Section */}
      <section className="mb-16 md:mb-20 text-center md:text-left">
        <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
          Concierge Services
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 mt-1">
          Get in Touch
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          We are dedicated to providing the finest textiles and impeccable service. Connect with our team for inquiries, bespoke orders, or to schedule a showroom visit.
        </p>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Contact Info & Form Column */}
        <div className="md:col-span-7 flex flex-col gap-10">
          {/* Contact Info Row */}
          <div className="flex flex-col sm:flex-row gap-8 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
            <div className="flex-1">
              <h2 className="font-label-md text-xs text-primary uppercase tracking-widest mb-2">Direct Phone</h2>
              <a
                href="tel:+15551234567"
                className="font-body-lg text-body-lg text-on-surface hover:text-tertiary-container transition-colors inline-flex items-center gap-2 group"
              >
                <span className="material-symbols-outlined text-outline group-hover:text-tertiary-container transition-colors">
                  call
                </span>
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex-1">
              <h2 className="font-label-md text-xs text-primary uppercase tracking-widest mb-2">Concierge Email</h2>
              <a
                href="mailto:concierge@abctextiles.com"
                className="font-body-lg text-body-lg text-on-surface hover:text-tertiary-container transition-colors inline-flex items-center gap-2 group"
              >
                <span className="material-symbols-outlined text-outline group-hover:text-tertiary-container transition-colors">
                  mail
                </span>
                concierge@abctextiles.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">mark_email_read</span>
                <h3 className="font-headline-md text-xl text-primary">Message Received</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Our textile concierge will reply within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubject('');
                    setMessage('');
                  }}
                  className="bg-primary text-on-primary px-6 py-2 rounded text-xs uppercase tracking-wider font-label-md mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="flex flex-col gap-6">
                <div>
                  <label className="block font-label-md text-caption text-on-surface-variant uppercase tracking-wider mb-2">
                    Subject / Project Reference
                  </label>
                  <input
                    required
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we assist you?"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:outline-none px-0 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-outline/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-caption text-on-surface-variant uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please provide details regarding your inquiry..."
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:outline-none px-0 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-outline/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider px-8 py-3.5 rounded hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors inline-flex items-center gap-2 group mt-2"
                >
                  Send Message
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map & Location Column */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="relative w-full aspect-square md:aspect-auto md:h-[420px] bg-surface-container-highest rounded-xl overflow-hidden border border-outline-variant/30 group">
            <img
              alt="NYC Design District Map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQoDd5lyv_Bfg555yndO7FKN6aFW2iHpXMWaQKGrzCio8rSpEn7SO1-DYhj3xKUVyUne-oz_9sAGUPgU2y4Z34vSFlvaZdCAnWKfSUglSvRLIV3b4AAIrZ3DJMv1ZxLpeBcU0YCmBq2Ph4r7nbFM92hhkZ35Hio7L-QN2vo4Jt4r3LQSctCUQfrdRjCJJ2Hix7zUNzmZJoxkGmNVTa_3X6F1BJ_90IwWjp7jdlg_CMN9_UF9sXEfq6"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Details */}
            <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-5 rounded-lg border border-outline-variant/30 shadow-sm">
              <h3 className="font-label-md text-xs text-primary uppercase tracking-widest mb-1 font-bold">
                Main Showroom & Archive
              </h3>
              <p className="font-body-md text-caption text-on-surface-variant leading-relaxed">
                125 Textile Avenue, 4th Floor<br />
                Design District, New York, NY 10001
              </p>
              <p className="font-caption text-caption text-primary/70 mt-2">
                Open Monday – Friday, 9:00 AM – 6:00 PM (By appointment)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
