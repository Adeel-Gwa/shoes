import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  CartItem,
  Order,
  Customer,
  DiscountCode,
  FilterOptions,
  ActiveView,
  ShippingAddress,
  ProductReview
} from '../types';
import {
  INITIAL_PRODUCTS,
  INITIAL_DISCOUNTS,
  INITIAL_ORDERS,
  INITIAL_CUSTOMERS
} from '../data/products';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message?: string;
}

interface StoreContextType {
  // Navigation & Views
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  selectedProduct: Product | null;
  navigateToProduct: (productId: string) => void;
  navigateToCategory: (categoryOrGender: string) => void;

  // Catalog
  products: Product[];
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
  filteredProducts: Product[];
  resetFilters: () => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, colorName: string, size: number, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  deliveryFee: number;
  appliedDiscount: DiscountCode | null;
  applyDiscountCode: (code: string) => { success: boolean; message: string };
  removeDiscountCode: () => void;
  cartDiscountAmount: number;
  cartTotal: number;

  // Wishlist
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Recently Viewed
  recentlyViewed: Product[];

  // Orders
  orders: Order[];
  createOrder: (
    shippingAddress: ShippingAddress,
    paymentMethod: 'Card' | 'Apple Pay' | 'Google Pay' | 'PayPal'
  ) => Order;
  lastPlacedOrder: Order | null;

  // Reviews
  addProductReview: (productId: string, review: Omit<ProductReview, 'id' | 'date'>) => void;

  // Modals & UI Triggers
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  isQuickViewOpen: boolean;
  setIsQuickViewOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;

  // Toast
  toasts: ToastMessage[];
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
  dismissToast: (id: string) => void;

  // Account
  currentUser: Customer | null;
  setCurrentUser: (user: Customer | null) => void;
  isAccountModalOpen: boolean;
  setIsAccountModalOpen: (open: boolean) => void;

  // Admin Management
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  customers: Customer[];
  discounts: DiscountCode[];
  addDiscountCode: (code: DiscountCode) => void;
  deleteDiscountCode: (codeStr: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Products
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('dono_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('dono_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('dono_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Recently Viewed
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('dono_recent');
    return saved ? JSON.parse(saved) : [];
  });

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('dono_orders');
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });
  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);

  // Customers
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const saved = localStorage.getItem('dono_customers');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMERS;
  });

  const [currentUser, setCurrentUser] = useState<Customer | null>(() => {
    return INITIAL_CUSTOMERS[0];
  });

  // Discounts
  const [discounts, setDiscounts] = useState<DiscountCode[]>(() => {
    const saved = localStorage.getItem('dono_discounts');
    return saved ? JSON.parse(saved) : INITIAL_DISCOUNTS;
  });
  const [appliedDiscount, setAppliedDiscount] = useState<DiscountCode | null>(null);

  // Filters
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: 'All',
    gender: 'All',
    tag: 'All',
    size: null,
    color: null,
    minPrice: 0,
    maxPrice: 300,
    inStockOnly: false,
    sortBy: 'recommended',
    searchQuery: ''
  });

  // Modals & UI
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist storage
  useEffect(() => {
    localStorage.setItem('dono_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('dono_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('dono_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('dono_recent', JSON.stringify(recentlyViewedIds));
  }, [recentlyViewedIds]);

  useEffect(() => {
    localStorage.setItem('dono_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('dono_discounts', JSON.stringify(discounts));
  }, [discounts]);

  // Toast Helper
  const showToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: ToastMessage = { id, title, message, type };
    setToasts(prev => [...prev, newToast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Product Selection & Views
  const selectedProduct = products.find(p => p.id === selectedProductId) || null;

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActiveView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Add to recently viewed
    setRecentlyViewedIds(prev => {
      const filtered = prev.filter(id => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  };

  const navigateToCategory = (target: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (target === 'men') {
      setActiveView('men');
      setFilterOptions(prev => ({ ...prev, gender: 'men', category: 'All', tag: 'All' }));
    } else if (target === 'women') {
      setActiveView('women');
      setFilterOptions(prev => ({ ...prev, gender: 'women', category: 'All', tag: 'All' }));
    } else if (target === 'sneakers') {
      setActiveView('sneakers');
      setFilterOptions(prev => ({ ...prev, category: 'Sneakers', gender: 'All', tag: 'All' }));
    } else if (target === 'new-arrivals') {
      setActiveView('new-arrivals');
      setFilterOptions(prev => ({ ...prev, tag: 'NEW', gender: 'All', category: 'All' }));
    } else if (target === 'best-sellers') {
      setActiveView('best-sellers');
      setFilterOptions(prev => ({ ...prev, tag: 'BEST SELLER', gender: 'All', category: 'All' }));
    } else if (target === 'sale') {
      setActiveView('sale');
      setFilterOptions(prev => ({ ...prev, tag: 'SALE', gender: 'All', category: 'All' }));
    } else if (target === 'london-edit') {
      setActiveView('london-edit');
      setFilterOptions(prev => ({ ...prev, tag: 'LONDON EDIT', gender: 'All', category: 'All' }));
    } else {
      setActiveView('shop');
      setFilterOptions(prev => ({ ...prev, gender: 'All', category: 'All', tag: 'All' }));
    }
  };

  // Filtered Products computation
  const filteredProducts = products.filter(p => {
    // Active View preset constraints
    if (activeView === 'men' && p.gender !== 'men' && p.gender !== 'unisex') return false;
    if (activeView === 'women' && p.gender !== 'women' && p.gender !== 'unisex') return false;
    if (activeView === 'sneakers' && p.category !== 'Sneakers' && p.category !== 'Running' && p.category !== 'Court') return false;
    if (activeView === 'new-arrivals' && !p.isNewArrival && p.tag !== 'NEW') return false;
    if (activeView === 'best-sellers' && !p.isBestSeller && p.tag !== 'BEST SELLER') return false;
    if (activeView === 'sale' && !p.originalPrice && p.tag !== 'SALE') return false;
    if (activeView === 'london-edit' && !p.isLondonEdit) return false;

    // Filters
    if (filterOptions.category && filterOptions.category !== 'All' && p.category !== filterOptions.category) {
      return false;
    }
    if (filterOptions.gender && filterOptions.gender !== 'All' && p.gender !== filterOptions.gender && p.gender !== 'unisex') {
      return false;
    }
    if (filterOptions.tag && filterOptions.tag !== 'All' && p.tag !== filterOptions.tag) {
      return false;
    }
    if (filterOptions.size && !p.sizes.includes(filterOptions.size)) {
      return false;
    }
    if (filterOptions.color && !p.colors.some(c => c.name.toLowerCase().includes(filterOptions.color!.toLowerCase()))) {
      return false;
    }
    if (filterOptions.minPrice !== undefined && p.price < filterOptions.minPrice) {
      return false;
    }
    if (filterOptions.maxPrice !== undefined && p.price > filterOptions.maxPrice) {
      return false;
    }
    if (filterOptions.inStockOnly && !p.inStock) {
      return false;
    }
    if (filterOptions.searchQuery && filterOptions.searchQuery.trim()) {
      const q = filterOptions.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchSubtitle = p.subtitle.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchColor = p.colors.some(c => c.name.toLowerCase().includes(q));
      if (!matchName && !matchSubtitle && !matchCat && !matchColor) return false;
    }
    return true;
  }).sort((a, b) => {
    switch (filterOptions.sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        const discA = a.originalPrice ? a.originalPrice - a.price : 0;
        const discB = b.originalPrice ? b.originalPrice - b.price : 0;
        return discB - discA;
      default:
        // recommended
        return (b.isBestSeller ? 2 : 0) + (b.isFeatured ? 1 : 0) - ((a.isBestSeller ? 2 : 0) + (a.isFeatured ? 1 : 0));
    }
  });

  const resetFilters = () => {
    setFilterOptions({
      category: 'All',
      gender: 'All',
      tag: 'All',
      size: null,
      color: null,
      minPrice: 0,
      maxPrice: 300,
      inStockOnly: false,
      sortBy: 'recommended',
      searchQuery: ''
    });
  };

  // Cart operations
  const addToCart = (product: Product, colorName: string, size: number, quantity = 1) => {
    const selectedColor = product.colors.find(c => c.name === colorName) || product.colors[0];
    const cartItemId = `${product.id}-${selectedColor.name}-${size}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          product,
          selectedColor,
          selectedSize: size,
          quantity
        }
      ];
    });

    showToast(`Added to your bag ✓`, `${product.name} (UK ${size}) in ${selectedColor.name}`);
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Removed from bag', 'Item removed from your cart.', 'info');
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 75.0;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const deliveryFee = cartSubtotal > 0 && cartSubtotal < freeShippingThreshold ? 4.95 : 0;

  // Discount calculation
  let cartDiscountAmount = 0;
  if (appliedDiscount && cartSubtotal >= (appliedDiscount.minSpend || 0)) {
    if (appliedDiscount.type === 'percentage') {
      cartDiscountAmount = (cartSubtotal * appliedDiscount.value) / 100;
    } else {
      cartDiscountAmount = appliedDiscount.value;
    }
  }

  const cartTotal = Math.max(0, cartSubtotal - cartDiscountAmount + deliveryFee);

  const applyDiscountCode = (codeStr: string) => {
    const clean = codeStr.trim().toUpperCase();
    const found = discounts.find(d => d.code.toUpperCase() === clean && d.isActive);
    if (!found) {
      return { success: false, message: 'Invalid or expired promotional code.' };
    }
    if (found.minSpend && cartSubtotal < found.minSpend) {
      return { success: false, message: `Minimum spend of £${found.minSpend} required for code ${found.code}.` };
    }
    setAppliedDiscount(found);
    showToast('Code Applied ✓', `${found.code} saved you £${found.type === 'percentage' ? ((cartSubtotal * found.value) / 100).toFixed(2) : found.value}`);
    return { success: true, message: `Code ${found.code} applied successfully!` };
  };

  const removeDiscountCode = () => {
    setAppliedDiscount(null);
    showToast('Code Removed', 'Promotional code has been removed.', 'info');
  };

  // Wishlist
  const toggleWishlist = (productId: string) => {
    const p = products.find(prod => prod.id === productId);
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Wishlist updated ♥', `${p ? p.name : 'Item'} removed from wishlist`, 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to Wishlist ♥', `${p ? p.name : 'Item'} added to wishlist`, 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Quick View
  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  // Recently viewed products
  const recentlyViewed = recentlyViewedIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as Product[];

  // Create Order
  const createOrder = (
    shippingAddress: ShippingAddress,
    paymentMethod: 'Card' | 'Apple Pay' | 'Google Pay' | 'PayPal'
  ): Order => {
    const orderNumber = `DN-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      date: new Date().toISOString().split('T')[0],
      customer: {
        name: shippingAddress.fullName,
        email: shippingAddress.email,
        phone: shippingAddress.phone
      },
      shippingAddress,
      items: cart.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        colorName: item.selectedColor.name,
        size: item.selectedSize,
        price: item.product.price,
        quantity: item.quantity,
        image: item.selectedColor.image
      })),
      subtotal: cartSubtotal,
      deliveryFee,
      discount: cartDiscountAmount,
      discountCode: appliedDiscount?.code,
      total: cartTotal,
      status: 'Processing',
      paymentMethod,
      trackingNumber: `GB-DHL-${Math.floor(100000000 + Math.random() * 900000000)}`
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);

    // Update customer spending
    setCustomers(prev => {
      const existing = prev.find(c => c.email.toLowerCase() === shippingAddress.email.toLowerCase());
      if (existing) {
        return prev.map(c =>
          c.id === existing.id
            ? {
                ...c,
                totalSpent: c.totalSpent + cartTotal,
                ordersCount: c.ordersCount + 1,
                lastOrderDate: new Date().toISOString().split('T')[0]
              }
            : c
        );
      }
      return [
        {
          id: `cust-${Date.now()}`,
          name: shippingAddress.fullName,
          email: shippingAddress.email,
          phone: shippingAddress.phone,
          totalSpent: cartTotal,
          ordersCount: 1,
          status: 'New',
          joinedDate: new Date().toISOString().split('T')[0],
          lastOrderDate: new Date().toISOString().split('T')[0]
        },
        ...prev
      ];
    });

    clearCart();
    setAppliedDiscount(null);
    showToast('Your order has been placed successfully.', `Reference #${orderNumber}`);
    return newOrder;
  };

  // Add Product Review
  const addProductReview = (productId: string, rev: Omit<ProductReview, 'id' | 'date'>) => {
    const newRev: ProductReview = {
      ...rev,
      id: `rev-${Date.now()}`,
      date: 'Just now'
    };

    setProducts(prev =>
      prev.map(p => {
        if (p.id === productId) {
          const newReviews = [newRev, ...p.reviews];
          const avg = newReviews.reduce((sum, r) => sum + r.rating, 0) / newReviews.length;
          return {
            ...p,
            reviews: newReviews,
            reviewCount: p.reviewCount + 1,
            rating: Number(avg.toFixed(1))
          };
        }
        return p;
      })
    );
    showToast('Review Submitted ✓', 'Thank you for sharing your feedback with the DŌNO community.');
  };

  // Admin Actions
  const addDiscountCode = (codeObj: DiscountCode) => {
    setDiscounts(prev => [codeObj, ...prev]);
    showToast('Discount Created', `Code ${codeObj.code} is now live.`);
  };

  const deleteDiscountCode = (codeStr: string) => {
    setDiscounts(prev => prev.filter(d => d.code !== codeStr));
    showToast('Discount Deleted', `Code ${codeStr} removed.`);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev =>
      prev.map(o => (o.id === orderId ? { ...o, status } : o))
    );
    showToast('Order Status Updated', `Order marked as ${status}`);
  };

  const addProduct = (newProd: Product) => {
    setProducts(prev => [newProd, ...prev]);
    showToast('Product Added', `${newProd.name} published.`);
  };

  const updateProduct = (updatedProd: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProd.id ? updatedProd : p))
    );
    showToast('Product Saved', `${updatedProd.name} updated.`);
  };

  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    showToast('Product Deleted', 'Item removed from catalogue.', 'info');
  };

  return (
    <StoreContext.Provider
      value={{
        activeView,
        setActiveView,
        selectedProductId,
        setSelectedProductId,
        selectedProduct,
        navigateToProduct,
        navigateToCategory,
        products,
        filterOptions,
        setFilterOptions,
        filteredProducts,
        resetFilters,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold,
        amountUntilFreeShipping,
        deliveryFee,
        appliedDiscount,
        applyDiscountCode,
        removeDiscountCode,
        cartDiscountAmount,
        cartTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        recentlyViewed,
        orders,
        createOrder,
        lastPlacedOrder,
        addProductReview,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isQuickViewOpen,
        setIsQuickViewOpen,
        quickViewProduct,
        openQuickView,
        toasts,
        showToast,
        dismissToast,
        currentUser,
        setCurrentUser,
        isAccountModalOpen,
        setIsAccountModalOpen,
        isAdmin,
        setIsAdmin,
        customers,
        discounts,
        addDiscountCode,
        deleteDiscountCode,
        updateOrderStatus,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
