import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Camera, Film, Target, Code, Palette, Play, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { hero, brand, contact } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern bg-noise"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-[#A3E635]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-12 w-[250px] sm:w-[450px] h-[250px] sm:h-[350px] bg-[#38BDF8]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Supporting Copy, and Direct CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Top Label: INDEPENDENT DIGITAL MARKETING & CREATIVE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11182A] border border-white/10 text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#A7B0C4] mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
              <span>{hero.topLabel}</span>
            </div>

            {/* Main Headline with Clamped Font for perfect mobile fit without overflow */}
            <h1 className="font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-5 sm:mb-6 text-[clamp(2.2rem,6vw,4.4rem)]">
              {hero.headlinePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3E635] via-[#BEF264] to-[#4ADE80] relative inline-block">
                {hero.headlineHighlight}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#A3E635]/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M0 7 C 50 1, 150 1, 200 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A7B0C4] leading-relaxed max-w-2xl mb-7 sm:mb-9 font-normal">
              {hero.subheadline}
            </p>

            {/* Service Focus Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold mr-1">Services:</span>
              {hero.servicePills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#11182A] border border-[#1E293B] text-white hover:border-[#A3E635]/50 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA: Explore Services */}
              <a
                href={hero.ctaPrimary.href}
                className="min-h-[48px] px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all duration-200 shadow-glow-lime hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{hero.ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4 text-[#0B1020]" />
              </a>

              {/* Secondary CTA: Let's Talk */}
              <a
                href={hero.ctaSecondary.href}
                className="min-h-[48px] px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-[#11182A] hover:bg-[#162038] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#A3E635]" />
                <span>{hero.ctaSecondary.text}</span>
              </a>
            </div>

            {/* Creator Bio Snippet with Real Photo */}
            <div className="mt-8 sm:mt-10 pt-5 border-t border-white/10 flex items-center gap-3.5 text-xs text-[#CBD5E1]">
              <div className="relative flex-shrink-0">
                <img
                  src={brand.profileImage || "/images/thiruselvan-profile.jpg"}
                  alt={brand.ownerName}
                  className="w-10 h-10 rounded-full object-cover object-center border-2 border-[#A3E635] shadow-sm"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#A3E635] border-2 border-[#0B1020]" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">
                  {brand.ownerName}
                </p>
                <p className="text-[11px] text-[#A7B0C4]">
                  {brand.role} • <span className="text-[#A3E635]">{brand.statusBadge}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visually Rich Creative Showcase Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A3E635]/20 via-[#38BDF8]/15 to-transparent rounded-3xl blur-2xl transform -rotate-1 scale-95 pointer-events-none" />

            {/* Main Layered Creative Hub Card */}
            <div className="relative rounded-2xl bg-[#11182A]/90 backdrop-blur-xl border border-white/15 p-5 sm:p-6 shadow-2xl">
              
              {/* Studio Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-1.5 text-[11px] font-mono text-[#A7B0C4] tracking-wider">THIRU.STUDIO</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#A3E635]/15 border border-[#A3E635]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#A3E635] uppercase tracking-wider">Creative Suite</span>
                </div>
              </div>

              {/* Composition: 4 Distinct Visual Disciplines */}
              <div className="mt-4 space-y-3">
                
                {/* 1. Video Production & Reels Simulation Box */}
                <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/10 relative overflow-hidden group hover:border-[#A3E635]/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <div className="w-6 h-6 rounded-md bg-red-500/20 text-red-400 flex items-center justify-center">
                        <Camera className="w-3.5 h-3.5" />
                      </div>
                      <span>Video Shooting & Reels (9:16)</span>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      REC 4K
                    </span>
                  </div>

                  {/* Simulated Waveform & Hook Overlay */}
                  <div className="p-2 rounded-lg bg-[#11182A] border border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-[#A7B0C4]">Hook Retention Edit</span>
                    <span className="px-2 py-0.5 rounded bg-[#A3E635]/20 text-[#A3E635] font-mono text-[10px] font-bold">
                      Kinetic Subtitles
                    </span>
                  </div>
                </div>

                {/* 2. Meta Ads Targeting Strategy Snippet */}
                <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/10 group hover:border-[#38BDF8]/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <div className="w-6 h-6 rounded-md bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                      <span>Meta Ads Campaign Targeting</span>
                    </div>
                    <span className="text-[10px] text-[#A3E635] font-semibold bg-[#A3E635]/10 px-2 py-0.5 rounded">
                      Active Strategy
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-[#94A3B8]">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Tamil Nadu Local</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Reels Placement</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Budget Pacing</span>
                  </div>
                </div>

                {/* 3. Creative Graphic Design & Web Development Split */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#0B1020] border border-white/10 group hover:border-purple-400/40 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center mb-1.5">
                      <Palette className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs font-semibold text-white">Creative Design</p>
                    <p className="text-[10px] text-[#94A3B8] mt-0.5">Posters & Offer Banners</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0B1020] border border-white/10 group hover:border-[#A3E635]/40 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#A3E635]/20 text-[#A3E635] flex items-center justify-center mb-1.5">
                      <Code className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs font-semibold text-white">Web Development</p>
                    <p className="text-[10px] text-[#94A3B8] mt-0.5">Modern Local Websites</p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Contact Hook */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-[#CBD5E1]">
                <span className="text-[11px] text-[#A7B0C4] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#A3E635]" />
                  Ready to elevate your online presence
                </span>
                <a href="#services" className="text-xs font-bold text-[#A3E635] hover:underline">
                  View 7 Services →
                </a>
              </div>
            </div>

            {/* Rotating Decorative Studio Stamp Badge */}
            <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center justify-center w-20 h-20 rounded-full bg-[#0B1020] border-2 border-[#A3E635]/50 shadow-xl pointer-events-none">
              <svg className="w-16 h-16 animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="textPath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-mono tracking-widest fill-[#A3E635] uppercase font-bold">
                  <textPath href="#textPath">
                    THIRU.MARKETING • CREATIVE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-6 h-6 rounded-full bg-[#11182A] flex items-center justify-center text-[#A3E635]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
