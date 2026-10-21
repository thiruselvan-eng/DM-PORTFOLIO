import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Brain, Cpu, Film, Palette, Target, LayoutGrid, Scissors, 
  CheckCircle2, ArrowRight, ShieldCheck, MapPin, Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about, brand, contact } = portfolioData;

  const toolIconMap = {
    Target: Target,
    LayoutGrid: LayoutGrid,
    Sparkles: Sparkles,
    Brain: Brain,
    Cpu: Cpu,
    Scissors: Scissors,
    Film: Film,
    Palette: Palette,
  };

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#0B1020] relative overflow-hidden bg-noise">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-[#A3E635]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Editorial Card Container */}
        <div className="bg-[#11182A] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top background accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#A3E635]/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait & Personal Identity Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-center sm:items-start"
            >
              <div className="relative w-full max-w-sm mx-auto sm:mx-0">
                
                {/* Decorative offset lime border frame */}
                <div className="absolute -inset-2 rounded-3xl border-2 border-[#A3E635]/30 transform -rotate-1 pointer-events-none" />

                {/* Main Photo Card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#0B1020] border border-white/15 shadow-2xl">
                  <img
                    src={brand.profileImage || "/images/thiruselvan-profile.jpg"}
                    alt={brand.ownerName}
                    className="w-full h-auto aspect-[4/5] object-cover object-center filter contrast-105"
                  />
                  
                  {/* Subtle dark gradient on bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/70 to-transparent pointer-events-none" />

                  {/* Overlay Name & Role Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#11182A]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-extrabold text-white text-base sm:text-lg">
                          {brand.ownerName}
                        </h3>
                        <p className="text-xs text-[#A3E635] font-medium">
                          {brand.role}
                        </p>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-ping" />
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/10 text-[11px] text-[#A7B0C4]">
                      <MapPin className="w-3 h-3 text-[#A3E635]" />
                      <span>{brand.location}</span>
                    </div>
                  </div>
                </div>

                {/* Availability Pill below photo */}
                <div className="mt-4 p-3 rounded-xl bg-[#0B1020] border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#A7B0C4]">Current Status</span>
                  <span className="text-[#A3E635] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
                    {brand.statusBadge}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Bio, Core Beliefs & Tools Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1020] border border-white/10 text-xs font-semibold text-[#A3E635]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                Independent Marketer & Creator
              </div>

              {/* Exact Heading from Prompt: Creative Ideas. Digital Execution. */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                {about.heading}
              </h2>

              {/* Exact Bio text from prompt */}
              <p className="text-base sm:text-lg text-[#CBD5E1] font-medium leading-relaxed">
                "{about.description}"
              </p>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/5">
                  <span className="font-heading font-bold text-white text-sm block mb-1">
                    Hands-on & Practical
                  </span>
                  <span className="text-xs text-[#A7B0C4] leading-relaxed block">
                    Direct on-location filming, fast video turnaround, and structured Meta Ads setup.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/5">
                  <span className="font-heading font-bold text-white text-sm block mb-1">
                    Modern Visual Aesthetic
                  </span>
                  <span className="text-xs text-[#A7B0C4] leading-relaxed block">
                    Clean typography, high-contrast layouts, and dynamic pacing that capture customer attention.
                  </span>
                </div>
              </div>

              {/* Selected 8 Tools Stack from Prompt */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                    {about.toolsHeading}
                  </h4>
                  <span className="text-[11px] text-[#A3E635] font-mono">
                    Active & Continuously Learning
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {about.tools.map((tool, idx) => {
                    const Icon = toolIconMap[tool.icon] || Sparkles;

                    return (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#0B1020] border border-white/5 hover:border-[#A3E635]/40 transition-colors flex items-center gap-2.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#162038] text-[#A3E635] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3E635] group-hover:text-[#0B1020] transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-white truncate">
                            {tool.name}
                          </p>
                          <p className="text-[10px] text-[#64748B] truncate">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
