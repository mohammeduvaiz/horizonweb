
export const slides = [
  {
    title: "Authorized Yonex Distributor",
    subtitle: "100% Genuine Products | Trusted by Professional Players",
  },
  {
    title: "Premium Quality Guaranteed",
    subtitle: "Every Product is Authenticated & Verified",
  },
  {
    title: "Trusted by Champions",
    subtitle: "Serving Professional Players Across India",
  },
  {
    title: "Expert Customer Service",
    subtitle: "Dedicated Support for All Your Sporting Needs",
  }
];

export const categories = [
  {
    name: "Rackets",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800",
    count: 120,
    subcategories: ["Astrox Series", "Nanoflare Series", "Arcsaber Series", "Duora Series"]
  },
  {
    name: "Shoes",
    image: "https://www.yonex.com/media/catalog/category/bd_shose-24sp_1.jpg",
    count: 45,
    subcategories: ["Power Cushion Series", "Aerus Series", "Comfort Series"]
  },
  {
    name: "Apparel",
    image: "https://www.yonex.com/media/catalog/category/750x1000_Bad_ap_250123_1.jpg",
    count: 200,
    subcategories: ["T-Shirts", "Shorts", "Socks", "Track Suits"]
  },
  {
    name: "Shuttlecocks",
    image: "https://www.yonex.com/media/catalog/category/Badminton-Shuttles-Mobile.jpg",
    count: 15,
    subcategories: ["Tournament Grade", "Training Grade", "Recreational"]
  },
  {
    name: "Kit Bags",
    image: "https://www.yonex.com/media/catalog/category/bad_bag_250117_sp_1.jpg",
    count: 30,
    subcategories: ["Pro Series", "Tournament Bags", "Backpacks"]
  },
  {
    name: "Accessories",
    image: "https://www.yonex.com/media/catalog/category/ACCESSORIES_mobile_1.jpg",
    count: 50,
    subcategories: ["Grips", "Strings", "Wristbands", "Towels"]
  }
];

// export const products = [
//   {
//     id: 1,
//     name: "Yonex Astrox 88D Pro",
//     price: "₹18,500",
//     image: "https://www.yonex.com/media/catalog/product/3/a/3ax88d-p_076-1_02.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
//     category: "Rackets",
//     description: "Professional grade badminton racket with enhanced power and control"
//   },
//   {
//     id: 2,
//     name: "Yonex Power Cushion 65Z3",
//     price: "₹12,900",
//     image: "https://www.yonex.com/media/catalog/product/i/n/int_shb65x4_011-1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
//     category: "Shoes",
//     description: "Advanced cushioning technology for maximum comfort and support"
//   },
//   {
//     id: 3,
//     name: "Yonex Pro Tournament Bag",
//     price: "₹4,500",
//     image: "https://www.yonex.com/media/catalog/product/i/n/int_ba92431w_007-3.jpg?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
//     category: "Kit Bags",
//     description: "Spacious professional bag with thermal compartment"
//   },
//   {
//     id: 4,
//     name: "Yonex Tournament Grade Shuttles",
//     price: "₹2,900",
//     image: "https://www.yonex.com/media/catalog/product/a/e/aerosensa_30.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
//     category: "Shuttlecocks",
//     description: "Premium feather shuttlecocks for tournament play"
//   }
// ];

export const products = [
  // Rackets - Astrox Series
  {
    id: 1,
    name: "Yonex Astrox 100ZZ",
    price: "₹22,990",
    image: "https://www.yonex.com/media/catalog/product/a/s/astrox100zz_kurenai.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Rackets",
    subcategory: "Astrox Series",
    description: "Professional offensive racket with Rotational Generator System for maximum power and control",
    specifications: {
      weight: "4U (83g)",
      balance: "Head Heavy",
      flexibility: "Stiff",
      material: "H.M. Graphite, Tungsten, NAMD"
    }
  },
  {
    id: 2,
    name: "Yonex Astrox 99 Pro",
    price: "₹19,990",
    image: "https://www.yonex.com/media/catalog/product/a/x/ax99-pro_whitetiger.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Rackets",
    subcategory: "Astrox Series",
    description: "Professional racket designed for aggressive players seeking power and precision",
    specifications: {
      weight: "4U (83g)",
      balance: "Head Heavy",
      flexibility: "Stiff",
      material: "H.M. Graphite, NAMD"
    }
  },
  {
    id: 3,
    name: "Yonex Astrox 88D Pro",
    price: "₹18,990",
    image: "https://www.yonex.com/media/catalog/product/3/a/3ax88d-p_076-1_02.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Rackets",
    subcategory: "Astrox Series",
    description: "Professional doubles racket offering quick response and excellent control",
    specifications: {
      weight: "4U (83g)",
      balance: "Head Heavy",
      flexibility: "Medium",
      material: "H.M. Graphite, VOLUME CUT RESIN"
    }
  },

  // Rackets - Nanoflare Series
  {
    id: 4,
    name: "Yonex Nanoflare 800 Pro",
    price: "₹20,990",
    image: "https://www.yonex.com/media/catalog/product/a/l/all_nf-800p_269-1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Rackets",
    subcategory: "Nanoflare Series",
    description: "Ultra-lightweight racket designed for fast-paced gameplay and quick maneuverability",
    specifications: {
      weight: "5U (78g)",
      balance: "Head Light",
      flexibility: "Medium",
      material: "H.M. Graphite, TORAYCA M40X"
    }
  },
  {
    id: 5,
    name: "Yonex Nanoflare 700 Pro",
    price: "₹16,990",
    image: "https://www.yonex.com/media/catalog/product/a/l/all_nf-700p_339-1_2.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Rackets",
    subcategory: "Nanoflare Series",
    description: "Speed-oriented racket with excellent repulsion power",
    specifications: {
      weight: "4U (83g)",
      balance: "Head Light",
      flexibility: "Medium",
      material: "H.M. Graphite"
    }
  },

  // Shoes
  {
    id: 6,
    name: "Yonex Power Cushion 65 ZX",
    price: "₹12,990",
    image: "https://www.yonex.com/media/catalog/product/i/n/int_shb65x4_011-1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Shoes",
    subcategory: "Power Cushion Series",
    description: "Professional badminton shoes with enhanced cushioning and stability",
    specifications: {
      technology: "Power Cushion+, Hypermsash",
      upper: "Double Russel Mesh",
      midsole: "Power Cushion+, Power Cushion",
      outsole: "Rubber"
    },
    sizes: ["UK6", "UK7", "UK8", "UK9", "UK10"]
  },
  {
    id: 7,
    name: "Yonex Aerus Z",
    price: "₹14,990",
    image: "https://www.yonex.com/media/catalog/product/a/l/all_shbaz2l_019-1_02_1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Shoes",
    subcategory: "Aerus Series",
    description: "Ultra-lightweight professional shoes for maximum speed and comfort",
    specifications: {
      technology: "Power Cushion, Power Carbon",
      upper: "Double Russel Mesh with TPU",
      midsole: "Power Cushion",
      outsole: "Rubber"
    },
    sizes: ["UK6", "UK7", "UK8", "UK9", "UK10"]
  },

  // Apparel
  {
    id: 8,
    name: "Yonex Men's Tournament T-Shirt",
    price: "₹2,990",
    image: "https://www.yonex.com/media/catalog/product/a/l/all_10632_190_02.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Apparel",
    subcategory: "T-Shirts",
    description: "Professional tournament jersey with moisture-wicking technology",
    specifications: {
      material: "100% Polyester",
      technology: "Dry-Fast, Ultra Cool",
      fit: "Regular Athletic Fit"
    },
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 9,
    name: "Yonex Women's Tournament Skort",
    price: "₹2,490",
    image: "https://www.yonex.com/media/catalog/product/i/n/int_20859_045_re.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Apparel",
    subcategory: "Shorts",
    description: "Professional tournament skort with built-in shorts",
    specifications: {
      material: "90% Polyester, 10% Spandex",
      technology: "Dry-Fast",
      fit: "Regular Fit"
    },
    sizes: ["XS", "S", "M", "L", "XL"]
  },

  // Shuttlecocks
  {
    id: 10,
    name: "Yonex Aerosensa 30",
    price: "₹3,990",
    image: "https://www.yonex.com/media/catalog/product/a/e/aerosensa_30.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Shuttlecocks",
    subcategory: "Tournament Grade",
    description: "Premium tournament grade feather shuttlecocks",
    specifications: {
      type: "Feather",
      speed: "Medium-Fast",
      durability: "Tournament Grade",
      quantity: "12 shuttlecocks per tube"
    }
  },
  {
    id: 11,
    name: "Yonex Mavis 350",
    price: "₹990",
    image: "https://www.yonex.com/media/catalog/product/m/a/mavis350_1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Shuttlecocks",
    subcategory: "Training Grade",
    description: "Durable nylon shuttlecocks for training",
    specifications: {
      type: "Nylon",
      speed: "Medium",
      durability: "High",
      quantity: "6 shuttlecocks per tube"
    }
  },

  // Kit Bags
  {
    id: 12,
    name: "Yonex Pro Tournament Bag 92031W",
    price: "₹7,990",
    image: "https://www.yonex.com/media/catalog/product/i/n/int_ba92431w_007-3.jpg?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Kit Bags",
    subcategory: "Pro Series",
    description: "Professional tournament bag with thermal compartment",
    specifications: {
      capacity: "6-8 rackets",
      compartments: "3 main compartments",
      material: "Polyester with PU coating",
      features: "Shoe compartment, Thermal lining"
    }
  },
  {
    id: 13,
    name: "Yonex Team Series Backpack",
    price: "₹3,990",
    image: "https://www.yonex.com/media/catalog/product/a/l/all_ba92432_060-1_4.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Kit Bags",
    subcategory: "Backpacks",
    description: "Spacious backpack for daily practice",
    specifications: {
      capacity: "2-3 rackets",
      compartments: "2 main compartments",
      material: "Polyester",
      features: "Laptop sleeve, Water bottle holder"
    }
  },

  // Accessories
  {
    id: 14,
    name: "Yonex BG80 String",
    price: "₹990",
    image: "https://www.yonex.com/media/catalog/product/b/g/bg80yx_011-1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Accessories",
    subcategory: "Strings",
    description: "Professional grade badminton string",
    specifications: {
      material: "Multifilament",
      gauge: "0.68mm",
      length: "10m",
      color: "White"
    }
  },
  {
    id: 15,
    name: "Yonex Super Grap Overgrip",
    price: "₹290",
    image: "https://www.yonex.com/media/catalog/product/a/c/ac109-75.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300",
    category: "Accessories",
    subcategory: "Grips",
    description: "High-quality replacement grip tape",
    specifications: {
      material: "Synthetic",
      length: "1.1m",
      width: "25mm",
      quantity: "3 grips per pack"
    }
  }
];

export const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Professional Player",
    content: "Best place to buy genuine Yonex products. Their service is exceptional!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Priya Singh",
    role: "Badminton Coach",
    content: "I've been buying from Horizon Sports for years. They never disappoint.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Amit Patel",
    role: "Club Player",
    content: "Great collection and authentic products. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];
