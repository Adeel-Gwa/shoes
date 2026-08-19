import React, { useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { ToastContainer } from './components/ToastContainer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { BestSellers } from './components/BestSellers';
import { NewArrivals } from './components/NewArrivals';
import { BrandStory } from './components/BrandStory';
import { LondonEditorial } from './components/LondonEditorial';
import { ReviewsSection } from './components/ReviewsSection';
import { TrustSection } from './components/TrustSection';
import { InstagramGrid } from './components/InstagramGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CollectionPage } from './components/CollectionPage';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistPage } from './components/WishlistPage';
import { StoryPage } from './components/StoryPage';
import { AdminDashboard } from './components/AdminDashboard';

const MainLayout: React.FC = () => {
  const { activeView } = useStore();

  // Scroll to top upon view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-zinc-900 selection:bg-black selection:text-white font-sans antialiased">
      {/* Toast Notification Layer */}
      <ToastContainer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <SearchModal />
      <SizeGuideModal />

      {/* Primary Sticky Header */}
      {activeView !== 'admin' && <Navbar />}

      {/* Main View Router */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            <Hero />
            <FeaturedCategories />
            <BestSellers />
            <NewArrivals />
            <BrandStory />
            <LondonEditorial />
            <ReviewsSection />
            <TrustSection />
            <InstagramGrid />
            <Newsletter />
          </>
        )}

        {(activeView === 'shop' ||
          activeView === 'men' ||
          activeView === 'women' ||
          activeView === 'sneakers' ||
          activeView === 'new-arrivals' ||
          activeView === 'best-sellers' ||
          activeView === 'london-edit' ||
          activeView === 'sale') && (
          <>
            <CollectionPage />
            <TrustSection />
            <Newsletter />
          </>
        )}

        {activeView === 'product-detail' && (
          <>
            <ProductDetailPage />
            <TrustSection />
            <Newsletter />
          </>
        )}

        {activeView === 'checkout' && <CheckoutModal />}

        {activeView === 'wishlist' && (
          <>
            <WishlistPage />
            <TrustSection />
          </>
        )}

        {activeView === 'our-story' && (
          <>
            <StoryPage />
            <Newsletter />
          </>
        )}

        {activeView === 'admin' && <AdminDashboard />}
      </main>

      {/* Primary Comprehensive British Footwear Footer */}
      {activeView !== 'admin' && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainLayout />
    </StoreProvider>
  );
}
