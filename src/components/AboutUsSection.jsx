import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, HeartHandshake } from 'lucide-react';

export const AboutUsSection = ({ restaurantInfo }) => {
  return (
    <section className="w-full max-w-xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#F4EFE6] rounded-3xl p-6 sm:p-8 border border-[#D4C5A9] shadow-fine-dining relative overflow-hidden"
      >
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#2F4F3E]/10 text-[#2F4F3E] border border-[#2F4F3E]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2F4F3E]" />
            <span>Our Story</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3B2B] mb-3">
            About {restaurantInfo?.name || "Mr. Tortoise Cafe & Fine Dining"}
          </h2>

          <div className="w-12 h-0.5 bg-[#C5B396] mb-4 rounded-full"></div>

          <p className="text-sm text-[#5C6E63] font-light leading-relaxed max-w-md">
            Welcome to <span className="font-semibold text-[#1B3B2B]">Mr. Tortoise</span> — Kakinada's premier comfort cafe and fine dining destination. We bring together artisanal coffee, hand-crafted refreshing mocktails, authentic Hyderabadi biryanis, gourmet starters, and indulge-worthy desserts under one welcoming roof.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 w-full pt-4 border-t border-[#D4C5A9]/60">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-full bg-[#FAF7F0] border border-[#D4C5A9] text-[#2F4F3E] shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1B3B2B]">Fresh Ingredients</h4>
                <p className="text-[11px] text-[#5C6E63] font-light">Chef-crafted daily</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-full bg-[#FAF7F0] border border-[#D4C5A9] text-[#2F4F3E] shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1B3B2B]">Comfort Atmosphere</h4>
                <p className="text-[11px] text-[#5C6E63] font-light">Warm & hospitable</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
