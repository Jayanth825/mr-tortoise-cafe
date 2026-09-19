import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, BookOpen, Phone } from 'lucide-react';

// Custom SVG Icons for Google, Instagram, and WhatsApp
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-5 h-5 text-[#E4405F]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.286-1.123z" />
  </svg>
);

export const QuickLinks = ({ googleReviewUrl, socialLinks }) => {
  const handleMenuScroll = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const links = [
    {
      id: 'google-reviews',
      title: 'Google Reviews',
      subtitle: 'Leave us a review on Google',
      icon: GoogleIcon,
      href: googleReviewUrl,
      isExternal: true,
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: 'Follow us on Instagram',
      icon: InstagramIcon,
      href: 'https://www.instagram.com/mr._.tortoise/?hl=en',
      isExternal: true,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Chat with us on WhatsApp',
      icon: WhatsAppIcon,
      href: socialLinks?.whatsapp || 'https://wa.me/919876543210',
      isExternal: true,
    },
    {
      id: 'location',
      title: 'Location',
      subtitle: 'Find us on Google Maps',
      icon: () => <MapPin className="w-5 h-5 text-[#EA4335]" />,
      href: socialLinks?.maps || 'https://maps.google.com/?q=Mr.+Tortoise+cafeteria+Kakinada',
      isExternal: true,
    },
    {
      id: 'menu',
      title: 'Menu',
      subtitle: 'Explore our menu',
      icon: () => <BookOpen className="w-5 h-5 text-[#2F4F3E]" />,
      onClick: handleMenuScroll,
      isExternal: false,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      subtitle: 'Contact us directly',
      icon: () => <Phone className="w-5 h-5 text-[#2F4F3E]" />,
      href: socialLinks?.phone || 'tel:+919876543210',
      isExternal: false,
    },
  ];

  return (
    <section className="w-full max-w-xl mx-auto px-4 -mt-6 relative z-20 mb-8">
      {/* White/cream rounded card container holding all rows */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#FAF7F0] rounded-2xl sm:rounded-3xl border border-[#D4C5A9] shadow-fine-dining overflow-hidden divide-y divide-[#D4C5A9]/50"
      >
        {links.map((link) => {
          const IconComponent = link.icon;

          const rowContent = (
            <div className="flex items-center justify-between p-4 sm:p-4.5 group hover:bg-[#F4EFE6] active:bg-[#EDE6D8] transition-colors cursor-pointer">
              <div className="flex items-center gap-3.5">
                {/* Circular badge for icon */}
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#D4C5A9]/60 shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#1C2B22] group-hover:text-[#2F4F3E] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-[#5C6E63] font-light">
                    {link.subtitle}
                  </p>
                </div>
              </div>

              {/* Chevron arrow on the right */}
              <div className="text-[#8A9B90] group-hover:text-[#2F4F3E] group-hover:translate-x-1 transition-all p-1">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          );

          if (link.isExternal) {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left"
              >
                {rowContent}
              </a>
            );
          } else if (link.onClick) {
            return (
              <button
                key={link.id}
                onClick={link.onClick}
                className="w-full text-left focus:outline-none"
              >
                {rowContent}
              </button>
            );
          } else {
            return (
              <a key={link.id} href={link.href} className="block text-left">
                {rowContent}
              </a>
            );
          }
        })}
      </motion.div>
    </section>
  );
};

export default QuickLinks;
