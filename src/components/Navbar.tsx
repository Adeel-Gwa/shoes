import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ActiveView } from '../types';

export const Navbar: React.FC = () => {
  const {
    activeView,
    setActiveView,
    navigateToCategory,
    cartCount,
    wishlist,
    setIsCartDrawerOpen,
    setIsSearchModalOpen,
    setIsAccountModalOpen,
    isAdmin,
    setIsAdmin
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    'FREE UK DELIVERY ON ORDERS OVER £75',
    'ORDER BEFORE 8PM FOR NEXT-DAY UK DISPATCH',
    'SPRING / SUMMER 2026 COLLECTION JUST LANDED'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const navLinks: { label: string; view: ActiveView; isSale?: boolean; isHighlight?: boolean }[] = [
    { label: 'New Arrivals', view: 'new-arrivals', isHighlight: true },
    { label: 'Men', view: 'men' },
    { label: 'Women', view: 'women' },
    { label: 'Sneakers', view: 'sneakers' },
    { label: 'Best Sellers', view: 'best-sellers' },
    { label: 'London Edit', view: 'london-edit' },
    { label: 'Sale', view: 'sale', isSale: true }
  ];

  const handleNavClick = (view: ActiveView) => {
    navigateToCategory(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#111111] text-[#E4E4E7] py-2 px-4 text-xs tracking-widest text-center font-medium border-b border-white/10 flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={announcementIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('new-arrivals')}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{announcements[announcementIndex]}</span>
          </motion.div>
        </AnimatePresence>

        {/* Currency / Region pill */}
        <div className="hidden lg:flex items-center gap-2 absolute right-6 text-[11px] text-zinc-400 font-medium">
          <span className="text-zinc-500">🇬🇧 UK (GBP £)</span>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => setActiveView('our-story')}
            className="hover:text-white transition-colors"
          >
            London Flagship
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'luxury-glass bg-white/85 shadow-sm border-b border-zinc-200/80 py-3.5'
            : 'bg-[#FAFAFA] border-b border-zinc-200/50 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-zinc-900 hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2 text-zinc-700 hover:text-black focus:outline-none"
              aria-label="Search shoes"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => {
                setActiveView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col items-start focus:outline-none"
              id="brand-logo-btn"
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 group-hover:tracking-tight transition-all duration-300">
                DŌNO
              </span>
              <span className="text-[9px] tracking-[0.25em] -mt-1 font-semibold uppercase text-zinc-400 group-hover:text-zinc-600 transition-colors">
                BRITISH FOOTWEAR
              </span>
            </button>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => {
              const isActive = activeView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 relative py-1 ${
                    link.isSale
                      ? 'text-rose-600 hover:text-rose-700 font-bold'
                      : isActive
                      ? 'text-black'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.isHighlight && (
                    <span className="absolute -top-2 -right-3 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Admin Switch Button */}
            <button
              onClick={() => {
                if (activeView === 'admin') {
                  setActiveView('home');
                } else {
                  setActiveView('admin');
                }
              }}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                activeView === 'admin'
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200'
              }`}
              title="Store Management & Analytics"
              id="admin-dashboard-toggle-btn"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>ADMIN</span>
            </button>

            {/* Desktop Search Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/80 hover:bg-zinc-200/80 text-zinc-600 hover:text-black text-xs font-medium transition-colors border border-zinc-200/60 mr-1"
              id="desktop-search-btn"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search sneakers...</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-zinc-300 text-zinc-500">
                ⌘K
              </kbd>
            </button>

            {/* Account Icon */}
            <button
              onClick={() => setIsAccountModalOpen(true)}
              className="p-2 text-zinc-800 hover:text-black rounded-full hover:bg-zinc-100 transition-colors relative"
              aria-label="User Account"
              id="account-btn"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => {
                setActiveView('shop');
                // Could filter wishlist or open view
              }}
              className="p-2 text-zinc-800 hover:text-black rounded-full hover:bg-zinc-100 transition-colors relative"
              aria-label="Wishlist"
              id="wishlist-btn"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="p-2 text-zinc-800 hover:text-black rounded-full hover:bg-zinc-100 transition-colors relative flex items-center"
              aria-label="Shopping Bag"
              id="cart-btn"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-2 w-4 h-4 bg-black text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-zinc-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map(link => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.view)}
                    className="flex items-center justify-between text-left py-2.5 text-base font-semibold tracking-wide uppercase text-zinc-900 border-b border-zinc-100"
                  >
                    <span className={link.isSale ? 'text-rose-600' : ''}>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </button>
                ))}

                <button
                  onClick={() => {
                    setActiveView('our-story');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-left py-2.5 text-base font-semibold tracking-wide uppercase text-zinc-900 border-b border-zinc-100"
                >
                  <span>Our Story & Craft</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>

                <button
                  onClick={() => {
                    setActiveView('admin');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-left py-2.5 text-base font-semibold tracking-wide text-zinc-900 border-b border-zinc-100 bg-zinc-50 px-3 rounded-lg mt-2"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>DŌNO Store Admin</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </button>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-zinc-500">
                <span>Free UK shipping over £75</span>
                <span>Currency: GBP (£)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
