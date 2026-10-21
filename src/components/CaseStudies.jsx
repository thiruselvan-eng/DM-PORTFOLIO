import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Film, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';

export default function CaseStudies({ onOpenModal }) {
  const { caseStudies, contact } = portfolioData;

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#0B1020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11182A] border border-white/10 text-xs font-semibold text-[#A3E635] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
              Portfolio Showcase
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Work & Projects.
            </h2>
          </div>
          <p className="text-[#A7B0C4] text-sm sm:text-base max-w-md">
            A transparent overview of hands-on practice campaigns, self-directed content creation, and creative design experiments. No fabricated client work.
          </p>
        </div>

        {/* 3 Projects Showcase */}
        <div className="space-y-12">
          
          {/* Project 1: Meta Ads Practice Campaign */}
          {caseStudies[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-[#11182A] border border-white/10 overflow-hidden hover:border-[#A3E635]/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                <div className="lg:col-span-6 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A3E635]/15 text-[#A3E635] border border-[#A3E635]/30">
                      {caseStudies[0].type}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      Meta Ads Manager • {caseStudies[0].date}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    {caseStudies[0].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A7B0C4] leading-relaxed">
                    {caseStudies[0].summary}
                  </p>

                  {/* 4 Reported Figures */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                    <div className="p-3 rounded-xl bg-[#0B1020] border border-white/5">
                      <span className="text-[11px] text-[#64748B] block">Ad Spend</span>
                      <span className="font-heading font-bold text-white text-lg sm:text-xl">{caseStudies[0].budget}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0B1020] border border-white/5">
                      <span className="text-[11px] text-[#64748B] block">Reach</span>
                      <span className="font-heading font-bold text-[#38BDF8] text-lg sm:text-xl">{caseStudies[0].reach}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0B1020] border border-white/5">
                      <span className="text-[11px] text-[#64748B] block">Impressions</span>
                      <span className="font-heading font-bold text-white text-lg sm:text-xl">{caseStudies[0].impressions}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0B1020] border border-[#A3E635]/20">
                      <span className="text-[11px] text-[#A3E635] block">ThruPlays</span>
                      <span className="font-heading font-bold text-[#A3E635] text-lg sm:text-xl">{caseStudies[0].thruPlays}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenModal && onOpenModal(caseStudies[0].id)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all shadow-glow-lime hover:scale-[1.02]"
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => onOpenModal && onOpenModal(caseStudies[0].id)}
                    className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#0B1020] shadow-2xl relative group"
                  >
                    <img
                      src={caseStudies[0].image}
                      alt={caseStudies[0].title}
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-[#A3E635] text-[#0B1020] font-heading font-bold text-xs flex items-center gap-1.5 shadow-lg">
                        Click to Inspect Case Study <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project 2: Instagram Reels & Fitness Content */}
          {caseStudies[1] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-[#11182A] border border-white/10 overflow-hidden hover:border-[#38BDF8]/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                      {caseStudies[1].type}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      {caseStudies[1].format} • {caseStudies[1].toolsUsed}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    {caseStudies[1].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A7B0C4] leading-relaxed">
                    {caseStudies[1].summary}
                  </p>

                  {/* 5-step creative process pipeline */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#A3E635]">
                      Creative Video Pipeline:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {caseStudies[1].details.creativeProcess.map((stepItem, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-lg bg-[#0B1020] border border-white/5">
                          <span className="font-semibold text-white block mb-0.5">{stepItem.step}</span>
                          <span className="text-[#A7B0C4] text-[11px] leading-snug">{stepItem.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instagram CTA link */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs text-white bg-[#1E293B] hover:bg-[#2D3A54] border border-white/10 transition-all"
                    >
                      <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                      <span>Follow on Instagram ({contact.instagramHandle})</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1020] shadow-2xl relative group">
                    <img
                      src={caseStudies[1].image}
                      alt={caseStudies[1].title}
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project 3: Ad Creative & Promotional Graphic Design */}
          {caseStudies[2] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-[#11182A] border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {caseStudies[2].type}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      {caseStudies[2].formats} • {caseStudies[2].toolsUsed}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    {caseStudies[2].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A7B0C4] leading-relaxed">
                    {caseStudies[2].summary}
                  </p>

                  {/* Design objectives list */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#A3E635]">
                      Visual Design Objectives:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#A7B0C4]">
                      {caseStudies[2].details.designObjectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#A3E635] transition-colors"
                    >
                      <span>Request a custom creative sample for your brand</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A3E635]" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1020] shadow-2xl relative group">
                    <img
                      src={caseStudies[2].image}
                      alt={caseStudies[2].title}
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
