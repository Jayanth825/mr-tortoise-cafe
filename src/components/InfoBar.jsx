import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';

export const InfoBar = ({ restaurantInfo }) => {
  return (
    <section className="w-full max-w-xl mx-auto px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#FAF7F0] rounded-2xl border border-[#D4C5A9] p-4 shadow-fine-dining flex flex-col sm:flex-row items-center justify-around gap-3 text-center sm:text-left text-xs text-[#5C6E63]"
      >
        {/* Hours */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-full bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 text-[#2F4F3E] shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold text-[#1B3B2B] tracking-wider">Opening Hours</span>
            <span className="font-medium text-[#1C2B22]">{restaurantInfo?.hours || "11:00 AM – 10:30 PM"}</span>
          </div>
        </div>

        <div className="hidden sm:block w-px h-8 bg-[#D4C5A9]/60"></div>

        {/* Address */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-full bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 text-[#2F4F3E] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold text-[#1B3B2B] tracking-wider">Location</span>
            <span className="font-medium text-[#1C2B22]">{restaurantInfo?.address || "Kakinada, Ramanaipeta"}</span>
          </div>
        </div>

        <div className="hidden sm:block w-px h-8 bg-[#D4C5A9]/60"></div>

        {/* Phone */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-full bg-[#2F4F3E]/10 border border-[#2F4F3E]/20 text-[#2F4F3E] shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold text-[#1B3B2B] tracking-wider">Call Directly</span>
            <a href={`tel:${restaurantInfo?.phone || '+919876543210'}`} className="font-medium text-[#1C2B22] hover:text-[#2F4F3E] transition-colors">
              {restaurantInfo?.phone || "+91 98765 43210"}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InfoBar;
