import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wallet, Users, Eye, PlayCircle, AlertCircle, CheckCircle2, Image as ImageIcon, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Smooth animated counter component
function Counter({ value, prefix = "", suffix = "", duration = 1.8 }) {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * value);
      setDisplayCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  // Format with commas if >= 1000
  const formatted = displayCount >= 1000 ? displayCount.toLocaleString() : displayCount;

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function Results({ onOpenModal }) {
  const { performance } = portfolioData;

  const iconMap = {
    Wallet: Wallet,
    Users: Users,
    Eye: Eye,
    PlayCircle: PlayCircle,
  };

  return (
    <section id="performance" className="py-20 lg:py-28 bg-[#0B1020] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A3E635]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Honest Disclaimers */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11182A] border border-white/10 text-xs font-semibold text-[#A3E635] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            {performance.badge}
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {performance.sectionTitle}
          </h2>

          {/* Mandatory Specific Disclaimer */}
          <div className="p-4 rounded-xl bg-[#11182A] border border-[#1E293B] flex items-start gap-3 mt-4">
            <AlertCircle className="w-5 h-5 text-[#A3E635] flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="text-white font-medium mb-0.5">Transparent Campaign Disclosure</p>
              <p className="text-[#A7B0C4] leading-relaxed">
                "{performance.disclaimer}"
              </p>
              <p className="text-xs text-[#64748B] mt-1.5">
                Note: This was a focused test campaign conducted on Meta Ads Manager to analyze reach, placement distribution, and video viewer retention. No leads, conversions, or revenue are claimed from this data.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Reported Metrics Cards with Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {performance.metrics.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Wallet;
            const isLimeHighlight = metric.id === 'thruplays';

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-[#11182A] border transition-all duration-300 relative overflow-hidden group ${
                  isLimeHighlight
                    ? 'border-[#A3E635]/40 shadow-glow-lime'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background soft accent */}
                <div className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl pointer-events-none ${
                  isLimeHighlight ? 'bg-[#A3E635]/10' : 'bg-white/5'
                }`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isLimeHighlight
                      ? 'bg-[#A3E635] text-[#0B1020]'
                      : 'bg-[#162038] text-white border border-white/10'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                    {metric.id}
                  </span>
                </div>

                <p className="text-sm font-medium text-[#A7B0C4] mb-1">
                  {metric.label}
                </p>

                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  <Counter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">{metric.subtext}</span>
                  {metric.id === 'spend' && <span className="text-[#A3E635]">Controlled</span>}
                  {metric.id === 'thruplays' && <span className="text-[#A3E635] font-semibold">₹0.07 CPR</span>}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Campaign Setup & Screenshot Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#11182A] rounded-2xl border border-white/10 p-6 sm:p-8">
          
          {/* Left Column: Campaign Parameters & Insights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4" />
                <span>Campaign Parameters</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Hands-On Ad Delivery & Video Retention
              </h3>
              <p className="text-sm text-[#A7B0C4] leading-relaxed">
                Rather than studying theoretical concepts, I launched a real paid test campaign in Meta Ads Manager with an intentional ₹99 spend limit to experience ad set configurations, placement behavior, and auction dynamics firsthand.
              </p>
            </div>

            {/* Campaign Objective & Parameters Grid */}
            <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
              <div>
                <span className="text-xs text-[#64748B] block">Objective</span>
                <span className="text-sm font-medium text-white">{performance.objective}</span>
              </div>
              <div>
                <span className="text-xs text-[#64748B] block">Date / Timeline</span>
                <span className="text-sm font-medium text-white">{performance.campaignDate}</span>
              </div>
              <div>
                <span className="text-xs text-[#64748B] block">Location Targeted</span>
                <span className="text-sm font-medium text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A3E635]" />
                  {performance.targetLocation}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#64748B] block">Target Demographics</span>
                <span className="text-sm font-medium text-white">{performance.targetAudience}</span>
              </div>
            </div>

            {/* Efficiency pills */}
            <div className="flex flex-wrap gap-3">
              {performance.efficiencyMetrics.map((eff, i) => (
                <div key={i} className="px-3.5 py-2 rounded-xl bg-[#0B1020] border border-white/10 text-xs">
                  <span className="text-[#64748B] block">{eff.label}</span>
                  <span className="font-heading font-bold text-white text-sm">{eff.value}</span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('meta-ads-practice')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all shadow-md"
              >
                <span>Inspect Full Case Study Modal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Screenshot / Visual Mockup Display */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0B1020] shadow-xl group relative">
              <img
                src={performance.screenshotPlaceholder.imagePath}
                alt="Meta Ads Campaign Snapshot"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
              />
              
              {/* Overlay note on how user can swap their raw file */}
              <div className="p-3 bg-[#0B1020]/90 border-t border-white/10 flex items-center justify-between text-xs text-[#A7B0C4]">
                <span className="flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-[#A3E635]" />
                  Reported Meta Ads Manager snapshot
                </span>
                <span className="text-[#64748B] text-[11px]">
                  Place real export in /public/campaigns/
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
