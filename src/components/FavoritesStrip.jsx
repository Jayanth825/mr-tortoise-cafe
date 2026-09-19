import React from 'react';
import { motion } from 'framer-motion';
import { Star, Flame, Sparkles } from 'lucide-react';

export const FavoritesStrip = ({ onSelectCategory }) => {
  const favorites = [
    {
      id: 'mains',
      name: 'Hyderabadi Chicken Biryani',
      category: 'Mains',
      badge: "Chef's Special",
      image: '/menu/mains.jpg',
      price: '₹280',
    },
    {
      id: 'starters',
      name: 'Crispy Starter Platter',
      category: 'Starters',
      badge: 'Bestseller',
      image: '/menu/starters.jpg',
      price: '₹190',
    },
    {
      id: 'desserts',
      name: 'Artisan Chocolate Sandwich',
      category: 'Desserts',
      badge: 'Sweet Favorite',
      image: '/menu/desserts.jpg',
      price: '₹160',
    },
    {
      id: 'drinks',
      name: 'Chilled Artisanal Mocktails',
      category: 'Drinks',
      badge: 'Refreshing',
      image: '/menu/drinks.jpg',
      price: '₹140',
    },
  ];

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1B3B2B] flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#C5B396]" />
            <span>Our Favorites</span>
          </h2>
          <p className="text-xs text-[#5C6E63] font-light">Handpicked signature creations beloved by our guests</p>
        </div>
        <span className="text-[11px] font-semibold text-[#2F4F3E] uppercase tracking-wider bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 px-2.5 py-1 rounded-full">
          Must Try
        </span>
      </div>

      {/* Horizontal Scrollable Image Cards */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 -mx-4 px-4">
        {favorites.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => onSelectCategory && onSelectCategory(item.id)}
            className="shrink-0 w-52 sm:w-60 bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#D4C5A9] shadow-fine-dining cursor-pointer group active:scale-[0.98] transition-all"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE6]">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#FAF7F0]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2F4F3E] border border-[#2F4F3E]/20 shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#C5B396] text-[#C5B396]" />
                <span>{item.badge}</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF7F0] border-t border-[#D4C5A9]/50 flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1B3B2B] group-hover:text-[#2F4F3E] transition-colors line-clamp-1">
                  {item.name}
                </h4>
                <p className="text-[10px] text-[#5C6E63]">{item.category}</p>
              </div>
              <span className="text-xs font-bold text-[#2F4F3E] bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 px-2 py-1 rounded-lg shrink-0">
                {item.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FavoritesStrip;
