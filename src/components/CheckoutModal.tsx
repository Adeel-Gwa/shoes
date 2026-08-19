import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  CreditCard,
  Truck,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  ShoppingBag,
  Printer
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ShippingAddress, Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    deliveryFee,
    appliedDiscount,
    cartDiscountAmount,
    cartTotal,
    createOrder,
    setActiveView
  } = useStore();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form Fields
  const [fullName, setFullName] = useState('Oliver Sterling');
  const [email, setEmail] = useState('oliver.sterling@londonmail.co.uk');
  const [phone, setPhone] = useState('+44 7700 900543');
  const [addressLine1, setAddressLine1] = useState('24 Conduit Street');
  const [addressLine2, setAddressLine2] = useState('Flat 3B');
  const [city, setCity] = useState('London');
  const [postcode, setPostcode] = useState('W1S 2XU');
  const [country, setCountry] = useState('United Kingdom');

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState<'Card' | 'Apple Pay' | 'Google Pay' | 'PayPal'>('Apple Pay');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('892');
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);

  const handlePlaceOrder = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const shippingAddress: ShippingAddress = {
        fullName,
        email,
        phone,
        addressLine1,
        addressLine2,
        city,
        postcode,
        country
      };

      const order = createOrder(shippingAddress, paymentMethod);
      setConfirmedOrder(order);
      setIsProcessing(false);
      setStep(4);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }, 1200);
  };

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
        <ShoppingBag className="w-16 h-16 text-zinc-300 mb-4" />
        <h2 className="text-2xl font-bold text-zinc-900 uppercase">Your bag is empty</h2>
        <p className="text-sm text-zinc-500 mt-2 mb-6">Add a pair to your bag before checking out.</p>
        <button
          onClick={() => setActiveView('shop')}
          className="px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl"
        >
          EXPLORE CATALOGUE
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Checkout Header */}
        <div className="flex items-center justify-between pb-8 border-b border-zinc-200">
          <button
            onClick={() => setActiveView('home')}
            className="flex flex-col items-start focus:outline-none"
          >
            <span className="font-display text-2xl font-black tracking-tight text-zinc-950">
              DŌNO
            </span>
            <span className="text-[9px] tracking-widest uppercase text-zinc-400 font-semibold">
              SECURE CHECKOUT
            </span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-BIT ENCRYPTED</span>
          </div>
        </div>

        {/* Step 4: Order Confirmation Screen */}
        {step === 4 && confirmedOrder && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 max-w-2xl mx-auto space-y-8 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400">
                THANK YOU FOR YOUR ORDER
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-zinc-950">
                STEP INTO YOUR STANDARD.
              </h1>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">
                We've sent a confirmation email with tracking details to{' '}
                <strong className="text-zinc-900">{confirmedOrder.customer.email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-lg text-left space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 gap-2 text-xs">
                <div>
                  <span className="text-zinc-400 block uppercase font-bold text-[10px]">Order Reference</span>
                  <span className="text-base font-extrabold text-zinc-950 font-mono">
                    #{confirmedOrder.orderNumber}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase font-bold text-[10px]">Tracking Number</span>
                  <span className="text-xs font-bold text-zinc-800 font-mono">
                    {confirmedOrder.trackingNumber}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase font-bold text-[10px]">Dispatch Est.</span>
                  <span className="text-xs font-bold text-emerald-700">Tomorrow by 8PM</span>
                </div>
              </div>

              {/* Items in Order */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase text-zinc-400">Items Ordered</h4>
                {confirmedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-2 border-b border-zinc-100 last:border-0">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-14 h-14 rounded-lg object-cover bg-zinc-100 border"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-zinc-900 uppercase truncate">
                        {item.productName}
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        {item.colorName} • UK {item.size} • Qty {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-zinc-950 font-mono-num">
                      £{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Delivery Address Details */}
              <div className="bg-zinc-50 p-4 rounded-xl text-xs space-y-1">
                <span className="font-bold text-zinc-900 block mb-1">UK Delivery Destination</span>
                <p className="text-zinc-700">{confirmedOrder.shippingAddress.fullName}</p>
                <p className="text-zinc-600">
                  {confirmedOrder.shippingAddress.addressLine1}, {confirmedOrder.shippingAddress.addressLine2}
                </p>
                <p className="text-zinc-600">
                  {confirmedOrder.shippingAddress.city}, {confirmedOrder.shippingAddress.postcode}, UK
                </p>
              </div>

              {/* Total Paid */}
              <div className="flex items-center justify-between pt-2 text-sm font-extrabold text-zinc-950">
                <span>TOTAL PAID ({confirmedOrder.paymentMethod})</span>
                <span className="font-mono-num text-base">£{confirmedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.print()}
                className="px-6 py-3.5 bg-white border border-zinc-300 hover:border-black text-zinc-800 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={() => setActiveView('home')}
                className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
              >
                Return to Storefront
              </button>
            </div>
          </motion.div>
        )}

        {/* Steps 1, 2, 3: Active Checkout Flow */}
        {step < 4 && (
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Main Form: 7 Columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Stepper indicator */}
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
                <span className={step >= 1 ? 'text-black' : ''}>1. Customer</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className={step >= 2 ? 'text-black' : ''}>2. UK Address</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className={step >= 3 ? 'text-black' : ''}>3. Payment</span>
              </div>

              {/* Step 1: Customer Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm"
                >
                  <div className="space-y-1">
                    <h2 className="text-xl font-display font-extrabold uppercase text-zinc-950">
                      CONTACT INFORMATION
                    </h2>
                    <p className="text-xs text-zinc-500">
                      We'll send your receipt and UK tracking updates here.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        UK Mobile Phone (for SMS delivery tracking)
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-black text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>CONTINUE TO UK DELIVERY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: UK Delivery Address */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm"
                >
                  <div className="space-y-1">
                    <h2 className="text-xl font-display font-extrabold uppercase text-zinc-950">
                      UK DELIVERY ADDRESS
                    </h2>
                    <p className="text-xs text-zinc-500">
                      All orders dispatch from our Northamptonshire fulfilment centre.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                          Postcode
                        </label>
                        <input
                          type="text"
                          required
                          value={postcode}
                          onChange={e => setPostcode(e.target.value.toUpperCase())}
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                          City / Town
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={e => setCity(e.target.value)}
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Address Line 1 (Street & Building)
                      </label>
                      <input
                        type="text"
                        required
                        value={addressLine1}
                        onChange={e => setAddressLine1(e.target.value)}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Address Line 2 (Apartment, Suite — Optional)
                      </label>
                      <input
                        type="text"
                        value={addressLine2}
                        onChange={e => setAddressLine2(e.target.value)}
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black"
                      />
                    </div>

                    {/* Delivery Method Option */}
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-zinc-900" />
                        <div>
                          <p className="text-xs font-bold text-zinc-900 uppercase">
                            Royal Mail Tracked 24 / DPD UK
                          </p>
                          <p className="text-[11px] text-zinc-500">Delivered within 1–2 business days</p>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700">
                        {deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border border-zinc-300 rounded-xl text-xs font-bold uppercase text-zinc-700 hover:text-black"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-4 bg-black text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                    >
                      <span>CONTINUE TO PAYMENT</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment Method */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm"
                >
                  <div className="space-y-1">
                    <h2 className="text-xl font-display font-extrabold uppercase text-zinc-950">
                      PAYMENT METHOD
                    </h2>
                    <p className="text-xs text-zinc-500">
                      All transactions are encrypted with bank-level security protocols.
                    </p>
                  </div>

                  {/* Payment Options */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'Apple Pay', label: ' Apple Pay' },
                      { id: 'Card', label: '💳 Credit Card' },
                      { id: 'Google Pay', label: 'G Pay' },
                      { id: 'PayPal', label: 'PayPal' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPaymentMethod(opt.id as any)}
                        className={`py-3.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          paymentMethod === opt.id
                            ? 'bg-black text-white border-black shadow-md'
                            : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-400'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {paymentMethod === 'Card' && (
                    <div className="space-y-4 pt-2 border-t border-zinc-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={e => setCardNumber(e.target.value)}
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm font-mono font-bold focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={e => setCardExpiry(e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm font-mono focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                            CVC / CVV
                          </label>
                          <input
                            type="text"
                            value={cardCvc}
                            onChange={e => setCardCvc(e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-sm font-mono focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'Apple Pay' && (
                    <div className="p-4 bg-zinc-100 rounded-xl text-xs text-zinc-600 flex items-center gap-3">
                      <Lock className="w-4 h-4 text-black" />
                      <span>One-touch biometric checkout configured for UK Apple Pay.</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-4 border border-zinc-300 rounded-xl text-xs font-bold uppercase text-zinc-700 hover:text-black"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="flex-1 py-4 bg-black text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xl"
                      id="place-order-final-btn"
                    >
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>AUTHORISING UK BANK...</span>
                        </div>
                      ) : (
                        <span>PAY £{cartTotal.toFixed(2)} & PLACE ORDER</span>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Order Summary: 5 Columns */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-zinc-950">
                    ORDER SUMMARY ({cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'})
                  </h3>
                  <button
                    onClick={() => setActiveView('cart')}
                    className="text-xs font-bold text-zinc-500 hover:text-black underline"
                  >
                    Edit Bag
                  </button>
                </div>

                {/* Items preview */}
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.selectedColor.image}
                        alt={item.product.name}
                        className="w-14 h-14 rounded-lg object-cover bg-zinc-100 border border-zinc-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-zinc-900 truncate uppercase">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          {item.selectedColor.name} • UK {item.selectedSize} (x{item.quantity})
                        </p>
                      </div>
                      <span className="text-xs font-bold text-zinc-950 font-mono-num">
                        £{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2 text-xs text-zinc-600 pt-4 border-t border-zinc-100">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-zinc-950 font-mono-num">
                      £{cartSubtotal.toFixed(2)}
                    </span>
                  </div>

                  {appliedDiscount && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Promo ({appliedDiscount.code})</span>
                      <span className="font-mono-num">-£{cartDiscountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>UK Tracked Shipping</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <strong className="text-emerald-700">FREE</strong>
                      ) : (
                        `£${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-black text-zinc-950 pt-3 border-t border-zinc-200">
                    <span>TOTAL (GBP £)</span>
                    <span className="font-mono-num">£{cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-50 rounded-xl text-[11px] text-zinc-500 space-y-1">
                  <p>✓ 30-Day Free UK Returns</p>
                  <p>✓ Authentic British Footwear Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
