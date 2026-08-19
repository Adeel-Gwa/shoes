import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ActiveView } from '../types';

export const Footer: React.FC = () => {
  const { navigateToCategory, setActiveView, setIsSizeGuideOpen } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#E4E4E7] pt-16 sm:pt-20 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Massive Typographic Brand statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-zinc-800 gap-8">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-2">
              BRITISH FOOTWEAR COMPANY
            </span>
            <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white block">
              DŌNO
            </span>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Step Into Your Standard. High-performance silhouettes, luxury materials, and contemporary British design.
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span>🇬🇧 London Flagship: 14 Poland St, Soho</span>
              <button
                onClick={scrollToTop}
                className="ml-auto w-9 h-9 rounded-full bg-zinc-800 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 text-sm">
          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => navigateToCategory('men')}
                  className="hover:text-white transition-colors"
                >
                  Men's Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('women')}
                  className="hover:text-white transition-colors"
                >
                  Women's Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('sneakers')}
                  className="hover:text-white transition-colors"
                >
                  Sneakers & Runners
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('new-arrivals')}
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('london-edit')}
                  className="hover:text-white transition-colors"
                >
                  London Capsule
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('sale')}
                  className="text-rose-400 hover:text-rose-300 font-semibold transition-colors"
                >
                  Sale & Archives
                </button>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              CLIENT CARE
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  Size Guide & Measuring
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Track UK Order
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Free UK Returns (30 Days)
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Delivery & Shipping
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Shoe Care & Waterproofing
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Contact London Support
                </span>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              ABOUT DŌNO
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    setActiveView('our-story');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Our Story & Manifesto
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Northampton Craftsmanship
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Circular Materials & Eco-EVA
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  London Flagship Store
                </span>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('admin');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  Store Admin Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Follow & Badges */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              FOLLOW
            </h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Instagram (@donostore)
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  TikTok
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Pinterest
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  YouTube Journal
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-[11px] text-zinc-400">
                <span className="text-white font-bold block mb-0.5">LONDON HQ</span>
                Mon–Sat 10:00 – 19:00 GMT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & British Design Tag */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 DŌNO Footwear Ltd. All Rights Reserved.</span>
            <span className="text-zinc-700">|</span>
            <span className="font-semibold text-zinc-300">Designed in Britain.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-zinc-300 cursor-pointer">Cookie Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">UK VAT 892 1029 44</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
