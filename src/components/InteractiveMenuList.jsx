import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Leaf, Award, ShieldCheck, Filter, Sparkles } from 'lucide-react';

export const InteractiveMenuList = ({ items, currency, activeCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter items based on category, search term, and dietary requirement
  const filteredItems = items.filter((item) => {
    // Category match
    if (activeCategory !== 'all' && item.categoryId !== activeCategory) {
      return false;
    }

    // Search term match
    if (
      searchTerm &&
      !item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Dietary filter match
    if (activeFilter === 'veg' && !item.tags.includes('isVeg')) return false;
    if (activeFilter === 'vegan' && !item.tags.includes('isVegan')) return false;
    if (activeFilter === 'gf' && !item.tags.includes('isGlutenFree')) return false;
    if (activeFilter === 'chef' && !item.tags.includes('isChefSpecial')) return false;

    return true;
  });

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-8 border-t border-[#D4C5A9]/50">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-2xl font-serif font-bold text-[#1B3B2B] flex items-center gap-2">
            <span>Dish Directory</span>
          </h2>
          <span className="text-[11px] uppercase tracking-wider text-[#2F4F3E] font-semibold bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 px-3 py-1 rounded-full">
            {filteredItems.length} Selection{filteredItems.length === 1 ? '' : 's'}
          </span>
        </div>
        <p className="text-xs text-[#5C6E63] font-light">
          Search culinary offerings or filter by dietary preference.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C6E63]" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search biryani, paneer, smoothie, chocolate..."
          className="w-full pl-11 pr-10 py-3 bg-[#F4EFE6] border border-[#D4C5A9] rounded-2xl text-xs text-[#1C2B22] placeholder-[#8A9B90] focus:outline-none focus:border-[#2F4F3E] focus:ring-1 focus:ring-[#2F4F3E] transition-all shadow-inner"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#5C6E63] hover:text-[#2F4F3E]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Dietary Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4">
        {[
          { id: 'all', label: 'All Dishes', icon: Filter },
          { id: 'veg', label: 'Vegetarian', icon: Leaf },
          { id: 'vegan', label: 'Vegan', icon: Leaf },
          { id: 'gf', label: 'Gluten-Free', icon: ShieldCheck },
          { id: 'chef', label: "Chef's Choice", icon: Award }
        ].map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all uppercase tracking-wider ${
                isActive
                  ? 'bg-[#2F4F3E] text-[#FAF7F0] shadow-md border border-[#1B3B2B]'
                  : 'bg-[#F4EFE6] border border-[#D4C5A9]/70 text-[#5C6E63] hover:text-[#2F4F3E] hover:bg-[#EDE6D8]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[11px]">{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dishes List Cards */}
      <div className="space-y-3.5">
        {filteredItems.length === 0 ? (
          <div className="text-center py-10 bg-[#F4EFE6] rounded-2xl border border-[#D4C5A9]/60 p-6">
            <p className="text-base font-serif font-bold text-[#1B3B2B]">No dishes match your selection.</p>
            <p className="text-xs text-[#5C6E63] mt-1">Try clearing your search terms or dietary filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="mt-3 text-xs uppercase tracking-widest font-bold text-[#2F4F3E] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredItems.map((dish) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-[#F4EFE6] rounded-2xl border border-[#D4C5A9]/70 hover:border-[#2F4F3E]/40 transition-all shadow-fine-dining"
            >
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-serif font-bold text-[#1B3B2B]">{dish.name}</h3>

                    {/* Dietary Badges */}
                    {dish.tags.includes('isVeg') && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold bg-[#E6F0EA] text-[#2F4F3E] border border-[#2F4F3E]/20">
                        VEG
                      </span>
                    )}
                    {dish.tags.includes('isVegan') && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold bg-[#E6F0EA] text-[#3B5D45] border border-[#3B5D45]/20">
                        VEGAN
                      </span>
                    )}
                    {dish.tags.includes('isGlutenFree') && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold bg-[#F5EFE6] text-[#8C7355] border border-[#8C7355]/30">
                        GF
                      </span>
                    )}
                    {dish.tags.includes('isChefSpecial') && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold bg-[#F7EFE5] text-[#9A6B38] border border-[#9A6B38]/30 flex items-center gap-0.5">
                        <Award className="w-2.5 h-2.5" /> CHEF'S CHOICE
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs font-bold text-[#FAF7F0] bg-[#2F4F3E] px-3 py-1 rounded-full border border-[#1B3B2B] shrink-0 shadow-sm">
                  {currency}{dish.price}
                </div>
              </div>

              <p className="text-xs text-[#5C6E63] leading-relaxed mb-2.5 font-light">{dish.description}</p>

              <div className="flex items-center justify-between text-[11px] text-[#8A9B90] pt-2 border-t border-[#D4C5A9]/40">
                <span>Cal: {dish.calories}</span>
                {dish.allergens && dish.allergens.length > 0 && (
                  <span>Contains: {dish.allergens.join(', ')}</span>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};
