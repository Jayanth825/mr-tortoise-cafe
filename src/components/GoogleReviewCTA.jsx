import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ThumbsUp } from 'lucide-react';

export const GoogleReviewCTA = ({ googleReviewUrl }) => {
  return (
    <section className="w-full max-w-xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl p-7 bg-[#2F4F3E] border border-[#1B3B2B] shadow-xl text-center text-[#FAF7F0]"
      >
        {/* Decorative subtle background shapes */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#3B5D45]/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#1B3B2B]/60 rounded-full blur-2xl pointer-events-none"></div>

        {/* 5 Gold Stars Row */}
        <div className="flex items-center justify-center gap-1.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
            >
              <Star className="w-5 h-5 fill-[#C5B396] text-[#C5B396] drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-serif font-bold text-[#FAF7F0] mb-2">
          Enjoyed Your Dining Experience?
        </h3>

        <p className="text-xs sm:text-sm text-[#D4C5A9] max-w-sm mx-auto mb-6 leading-relaxed font-light">
          Your feedback means the world to our chefs & team! Tap below to leave us a quick Google review.
        </p>

        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FAF7F0] hover:bg-[#F4EFE6] text-[#1B3B2B] text-xs font-bold uppercase tracking-widest shadow-lg transition-all transform active:scale-95 group border border-[#C5B396]"
        >
          <ThumbsUp className="w-4 h-4 fill-[#2F4F3E] text-[#2F4F3E] group-hover:scale-110 transition-transform" />
          <span>Share Your Experience</span>
          <ExternalLink className="w-4 h-4 text-[#2F4F3E]/80" />
        </a>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#C5B396]/90 font-light">
          <span>Takes only 15 seconds • Direct Google Review link</span>
        </div>
      </motion.div>
    </section>
  );
};
