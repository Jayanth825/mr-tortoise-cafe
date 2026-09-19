import React, { useState } from 'react';
import { menuConfig } from './config/menuConfig';
import { HeroSection } from './components/HeroSection';
import { QuickLinks } from './components/QuickLinks';
import { AboutUsSection } from './components/AboutUsSection';
import { FavoritesStrip } from './components/FavoritesStrip';
import { CategoryNav } from './components/CategoryNav';
import { CategoryGrid } from './components/CategoryGrid';
import { MenuLightboxModal } from './components/MenuLightboxModal';
import { InteractiveMenuList } from './components/InteractiveMenuList';
import { GoogleReviewCTA } from './components/GoogleReviewCTA';
import { InfoBar } from './components/InfoBar';
import { Footer } from './components/Footer';
import { TableServiceFAB } from './components/TableServiceFAB';

export function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxCategory, setLightboxCategory] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

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

  const handleCallWaiter = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1C2B22] flex flex-col font-sans selection:bg-[#2F4F3E] selection:text-[#FAF7F0]">
      {/* 1. HERO SECTION (top) */}
      <HeroSection restaurantInfo={menuConfig.restaurantInfo} />

      {/* 2. QUICK LINKS LIST (below hero, white/cream card with rounded corners) */}
      <QuickLinks
        googleReviewUrl={menuConfig.googleReviewUrl}
        socialLinks={menuConfig.socialLinks}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full pb-8">
        {/* About Us Section */}
        <AboutUsSection restaurantInfo={menuConfig.restaurantInfo} />

        {/* Our Favorites Image Strip */}
        <FavoritesStrip onSelectCategory={handleCategoryNavSelect} />

        {/* Category Navigation Filter Pills */}
        <CategoryNav
          categories={menuConfig.categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryNavSelect}
        />

        {/* Photographed Menu Categories Grid & Lightbox Triggers (id="menu-section") */}
        <CategoryGrid
          categories={menuConfig.categories}
          onCategoryClick={handleOpenCategoryLightbox}
        />

        {/* Full Screen Menu Lightbox Modal */}
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

        {/* Opening Hours / Address / Phone Info Bar */}
        <InfoBar restaurantInfo={menuConfig.restaurantInfo} />

        {/* Google Review CTA Banner */}
        <GoogleReviewCTA googleReviewUrl={menuConfig.googleReviewUrl} />
      </main>

      {/* Social Links Footer */}
      <Footer
        restaurantInfo={menuConfig.restaurantInfo}
        socialLinks={menuConfig.socialLinks}
      />

      {/* Table Service FAB & Notification Toast */}
      <TableServiceFAB
        isVisible={true}
        toastMessage={toastMessage}
        onCloseToast={() => setToastMessage(null)}
        onCallWaiter={handleCallWaiter}
      />
    </div>
  );
}

export default App;
