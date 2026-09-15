import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, UtensilsCrossed, Beef, Cake, Wine, Sparkles } from 'lucide-react';

const iconMap = {
  UtensilsCrossed,
  Beef,
  Cake,
  Wine
};

export const CategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <section className="w-full max-w-xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3B2B] flex items-center justify-center gap-2">
          <span>Photographed Menu Boards</span>
        </h2>
        <p className="text-xs text-[#5C6E63] mt-1 font-light">
          Tap any category page below to inspect our full-screen high resolution menu boards.
        </p>
        <div className="w-12 h-0.5 bg-[#C5B396] mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {categories.map((cat, idx) => {
          const IconComponent = iconMap[cat.iconName] || Sparkles;

          return (
            <motion.div
              key={cat.id}
              id={`cat-card-${cat.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onCategoryClick(cat)}
              className="group relative bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#D4C5A9]/70 hover:border-[#2F4F3E]/60 shadow-fine-dining transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              {/* Category Header Bar */}
              <div className="p-4 flex items-center justify-between bg-[#FAF7F0] border-b border-[#D4C5A9]/50">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 text-[#2F4F3E]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#1B3B2B] group-hover:text-[#2F4F3E] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-[#5C6E63] line-clamp-1">{cat.subtitle}</p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2F4F3E] bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 px-2.5 py-1 rounded-full shrink-0">
                  {cat.badge}
                </span>
              </div>

              {/* Menu Board Preview Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE6]">
                <img
                  src={cat.image}
                  alt={`${cat.name} menu board`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Overlay & Zoom Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B]/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>

                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F0]/90 backdrop-blur-md text-[#2F4F3E] border border-[#2F4F3E]/30 text-xs font-semibold shadow-md group-hover:bg-[#2F4F3E] group-hover:text-[#FAF7F0] transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="uppercase text-[10px] tracking-wider font-bold">Inspect Board</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
