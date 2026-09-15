import React, { useState } from 'react';
import { menuConfig } from './config/menuConfig';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { CategoryGrid } from './components/CategoryGrid';
import { MenuLightboxModal } from './components/MenuLightboxModal';
import { InteractiveMenuList } from './components/InteractiveMenuList';
import { GoogleReviewCTA } from './components/GoogleReviewCTA';
import { Footer } from './components/Footer';

export function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxCategory, setLightboxCategory] = useState(null);

  const handleOpenCategoryLightbox = (cat) => {
    setLightboxCategory(cat);
  };

  const handleCloseLightbox = () => {
    setLightboxCategory(null);
  };

  const handleSelectLightboxCategory = (categoryId) => {
    const found = menuConfig.categories.find((c) => c.id === categoryId);
    if (found) {
      setLightboxCategory(found);
      setActiveCategory(categoryId);
    }
  };

  const handleCategoryNavSelect = (catId) => {
    setActiveCategory(catId);
    if (catId !== 'all') {
      const el = document.getElementById(`cat-card-${catId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleOpenReview = () => {
    window.open(menuConfig.googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1C2826] flex flex-col font-sans selection:bg-[#2F4F3E] selection:text-[#FAF7F0]">
      {/* 1. Header Section */}
      <Header
        restaurantInfo={menuConfig.restaurantInfo}
        onOpenReview={handleOpenReview}
      />

      {/* 2. Category Navigation Bar (Chef's Choice & All Time Favorite) */}
      <CategoryNav
        categories={menuConfig.categories}
        activeCategory={activeCategory}
        onSelectCategory={handleCategoryNavSelect}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full pb-8">
        {/* Photographed Menu Categories Grid & Lightbox Triggers */}
        <CategoryGrid
          categories={menuConfig.categories}
          onCategoryClick={handleOpenCategoryLightbox}
        />

        {/* Full Screen Menu Lightbox Modal with Zoom & Pan */}
        <MenuLightboxModal
          isOpen={!!lightboxCategory}
          category={lightboxCategory}
          categories={menuConfig.categories}
          onClose={handleCloseLightbox}
          onSelectCategory={handleSelectLightboxCategory}
        />

        {/* Interactive Search & Dietary Filter Dish Directory */}
        <InteractiveMenuList
          items={menuConfig.items}
          currency={menuConfig.restaurantInfo.currency}
          activeCategory={activeCategory}
        />

        {/* 3. Google Review CTA Banner */}
        <GoogleReviewCTA googleReviewUrl={menuConfig.googleReviewUrl} />
      </main>

      {/* 4. Social Links Footer */}
      <Footer
        restaurantInfo={menuConfig.restaurantInfo}
        socialLinks={menuConfig.socialLinks}
      />
    </div>
  );
}

export default App;
