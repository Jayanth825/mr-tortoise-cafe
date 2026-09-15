import React from 'react';
import { Camera, Phone, MapPin, QrCode, Video } from 'lucide-react';

export const Footer = ({ restaurantInfo, socialLinks }) => {
  return (
    <footer className="w-full bg-[#FAF7F0] border-t border-[#D4C5A9]/60 pt-10 pb-12 px-4 text-[#5C6E63]">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Brand Name */}
        <h4 className="text-xl font-serif font-bold text-[#1B3B2B] mb-1">
          {restaurantInfo.name}
        </h4>
        <p className="text-xs text-[#5C6E63] mb-6 max-w-xs font-light">
          {restaurantInfo.address} • {restaurantInfo.hours}
        </p>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#F4EFE6] hover:bg-[#2F4F3E] hover:text-[#FAF7F0] text-[#2F4F3E] border border-[#D4C5A9]/70 transition-all active:scale-95 shadow-sm flex items-center justify-center"
              title="Instagram Photos"
            >
              <Camera className="w-4 h-4" />
            </a>
          )}

          {socialLinks.whatsapp && (
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#F4EFE6] hover:bg-[#2F4F3E] hover:text-[#FAF7F0] text-[#2F4F3E] border border-[#D4C5A9]/70 transition-all active:scale-95 shadow-sm flex items-center justify-center"
              title="WhatsApp Service"
            >
              <Phone className="w-4 h-4" />
            </a>
          )}

          {socialLinks.youtube && (
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#F4EFE6] hover:bg-[#2F4F3E] hover:text-[#FAF7F0] text-[#2F4F3E] border border-[#D4C5A9]/70 transition-all active:scale-95 shadow-sm flex items-center justify-center"
              title="YouTube Channel"
            >
              <Video className="w-4 h-4" />
            </a>
          )}

          {socialLinks.maps && (
            <a
              href={socialLinks.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#F4EFE6] hover:bg-[#2F4F3E] hover:text-[#FAF7F0] text-[#2F4F3E] border border-[#D4C5A9]/70 transition-all active:scale-95 shadow-sm flex items-center justify-center"
              title="Google Maps Location"
            >
              <MapPin className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* NFC Scan Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D4C5A9]/70 text-[11px] text-[#5C6E63] mb-4">
          <QrCode className="w-3.5 h-3.5 text-[#2F4F3E]" />
          <span>Scanned via Table NFC Tag • Instant Menu</span>
        </div>

        <p className="text-[11px] text-[#8A9B90]">
          © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
