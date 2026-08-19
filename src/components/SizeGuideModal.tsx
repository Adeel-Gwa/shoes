import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Ruler, Check, Footprints, Info } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useStore();
  const [activeGender, setActiveGender] = useState<'Men' | 'Women'>('Men');

  const sizeChart = [
    { uk: 'UK 6', usM: 'US 7', usW: 'US 8', eu: 'EU 39', cm: '24.5 cm' },
    { uk: 'UK 6.5', usM: 'US 7.5', usW: 'US 8.5', eu: 'EU 40', cm: '25.0 cm' },
    { uk: 'UK 7', usM: 'US 8', usW: 'US 9', eu: 'EU 40.5', cm: '25.5 cm' },
    { uk: 'UK 7.5', usM: 'US 8.5', usW: 'US 9.5', eu: 'EU 41', cm: '26.0 cm' },
    { uk: 'UK 8', usM: 'US 9', usW: 'US 10', eu: 'EU 42', cm: '26.5 cm' },
    { uk: 'UK 8.5', usM: 'US 9.5', usW: 'US 10.5', eu: 'EU 42.5', cm: '27.0 cm' },
    { uk: 'UK 9', usM: 'US 10', usW: 'US 11', eu: 'EU 43', cm: '27.5 cm' },
    { uk: 'UK 9.5', usM: 'US 10.5', usW: 'US 11.5', eu: 'EU 44', cm: '28.0 cm' },
    { uk: 'UK 10', usM: 'US 11', usW: 'US 12', eu: 'EU 44.5', cm: '28.5 cm' },
    { uk: 'UK 10.5', usM: 'US 11.5', usW: 'US 12.5', eu: 'EU 45', cm: '29.0 cm' },
    { uk: 'UK 11', usM: 'US 12', usW: 'US 13', eu: 'EU 46', cm: '29.5 cm' },
    { uk: 'UK 12', usM: 'US 13', usW: 'US 14', eu: 'EU 47', cm: '30.5 cm' }
  ];

  return (
    <AnimatePresence>
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSizeGuideOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-zinc-200 flex items-center justify-between bg-[#FAFAFA]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold uppercase text-zinc-950 tracking-tight">
                    DŌNO SIZE & FIT GUIDE
                  </h3>
                  <p className="text-xs text-zinc-500">
                    British standard sizing & international conversion
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="p-2 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Fit Guidance Notice */}
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-600 space-y-1">
                  <p className="font-bold text-zinc-900 uppercase">
                    TRUE TO BRITISH SIZE RECOMMENDATION
                  </p>
                  <p>
                    All DŌNO silhouettes are built on standard British footwear lasts. If you normally wear a UK 9 in Nike or Adidas, we suggest ordering a UK 9. For wider feet, consider half a size larger.
                  </p>
                </div>
              </div>

              {/* Conversion Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                  INTERNATIONAL FOOTWEAR CONVERSION TABLE
                </h4>

                <div className="overflow-x-auto rounded-xl border border-zinc-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-zinc-100 text-zinc-900 uppercase font-extrabold border-b border-zinc-200">
                      <tr>
                        <th className="py-3 px-4">UK (British)</th>
                        <th className="py-3 px-4">EU</th>
                        <th className="py-3 px-4">US Men</th>
                        <th className="py-3 px-4">US Women</th>
                        <th className="py-3 px-4">Foot Length (CM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 font-mono-num">
                      {sizeChart.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'}
                        >
                          <td className="py-2.5 px-4 font-bold text-zinc-950">
                            {row.uk}
                          </td>
                          <td className="py-2.5 px-4 text-zinc-700">{row.eu}</td>
                          <td className="py-2.5 px-4 text-zinc-700">{row.usM}</td>
                          <td className="py-2.5 px-4 text-zinc-700">{row.usW}</td>
                          <td className="py-2.5 px-4 text-zinc-500 font-mono">{row.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Measure */}
              <div className="space-y-3 pt-2 border-t border-zinc-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  HOW TO MEASURE YOUR FEET AT HOME
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-1">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">
                      1
                    </span>
                    <p className="font-bold text-zinc-900">Place Paper</p>
                    <p className="text-zinc-500 text-[11px]">
                      Stand flat on a piece of paper against a wall wearing normal socks.
                    </p>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-1">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">
                      2
                    </span>
                    <p className="font-bold text-zinc-900">Mark Distance</p>
                    <p className="text-zinc-500 text-[11px]">
                      Mark the furthest edge of your longest toe and back of your heel.
                    </p>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-1">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">
                      3
                    </span>
                    <p className="font-bold text-zinc-900">Compare Chart</p>
                    <p className="text-zinc-500 text-[11px]">
                      Measure the length in cm and match with the table above.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-zinc-200 bg-[#FAFAFA] flex justify-end">
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors"
              >
                GOT IT, CLOSE GUIDE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
