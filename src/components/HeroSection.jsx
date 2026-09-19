import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ restaurantInfo }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B3B2B] text-[#FAF7F0] min-h-[420px] sm:min-h-[460px] flex flex-col items-center justify-center px-4 py-12">
      {/* 1. Full-width background image of cafe interior with darkened overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cafe_interior.jpg"
          alt="Mr. Tortoise Cafe Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Soft gradient vignette to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3B2B]/80 via-black/40 to-[#1B3B2B]/90"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
        {/* 2. Circular badge style logo centered at the top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-5"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF7F0] p-1 shadow-2xl border-2 border-[#C5B396] flex items-center justify-center overflow-hidden group">
            <img
              src="/logo_badge.png"
              alt="Mr. Tortoise Cafe Logo"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Subtle gold outer ring highlight */}
          <div className="absolute -inset-1.5 rounded-full border border-[#C5B396]/40 pointer-events-none animate-pulse"></div>
        </motion.div>

        {/* 3. Restaurant name below logo in large serif font */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#FAF7F0] leading-tight drop-shadow-md max-w-lg"
        >
          {restaurantInfo.displayName || "Welcome to Mr. Tortoise Cafe and Fine Dining"}
        </motion.h1>

        {/* 4. Slogan below that */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-lg sm:text-xl font-serif italic text-[#C5B396] tracking-wide font-normal drop-shadow-sm"
        >
          "{restaurantInfo.tagline || "Your Comfort Cafe"}"
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
