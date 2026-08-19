import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  Tag,
  AlertCircle,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  Clock,
  Truck,
  Search,
  ArrowUpRight,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product, Category, Gender, Order } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    orders,
    discounts,
    updateOrderStatus,
    addProduct,
    setActiveView,
    showToast
  } = useStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'discounts'>('overview');
  const [orderFilter, setOrderFilter] = useState<string>('all');
  const [productSearch, setProductSearch] = useState('');

  // Add Product Modal Form
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState<Category>('Sneakers');
  const [newProductGender, setNewProductGender] = useState<Gender>('unisex');
  const [newProductPrice, setNewProductPrice] = useState('129.00');
  const [newProductSubtitle, setNewProductSubtitle] = useState('Modern British silhouette');
  const [newProductImage, setNewProductImage] = useState(
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
  );

  // Financial Stats
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrdersCount = orders.length;
  const avgOrderValue = totalOrdersCount > 0 ? totalRevenue / totalOrdersCount : 0;
  const totalStockUnits = products.reduce((acc, p) => {
    if (!p.sizeStock) return acc + 20;
    return acc + Object.values(p.sizeStock as Record<number, number>).reduce((s: number, count: number) => s + count, 0);
  }, 0);

  const lowStockProducts = products.filter(p => {
    if (!p.sizeStock) return false;
    return Object.values(p.sizeStock as Record<number, number>).some((qty: number) => qty > 0 && qty <= 3);
  });

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim()) return;

    const id = `dono-${newProductName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now().toString().slice(-4)}`;
    const newProd: Product = {
      id,
      name: newProductName.toUpperCase(),
      slug: id,
      subtitle: newProductSubtitle,
      description: 'Crafted with premium materials and designed for all-day comfort in London.',
      price: parseFloat(newProductPrice) || 119,
      category: newProductCategory,
      gender: newProductGender,
      inStock: true,
      createdAt: new Date().toISOString().split('T')[0],
      isNewArrival: true,
      isBestSeller: false,
      tag: 'NEW',
      sizes: [6, 7, 8, 9, 10, 11, 12],
      sizeStock: { 6: 5, 7: 8, 8: 12, 9: 15, 10: 10, 11: 6, 12: 4 },
      colors: [
        {
          name: 'Triple Chalk',
          hex: '#FAFAFA',
          image: newProductImage,
          secondaryImage: newProductImage,
          gallery: [newProductImage]
        }
      ],
      rating: 5.0,
      reviewCount: 1,
      details: ['Engineered dual-density sole', 'Breathable upper', 'British fit last'],
      materials: {
        upper: 'Premium technical leather',
        sole: 'Dual-density AeroCloud™ EVA',
        lining: 'Organic cotton terry',
        origin: 'Porto / Northampton'
      },
      reviews: []
    };

    addProduct(newProd);
    setShowAddProductModal(false);
    setNewProductName('');
    showToast('Product Created', `${newProd.name} is now live in the store!`);
  };

  const filteredOrders = orders.filter(o => {
    if (orderFilter === 'all') return true;
    return o.status.toLowerCase() === orderFilter.toLowerCase();
  });

  const filteredProductsList = products.filter(p =>
    p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.category.toLowerCase().includes(productSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveView('home')}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Return to store"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-400 block">
                ADMIN CONSOLE • LONDON HQ
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight uppercase text-white">
                DŌNO STORE MANAGEMENT
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs font-bold uppercase">
            {(['overview', 'products', 'orders', 'discounts'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-white text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Total Gross Revenue
                </span>
                <p className="text-3xl font-extrabold font-mono-num text-white">
                  £{totalRevenue.toFixed(2)}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+18.4% vs last month</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Total UK Orders
                </span>
                <p className="text-3xl font-extrabold font-mono-num text-white">
                  {totalOrdersCount}
                </p>
                <p className="text-xs text-zinc-500">Tracked & Dispatched</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Avg. Order Value (AOV)
                </span>
                <p className="text-3xl font-extrabold font-mono-num text-white">
                  £{avgOrderValue.toFixed(2)}
                </p>
                <p className="text-xs text-zinc-500">Across all collections</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Inventory Units in Stock
                </span>
                <p className="text-3xl font-extrabold font-mono-num text-white">
                  {totalStockUnits}
                </p>
                <p className="text-xs text-amber-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{lowStockProducts.length} low stock alerts</span>
                </p>
              </div>
            </div>

            {/* Recent Orders Overview */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                  RECENT UK DISPATCHES
                </h3>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-xs font-bold text-emerald-400 hover:underline"
                >
                  View All Orders →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="text-zinc-500 uppercase border-b border-zinc-800 font-bold">
                    <tr>
                      <th className="pb-3">Order #</th>
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">UK Postcode</th>
                      <th className="pb-3">Items</th>
                      <th className="pb-3">Total</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60 font-mono-num text-zinc-300">
                    {orders.slice(0, 5).map(o => (
                      <tr key={o.id} className="hover:bg-zinc-800/40">
                        <td className="py-3 font-bold text-white">#{o.orderNumber}</td>
                        <td className="py-3 text-zinc-300 font-sans">{o.customer.name}</td>
                        <td className="py-3">{o.shippingAddress.postcode}</td>
                        <td className="py-3 font-sans">{o.items.length} pairs</td>
                        <td className="py-3 font-bold text-white">£{o.total.toFixed(2)}</td>
                        <td className="py-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                              o.status === 'Delivered'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : o.status === 'Shipped'
                                ? 'bg-blue-950 text-blue-400 border border-blue-800'
                                : 'bg-amber-950 text-amber-400 border border-amber-800'
                            }`}
                          >
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGER */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative max-w-sm flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search catalog products..."
                  value={productSearch}
                  onChange={e => setProductSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <button
                onClick={() => setShowAddProductModal(true)}
                className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-xs font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Footwear Style</span>
              </button>
            </div>

            {/* Product Table */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-zinc-900/90 text-zinc-400 uppercase border-b border-zinc-800 font-bold">
                    <tr>
                      <th className="py-3 px-4">Product</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Gender</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">Sizes Stock</th>
                      <th className="py-3 px-4">Rating</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-zinc-300">
                    {filteredProductsList.map(p => (
                      <tr key={p.id} className="hover:bg-zinc-800/40">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <img
                            src={p.colors[0].image}
                            alt={p.name}
                            className="w-10 h-10 rounded-lg object-cover bg-zinc-800"
                          />
                          <div>
                            <p className="font-bold text-white uppercase">{p.name}</p>
                            <p className="text-[11px] text-zinc-500 truncate max-w-xs">{p.subtitle}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 uppercase text-zinc-400 font-mono">{p.category}</td>
                        <td className="py-3 px-4 uppercase text-zinc-400">{p.gender}</td>
                        <td className="py-3 px-4 font-bold text-white font-mono-num">
                          £{p.price.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px]">
                          {p.sizes.slice(0, 4).map(s => (
                            <span key={s} className="mr-2">
                              UK{s}: {p.sizeStock ? p.sizeStock[s] || 0 : 5}
                            </span>
                          ))}
                        </td>
                        <td className="py-3 px-4 font-bold text-amber-400">★ {p.rating}</td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => showToast('Product status updated')}
                            className="text-xs text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800 rounded"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS MANAGER */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {/* Filter pills */}
            <div className="flex gap-2">
              {(['all', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setOrderFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    orderFilter === st
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Orders list */}
            <div className="space-y-4">
              {filteredOrders.map(ord => (
                <div
                  key={ord.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-3 gap-2 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-white text-sm">
                        #{ord.orderNumber}
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400">{ord.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400">Status:</span>
                      <select
                        value={ord.status}
                        onChange={e => updateOrderStatus(ord.id, e.target.value as Order['status'])}
                        className="bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-white uppercase font-bold focus:outline-none"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>

                  {/* Customer and items grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="font-bold text-zinc-400 block mb-1">Customer</span>
                      <p className="text-white font-medium">{ord.customer.name}</p>
                      <p className="text-zinc-400">{ord.customer.email}</p>
                      <p className="text-zinc-400">{ord.customer.phone}</p>
                    </div>

                    <div>
                      <span className="font-bold text-zinc-400 block mb-1">UK Delivery Destination</span>
                      <p className="text-zinc-300">{ord.shippingAddress.addressLine1}</p>
                      <p className="text-zinc-400">
                        {ord.shippingAddress.city}, {ord.shippingAddress.postcode}
                      </p>
                      <p className="text-zinc-400 font-mono text-[11px] mt-1">
                        Tracking: {ord.trackingNumber}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-zinc-400 block mb-1">Order Items</span>
                      {ord.items.map((it, idx) => (
                        <p key={idx} className="text-zinc-300">
                          {it.productName} (UK {it.size}) × {it.quantity}
                        </p>
                      ))}
                      <p className="text-white font-bold mt-2 font-mono-num text-sm">
                        Total: £{ord.total.toFixed(2)} ({ord.paymentMethod})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DISCOUNT CODES */}
        {activeTab === 'discounts' && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                ACTIVE PROMOTIONAL CODES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {discounts.map(dc => (
                  <div
                    key={dc.code}
                    className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-sm text-emerald-400 tracking-wider">
                        {dc.code}
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded text-[10px] font-bold">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      {dc.type === 'percentage' ? `${dc.value}% OFF` : `£${dc.value} OFF`} • Min spend £{dc.minSpend || 0}
                    </p>
                    <p className="text-[10px] text-zinc-500">
                      Usage count: {dc.usesCount || 42} redemptions
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add Product Modal */}
        {showAddProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5">
              <h3 className="text-lg font-display font-extrabold uppercase text-white">
                Add New Footwear Style
              </h3>

              <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-400 font-bold uppercase mb-1">Model Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DŌNO SPECTRUM 01"
                    value={newProductName}
                    onChange={e => setNewProductName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Category</label>
                    <select
                      value={newProductCategory}
                      onChange={e => setNewProductCategory(e.target.value as any)}
                      className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white focus:outline-none"
                    >
                      <option value="Sneakers">Sneakers</option>
                      <option value="Running">Running</option>
                      <option value="Casual">Casual</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Boots">Boots</option>
                      <option value="Platform">Platform</option>
                      <option value="Court">Court</option>
                      <option value="Slides">Slides</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Gender</label>
                    <select
                      value={newProductGender}
                      onChange={e => setNewProductGender(e.target.value as any)}
                      className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white focus:outline-none"
                    >
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="unisex">Unisex</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold uppercase mb-1">Price (GBP £)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={newProductPrice}
                    onChange={e => setNewProductPrice(e.target.value)}
                    className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-bold uppercase mb-1">Image URL</label>
                  <input
                    type="url"
                    required
                    value={newProductImage}
                    onChange={e => setNewProductImage(e.target.value)}
                    className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white focus:outline-none text-[11px]"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddProductModal(false)}
                    className="w-1/2 py-3 bg-zinc-800 text-white rounded-xl font-bold uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-3 bg-white text-black rounded-xl font-bold uppercase hover:bg-zinc-200"
                  >
                    Publish Style
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
