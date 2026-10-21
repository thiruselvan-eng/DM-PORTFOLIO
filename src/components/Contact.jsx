import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, ArrowUpRight, HelpCircle, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { contact, contactSection } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    serviceNeeded: contactSection.serviceOptions[0],
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Format message for WhatsApp
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const { name, businessType, serviceNeeded, message } = formData;

    const formattedText = `Hi Thiru! I'm interested in your digital marketing & creative services.
----------------------------------------
*Name:* ${name || 'Not specified'}
*Business / Brand:* ${businessType || 'Not specified'}
*Service Needed:* ${serviceNeeded}
*Details:* ${message || 'Let us discuss my project requirements.'}
----------------------------------------
(Sent via THIRU.MARKETING)`;

    const encoded = encodeURIComponent(formattedText);
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Fallback to default email client
  const handleSendEmail = (e) => {
    e.preventDefault();
    const { name, businessType, serviceNeeded, message } = formData;

    const subject = encodeURIComponent(`Project Inquiry: ${serviceNeeded} — ${name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello Thiruselvan,\n\nI am interested in your services.\n\nName: ${name}\nBusiness / Brand: ${businessType}\nService Needed: ${serviceNeeded}\n\nProject Details:\n${message}\n\nLooking forward to speaking with you.`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-[#0B1020] relative overflow-hidden bg-noise">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-[#A3E635]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11182A] border border-white/10 text-xs font-semibold text-[#A3E635] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            Let's Connect
          </div>

          {/* Exact Heading from Prompt: Let's Create Something That Stands Out. */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {contactSection.heading}
          </h2>

          <p className="text-[#A7B0C4] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {contactSection.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#11182A] border border-white/10 space-y-6 shadow-2xl">
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-[#A7B0C4] leading-relaxed">
                  Fastest way to get in touch. Click below to chat directly on WhatsApp or drop an email.
                </p>
              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-5 rounded-2xl bg-[#0B1020] border border-[#A3E635]/40 shadow-glow-lime relative overflow-hidden group">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#64748B] block font-mono">DIRECT WHATSAPP</span>
                    <span className="font-heading font-bold text-white text-base sm:text-lg">
                      {contact.phone}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#A7B0C4] mb-4">
                  Quick discussion for quotes, shoot dates, and marketing campaigns.
                </p>

                <a
                  href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all shadow-glow-lime active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-[#0B1020]" />
                  <span>Chat on WhatsApp ({contact.phone})</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Email & Instagram Quick Links */}
              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="min-h-[48px] p-4 rounded-2xl bg-[#0B1020] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between text-xs sm:text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#162038] flex items-center justify-center text-[#38BDF8]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] block font-mono">DIRECT EMAIL</span>
                      <span className="text-white font-medium group-hover:text-[#A3E635] transition-colors">
                        {contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] p-4 rounded-2xl bg-[#0B1020] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between text-xs sm:text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#162038] flex items-center justify-center text-[#E1306C]">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] block font-mono">INSTAGRAM CREATOR</span>
                      <span className="text-white font-medium group-hover:text-[#A3E635] transition-colors">
                        {contact.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-white transition-colors" />
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#A3E635] flex-shrink-0" />
                <span>Available for on-location shoots and remote collaborations.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-[#11182A] border border-white/10 shadow-2xl">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-white mb-1">
                  Send Project Details
                </h3>
                <p className="text-xs sm:text-sm text-[#A7B0C4]">
                  Fill out your requirements below to start the conversation via WhatsApp or email.
                </p>
              </div>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#A7B0C4] mb-1.5">
                    Your Name / Contact Person *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all"
                  />
                </div>

                {/* Business / Brand Name */}
                <div>
                  <label htmlFor="businessType" className="block text-xs font-mono uppercase tracking-wider text-[#A7B0C4] mb-1.5">
                    Business / Brand / Shop Name *
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="e.g. Local Fitness Studio, Fashion Store, Cafe"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase tracking-wider text-[#A7B0C4] mb-1.5">
                    Primary Service Needed *
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#0B1020] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all"
                  >
                    {contactSection.serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#0B1020] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#A7B0C4] mb-1.5">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you need (e.g. video shoot, reels editing, Instagram ad campaign, or modern website)..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-heading font-bold text-sm text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all duration-200 shadow-glow-lime hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0B1020]" />
                    <span>Send via WhatsApp (+91 6379769744)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-heading font-semibold text-sm text-white bg-[#1E293B] hover:bg-[#2D3A54] border border-white/10 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4 text-[#A7B0C4]" />
                    <span>Email Us</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
