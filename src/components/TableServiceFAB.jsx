import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle2, Droplets, Receipt, X } from 'lucide-react';

export const TableServiceFAB = ({ isVisible, onCloseToast, toastMessage, onCallWaiter }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleAction = (type, label) => {
    onCallWaiter(label);
    setShowOptions(false);
  };

  return (
    <>
      {/* Toast Alert Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-sm glass-panel p-3.5 rounded-2xl border border-amber-500/50 shadow-2xl flex items-center justify-between gap-3 text-stone-100"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-200">Table Notification Sent</p>
                <p className="text-[11px] text-stone-300">{toastMessage}</p>
              </div>
            </div>
            <button
              onClick={onCloseToast}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-100"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="flex flex-col gap-2 p-2 rounded-2xl glass-panel border border-stone-800 shadow-2xl min-w-[170px]"
            >
              <button
                onClick={() => handleAction('water', 'Glass of water requested for Table #04')}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors text-left"
              >
                <Droplets className="w-4 h-4 text-sky-400" />
                <span>Request Water</span>
              </button>

              <button
                onClick={() => handleAction('waiter', 'Server notified to visit Table #04')}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors text-left"
              >
                <Bell className="w-4 h-4 text-amber-400" />
                <span>Call Waiter</span>
              </button>

              <button
                onClick={() => handleAction('bill', 'Check/Bill requested for Table #04')}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors text-left"
              >
                <Receipt className="w-4 h-4 text-emerald-400" />
                <span>Request Bill</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowOptions((prev) => !prev)}
          className="p-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-2xl shadow-amber-950/80 border-2 border-amber-300/40 active:scale-95 transition-all flex items-center justify-center group"
          title="Table Service Actions"
        >
          <Bell className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </>
  );
};
