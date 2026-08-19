import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  Sparkles,
  Tag,
  ShieldCheck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    freeShippingThreshold,
    amountUntilFreeShipping,
    deliveryFee,
    appliedDiscount,
    applyDiscountCode,
    removeDiscountCode,
    cartDiscountAmount,
    cartTotal,
    setActiveView,
    navigateToProduct
  } = useStore();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyDiscountCode(promoInput.trim());
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) {
      setPromoInput('');
    }
  };

  const progressPercent = Math.min(
    100,
    Math.round((cartSubtotal / freeShippingThreshold) * 100)
  );

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Top Drawer Header */}
              <div className="p-5 sm:p-6 border-b border-zinc-200 flex items-center justify-between bg-[#FAFAFA]">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-black" />
                  <h2 className="text-base font-extrabold uppercase tracking-tight text-zinc-950 font-display">
                    YOUR SHOPPING BAG
                  </h2>
                  <span className="text-xs font-mono font-bold bg-zinc-200 text-zinc-800 px-2 py-0.5 rounded-full">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                </div>

                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="p-1.5 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-200 transition-colors"
                  aria-label="Close bag drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free UK Delivery Progress Bar */}
              <div className="bg-zinc-900 text-white px-5 sm:px-6 py-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    {amountUntilFreeShipping > 0 ? (
                      <span>
                        Add <strong className="text-emerald-400">£{amountUntilFreeShipping.toFixed(2)}</strong> for <strong>FREE UK DELIVERY</strong>
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-bold">
                        YOU HAVE QUALIFIED FOR FREE UK DELIVERY ✓
                      </span>
                    )}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-zinc-900 uppercase">
                        YOUR BAG IS CURRENTLY EMPTY
                      </h3>
                      <p className="text-xs text-zinc-500 max-w-xs">
                        Elevate your daily movement with our latest London footwear arrivals.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsCartDrawerOpen(false);
                        setActiveView('sneakers');
                      }}
                      className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors shadow"
                    >
                      EXPLORE SNEAKERS
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3.5 bg-[#FAFAFA] rounded-2xl border border-zinc-200/80 hover:border-zinc-300 transition-colors"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.selectedColor.image}
                        alt={item.product.name}
                        onClick={() => {
                          setIsCartDrawerOpen(false);
                          navigateToProduct(item.productId);
                        }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover bg-zinc-200 cursor-pointer shrink-0 border border-zinc-200"
                      />

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4
                              onClick={() => {
                                setIsCartDrawerOpen(false);
                                navigateToProduct(item.productId);
                              }}
                              className="text-xs font-extrabold text-zinc-950 uppercase tracking-tight hover:text-zinc-600 transition-colors truncate cursor-pointer font-display"
                            >
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-zinc-400 hover:text-rose-600 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-[11px] text-zinc-500 mt-0.5">
                            {item.selectedColor.name} • <span className="font-semibold text-zinc-800">UK {item.selectedSize}</span>
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-zinc-300 rounded-lg bg-white px-2 py-1">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="text-zinc-500 hover:text-black p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="text-zinc-500 hover:text-black p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-zinc-950 font-mono-num">
                            £{(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Checkout Action */}
              {cart.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-zinc-200 bg-[#FAFAFA] space-y-4">
                  {/* Promo Code Input */}
                  <div>
                    {!appliedDiscount ? (
                      <form onSubmit={handleApplyPromo} className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Promo code (e.g. DONOFIRST10)"
                            value={promoInput}
                            onChange={e => setPromoInput(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-black"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg hover:bg-black uppercase tracking-wider"
                        >
                          Apply
                        </button>
                      </form>
                    ) : (
                      <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Code {appliedDiscount.code} applied (-£{cartDiscountAmount.toFixed(2)})</span>
                        </div>
                        <button
                          onClick={removeDiscountCode}
                          className="text-emerald-700 hover:text-emerald-900 font-bold text-[11px] underline"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                    {promoMessage && (
                      <p className={`text-[11px] mt-1 ${promoMessage.isError ? 'text-rose-600' : 'text-emerald-600'}`}>
                        {promoMessage.text}
                      </p>
                    )}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-zinc-600 pt-2 border-t border-zinc-200">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-zinc-900 font-mono-num">
                        £{cartSubtotal.toFixed(2)}
                      </span>
                    </div>

                    {appliedDiscount && (
                      <div className="flex justify-between text-emerald-700 font-semibold">
                        <span>Discount ({appliedDiscount.code})</span>
                        <span className="font-mono-num">-£{cartDiscountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>UK Tracked Delivery</span>
                      <span className="font-semibold text-zinc-900">
                        {deliveryFee === 0 ? (
                          <strong className="text-emerald-700">FREE</strong>
                        ) : (
                          `£${deliveryFee.toFixed(2)}`
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-extrabold text-zinc-950 pt-2 border-t border-zinc-200">
                      <span>TOTAL (INCL. UK VAT)</span>
                      <span className="font-mono-num">£{cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Primary Checkout CTA */}
                  <button
                    onClick={() => {
                      setIsCartDrawerOpen(false);
                      setActiveView('checkout');
                    }}
                    className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group"
                    id="cart-proceed-checkout-btn"
                  >
                    <span>PROCEED TO SECURE CHECKOUT</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Protected by UK Bank 256-Bit SSL Encryption</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
