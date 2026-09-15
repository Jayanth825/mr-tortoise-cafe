import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles
} from 'lucide-react';

export const MenuLightboxModal = ({
  category,
  categories,
  isOpen,
  onClose,
  onSelectCategory
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setRotation(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, category, onClose]);

  if (!isOpen || !category) return null;

  const currentIndex = categories.findIndex((c) => c.id === category.id);
  const prevCategory = categories[(currentIndex - 1 + categories.length) % categories.length];
  const nextCategory = categories[(currentIndex + 1) % categories.length];

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  };

  const handleDoubleTap = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2.2);
    }
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#1B3B2B]/95 backdrop-blur-xl text-[#FAF7F0] select-none"
        >
          {/* Top Bar Header */}
          <div className="relative z-20 flex items-center justify-between px-4 py-3 bg-[#2F4F3E] border-b border-[#3B5D45] shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#FAF7F0] bg-[#1B3B2B] px-3 py-1 rounded-full border border-[#C5B396]/40">
                {category.name}
              </span>
              <span className="hidden sm:inline text-xs text-[#D4C5A9] font-light">
                Double-tap or pinch to zoom
              </span>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                className="p-2 rounded-full bg-[#1B3B2B] hover:bg-[#3B5D45] disabled:opacity-30 disabled:pointer-events-none text-[#FAF7F0] transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold text-[#C5B396] min-w-[3rem] text-center bg-[#1B3B2B] px-2 py-1.5 rounded-full border border-[#3B5D45]">
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={scale >= 3.5}
                className="p-2 rounded-full bg-[#1B3B2B] hover:bg-[#3B5D45] disabled:opacity-30 disabled:pointer-events-none text-[#FAF7F0] transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={handleRotate}
                className="p-2 rounded-full bg-[#1B3B2B] hover:bg-[#3B5D45] text-[#FAF7F0] transition-colors"
                title="Rotate 90°"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="p-2 rounded-full bg-[#1B3B2B] hover:bg-[#3B5D45] text-[#FAF7F0] transition-colors"
                title="Reset Zoom"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="h-5 w-px bg-[#3B5D45] mx-1"></div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#FAF7F0] hover:bg-[#F4EFE6] text-[#1B3B2B] font-bold transition-all active:scale-95 shadow-md"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Full-Screen Canvas */}
          <div
            ref={containerRef}
            className="relative flex-1 overflow-hidden flex items-center justify-center p-2 sm:p-4 lightbox-touch-target cursor-grab active:cursor-grabbing"
            onDoubleClick={handleDoubleTap}
          >
            <motion.div
              drag={scale > 1}
              dragConstraints={containerRef}
              dragElastic={0.1}
              animate={{
                scale: scale,
                rotate: rotation
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
            >
              <img
                src={category.image}
                alt={`${category.name} Menu Board`}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-[#3B5D45]"
                draggable={false}
              />
            </motion.div>

            {/* Prev / Next Arrows */}
            {categories.length > 1 && (
              <>
                <button
                  onClick={() => onSelectCategory(prevCategory.id)}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#2F4F3E]/80 hover:bg-[#FAF7F0] text-[#FAF7F0] hover:text-[#1B3B2B] border border-[#3B5D45] backdrop-blur-md transition-all active:scale-90 shadow-xl"
                  title="Previous Category"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => onSelectCategory(nextCategory.id)}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#2F4F3E]/80 hover:bg-[#FAF7F0] text-[#FAF7F0] hover:text-[#1B3B2B] border border-[#3B5D45] backdrop-blur-md transition-all active:scale-90 shadow-xl"
                  title="Next Category"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Bar Switcher */}
          <div className="relative z-20 px-4 py-3 bg-[#2F4F3E] border-t border-[#3B5D45] flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#D4C5A9] font-light">
              <Sparkles className="w-3.5 h-3.5 text-[#C5B396]" />
              <span>Tap thumbnails below or side arrows to switch menu boards</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto max-w-full py-0.5">
              {categories.map((c) => {
                const isCurrent = c.id === category.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelectCategory(c.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-serif font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                      isCurrent
                        ? 'bg-[#FAF7F0] text-[#1B3B2B] shadow-md'
                        : 'bg-[#1B3B2B] text-[#D4C5A9] hover:bg-[#3B5D45]'
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
