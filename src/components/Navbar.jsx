import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, contact } = portfolioData;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Workflow", href: "#workflow" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30 py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#A3E635] rounded-lg p-1"
          aria-label="THIRU.MARKETING Home"
        >
          {/* Logo Monogram */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#11182A] border border-white/15 flex items-center justify-center font-heading font-black text-white group-hover:border-[#A3E635] transition-all relative overflow-hidden shadow-sm">
            <span className="text-sm font-extrabold tracking-tight">T</span>
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-ping opacity-75" />
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-heading font-bold tracking-tight text-white text-base sm:text-lg group-hover:text-[#A3E635] transition-colors">
              {brand.name}
            </span>
            <span className="text-[10px] text-[#94A3B8] font-mono tracking-wider -mt-1 hidden sm:block">
              DIGITAL & CREATIVE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#11182A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#A7B0C4] hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA: "Let's Talk" */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-bold text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all duration-200 shadow-glow-lime hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button (Min 44x44px touch target) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#11182A] border border-white/10 text-white hover:text-[#A3E635] focus:outline-none focus:ring-2 focus:ring-[#A3E635] active:scale-95 transition-all"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#A3E635]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed inset-x-0 top-[60px] sm:top-[70px] bg-[#0B1020]/98 backdrop-blur-2xl border-b border-white/15 px-5 pt-4 pb-8 shadow-2xl z-40 max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1 max-w-sm mx-auto">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] px-3 mb-2">Navigation</span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 min-h-[44px] flex items-center justify-between text-base font-semibold text-[#A7B0C4] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#A3E635] opacity-50">→</span>
                </a>
              ))}

              {/* Direct Quick WhatsApp Callout in Mobile Drawer */}
              <div className="pt-4 mt-2 border-t border-white/10 space-y-2.5">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-center font-heading font-bold text-sm text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all shadow-glow-lime active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-[#0B1020]" />
                  <span>Let's Talk</span>
                </a>

                <div className="flex items-center justify-center gap-4 text-xs text-[#64748B] pt-2">
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A3E635] transition-colors"
                  >
                    WhatsApp: {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
