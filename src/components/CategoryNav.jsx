import React from 'react';
import { UtensilsCrossed, Beef, Cake, Wine, Sparkles, Grid } from 'lucide-react';

const iconMap = {
  UtensilsCrossed,
  Beef,
  Cake,
  Wine
};

export const CategoryNav = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <nav className="sticky top-0 z-30 w-full bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#D4C5A9]/60 px-3 py-3 shadow-sm">
      <div className="max-w-xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-1">
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
            activeCategory === 'all'
              ? 'bg-[#2F4F3E] text-[#FAF7F0] shadow-md border border-[#1B3B2B]'
              : 'text-[#2F4F3E] bg-[#F4EFE6] hover:bg-[#EDE6D8] border border-[#D4C5A9]/60'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>All Menu</span>
        </button>

        {categories.map((cat) => {
          const IconComponent = iconMap[cat.iconName] || Sparkles;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-[#2F4F3E] text-[#FAF7F0] shadow-md border border-[#1B3B2B]'
                  : 'text-[#2F4F3E] bg-[#F4EFE6] hover:bg-[#EDE6D8] border border-[#D4C5A9]/60'
              }`}
            >
              <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5B396]' : 'text-[#2F4F3E]'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
