import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, MapPin, Clock, Star, ExternalLink } from 'lucide-react';

export const Header = ({ restaurantInfo, onOpenReview }) => {
  return (
    <header className="relative w-full overflow-hidden bg-[#FAF7F0] text-[#1C2B22] pb-10 pt-6 px-4 border-b border-[#D4C5A9]/50 shadow-sm">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={restaurantInfo.coverImage}
          alt="Fine Dining Atmosphere"
          className="w-full h-full object-cover filter blur-md scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F0]/90 via-[#FAF7F0]/95 to-[#FAF7F0]"></div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Top Verified NFC Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide bg-[#2F4F3E]/10 text-[#2F4F3E] border border-[#2F4F3E]/20 mb-5 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B5D45] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F4F3E]"></span>
          </span>
          <QrCode className="w-3.5 h-3.5 text-[#2F4F3E]" />
          <span>{restaurantInfo.tableTag}</span>
        </motion.div>

        {/* Restaurant Title & Slogan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <div className="inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#5C6E63] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C5B396]"></span>
            <span>Est. Kakinada</span>
            <span className="w-6 h-px bg-[#C5B396]"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#1B3B2B] leading-tight drop-shadow-sm">
            Welcome to Mr. Tortoise Cafe and Fine Dining
          </h1>

          <p className="mt-3 text-base sm:text-lg font-serif italic text-[#3B5D45] tracking-wide font-normal">
            "{restaurantInfo.tagline}"
          </p>
        </motion.div>

        {/* Info Pills (Hours & Address) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-1 text-xs text-[#5C6E63]"
        >
          <span className="flex items-center gap-1.5 bg-[#F4EFE6] px-3 py-1.5 rounded-full border border-[#D4C5A9]/60 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#2F4F3E]" />
            <span>{restaurantInfo.hours}</span>
          </span>
          <span className="flex items-center gap-1.5 bg-[#F4EFE6] px-3 py-1.5 rounded-full border border-[#D4C5A9]/60 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#2F4F3E]" />
            <span>{restaurantInfo.address}</span>
          </span>
        </motion.div>

        {/* Google Review Action Button (No Call Waiter button as requested) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 w-full max-w-xs flex justify-center"
        >
          <button
            onClick={onOpenReview}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2F4F3E] hover:bg-[#1B3B2B] text-[#FAF7F0] text-xs uppercase tracking-widest font-semibold border border-[#1B3B2B] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group"
          >
            <Star className="w-3.5 h-3.5 fill-[#C5B396] text-[#C5B396]" />
            <span>Share Your Experience</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5B396] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </header>
  );
};
