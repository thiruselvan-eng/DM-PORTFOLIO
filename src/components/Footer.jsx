import React from 'react';
import { ArrowUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { brand, contact, navLinks, footer } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#070A14] border-t border-white/10 pt-16 pb-12 text-[#A7B0C4] text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#11182A] border border-white/15 flex items-center justify-center font-heading font-bold text-white relative">
                <span className="text-sm font-extrabold tracking-tight">T</span>
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
              </div>
              <span className="font-heading font-extrabold text-white text-lg tracking-tight">
                {brand.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-sm leading-relaxed">
              {brand.role}
            </p>

            <p className="text-xs text-[#64748B] max-w-sm">
              {footer.tagline}
            </p>

            {/* Social & Contact Buttons Row */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11182A] hover:bg-[#1E293B] border border-white/10 flex items-center justify-center text-white hover:text-[#25D366] transition-colors"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram Button */}
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11182A] hover:bg-[#1E293B] border border-white/10 flex items-center justify-center text-white hover:text-[#E1306C] transition-colors"
                aria-label="Follow on Instagram"
                title="Instagram (@thiru.fit)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${contact.email}`}
                className="w-10 h-10 rounded-xl bg-[#11182A] hover:bg-[#1E293B] border border-white/10 flex items-center justify-center text-white hover:text-[#38BDF8] transition-colors"
                aria-label="Send an Email"
                title="Email (thiruselvan248@gmail.com)"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Phone Call Button */}
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-xl bg-[#11182A] hover:bg-[#1E293B] border border-white/10 flex items-center justify-center text-white hover:text-[#A3E635] transition-colors"
                aria-label="Call Thiruselvan"
                title="Call (+91 6379769744)"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#A3E635] transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-3">
              Contact Details
            </h4>
            <div className="p-4 rounded-xl bg-[#11182A] border border-white/5 space-y-2.5 text-xs">
              <div>
                <span className="text-[#64748B] block text-[11px]">Phone / WhatsApp:</span>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#A3E635] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{contact.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-[#64748B] block text-[11px]">Email:</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-white hover:text-[#38BDF8] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{contact.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[#64748B] block text-[11px]">Instagram:</span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#E1306C] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>{contact.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {brand.name}. All rights reserved.</span>
            <span>•</span>
            <span>{brand.ownerName}</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#11182A] hover:bg-[#1E293B] border border-white/10 text-[#A7B0C4] hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A3E635]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
