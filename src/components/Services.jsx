import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, Target, CalendarCheck, Camera, Film, Palette, Code, 
  ArrowRight, ArrowUpRight, Check, Sparkles, Layers, Sliders, Smartphone, Monitor
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Services() {
  const { services, contact } = portfolioData;

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-[#0B1020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11182A] border border-white/10 text-xs font-semibold text-[#A3E635] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
              Core Capabilities
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Services Tailored for Growth.
            </h2>
          </div>
          <p className="text-[#A7B0C4] text-sm sm:text-base max-w-md leading-relaxed">
            From on-location video shooting and high-retention reels to precision Meta Ads and modern websites, every service is crafted to give your business an undeniable edge.
          </p>
        </div>

        {/* 7 Services Editorial Layout */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* ROW 1: FEATURED BENTO — Meta Ads & Paid Advertising (Left Large) + Social Media Marketing (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* 01. META ADS & PAID ADVERTISING (Large Featured Showcase) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 rounded-3xl bg-[#11182A] border border-[#A3E635]/40 p-6 sm:p-9 relative overflow-hidden group hover:border-[#A3E635] transition-all duration-300 shadow-glow-lime flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#A3E635] text-[#0B1020] flex items-center justify-center font-bold shadow-md">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A3E635]/15 text-[#A3E635] border border-[#A3E635]/30">
                      Featured Specialty
                    </span>
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#A3E635]">01</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                  Meta Ads & Paid Advertising
                </h3>
                <p className="text-sm sm:text-base text-[#A7B0C4] leading-relaxed mb-6">
                  Facebook and Instagram ad campaign setup, audience targeting, location targeting, and campaign monitoring. We build data-backed campaigns designed to reach buyers in your area.
                </p>

                {/* Visual Targeting Mockup Pill Box */}
                <div className="p-4 rounded-2xl bg-[#0B1020] border border-white/10 mb-6 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="font-mono text-white font-semibold">Targeting Blueprint</span>
                    <span className="text-[#A3E635]">● Optimized Delivery</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-[#162038] text-white border border-white/5">Local Geo-Fencing</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#162038] text-white border border-white/5">Age & Demographic Filters</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#162038] text-white border border-white/5">Instagram Reels Placement</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#A3E635]/10 text-[#A3E635] border border-[#A3E635]/20 font-semibold">Ad Set Pacing</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm text-[#CBD5E1]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Complete campaign architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Location & interest targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Placement testing across Reels & Feed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Ongoing campaign monitoring</span>
                  </li>
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Ready to launch an ad campaign?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A3E635] hover:text-[#BEF264] transition-colors"
                >
                  <span>Inquire for Meta Ads</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* 02. SOCIAL MEDIA MARKETING (Right Side) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 rounded-3xl bg-[#11182A] border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#162038] text-[#38BDF8] flex items-center justify-center font-bold border border-white/10 group-hover:border-[#38BDF8]/40 transition-colors">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#64748B]">02</span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/5 text-[#A7B0C4] border border-white/10 mb-3">
                  Brand Strategy
                </div>

                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Social Media Marketing
                </h3>
                <p className="text-sm text-[#A7B0C4] leading-relaxed mb-6">
                  Social media strategy, content planning, and online brand presence. We design content strategies that build real community interest and elevate your brand image.
                </p>

                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#CBD5E1]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Audience persona and platform mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Content themes & posting cadence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>Engagement framework for followers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Organic Growth Strategy</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#A3E635] transition-colors"
                >
                  <span>Discuss Strategy</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* ROW 2: VIDEO PAIR — Professional Video Shooting (HUD Viewfinder) + Video Editing & Reels (Smartphone 9:16) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* 03. PROFESSIONAL VIDEO SHOOTING (Camera Viewfinder Treatment) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 rounded-3xl bg-[#0D1426] border border-white/15 p-6 sm:p-8 relative overflow-hidden group hover:border-[#A3E635]/50 transition-all duration-300"
            >
              {/* Camera Viewfinder HUD Corners */}
              <div className="hud-corner hud-tl" />
              <div className="hud-corner hud-tr" />
              <div className="hud-corner hud-bl" />
              <div className="hud-corner hud-br" />

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-red-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    4K PRODUCTION
                  </span>
                </div>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#A3E635]">03</span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Professional Video Shooting
              </h3>
              <p className="text-sm text-[#A7B0C4] leading-relaxed mb-6">
                Promotional videos, business videos, product videos, and social media content shoots. We capture on-location footage with professional framing, lighting, and audio.
              </p>

              {/* Viewfinder HUD Status Bar */}
              <div className="p-3.5 rounded-xl bg-[#0B1020]/90 border border-white/10 mb-6 font-mono text-xs flex items-center justify-between text-[#94A3B8]">
                <span>ISO 400 • 24 FPS</span>
                <span className="text-[#A3E635]">9:16 VERTICAL CAPTURE</span>
                <span className="text-white">SHUTTER 1/50</span>
              </div>

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#CBD5E1]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>On-location shoots for shops, studios & gyms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Product showcase videos & commercial reels</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Clean audio capture & stabilized takes</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Book a video shoot</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#A3E635] transition-colors"
                >
                  <span>Book Production</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* 04. VIDEO EDITING & REELS (9:16 Smartphone Mockup Treatment) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 rounded-3xl bg-[#11182A] border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:border-[#38BDF8]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center font-bold">
                    <Film className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#38BDF8]/15 text-[#38BDF8]">
                    High-Retention Editing
                  </span>
                </div>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#64748B]">04</span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Video Editing & Reels
              </h3>
              <p className="text-sm text-[#A7B0C4] leading-relaxed mb-6">
                Reels editing, transitions, captions, promotional videos, and short-form content. Edited specifically for high watch-time on Instagram Reels and YouTube Shorts.
              </p>

              {/* Kinetic Caption Simulation Banner */}
              <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#64748B] block font-mono">RETENTION HOOK</span>
                  <span className="font-heading font-bold text-white text-xs sm:text-sm">
                    DYNAMIC KINETIC SUBTITLES
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#A3E635] text-[#0B1020] font-heading font-bold text-xs">
                  80%+ Retention
                </span>
              </div>

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#CBD5E1]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Aggressive pacing with zero dead space</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Custom kinetic subtitles & sound design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Optimized for 9:16 mobile displays</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">CapCut & Premiere Workflow</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors"
                >
                  <span>Order Reel Edits</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* ROW 3: CREATIVE DESIGN & SOCIAL MANAGEMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* 05. CREATIVE DESIGN & AD CREATIVES (Poster Art Treatment) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 rounded-3xl bg-[#11182A] border border-white/10 p-6 sm:p-8 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#64748B]">05</span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/15 text-purple-300 mb-2">
                Visual Identity & Posters
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Creative Design & Ad Creatives
              </h3>
              <p className="text-sm text-[#A7B0C4] leading-relaxed mb-6">
                Promotional posters, social media designs, offer creatives, and advertising visuals. Designed with bold visual contrast to stop users mid-scroll.
              </p>

              <div className="p-3 rounded-xl bg-[#0B1020] border border-white/10 mb-6 flex items-center justify-between text-xs">
                <span className="text-[#A7B0C4]">Formats: Feed (1:1), Story (9:16), Banners</span>
                <span className="font-mono text-purple-300">High-Contrast</span>
              </div>

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#CBD5E1]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Promotional sale & product launch posters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Consistent brand color harmony & font hierarchy</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Picsart & Canva Suite</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-purple-300 transition-colors"
                >
                  <span>Request Designs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* 06. SOCIAL MEDIA MANAGEMENT (Structured Calendar Treatment) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 rounded-3xl bg-[#11182A] border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#162038] text-white flex items-center justify-center font-bold">
                  <CalendarCheck className="w-5 h-5 text-[#A3E635]" />
                </div>
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#64748B]">06</span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/5 text-[#A7B0C4] mb-2">
                Publishing Consistency
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Social Media Management
              </h3>
              <p className="text-sm text-[#A7B0C4] leading-relaxed mb-6">
                Content scheduling, profile management, and consistent social media publishing. We ensure your brand publishes consistently during peak engagement windows.
              </p>

              <div className="p-3 rounded-xl bg-[#0B1020] border border-white/10 mb-6 flex items-center justify-between text-xs">
                <span className="text-[#A7B0C4]">Weekly & Monthly Cadence</span>
                <span className="font-mono text-[#A3E635]">3-5x Posts / Week</span>
              </div>

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#CBD5E1]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Profile bio, link-in-bio & highlight audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span>Scheduled publishing & asset organization</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Hands-free publishing</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#A3E635] transition-colors"
                >
                  <span>Explore Management</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* ROW 4: 07. WEBSITE DEVELOPMENT (Full-Width Interactive Terminal/Browser Showcase) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-r from-[#11182A] via-[#131C35] to-[#11182A] border border-[#A3E635]/40 p-6 sm:p-10 relative overflow-hidden group hover:border-[#A3E635] transition-all duration-300 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#A3E635] text-[#0B1020] flex items-center justify-center font-bold">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A3E635]/15 text-[#A3E635] border border-[#A3E635]/30">
                    High-Converting Web
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#A3E635] ml-auto">07</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Website Development
                </h3>
                <p className="text-sm sm:text-base text-[#A7B0C4] leading-relaxed">
                  Modern, responsive websites for local businesses, shops, and brands. Fast-loading, mobile-first design with direct WhatsApp click-to-chat and instant calling features.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#CBD5E1] pt-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>Single & Multi-section landing pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>Sub-second page load speeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>Direct WhatsApp & Call integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>Mobile-first responsive design</span>
                  </div>
                </div>
              </div>

              {/* Right CTA Block */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-4 p-5 rounded-2xl bg-[#0B1020]/90 border border-white/10">
                <div className="text-left lg:text-right">
                  <p className="font-heading font-bold text-white text-base">Need a Modern Website?</p>
                  <p className="text-xs text-[#A7B0C4] mt-0.5">Custom built for local brands & studios</p>
                </div>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#A3E635] hover:bg-[#BEF264] text-[#0B1020] font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-glow-lime"
                >
                  <span>Build My Website</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1020]" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
