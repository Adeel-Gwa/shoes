import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Heart,
  ShoppingBag,
  Ruler,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Share2,
  Check,
  Sparkles,
  ArrowLeft,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { ProductReview } from '../types';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    setActiveView,
    addProductReview,
    showToast
  } = useStore();

  const product = selectedProduct || products[0];

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  // Review Form State
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newFit, setNewFit] = useState<'Runs Small' | 'True to Size' | 'Runs Large'>('True to Size');

  const currentColor = product.colors[selectedColorIdx] || product.colors[0];
  const galleryImages = currentColor.gallery && currentColor.gallery.length > 0
    ? currentColor.gallery
    : [currentColor.image, currentColor.secondaryImage].filter(Boolean);

  const isWishlisted = isInWishlist(product.id);

  // Reset selected image when color changes
  useEffect(() => {
    setSelectedImageIdx(0);
  }, [selectedColorIdx]);

  // Default size selection
  useEffect(() => {
    if (product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[2] || product.sizes[0]);
    }
  }, [product, selectedSize]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a UK size', 'Choose your size before adding to bag.', 'error');
      return;
    }
    addToCart(product, currentColor.name, selectedSize, quantity);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopiedLink(true);
      showToast('Link copied to clipboard ✓');
      setTimeout(() => setIsCopiedLink(false), 2500);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newTitle.trim() || !newComment.trim()) {
      showToast('Please complete all fields', undefined, 'error');
      return;
    }
    addProductReview(product.id, {
      author: newAuthor.trim(),
      location: newLocation.trim() || 'United Kingdom',
      rating: newRating,
      title: newTitle.trim(),
      comment: newComment.trim(),
      verified: true,
      fit: newFit
    });
    setShowReviewForm(false);
    setNewAuthor('');
    setNewLocation('');
    setNewTitle('');
    setNewComment('');
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.gender === product.gender))
    .slice(0, 4);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(prev => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => setActiveView('shop')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collection</span>
          </button>

          <div className="text-xs text-zinc-400 font-medium">
            <span>DŌNO / {product.gender.toUpperCase()} / {product.category.toUpperCase()} / {product.name}</span>
          </div>
        </div>

        {/* Main Product Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Gallery: 7 Columns */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Large Image Stage */}
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <img
                src={galleryImages[selectedImageIdx] || currentColor.image}
                alt={`${product.name} - View ${selectedImageIdx + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Tag Badge */}
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-extrabold uppercase px-3 py-1.5 bg-black text-white rounded tracking-wider shadow-md">
                    {product.tag}
                  </span>
                </div>
              )}

              {/* Fullscreen Angle Number */}
              <div className="absolute bottom-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] text-white font-mono">
                ANGLE 0{selectedImageIdx + 1} / 0{galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-zinc-100 border-2 transition-all ${
                    selectedImageIdx === idx
                      ? 'border-black ring-2 ring-black/10 scale-95'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* London Studio Footnote */}
            <div className="p-4 bg-zinc-100/70 rounded-xl border border-zinc-200 text-xs text-zinc-600 flex items-center justify-between">
              <span className="font-semibold text-zinc-900">BRITISH PATTERNED LAST</span>
              <span>Model Reference: {product.slug.toUpperCase()}</span>
            </div>
          </div>

          {/* Right Info Column: 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header & Rating */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-zinc-500">
                  DŌNO FOOTWEAR
                </span>

                <button
                  onClick={handleShare}
                  className="text-xs text-zinc-500 hover:text-black flex items-center gap-1 transition-colors"
                  title="Share product"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{isCopiedLink ? 'Copied' : 'Share'}</span>
                </button>
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-zinc-950 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-zinc-500 font-normal">
                {product.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  {product.rating} / 5.0
                </span>
                <span className="text-xs text-zinc-400">
                  ({product.reviewCount} verified UK reviews)
                </span>
              </div>
            </div>

            {/* Price & Free Delivery Notice */}
            <div className="p-4 bg-white rounded-2xl border border-zinc-200/90 shadow-sm space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-mono-num">
                  £{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-zinc-400 line-through font-mono-num">
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                    SAVE £{(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <Truck className="w-4 h-4" />
                <span>FREE UK DELIVERY ON THIS ORDER (OVER £75)</span>
              </div>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-zinc-900">
                  COLOUR: <span className="font-normal text-zinc-600">{currentColor.name}</span>
                </span>
                <span className="text-zinc-400">{product.colors.length} options</span>
              </div>

              <div className="flex items-center gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIdx(idx)}
                    className={`group relative p-1 rounded-xl border-2 transition-all flex items-center gap-2 ${
                      selectedColorIdx === idx
                        ? 'border-black bg-zinc-100 shadow-sm'
                        : 'border-zinc-200 hover:border-zinc-400 bg-white'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-lg border border-black/10 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs font-medium text-zinc-800 pr-2 hidden sm:inline">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector with UK Sizes */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-zinc-900">
                  SELECT UK SIZE
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="font-bold uppercase text-zinc-900 hover:text-zinc-600 underline underline-offset-2 flex items-center gap-1"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>SIZE GUIDE</span>
                </button>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map(size => {
                  const stock = product.sizeStock ? product.sizeStock[size] : 5;
                  const isSelected = selectedSize === size;
                  const isLowStock = stock > 0 && stock <= 3;

                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={stock === 0}
                      className={`relative py-3 rounded-xl text-xs font-bold transition-all border flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-black text-white border-black shadow-md scale-105 z-10'
                          : stock === 0
                          ? 'bg-zinc-100 text-zinc-300 border-zinc-200 line-through cursor-not-allowed'
                          : 'bg-white text-zinc-900 border-zinc-300 hover:border-black'
                      }`}
                      id={`size-btn-${size}`}
                    >
                      <span>UK {size}</span>
                      {isLowStock && !isSelected && (
                        <span className="text-[9px] text-amber-600 font-semibold mt-0.5">
                          {stock} left
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedSize && (
                <p className="text-xs text-zinc-500">
                  Selected size UK {selectedSize} fits true to British standard footwear sizing.
                </p>
              )}
            </div>

            {/* CTAs: Add to Bag & Wishlist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-zinc-300 rounded-xl bg-white px-3 py-3 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-zinc-500 hover:text-black font-bold px-1"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-zinc-500 hover:text-black font-bold px-1"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-black hover:bg-zinc-800 text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group"
                  id="pdp-add-to-bag-btn"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG — £{(product.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              {/* Secondary Wishlist button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all border flex items-center justify-center gap-2 ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-300 text-rose-700'
                    : 'bg-white border-zinc-300 hover:border-black text-zinc-800 hover:text-black'
                }`}
                id="pdp-wishlist-btn"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
                <span>{isWishlisted ? 'IN YOUR WISHLIST' : 'ADD TO WISHLIST'}</span>
              </button>
            </div>

            {/* Product Key Points Accordion */}
            <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200 pt-2">
              {/* Product Details */}
              <div>
                <button
                  onClick={() => toggleAccordion('details')}
                  className="w-full py-4 flex items-center justify-between text-left font-bold text-xs uppercase tracking-wider text-zinc-900"
                >
                  <span>PRODUCT DETAILS & SPECIFICATIONS</span>
                  {openAccordion === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {openAccordion === 'details' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-4 text-xs text-zinc-600 space-y-2.5 leading-relaxed overflow-hidden"
                    >
                      <p>{product.description}</p>
                      <ul className="list-disc pl-4 space-y-1 text-zinc-700">
                        {product.details.map((det, i) => (
                          <li key={i}>{det}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-4 flex items-center justify-between text-left font-bold text-xs uppercase tracking-wider text-zinc-900"
                >
                  <span>MATERIALS & CRAFTSMANSHIP</span>
                  {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {openAccordion === 'materials' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-4 text-xs text-zinc-600 space-y-2 leading-relaxed overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 bg-zinc-100 p-3 rounded-xl">
                        <div>
                          <span className="font-bold text-zinc-900 block">Upper:</span>
                          <span>{product.materials.upper}</span>
                        </div>
                        <div>
                          <span className="font-bold text-zinc-900 block">Sole:</span>
                          <span>{product.materials.sole}</span>
                        </div>
                        <div>
                          <span className="font-bold text-zinc-900 block">Lining:</span>
                          <span>{product.materials.lining}</span>
                        </div>
                        <div>
                          <span className="font-bold text-zinc-900 block">Origin:</span>
                          <span>{product.materials.origin}</span>
                        </div>
                      </div>
                      <p className="text-zinc-500 pt-1">
                        Care: Wipe clean with a damp microfiber cloth. Treat leather elements with DŌNO Beeswax Balm.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Free UK Delivery & 30-Day Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('delivery')}
                  className="w-full py-4 flex items-center justify-between text-left font-bold text-xs uppercase tracking-wider text-zinc-900"
                >
                  <span>UK DELIVERY & FREE RETURNS</span>
                  {openAccordion === 'delivery' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {openAccordion === 'delivery' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-4 text-xs text-zinc-600 space-y-2 leading-relaxed overflow-hidden"
                    >
                      <p>
                        <strong>Standard UK Tracked (2-3 Days):</strong> Free on orders over £75 (otherwise £4.95).
                      </p>
                      <p>
                        <strong>Next Day UK Dispatch:</strong> Order before 8PM Monday–Friday for next working day delivery via DPD/Royal Mail Tracked.
                      </p>
                      <p>
                        <strong>30-Day Hassle-Free Returns:</strong> Prepaid return labels provided in every box.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Customer Reviews Section */}
              <div>
                <button
                  onClick={() => toggleAccordion('reviews')}
                  className="w-full py-4 flex items-center justify-between text-left font-bold text-xs uppercase tracking-wider text-zinc-900"
                >
                  <span>REVIEWS ({product.reviews.length})</span>
                  {openAccordion === 'reviews' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {openAccordion === 'reviews' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-4 space-y-4 overflow-hidden"
                    >
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                          <span className="text-xs font-bold text-zinc-900 ml-1">
                            {product.rating} rating
                          </span>
                        </div>

                        <button
                          onClick={() => setShowReviewForm(!showReviewForm)}
                          className="text-xs font-bold text-black underline"
                        >
                          {showReviewForm ? 'Cancel' : 'Write a Review'}
                        </button>
                      </div>

                      {/* Review Submission Form */}
                      {showReviewForm && (
                        <form onSubmit={handleReviewSubmit} className="p-4 bg-zinc-100 rounded-xl space-y-3">
                          <h4 className="text-xs font-bold uppercase text-zinc-900">
                            Leave your feedback on {product.name}
                          </h4>

                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              required
                              placeholder="Your Name (e.g. Thomas R.)"
                              value={newAuthor}
                              onChange={e => setNewAuthor(e.target.value)}
                              className="px-3 py-2 text-xs rounded border border-zinc-300 bg-white"
                            />
                            <input
                              type="text"
                              placeholder="City (e.g. London)"
                              value={newLocation}
                              onChange={e => setNewLocation(e.target.value)}
                              className="px-3 py-2 text-xs rounded border border-zinc-300 bg-white"
                            />
                          </div>

                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-600 font-medium">Rating:</span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map(star => (
                                <button
                                  type="button"
                                  key={star}
                                  onClick={() => setNewRating(star)}
                                  className={`p-1 ${newRating >= star ? 'text-amber-400' : 'text-zinc-300'}`}
                                >
                                  <Star className="w-4 h-4 fill-current" />
                                </button>
                              ))}
                            </div>
                          </div>

                          <input
                            type="text"
                            required
                            placeholder="Review Headline"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded border border-zinc-300 bg-white"
                          />

                          <textarea
                            required
                            rows={3}
                            placeholder="Share details on comfort, sizing, and styling..."
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded border border-zinc-300 bg-white"
                          />

                          <button
                            type="submit"
                            className="w-full py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded"
                          >
                            Submit Review
                          </button>
                        </form>
                      )}

                      {/* Review List */}
                      <div className="space-y-3">
                        {product.reviews.map(rev => (
                          <div key={rev.id} className="p-3 bg-white rounded-xl border border-zinc-200 space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <div className="flex text-amber-400">
                                {[...Array(rev.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                                ))}
                              </div>
                              <span className="text-zinc-400">{rev.date}</span>
                            </div>
                            <h5 className="text-xs font-bold text-zinc-900">{rev.title}</h5>
                            <p className="text-xs text-zinc-600">{rev.comment}</p>
                            <p className="text-[10px] text-zinc-400 font-semibold">
                              — {rev.author} ({rev.location}) • {rev.fit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-zinc-200">
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-500 block mb-1">
                COMPLETE YOUR ROTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-zinc-950">
                RECOMMENDED PAIRS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile Add to Bag Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-zinc-200 p-4 z-30 shadow-2xl flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase text-zinc-900 block truncate max-w-[140px]">
            {product.name}
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            {selectedSize ? `UK ${selectedSize}` : 'No size'} • £{product.price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 py-3 bg-black text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  );
};
