import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'dono-airform-01',
    name: 'DŌNO AIRFORM 01',
    slug: 'dono-airform-01',
    subtitle: 'Everyday High-Performance Silhouette',
    price: 129.0,
    originalPrice: 155.0,
    gender: 'unisex',
    category: 'Sneakers',
    tag: 'BEST SELLER',
    rating: 4.9,
    reviewCount: 247,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: true,
    createdAt: '2026-01-15',
    inStock: true,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    sizeStock: { 6: 4, 6.5: 8, 7: 12, 7.5: 6, 8: 15, 8.5: 14, 9: 10, 9.5: 2, 10: 9, 10.5: 5, 11: 4, 12: 3 },
    colors: [
      {
        name: 'Triple Chalk White',
        hex: '#F5F5F3',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Stealth Matte Black',
        hex: '#18181B',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'London Fog Grey',
        hex: '#71717A',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Engineered for the demands of the modern British metropolis. The AirForm 01 features our proprietary DualAir cushioning midsole wrapped in hand-sculpted Italian micro-knit panels. Balances surgical streetwear ergonomics with uncompromising all-day comfort.',
    details: [
      'Engineered multi-density AeroKnit upper with breathable thermal zoning',
      'DualAir™ high-rebound cushioning midsole absorbs 94% of ground impact',
      'Reinforced heel counter with sculpted British leather collar',
      'Custom herringbone rubber outsole with high-traction wet pavement grip',
      'Removable anti-microbial orthotic footbed'
    ],
    materials: {
      upper: '65% Recycled Micro-Mesh, 35% Full-Grain Calf Nappa',
      lining: 'Bamboo-fibre breathable antimicrobial textile',
      sole: 'DualAir™ EVA foam with vulcanized carbon-rubber tread',
      origin: 'Designed in London, hand-finished in Portugal'
    },
    reviews: [
      {
        id: 'rev-1',
        author: 'James H.',
        location: 'London, W1',
        rating: 5,
        date: '2 weeks ago',
        title: 'The comfort is honestly unreal.',
        comment: 'Walked 18,000 steps across Soho and Mayfair on my first day wearing them. Zero break-in period, beautifully minimal silhouette and looks razor sharp with pleated trousers.',
        verified: true,
        fit: 'True to Size'
      },
      {
        id: 'rev-2',
        author: 'Olivia M.',
        location: 'Manchester',
        rating: 5,
        date: '1 month ago',
        title: 'Looks premium and feels even better.',
        comment: 'The quality of the leather accents and weight balance is superior to luxury designer sneakers costing 3x as much. Will definitely be buying the Fog Grey pair.',
        verified: true,
        fit: 'True to Size'
      },
      {
        id: 'rev-3',
        author: 'Daniel K.',
        location: 'Birmingham',
        rating: 5,
        date: '3 weeks ago',
        title: 'My new everyday trainers.',
        comment: 'Extremely lightweight, clean branding, and the soles hold up remarkably well in British wet weather.',
        verified: true,
        fit: 'True to Size'
      }
    ]
  },
  {
    id: 'dono-street-02',
    name: 'DŌNO STREET 02',
    slug: 'dono-street-02',
    subtitle: 'Low-Profile Contemporary Court Trainer',
    price: 109.0,
    originalPrice: 129.0,
    gender: 'men',
    category: 'Court',
    tag: 'BEST SELLER',
    rating: 4.8,
    reviewCount: 189,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: true,
    createdAt: '2026-01-20',
    inStock: true,
    sizes: [6, 7, 8, 8.5, 9, 9.5, 10, 11, 12],
    sizeStock: { 6: 2, 7: 6, 8: 10, 8.5: 8, 9: 14, 9.5: 5, 10: 8, 11: 3, 12: 2 },
    colors: [
      {
        name: 'Ecru & Forest Green',
        hex: '#2E4C38',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Monochrome Black / Bone',
        hex: '#27272A',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Inspired by vintage British tennis footwear reimagined with brutalist architectural proportions. Stitched cupsole architecture, buttery calfskin panelling and waxed cotton laces.',
    details: [
      'Italian full-grain tumbled calf leather upper',
      'Hand-stitched perimeter cupsole for longevity',
      'Subtle debossed DŌNO silver foil crest on tongue',
      'Breathable micro-perforated toe box'
    ],
    materials: {
      upper: '100% Full-Grain Calf Leather',
      lining: 'Soft glove leather',
      sole: 'Moulded rubber cupsole',
      origin: 'Designed in London, crafted in Porto'
    },
    reviews: [
      {
        id: 'rev-4',
        author: 'Tom B.',
        location: 'Edinburgh',
        rating: 5,
        date: '1 week ago',
        title: 'Timeless aesthetic.',
        comment: 'Cleanest silhouette I have owned. Dresses up with a blazer or down with raw denim.',
        verified: true,
        fit: 'True to Size'
      }
    ]
  },
  {
    id: 'dono-velocity',
    name: 'DŌNO VELOCITY',
    slug: 'dono-velocity',
    subtitle: 'Hyper-Dynamic Carbon Running Trainer',
    price: 139.0,
    originalPrice: 165.0,
    gender: 'unisex',
    category: 'Running',
    tag: 'NEW',
    rating: 4.9,
    reviewCount: 94,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-01',
    inStock: true,
    sizes: [5, 6, 7, 8, 8.5, 9, 9.5, 10, 11],
    sizeStock: { 5: 3, 6: 7, 7: 9, 8: 12, 8.5: 15, 9: 10, 9.5: 8, 10: 6, 11: 4 },
    colors: [
      {
        name: 'Silver Metallic & Obsidian',
        hex: '#94A3B8',
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Midnight Black / Neon Accent',
        hex: '#09090B',
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Precision-tuned for the urban commuter and pace-setter. The Velocity integrates a curved composite speed plate with ultra-cushioned supercritical foam for instantaneous kinetic energy return.',
    details: [
      'Ultra-light 210g aerodynamic structure',
      'Dual-layer propulsion plate with forward rocker geometry',
      'Reflective 3M safety accents for evening city strides'
    ],
    materials: {
      upper: 'Engineered Mono-Mesh and TPU Overlays',
      lining: 'Hydrophobic moisture-wicking weave',
      sole: 'AeroMax Supercritical Foam + Carbon Rubber',
      origin: 'Designed in Britain'
    },
    reviews: []
  },
  {
    id: 'dono-cloudrun',
    name: 'DŌNO CLOUDRUN',
    slug: 'dono-cloudrun',
    subtitle: 'Zero-Gravity Daily Cushioning Trainer',
    price: 119.0,
    originalPrice: 139.0,
    gender: 'women',
    category: 'Running',
    tag: 'BEST SELLER',
    rating: 4.9,
    reviewCount: 162,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: false,
    createdAt: '2026-01-10',
    inStock: true,
    sizes: [3, 4, 5, 5.5, 6, 6.5, 7, 8],
    sizeStock: { 3: 4, 4: 8, 5: 14, 5.5: 9, 6: 12, 6.5: 8, 7: 6, 8: 3 },
    colors: [
      {
        name: 'Oatmeal & Alabaster',
        hex: '#E4DCD3',
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Sage Whisper',
        hex: '#8E9B90',
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Cloud-soft cushioning tailored specifically for female biomechanics. Designed to absorb pavement shocks effortlessly while radiating refined Scandinavian-British minimalism.',
    details: [
      'Sculpted arch support for all-day posture alignment',
      'Ultra-breathable micro-mesh upper with suede overlays',
      'Padded anatomical heel pillow'
    ],
    materials: {
      upper: 'Recycled knit with suede mudguard',
      lining: 'Soft organic cotton blend',
      sole: 'CloudCell™ EVA compound',
      origin: 'Crafted in Europe'
    },
    reviews: [
      {
        id: 'rev-5',
        author: 'Charlotte S.',
        location: 'Bristol',
        rating: 5,
        date: '2 weeks ago',
        title: 'Like walking on clouds.',
        comment: 'I stand on my feet for 10 hours a day as an architect. These have saved my back and look chic with tailored wide-leg trousers.',
        verified: true,
        fit: 'True to Size'
      }
    ]
  },
  {
    id: 'dono-nexus-runner',
    name: 'DŌNO NEXUS RUNNER',
    slug: 'dono-nexus-runner',
    subtitle: 'Chunky Y2K Retro-Futuristic Silhouette',
    price: 135.0,
    originalPrice: 160.0,
    gender: 'unisex',
    category: 'Sneakers',
    tag: 'NEW',
    rating: 4.8,
    reviewCount: 78,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-05',
    inStock: true,
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    sizeStock: { 5: 2, 6: 5, 7: 8, 8: 10, 9: 14, 10: 9, 11: 4, 12: 2 },
    colors: [
      {
        name: 'Chrome / Matte Silver / Cream',
        hex: '#D1D5DB',
        image: 'https://images.unsplash.com/photo-1512374382149-233c42b66137?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1512374382149-233c42b66137?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Dark Matter / Carbon',
        hex: '#1E293B',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1512374382149-233c42b66137?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'A bold collision of late-90s technical running heritage and avant-garde London streetwear aesthetics. Layered open mesh, sculpted metallic cages, and thick aggressive tread.',
    details: [
      'Multi-layered metallic synthetic panels over open honeycomb mesh',
      'Thick sculpted midsole with segmented heel pods',
      'Quick-pull toggle lace mechanism included with standard laces'
    ],
    materials: {
      upper: 'Multi-layer mesh and synthetic leather',
      lining: 'Cushioned mesh',
      sole: 'Dual-density TPU and rubber',
      origin: 'Designed in London'
    },
    reviews: []
  },
  {
    id: 'dono-chelsea-lug',
    name: 'DŌNO CHELSEA LUG',
    slug: 'dono-chelsea-lug',
    subtitle: 'Chunky Sole Waterproof Leather Chelsea Boot',
    price: 165.0,
    originalPrice: 195.0,
    gender: 'men',
    category: 'Boots',
    tag: 'EXCLUSIVE',
    rating: 5.0,
    reviewCount: 52,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-01-28',
    inStock: true,
    sizes: [7, 8, 9, 10, 11, 12],
    sizeStock: { 7: 4, 8: 9, 9: 11, 10: 7, 11: 5, 12: 2 },
    colors: [
      {
        name: 'Oiled Wax Black Leather',
        hex: '#111827',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Vintage Saddle Tan',
        hex: '#78350F',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Quintessential British Chelsea boot silhouette beefed up with an architectural commando lug sole. Waterproof treated Italian hide resists the wettest UK seasons without losing luxury lustre.',
    details: [
      'Heavyweight 2.2mm waxed hydrophobic calfskin',
      'Goodyear-welted construction technique for lifetime resoling',
      'Heavy-gauge elasticated side gussets with woven pull-tabs'
    ],
    materials: {
      upper: '100% Water-Resistant Full-Grain Calfskin',
      lining: 'Calf leather lining with moisture barrier',
      sole: 'Vibram-inspired lightweight commando lug sole',
      origin: 'Northamptonshire Heritage Heritage Partnership'
    },
    reviews: []
  },
  {
    id: 'dono-monolith-platform',
    name: 'DŌNO MONOLITH PLATFORM',
    slug: 'dono-monolith-platform',
    subtitle: 'Architectural Platform Leather Sneaker',
    price: 145.0,
    originalPrice: 175.0,
    gender: 'women',
    category: 'Platform',
    tag: 'NEW',
    rating: 4.9,
    reviewCount: 114,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-10',
    inStock: true,
    sizes: [3, 4, 5, 6, 7, 8],
    sizeStock: { 3: 5, 4: 9, 5: 12, 6: 15, 7: 8, 8: 4 },
    colors: [
      {
        name: 'Bone White / Sand',
        hex: '#EDE8E1',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Pitch Black Monolith',
        hex: '#18181B',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Elevated stance without the weight. The Monolith features a featherlight 45mm platform sole crafted with micro-cellular foam and wrapped in buttery smooth Italian nappa.',
    details: [
      '45mm elevated flatform sole with balanced pitch angle',
      'Ultra-soft padded collar to eliminate friction',
      'Tonal embossed DŌNO insignia'
    ],
    materials: {
      upper: '100% Nappa Leather',
      lining: 'Soft leather & organic canvas',
      sole: 'Extralight® EVA Platform',
      origin: 'Crafted in Portugal'
    },
    reviews: []
  },
  {
    id: 'dono-aero-slide',
    name: 'DŌNO AERO SLIDE',
    slug: 'dono-aero-slide',
    subtitle: 'Sculpted Recovery Slide in Matte Foam',
    price: 49.0,
    originalPrice: 65.0,
    gender: 'unisex',
    category: 'Slides',
    tag: 'SALE',
    rating: 4.7,
    reviewCount: 140,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: false,
    createdAt: '2026-01-05',
    inStock: true,
    sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    sizeStock: { 4: 8, 5: 10, 6: 12, 7: 15, 8: 14, 9: 18, 10: 12, 11: 8, 12: 5 },
    colors: [
      {
        name: 'Pebble Sand',
        hex: '#D6CEBE',
        image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Graphite Onyx',
        hex: '#27272A',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Seamless one-piece injection moulded slide created for post-workout recovery, airport transit, and elevated casual lounge living. Ergonomic footbed cradles the arch.',
    details: [
      'Single-piece injection molded bio-based EVA',
      'Waterproof and anti-slip tread pattern',
      'Contoured deep heel cup and toe bar grip'
    ],
    materials: {
      upper: '100% Bio-EVA Foam',
      lining: 'Non-porous textured finish',
      sole: 'Textured slip-resistant bottom',
      origin: 'Designed in London'
    },
    reviews: []
  },
  {
    id: 'dono-apex-trail',
    name: 'DŌNO APEX TRAIL',
    slug: 'dono-apex-trail',
    subtitle: 'All-Terrain GORE-Shield Weatherproof Sneaker',
    price: 149.0,
    originalPrice: 180.0,
    gender: 'men',
    category: 'Sneakers',
    tag: 'LIMITED',
    rating: 4.9,
    reviewCount: 65,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-12',
    inStock: true,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12],
    sizeStock: { 7: 3, 7.5: 5, 8: 8, 8.5: 10, 9: 12, 9.5: 7, 10: 6, 11: 4, 12: 2 },
    colors: [
      {
        name: 'Olive / Gunmetal / Safety Orange',
        hex: '#4D5343',
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Built for unpredictable British climate shifts. Features a breathable waterproof inner membrane paired with a rugged tooth outsole for traction from the Highlands to the Underground.',
    details: [
      'Seam-sealed water-repellent ripstop shell',
      'GripMaster 5mm multidirectional rubber lugging',
      'Reflective speed lacing harness'
    ],
    materials: {
      upper: 'Cordura® Ripstop with TPU welded seams',
      lining: 'Waterproof breathable membrane',
      sole: 'Dual-compound vulcanized rubber',
      origin: 'Designed in UK'
    },
    reviews: []
  },
  {
    id: 'dono-astor-minimalist',
    name: 'DŌNO ASTOR MINIMALIST',
    slug: 'dono-astor-minimalist',
    subtitle: 'Unstructured Pure Calf Leather Sneaker',
    price: 119.0,
    originalPrice: 145.0,
    gender: 'women',
    category: 'Lifestyle',
    tag: 'BEST SELLER',
    rating: 4.9,
    reviewCount: 210,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: true,
    createdAt: '2026-01-08',
    inStock: true,
    sizes: [3, 4, 5, 6, 7, 8, 9],
    sizeStock: { 3: 6, 4: 9, 5: 14, 6: 18, 7: 12, 8: 6, 9: 2 },
    colors: [
      {
        name: 'Pure Ivory White',
        hex: '#FAF9F6',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Warm Taupe Suede',
        hex: '#B7A99A',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'The epitome of quiet luxury. Handcrafted with ultra-soft Italian calfskin with zero loud logos. Stretches to mold to your foot shape within hours of wear.',
    details: [
      'Unlined deconstructed upper for lightweight glove fit',
      'Cushioned memory foam insole lined with smooth lambskin',
      'Low-profile Margom-style rubber outsole'
    ],
    materials: {
      upper: '100% Full-Grain Italian Calf',
      lining: 'Vegetable-tanned leather',
      sole: 'Natural vulcanized rubber',
      origin: 'Artisanal workshop, Italy'
    },
    reviews: []
  },
  {
    id: 'dono-highline-combat',
    name: 'DŌNO HIGHLINE COMBAT',
    slug: 'dono-highline-combat',
    subtitle: 'London High-Top Tactical Leather Boot',
    price: 179.0,
    originalPrice: 215.0,
    gender: 'unisex',
    category: 'Boots',
    tag: 'EXCLUSIVE',
    rating: 4.8,
    reviewCount: 44,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-02',
    inStock: true,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    sizeStock: { 6: 2, 7: 4, 8: 6, 9: 8, 10: 6, 11: 3, 12: 2 },
    colors: [
      {
        name: 'Matte Obsidian Black',
        hex: '#0A0A0A',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'High-impact silhouette fusing British punk heritage with high-tech tactical hardware. Quick-release side zip allows effortless slip-on entrance.',
    details: [
      'Matte military-grade full-grain leather',
      'YKK heavy-duty interior metal zipper',
      'Deep tooth lugged shock-absorbing sole'
    ],
    materials: {
      upper: 'Military Grade Treated Cowhide',
      lining: 'Leather & canvas',
      sole: 'Oil-resistant thermo rubber',
      origin: 'United Kingdom'
    },
    reviews: []
  },
  {
    id: 'dono-stratus-court',
    name: 'DŌNO STRATUS COURT',
    slug: 'dono-stratus-court',
    subtitle: 'Classic 80s Leather Heritage Trainer',
    price: 99.0,
    originalPrice: 125.0,
    gender: 'men',
    category: 'Court',
    tag: 'SALE',
    rating: 4.8,
    reviewCount: 133,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: false,
    createdAt: '2026-01-02',
    inStock: true,
    sizes: [6, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    sizeStock: { 6: 3, 7: 6, 8: 9, 8.5: 8, 9: 12, 9.5: 6, 10: 8, 10.5: 4, 11: 4, 12: 3 },
    colors: [
      {
        name: 'Vintage White / Burgundy Accent',
        hex: '#7F1D1D',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Vintage White / Navy Blue',
        hex: '#1E3A8A',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'An authentic tribute to golden-era British court culture. Features pre-softened tumbled leather, contrast suede mudguards, and an off-white vintage midsole wash.',
    details: [
      'Supple tumbled action leather upper with hairy suede detailing',
      'Cushioned retro terry-cloth inner lining',
      'Grippy gum-rubber perimeter outsole'
    ],
    materials: {
      upper: 'Leather & Genuine Suede',
      lining: 'Vintage French Terry',
      sole: '100% Natural Rubber',
      origin: 'Designed in London'
    },
    reviews: []
  },
  {
    id: 'dono-lumina-knit',
    name: 'DŌNO LUMINA KNIT',
    slug: 'dono-lumina-knit',
    subtitle: 'Featherweight Seamless Slip-On Trainer',
    price: 115.0,
    originalPrice: 135.0,
    gender: 'women',
    category: 'Lifestyle',
    tag: 'NEW',
    rating: 4.9,
    reviewCount: 92,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: false,
    createdAt: '2026-02-14',
    inStock: true,
    sizes: [3, 4, 5, 6, 7, 8],
    sizeStock: { 3: 4, 4: 8, 5: 11, 6: 14, 7: 9, 8: 3 },
    colors: [
      {
        name: 'Chalk Taupe & Rose Gold',
        hex: '#C5B4A5',
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Slate Charcoal',
        hex: '#334155',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Form-fitting zero-waste 3D engineered knit that slips on like a sock and supports like a high-performance trainer. Weighs only 185 grams.',
    details: [
      '3D circular engineered continuous knit upper',
      'Ribbed stretch ankle collar for frictionless entry',
      'Ultra-responsive rebound midsole'
    ],
    materials: {
      upper: '100% Recycled PET Polymer Yarn',
      lining: 'Seamless ergonomic knit',
      sole: 'FeatherCell™ Rebound Foam',
      origin: 'Portugal'
    },
    reviews: []
  },
  {
    id: 'dono-meridian-oxford',
    name: 'DŌNO MERIDIAN HYBRID',
    slug: 'dono-meridian-hybrid',
    subtitle: 'Dress Shoe Upper on Athletic Cushion Sole',
    price: 155.0,
    originalPrice: 185.0,
    gender: 'men',
    category: 'Casual',
    tag: 'LIMITED',
    rating: 4.8,
    reviewCount: 39,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-01-30',
    inStock: true,
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
    sizeStock: { 7: 3, 8: 6, 8.5: 5, 9: 9, 9.5: 4, 10: 5, 11: 3, 12: 2 },
    colors: [
      {
        name: 'Burnished Espresso Brown',
        hex: '#451A03',
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Mirror Polish Jet Black',
        hex: '#020617',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'The modern London boardroom shoe. Marries Savile Row brogue detailing with an ultra-plush sneaker sole so you never suffer through commute fatigue again.',
    details: [
      'Hand-burnished full-grain box calf leather',
      'Subtle wingtip brogue perforations',
      'Hidden athletic shock absorption pad inside heel'
    ],
    materials: {
      upper: '100% Hand-Finished Italian Calfskin',
      lining: 'Supple calfskin lining',
      sole: 'Hybrid athletic rubber sole',
      origin: 'Northamptonshire, UK'
    },
    reviews: []
  },
  {
    id: 'dono-zenith-high',
    name: 'DŌNO ZENITH HIGH',
    slug: 'dono-zenith-high',
    subtitle: 'Padded Ankle Court High-Top Sneaker',
    price: 139.0,
    originalPrice: 169.0,
    gender: 'unisex',
    category: 'Court',
    tag: 'NEW',
    rating: 4.9,
    reviewCount: 71,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-08',
    inStock: true,
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    sizeStock: { 5: 3, 6: 5, 7: 8, 8: 10, 9: 12, 10: 8, 11: 5, 12: 2 },
    colors: [
      {
        name: 'Cloud White & Slate Grey',
        hex: '#64748B',
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Substantial, protective and sculpted. The Zenith High envelopes the ankle with memory foam padding encased in tumbled calfskin and durable canvas side panels.',
    details: [
      'Padded ankle collar with dual-density foam',
      'Reinforced toe bumper with perimeter stitching',
      'Includes 2 pairs of laces: tonal waxed & flat cotton'
    ],
    materials: {
      upper: 'Tumbled Leather and 16oz Cotton Canvas',
      lining: 'Soft French Terry',
      sole: 'Vulcanized Rubber Cupsole',
      origin: 'Designed in London'
    },
    reviews: []
  },
  {
    id: 'dono-prism-trainer',
    name: 'DŌNO PRISM TRAINER',
    slug: 'dono-prism-trainer',
    subtitle: 'Chunky Aesthetic Studio & Street Runner',
    price: 125.0,
    originalPrice: 145.0,
    gender: 'women',
    category: 'Sneakers',
    tag: 'BEST SELLER',
    rating: 4.8,
    reviewCount: 154,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: true,
    createdAt: '2026-01-18',
    inStock: true,
    sizes: [3, 4, 5, 6, 6.5, 7, 8],
    sizeStock: { 3: 4, 4: 9, 5: 12, 6: 16, 6.5: 8, 7: 10, 8: 4 },
    colors: [
      {
        name: 'Off-White / Soft Lilac / Sand',
        hex: '#DDD6FE',
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Sculptural, energetic and refined. Blends muted pastel overlays with an elevated foam base for an aesthetic that transitions seamlessly from Pilates to dinner.',
    details: [
      'Sculpted dual-tone midsole with shock-absorption heel chamber',
      'Ultra-soft suede and breathable open-weave mesh',
      'Anatomically sculpted footbed'
    ],
    materials: {
      upper: 'Silky Suede & Breathable Knit Mesh',
      lining: 'Antimicrobial micro-lining',
      sole: 'Dual-tone EVA & Rubber',
      origin: 'Portugal'
    },
    reviews: []
  },
  {
    id: 'dono-heritage-derby',
    name: 'DŌNO HERITAGE DERBY',
    slug: 'dono-heritage-derby',
    subtitle: 'Chunky Lug Sole British Derby Shoe',
    price: 160.0,
    originalPrice: 190.0,
    gender: 'men',
    category: 'Casual',
    tag: 'EXCLUSIVE',
    rating: 4.9,
    reviewCount: 48,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    isLondonEdit: true,
    createdAt: '2026-01-12',
    inStock: true,
    sizes: [7, 8, 9, 10, 11, 12],
    sizeStock: { 7: 4, 8: 7, 9: 10, 10: 8, 11: 4, 12: 2 },
    colors: [
      {
        name: 'Polished Black Box Calf',
        hex: '#111827',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Classic British tailoring meeting modern street volume. A solid 3-eyelet derby finished with a high-shine glaze and storm-welted tooth outsole.',
    details: [
      'High-shine polished box calfskin',
      'Storm-welted Goodyear construction',
      'Solid brass eyelets with round waxed laces'
    ],
    materials: {
      upper: '100% Box Calf Leather',
      lining: 'Soft leather lining',
      sole: 'Commando-profile rubber lug sole',
      origin: 'Northamptonshire, UK'
    },
    reviews: []
  },
  {
    id: 'dono-solstice-mule',
    name: 'DŌNO SOLSTICE MULE',
    slug: 'dono-solstice-mule',
    subtitle: 'Closed-Toe Suede Slip-On Clog',
    price: 89.0,
    originalPrice: 110.0,
    gender: 'unisex',
    category: 'Casual',
    tag: 'SALE',
    rating: 4.8,
    reviewCount: 96,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: false,
    createdAt: '2026-01-22',
    inStock: true,
    sizes: [4, 5, 6, 7, 8, 9, 10, 11],
    sizeStock: { 4: 5, 5: 8, 6: 12, 7: 14, 8: 12, 9: 10, 10: 6, 11: 3 },
    colors: [
      {
        name: 'Mink Grey Suede',
        hex: '#9CA3AF',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop'
        ]
      },
      {
        name: 'Camel Tan Suede',
        hex: '#B45309',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'The modern uniform mule. Premium heavyweight oiled suede with an adjustable buckle strap and cork-latex anatomical footbed that conforms to your stride.',
    details: [
      'Heavyweight 2.8mm oiled split suede upper',
      'Solid matte silver roller buckle',
      'Moulded natural cork and latex footbed'
    ],
    materials: {
      upper: '100% Genuine Oiled Suede',
      lining: 'Suede footbed lining',
      sole: 'Natural Cork & EVA Sole',
      origin: 'Spain'
    },
    reviews: []
  },
  {
    id: 'dono-shift-runner',
    name: 'DŌNO SHIFT RUNNER',
    slug: 'dono-shift-runner',
    subtitle: 'Streamlined Marathon & Everyday Trainer',
    price: 130.0,
    originalPrice: 150.0,
    gender: 'men',
    category: 'Running',
    tag: 'NEW',
    rating: 4.9,
    reviewCount: 61,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    isLondonEdit: true,
    createdAt: '2026-02-15',
    inStock: true,
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    sizeStock: { 7: 4, 8: 8, 8.5: 7, 9: 11, 9.5: 6, 10: 7, 10.5: 3, 11: 4, 12: 2 },
    colors: [
      {
        name: 'Storm Grey / Polar White',
        hex: '#E2E8F0',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Engineered for 5Ks to full marathons. Features progressive rocker geometry and dual-density supercritical foam for effortless transitions.',
    details: [
      'Breathable engineered jacquard upper',
      'Dual-compound responsive cushioning',
      'Zonal rubber pods on high-wear contact points'
    ],
    materials: {
      upper: 'Recycled Jacquard Mesh',
      lining: 'Breathable textile',
      sole: 'Supercritical Nitrogen-Infused Foam',
      origin: 'Designed in UK'
    },
    reviews: []
  },
  {
    id: 'dono-orbit-platform',
    name: 'DŌNO ORBIT PLATFORM',
    slug: 'dono-orbit-platform',
    subtitle: 'Chunky Sculpted Rubber Sole Trainer',
    price: 139.0,
    originalPrice: 165.0,
    gender: 'women',
    category: 'Platform',
    tag: 'BEST SELLER',
    rating: 4.9,
    reviewCount: 118,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    isLondonEdit: true,
    createdAt: '2026-01-25',
    inStock: true,
    sizes: [3, 4, 5, 6, 7, 8],
    sizeStock: { 3: 5, 4: 8, 5: 12, 6: 15, 7: 9, 8: 4 },
    colors: [
      {
        name: 'Alabaster White / Neutral Grey',
        hex: '#F1F5F9',
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop'
        ]
      }
    ],
    description:
      'Turn heads with the Orbit Platform. Oversized bulbous proportions engineered from featherweight compounds make this a showpiece sneaker that is surprisingly easy to wear all day.',
    details: [
      '50mm contoured lightweight platform structure',
      'Nappa leather & soft suede overlays',
      'Signature metallic silver heel clip'
    ],
    materials: {
      upper: 'Italian Nappa and Suede',
      lining: 'Breathable leather',
      sole: 'Microcellular Featherlite EVA',
      origin: 'Italy'
    },
    reviews: []
  }
];

export const INITIAL_DISCOUNTS = [
  {
    code: 'DONOFIRST10',
    type: 'percentage' as const,
    value: 10,
    minSpend: 50,
    expiresAt: '2026-12-31',
    isActive: true,
    usesCount: 142
  },
  {
    code: 'LONDON20',
    type: 'percentage' as const,
    value: 20,
    minSpend: 100,
    expiresAt: '2026-12-31',
    isActive: true,
    usesCount: 89
  },
  {
    code: 'VIP15',
    type: 'percentage' as const,
    value: 15,
    minSpend: 75,
    expiresAt: '2026-12-31',
    isActive: true,
    usesCount: 56
  },
  {
    code: 'SAVE25',
    type: 'fixed' as const,
    value: 25,
    minSpend: 150,
    expiresAt: '2026-12-31',
    isActive: true,
    usesCount: 31
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'ord-1092',
    orderNumber: 'DN-89201',
    date: '2026-02-18',
    customer: {
      name: 'Alexander Ward',
      email: 'alex.ward@ukmail.co.uk',
      phone: '+44 7700 900123'
    },
    shippingAddress: {
      fullName: 'Alexander Ward',
      email: 'alex.ward@ukmail.co.uk',
      phone: '+44 7700 900123',
      addressLine1: '42 Kensington Church Street',
      city: 'London',
      postcode: 'W8 4DB',
      country: 'United Kingdom'
    },
    items: [
      {
        productId: 'dono-airform-01',
        productName: 'DŌNO AIRFORM 01',
        colorName: 'Triple Chalk White',
        size: 9,
        price: 129.0,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    subtotal: 129.0,
    deliveryFee: 0,
    discount: 12.9,
    discountCode: 'DONOFIRST10',
    total: 116.1,
    status: 'Shipped' as const,
    paymentMethod: 'Apple Pay' as const,
    trackingNumber: 'GB-DHL-992019482'
  },
  {
    id: 'ord-1091',
    orderNumber: 'DN-89200',
    date: '2026-02-17',
    customer: {
      name: 'Sophie Bennett',
      email: 'sophie.b@gmail.com',
      phone: '+44 7890 123456'
    },
    shippingAddress: {
      fullName: 'Sophie Bennett',
      email: 'sophie.b@gmail.com',
      phone: '+44 7890 123456',
      addressLine1: '18 Deansgate',
      city: 'Manchester',
      postcode: 'M3 2NW',
      country: 'United Kingdom'
    },
    items: [
      {
        productId: 'dono-cloudrun',
        productName: 'DŌNO CLOUDRUN',
        colorName: 'Oatmeal & Alabaster',
        size: 5.5,
        price: 119.0,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop'
      },
      {
        productId: 'dono-aero-slide',
        productName: 'DŌNO AERO SLIDE',
        colorName: 'Pebble Sand',
        size: 5,
        price: 49.0,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    subtotal: 168.0,
    deliveryFee: 0,
    discount: 0,
    total: 168.0,
    status: 'Delivered' as const,
    paymentMethod: 'Card' as const,
    trackingNumber: 'GB-RM-44210985'
  },
  {
    id: 'ord-1090',
    orderNumber: 'DN-89199',
    date: '2026-02-16',
    customer: {
      name: 'Harry Evans',
      email: 'h.evans@outlook.com',
      phone: '+44 7123 456789'
    },
    shippingAddress: {
      fullName: 'Harry Evans',
      email: 'h.evans@outlook.com',
      phone: '+44 7123 456789',
      addressLine1: '7 Queen Street',
      city: 'Edinburgh',
      postcode: 'EH2 1JE',
      country: 'United Kingdom'
    },
    items: [
      {
        productId: 'dono-chelsea-lug',
        productName: 'DŌNO CHELSEA LUG',
        colorName: 'Oiled Wax Black Leather',
        size: 10,
        price: 165.0,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    subtotal: 165.0,
    deliveryFee: 0,
    discount: 25.0,
    discountCode: 'SAVE25',
    total: 140.0,
    status: 'Processing' as const,
    paymentMethod: 'Google Pay' as const,
    trackingNumber: 'GB-DPD-88192003'
  }
];

export const INITIAL_CUSTOMERS = [
  {
    id: 'cust-1',
    name: 'Alexander Ward',
    email: 'alex.ward@ukmail.co.uk',
    phone: '+44 7700 900123',
    totalSpent: 485.0,
    ordersCount: 4,
    status: 'VIP' as const,
    joinedDate: '2025-11-10',
    lastOrderDate: '2026-02-18'
  },
  {
    id: 'cust-2',
    name: 'Sophie Bennett',
    email: 'sophie.b@gmail.com',
    phone: '+44 7890 123456',
    totalSpent: 320.0,
    ordersCount: 2,
    status: 'Regular' as const,
    joinedDate: '2026-01-05',
    lastOrderDate: '2026-02-17'
  },
  {
    id: 'cust-3',
    name: 'Harry Evans',
    email: 'h.evans@outlook.com',
    phone: '+44 7123 456789',
    totalSpent: 165.0,
    ordersCount: 1,
    status: 'New' as const,
    joinedDate: '2026-02-16',
    lastOrderDate: '2026-02-16'
  },
  {
    id: 'cust-4',
    name: 'Eleanor Davies',
    email: 'eleanor.d@icloud.com',
    phone: '+44 7981 223344',
    totalSpent: 620.0,
    ordersCount: 5,
    status: 'VIP' as const,
    joinedDate: '2025-09-14',
    lastOrderDate: '2026-02-10'
  }
];
