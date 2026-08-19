export type Gender = 'men' | 'women' | 'unisex';

export type Category = 
  | 'Sneakers'
  | 'Running'
  | 'Casual'
  | 'Lifestyle'
  | 'Boots'
  | 'Platform'
  | 'Slides'
  | 'Court';

export type ProductTag = 'NEW' | 'BEST SELLER' | 'LIMITED' | 'SALE' | 'EXCLUSIVE' | 'LONDON EDIT';

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
  secondaryImage: string;
  gallery: string[];
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  fit: 'Runs Small' | 'True to Size' | 'Runs Large';
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  gender: Gender;
  category: Category;
  tag?: ProductTag;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  sizes: number[]; // UK sizing e.g. [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12]
  sizeStock?: Record<number, number>; // size -> stock count
  inStock: boolean;
  description: string;
  details: string[];
  materials: {
    upper: string;
    lining: string;
    sole: string;
    origin: string;
  };
  reviews: ProductReview[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isLondonEdit?: boolean;
  createdAt: string;
}

export interface CartItem {
  id: string; // unique item id (productId + colorName + size)
  productId: string;
  product: Product;
  selectedColor: ProductColor;
  selectedSize: number;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  county?: string;
  country: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress: ShippingAddress;
  items: {
    productId: string;
    productName: string;
    colorName: string;
    size: number;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  discountCode?: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: 'Card' | 'Apple Pay' | 'Google Pay' | 'PayPal';
  trackingNumber?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  ordersCount: number;
  status: 'VIP' | 'Regular' | 'New';
  joinedDate: string;
  lastOrderDate?: string;
}

export interface DiscountCode {
  code: string;
  type: 'percentage' | 'fixed';
  value: number; // e.g. 15 for 15% or 20 for £20 off
  minSpend?: number;
  expiresAt: string;
  isActive: boolean;
  usesCount: number;
}

export interface FilterOptions {
  category?: Category | 'All';
  gender?: Gender | 'All';
  tag?: ProductTag | 'All';
  size?: number | null;
  color?: string | null;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  sortBy?: 'recommended' | 'newest' | 'price-low' | 'price-high' | 'rating' | 'discount';
  searchQuery?: string;
}

export type ActiveView = 
  | 'home'
  | 'shop'
  | 'men'
  | 'women'
  | 'sneakers'
  | 'new-arrivals'
  | 'best-sellers'
  | 'sale'
  | 'london-edit'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'account'
  | 'admin'
  | 'our-story';
