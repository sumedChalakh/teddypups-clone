'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    breed: 'maltipoo',
    visitType: 'showroom',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-3xl bg-brand-cream border-2 border-brand-rust/20 shadow-sm text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-dark">
          Thank you, {formData.name || 'there'}!
        </h3>
        <p className="text-sm text-brand-dark/80 font-sans max-w-md mx-auto">
          We have received your visit request for our Downtown Dubai showroom. Our puppy concierge will contact you via WhatsApp shortly to confirm your private playpen time slot.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 rounded-full bg-brand-sand text-brand-dark font-semibold text-xs hover:bg-brand-gold transition"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-brand-cream border border-brand-dark/10 shadow-sm space-y-4">
      <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">
        Book a Showroom Visit or Enquiry
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-dark/80 mb-1">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Mariam Al-Hashemi"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark text-sm focus:outline-hidden focus:border-brand-rust"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark/80 mb-1">
            Mobile Number (WhatsApp) *
          </label>
          <input
            type="tel"
            required
            placeholder="+971 50 123 4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark text-sm focus:outline-hidden focus:border-brand-rust"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-dark/80 mb-1">
            Preferred Breed
          </label>
          <select
            value={formData.breed}
            onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark text-sm focus:outline-hidden focus:border-brand-rust"
          >
            <option value="maltipoo">Teacup Maltipoo</option>
            <option value="pomeranian">Micro Pomeranian</option>
            <option value="poodle">Tiny Toy Poodle</option>
            <option value="cavapoo">Teddy Cavapoo</option>
            <option value="shih-tzu">Imperial Shih Tzu</option>
            <option value="other">Any / Open to recommendations</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark/80 mb-1">
            Appointment Type
          </label>
          <select
            value={formData.visitType}
            onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark text-sm focus:outline-hidden focus:border-brand-rust"
          >
            <option value="showroom">In-Person Dubai Showroom Visit</option>
            <option value="video">Korean Nursery Video Call</option>
            <option value="delivery">Home Delivery Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-dark/80 mb-1">
          Preferred Date & Time
        </label>
        <input
          type="text"
          placeholder="e.g. This Saturday at 3:00 PM"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark text-sm focus:outline-hidden focus:border-brand-rust"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-dark/80 mb-1">
          Special Requests or Questions
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your home, family members, or specific puppy preferences..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark text-sm focus:outline-hidden focus:border-brand-rust"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-rust text-white font-semibold text-sm shadow-sm hover:bg-brand-rustDark transition active:scale-[0.99]"
      >
        <Send className="w-4 h-4" />
        <span>Request Appointment & Information</span>
      </button>
    </form>
  );
}
