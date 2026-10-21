import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Workflow() {
  const { workflow } = portfolioData;

  const iconMap = {
    Search: Search,
    FileText: FileText,
    Rocket: Rocket,
    CheckCircle2: CheckCircle2,
  };

  return (
    <section id="workflow" className="py-20 sm:py-28 lg:py-32 bg-[#0B1020] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11182A] border border-white/10 text-xs font-semibold text-[#A3E635] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            Methodical Execution
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            A Clear 4-Step Process.
          </h2>

          <p className="text-[#A7B0C4] text-sm sm:text-base leading-relaxed">
            From initial business discovery to execution and evidence-based optimization, every project follows a transparent roadmap.
          </p>
        </div>

        {/* 4-Step Progressive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle Horizontal Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#A3E635]/20 via-[#A3E635]/50 to-[#A3E635]/20 z-0" />

          {workflow.map((item, index) => {
            const Icon = iconMap[item.icon] || Search;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#11182A] border border-white/10 hover:border-[#A3E635]/50 transition-all duration-300 relative z-10 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg"
              >
                <div>
                  {/* Step Header with Number & Glowing Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1020] border-2 border-[#A3E635] flex items-center justify-center font-heading font-black text-white text-base shadow-glow-lime group-hover:bg-[#A3E635] group-hover:text-[#0B1020] transition-all duration-200">
                      {item.step}
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-[#162038] text-[#A3E635] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A3E635] block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A7B0C4] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Milestone Tag */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span className="font-mono">{item.actionText}</span>
                  {index < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#A3E635] hidden lg:block" />}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
