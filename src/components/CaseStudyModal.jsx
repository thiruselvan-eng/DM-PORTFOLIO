import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Target, Eye, Users, Wallet, PlayCircle, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function CaseStudyModal({ isOpen, onClose, projectId }) {
  const project = portfolioData.caseStudies.find((item) => item.id === projectId) || portfolioData.caseStudies[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1020]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#11182A] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#11182A]/95 backdrop-blur-md z-20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#A3E635]/15 text-[#A3E635] border border-[#A3E635]/30 uppercase tracking-wide">
                  {project.type}
                </span>
                <span className="text-xs text-[#64748B]">Case Study Breakdown</span>
              </div>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-white">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#162038] hover:bg-[#1E293B] text-[#A7B0C4] hover:text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#A7B0C4] text-sm">
            
            {/* Visual Screenshot Banner */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B1020]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover max-h-72"
              />
              <div className="p-2.5 bg-[#0B1020] text-center text-xs text-[#64748B] border-t border-white/5">
                Campaign visual representation • Configured in Meta Ads Manager
              </div>
            </div>

            {/* Honest Disclosure Banner */}
            <div className="p-4 rounded-xl bg-[#0B1020] border border-[#A3E635]/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#A3E635] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="text-white font-semibold block mb-0.5">Ethical Practice Disclosure</span>
                <p className="text-[#A7B0C4] leading-relaxed">
                  {project.details.honestDisclosure}
                </p>
              </div>
            </div>

            {/* Reported Numbers Grid */}
            <div>
              <h3 className="font-heading font-bold text-white text-base mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#A3E635]" />
                Actual Reported Performance Numbers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.details.actualResults.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0B1020] border border-white/10">
                    <span className="text-xs text-[#64748B] block mb-1">{item.label}</span>
                    <span className="font-heading font-bold text-white text-base sm:text-lg">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Parameters / Setup Breakdown */}
            {project.details.campaignSetup && (
              <div>
                <h3 className="font-heading font-bold text-white text-base mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#38BDF8]" />
                  Campaign Configuration & Targeting Setup
                </h3>
                <div className="p-4 rounded-xl bg-[#0B1020] border border-white/10 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#64748B]">Campaign Objective</span>
                    <span className="text-white font-medium">{project.details.campaignSetup.objective}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#64748B]">Ad Budget Allocation</span>
                    <span className="text-white font-medium">{project.details.campaignSetup.budget}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#64748B]">Target Geo-Location</span>
                    <span className="text-white font-medium">{project.details.campaignSetup.location}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#64748B]">Age Demographic</span>
                    <span className="text-white font-medium">{project.details.campaignSetup.ageRange}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#64748B]">Placements</span>
                    <span className="text-white font-medium">{project.details.campaignSetup.placements}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Key Learnings & Takeaways */}
            <div>
              <h3 className="font-heading font-bold text-white text-base mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#A3E635]" />
                Key Hands-On Takeaways & Observations
              </h3>
              <ul className="space-y-2.5">
                {project.details.keyLearnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] mt-2 flex-shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-5 border-t border-white/10 bg-[#0B1020] flex items-center justify-between">
            <span className="text-xs text-[#64748B]">
              Ready to test a campaign together?
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#A7B0C4] hover:text-white transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0B1020] bg-[#A3E635] hover:bg-[#BEF264] transition-all shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
