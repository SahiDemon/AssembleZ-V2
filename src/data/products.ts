import { Product, CategoryInfo } from '@/types';

export const categories: CategoryInfo[] = [
  {
    id: 'processors',
    name: 'Processors (CPUs)',
    icon: '⚡',
    description: 'AMD Ryzen, Intel Core, and more',
    productCount: 45,
  },
  {
    id: 'graphics-cards',
    name: 'Graphics Cards',
    icon: '🎮',
    description: 'NVIDIA GeForce, AMD Radeon GPUs',
    productCount: 38,
  },
  {
    id: 'motherboards',
    name: 'Motherboards',
    icon: '🔌',
    description: 'ATX, Micro-ATX, Mini-ITX boards',
    productCount: 52,
  },
  {
    id: 'memory',
    name: 'Memory (RAM)',
    icon: '💾',
    description: 'DDR4, DDR5 RAM modules',
    productCount: 34,
  },
  {
    id: 'storage',
    name: 'Storage',
    icon: '💿',
    description: 'SSDs, HDDs, NVMe drives',
    productCount: 67,
  },
  {
    id: 'power-supplies',
    name: 'Power Supplies',
    icon: '🔋',
    description: 'PSUs from 450W to 1200W+',
    productCount: 28,
  },
  {
    id: 'cases',
    name: 'PC Cases',
    icon: '🖥️',
    description: 'Tower cases, compact builds',
    productCount: 41,
  },
  {
    id: 'cooling',
    name: 'Cooling',
    icon: '❄️',
    description: 'Air coolers, AIO liquid cooling',
    productCount: 23,
  },
  {
    id: 'monitors',
    name: 'Monitors',
    icon: '🖵',
    description: 'Gaming, professional displays',
    productCount: 56,
  },
  {
    id: 'peripherals',
    name: 'Peripherals',
    icon: '⌨️',
    description: 'Keyboards, mice, headsets',
    productCount: 89,
  },
];

export const products: Product[] = [
  // Processors
  {
    id: 'amd-ryzen-7-7800x3d',
    name: 'AMD Ryzen 7 7800X3D',
    brand: 'AMD',
    category: 'processors',
    image: '/products/ryzen-7-7800x3d.png',
    description: '8-Core, 16-Thread Desktop Processor with 3D V-Cache Technology',
    specs: {
      cores: 8,
      threads: 16,
      baseClock: '4.2 GHz',
      boostClock: '5.0 GHz',
      cache: '104MB (L2+L3)',
      tdp: '120W',
      socket: 'AM5',
    },
    prices: [
      { retailerId: 'nanotek', price: 169990, currency: 'LKR', url: 'https://nanotek.lk/product/ryzen-7-7800x3d', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 175000, currency: 'LKR', url: 'https://redline.lk/product/ryzen-7-7800x3d', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 172500, currency: 'LKR', url: 'https://barclays.lk/product/ryzen-7-7800x3d', inStock: false, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 169990,
    highestPrice: 175000,
    averagePrice: 172497,
    priceDropPercentage: 5,
  },
  {
    id: 'intel-core-i7-14700k',
    name: 'Intel Core i7-14700K',
    brand: 'Intel',
    category: 'processors',
    image: '/products/intel-i7-14700k.png',
    description: '20 Cores (8P+12E), 28 Threads, Unlocked Desktop Processor',
    specs: {
      cores: 20,
      threads: 28,
      baseClock: '3.4 GHz',
      boostClock: '5.6 GHz',
      cache: '33MB',
      tdp: '125W',
      socket: 'LGA 1700',
    },
    prices: [
      { retailerId: 'nanotek', price: 159990, currency: 'LKR', url: 'https://nanotek.lk/product/i7-14700k', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'techsurge', price: 162000, currency: 'LKR', url: 'https://techsurge.lk/product/i7-14700k', inStock: true, lastUpdated: '2024-01-15T08:00:00Z' },
      { retailerId: 'pchouse', price: 158500, currency: 'LKR', url: 'https://pchouse.lk/product/i7-14700k', inStock: true, lastUpdated: '2024-01-15T11:00:00Z' },
    ],
    lowestPrice: 158500,
    highestPrice: 162000,
    averagePrice: 160163,
  },
  {
    id: 'amd-ryzen-5-5600x',
    name: 'AMD Ryzen 5 5600X',
    brand: 'AMD',
    category: 'processors',
    image: '/products/ryzen-5-5600x.png',
    description: '6-Core, 12-Thread Desktop Processor',
    specs: {
      cores: 6,
      threads: 12,
      baseClock: '3.7 GHz',
      boostClock: '4.6 GHz',
      cache: '35MB',
      tdp: '65W',
      socket: 'AM4',
    },
    prices: [
      { retailerId: 'nanotek', price: 54990, currency: 'LKR', url: 'https://nanotek.lk/product/ryzen-5-5600x', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 56000, currency: 'LKR', url: 'https://redline.lk/product/ryzen-5-5600x', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 55500, currency: 'LKR', url: 'https://barclays.lk/product/ryzen-5-5600x', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
      { retailerId: 'pchouse', price: 53990, currency: 'LKR', url: 'https://pchouse.lk/product/ryzen-5-5600x', inStock: false, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 53990,
    highestPrice: 56000,
    averagePrice: 55120,
    priceDropPercentage: 12,
  },
  // Graphics Cards
  {
    id: 'nvidia-rtx-4070-super',
    name: 'NVIDIA GeForce RTX 4070 SUPER',
    brand: 'NVIDIA',
    category: 'graphics-cards',
    image: '/products/rtx-4070-super.png',
    description: '12GB GDDR6X, DLSS 3, Ray Tracing',
    specs: {
      memory: '12GB GDDR6X',
      memoryBus: '192-bit',
      coreClock: '1980 MHz',
      boostClock: '2475 MHz',
      tdp: '220W',
      outputs: 'HDMI 2.1, 3x DisplayPort 1.4a',
    },
    prices: [
      { retailerId: 'nanotek', price: 349990, currency: 'LKR', url: 'https://nanotek.lk/product/rtx-4070-super', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 355000, currency: 'LKR', url: 'https://redline.lk/product/rtx-4070-super', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'techsurge', price: 345000, currency: 'LKR', url: 'https://techsurge.lk/product/rtx-4070-super', inStock: false, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 345000,
    highestPrice: 355000,
    averagePrice: 349997,
    priceDropPercentage: 3,
  },
  {
    id: 'amd-rx-7800-xt',
    name: 'AMD Radeon RX 7800 XT',
    brand: 'AMD',
    category: 'graphics-cards',
    image: '/products/rx-7800-xt.png',
    description: '16GB GDDR6, RDNA 3 Architecture',
    specs: {
      memory: '16GB GDDR6',
      memoryBus: '256-bit',
      gameClock: '2124 MHz',
      boostClock: '2430 MHz',
      tdp: '263W',
      outputs: 'HDMI 2.1, 2x DisplayPort 2.1',
    },
    prices: [
      { retailerId: 'nanotek', price: 295000, currency: 'LKR', url: 'https://nanotek.lk/product/rx-7800-xt', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'barclays', price: 289990, currency: 'LKR', url: 'https://barclays.lk/product/rx-7800-xt', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'pchouse', price: 299000, currency: 'LKR', url: 'https://pchouse.lk/product/rx-7800-xt', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 289990,
    highestPrice: 299000,
    averagePrice: 294663,
  },
  {
    id: 'nvidia-rtx-4060',
    name: 'NVIDIA GeForce RTX 4060',
    brand: 'NVIDIA',
    category: 'graphics-cards',
    image: '/products/rtx-4060.png',
    description: '8GB GDDR6, DLSS 3, Ada Lovelace Architecture',
    specs: {
      memory: '8GB GDDR6',
      memoryBus: '128-bit',
      coreClock: '1830 MHz',
      boostClock: '2460 MHz',
      tdp: '115W',
      outputs: 'HDMI 2.1a, 3x DisplayPort 1.4a',
    },
    prices: [
      { retailerId: 'nanotek', price: 149990, currency: 'LKR', url: 'https://nanotek.lk/product/rtx-4060', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 152000, currency: 'LKR', url: 'https://redline.lk/product/rtx-4060', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'techsurge', price: 148500, currency: 'LKR', url: 'https://techsurge.lk/product/rtx-4060', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
      { retailerId: 'pchouse', price: 150500, currency: 'LKR', url: 'https://pchouse.lk/product/rtx-4060', inStock: true, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 148500,
    highestPrice: 152000,
    averagePrice: 150248,
    priceDropPercentage: 8,
  },
  // Memory
  {
    id: 'corsair-vengeance-ddr5-32gb',
    name: 'Corsair Vengeance DDR5 32GB (2x16GB)',
    brand: 'Corsair',
    category: 'memory',
    image: '/products/corsair-vengeance-ddr5.png',
    description: '6000MHz CL36 DDR5 Desktop Memory Kit',
    specs: {
      capacity: '32GB (2x16GB)',
      speed: '6000MHz',
      latency: 'CL36',
      voltage: '1.35V',
      type: 'DDR5',
    },
    prices: [
      { retailerId: 'nanotek', price: 54990, currency: 'LKR', url: 'https://nanotek.lk/product/corsair-vengeance-ddr5', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 56500, currency: 'LKR', url: 'https://redline.lk/product/corsair-vengeance-ddr5', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 55000, currency: 'LKR', url: 'https://barclays.lk/product/corsair-vengeance-ddr5', inStock: false, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 54990,
    highestPrice: 56500,
    averagePrice: 55497,
  },
  {
    id: 'gskill-trident-z5-rgb-32gb',
    name: 'G.Skill Trident Z5 RGB 32GB (2x16GB)',
    brand: 'G.Skill',
    category: 'memory',
    image: '/products/gskill-trident-z5.png',
    description: '6400MHz CL32 DDR5 RGB Desktop Memory',
    specs: {
      capacity: '32GB (2x16GB)',
      speed: '6400MHz',
      latency: 'CL32',
      voltage: '1.4V',
      type: 'DDR5',
      rgb: true,
    },
    prices: [
      { retailerId: 'nanotek', price: 72990, currency: 'LKR', url: 'https://nanotek.lk/product/gskill-trident-z5', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'techsurge', price: 74500, currency: 'LKR', url: 'https://techsurge.lk/product/gskill-trident-z5', inStock: true, lastUpdated: '2024-01-15T08:00:00Z' },
    ],
    lowestPrice: 72990,
    highestPrice: 74500,
    averagePrice: 73745,
    priceDropPercentage: 6,
  },
  // Storage
  {
    id: 'samsung-990-pro-2tb',
    name: 'Samsung 990 PRO 2TB NVMe SSD',
    brand: 'Samsung',
    category: 'storage',
    image: '/products/samsung-990-pro.png',
    description: 'PCIe 4.0 NVMe M.2 SSD, 7450MB/s Read',
    specs: {
      capacity: '2TB',
      interface: 'PCIe 4.0 x4 NVMe',
      formFactor: 'M.2 2280',
      readSpeed: '7450 MB/s',
      writeSpeed: '6900 MB/s',
      tbw: '1200 TBW',
    },
    prices: [
      { retailerId: 'nanotek', price: 89990, currency: 'LKR', url: 'https://nanotek.lk/product/samsung-990-pro-2tb', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 92000, currency: 'LKR', url: 'https://redline.lk/product/samsung-990-pro-2tb', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 88500, currency: 'LKR', url: 'https://barclays.lk/product/samsung-990-pro-2tb', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
      { retailerId: 'pchouse', price: 91000, currency: 'LKR', url: 'https://pchouse.lk/product/samsung-990-pro-2tb', inStock: false, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 88500,
    highestPrice: 92000,
    averagePrice: 90373,
    priceDropPercentage: 10,
  },
  {
    id: 'wd-black-sn850x-1tb',
    name: 'WD Black SN850X 1TB NVMe SSD',
    brand: 'Western Digital',
    category: 'storage',
    image: '/products/wd-sn850x.png',
    description: 'PCIe 4.0 Gaming SSD, 7300MB/s Read',
    specs: {
      capacity: '1TB',
      interface: 'PCIe 4.0 x4 NVMe',
      formFactor: 'M.2 2280',
      readSpeed: '7300 MB/s',
      writeSpeed: '6300 MB/s',
      tbw: '600 TBW',
    },
    prices: [
      { retailerId: 'nanotek', price: 47990, currency: 'LKR', url: 'https://nanotek.lk/product/wd-sn850x-1tb', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'techsurge', price: 49500, currency: 'LKR', url: 'https://techsurge.lk/product/wd-sn850x-1tb', inStock: true, lastUpdated: '2024-01-15T08:00:00Z' },
      { retailerId: 'pchouse', price: 46990, currency: 'LKR', url: 'https://pchouse.lk/product/wd-sn850x-1tb', inStock: true, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 46990,
    highestPrice: 49500,
    averagePrice: 48160,
  },
  // Motherboards
  {
    id: 'asus-rog-strix-b650e-f',
    name: 'ASUS ROG Strix B650E-F Gaming WiFi',
    brand: 'ASUS',
    category: 'motherboards',
    image: '/products/asus-b650e-f.png',
    description: 'AMD AM5 ATX Motherboard with PCIe 5.0 and WiFi 6E',
    specs: {
      socket: 'AM5',
      chipset: 'AMD B650E',
      formFactor: 'ATX',
      memorySlots: 4,
      maxMemory: '128GB DDR5',
      pcie: 'PCIe 5.0 x16',
      wifi: 'WiFi 6E',
    },
    prices: [
      { retailerId: 'nanotek', price: 115990, currency: 'LKR', url: 'https://nanotek.lk/product/rog-strix-b650e-f', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 119000, currency: 'LKR', url: 'https://redline.lk/product/rog-strix-b650e-f', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 117500, currency: 'LKR', url: 'https://barclays.lk/product/rog-strix-b650e-f', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 115990,
    highestPrice: 119000,
    averagePrice: 117497,
    priceDropPercentage: 4,
  },
  {
    id: 'msi-mag-b760-tomahawk',
    name: 'MSI MAG B760 TOMAHAWK WiFi',
    brand: 'MSI',
    category: 'motherboards',
    image: '/products/msi-b760-tomahawk.png',
    description: 'Intel LGA 1700 ATX Motherboard with DDR5 Support',
    specs: {
      socket: 'LGA 1700',
      chipset: 'Intel B760',
      formFactor: 'ATX',
      memorySlots: 4,
      maxMemory: '192GB DDR5',
      pcie: 'PCIe 5.0 x16',
      wifi: 'WiFi 6E',
    },
    prices: [
      { retailerId: 'nanotek', price: 89990, currency: 'LKR', url: 'https://nanotek.lk/product/msi-b760-tomahawk', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'techsurge', price: 92000, currency: 'LKR', url: 'https://techsurge.lk/product/msi-b760-tomahawk', inStock: false, lastUpdated: '2024-01-15T08:00:00Z' },
      { retailerId: 'pchouse', price: 88500, currency: 'LKR', url: 'https://pchouse.lk/product/msi-b760-tomahawk', inStock: true, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 88500,
    highestPrice: 92000,
    averagePrice: 90163,
  },
  // Power Supplies
  {
    id: 'corsair-rm850x-2021',
    name: 'Corsair RM850x (2021)',
    brand: 'Corsair',
    category: 'power-supplies',
    image: '/products/corsair-rm850x.png',
    description: '850W 80+ Gold Fully Modular ATX Power Supply',
    specs: {
      wattage: '850W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      fanSize: '135mm',
      warranty: '10 Years',
    },
    prices: [
      { retailerId: 'nanotek', price: 54990, currency: 'LKR', url: 'https://nanotek.lk/product/corsair-rm850x', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 56500, currency: 'LKR', url: 'https://redline.lk/product/corsair-rm850x', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 55000, currency: 'LKR', url: 'https://barclays.lk/product/corsair-rm850x', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 54990,
    highestPrice: 56500,
    averagePrice: 55497,
    priceDropPercentage: 7,
  },
  // Cases
  {
    id: 'nzxt-h7-flow',
    name: 'NZXT H7 Flow',
    brand: 'NZXT',
    category: 'cases',
    image: '/products/nzxt-h7-flow.png',
    description: 'Mid-Tower ATX Case with High Airflow Design',
    specs: {
      formFactor: 'Mid-Tower ATX',
      motherboardSupport: 'Mini-ITX, Micro-ATX, ATX',
      maxGPULength: '400mm',
      maxCoolerHeight: '185mm',
      driveSlots: '2x 3.5", 2x 2.5"',
      frontIO: 'USB-C 3.2, 2x USB-A 3.2',
    },
    prices: [
      { retailerId: 'nanotek', price: 44990, currency: 'LKR', url: 'https://nanotek.lk/product/nzxt-h7-flow', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'techsurge', price: 46500, currency: 'LKR', url: 'https://techsurge.lk/product/nzxt-h7-flow', inStock: true, lastUpdated: '2024-01-15T08:00:00Z' },
      { retailerId: 'pchouse', price: 45500, currency: 'LKR', url: 'https://pchouse.lk/product/nzxt-h7-flow', inStock: true, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 44990,
    highestPrice: 46500,
    averagePrice: 45663,
  },
  // Cooling
  {
    id: 'noctua-nh-d15',
    name: 'Noctua NH-D15',
    brand: 'Noctua',
    category: 'cooling',
    image: '/products/noctua-nh-d15.png',
    description: 'Premium Dual-Tower CPU Cooler',
    specs: {
      type: 'Air Cooler',
      height: '165mm',
      fans: '2x NF-A15 PWM (140mm)',
      noiseLevel: '24.6 dB(A)',
      tdpRating: '250W+',
      socket: 'Intel LGA 1700/1200/115x, AMD AM5/AM4',
    },
    prices: [
      { retailerId: 'nanotek', price: 35990, currency: 'LKR', url: 'https://nanotek.lk/product/noctua-nh-d15', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 37000, currency: 'LKR', url: 'https://redline.lk/product/noctua-nh-d15', inStock: false, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 36500, currency: 'LKR', url: 'https://barclays.lk/product/noctua-nh-d15', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
    ],
    lowestPrice: 35990,
    highestPrice: 37000,
    averagePrice: 36497,
  },
  // Monitors
  {
    id: 'lg-27gp850-b',
    name: 'LG 27GP850-B UltraGear',
    brand: 'LG',
    category: 'monitors',
    image: '/products/lg-27gp850.png',
    description: '27" QHD Nano IPS Gaming Monitor, 165Hz, 1ms',
    specs: {
      size: '27"',
      resolution: '2560x1440 (QHD)',
      panel: 'Nano IPS',
      refreshRate: '165Hz',
      responseTime: '1ms GtG',
      hdr: 'HDR400',
      features: 'G-Sync Compatible, FreeSync Premium',
    },
    prices: [
      { retailerId: 'nanotek', price: 149990, currency: 'LKR', url: 'https://nanotek.lk/product/lg-27gp850', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'techsurge', price: 155000, currency: 'LKR', url: 'https://techsurge.lk/product/lg-27gp850', inStock: true, lastUpdated: '2024-01-15T08:00:00Z' },
      { retailerId: 'pchouse', price: 147500, currency: 'LKR', url: 'https://pchouse.lk/product/lg-27gp850', inStock: true, lastUpdated: '2024-01-14T12:00:00Z' },
    ],
    lowestPrice: 147500,
    highestPrice: 155000,
    averagePrice: 150830,
    priceDropPercentage: 5,
  },
  // Peripherals
  {
    id: 'logitech-g-pro-x-superlight',
    name: 'Logitech G PRO X SUPERLIGHT',
    brand: 'Logitech',
    category: 'peripherals',
    image: '/products/logitech-gpro-superlight.png',
    description: 'Wireless Gaming Mouse, 25K DPI HERO Sensor',
    specs: {
      type: 'Wireless Gaming Mouse',
      sensor: 'HERO 25K',
      dpi: '25,600',
      weight: '63g',
      battery: '70 hours',
      buttons: 5,
    },
    prices: [
      { retailerId: 'nanotek', price: 44990, currency: 'LKR', url: 'https://nanotek.lk/product/gpro-superlight', inStock: true, lastUpdated: '2024-01-15T10:00:00Z' },
      { retailerId: 'redline', price: 46500, currency: 'LKR', url: 'https://redline.lk/product/gpro-superlight', inStock: true, lastUpdated: '2024-01-15T09:00:00Z' },
      { retailerId: 'barclays', price: 45000, currency: 'LKR', url: 'https://barclays.lk/product/gpro-superlight', inStock: true, lastUpdated: '2024-01-14T15:00:00Z' },
      { retailerId: 'techsurge', price: 47000, currency: 'LKR', url: 'https://techsurge.lk/product/gpro-superlight', inStock: false, lastUpdated: '2024-01-14T10:00:00Z' },
    ],
    lowestPrice: 44990,
    highestPrice: 47000,
    averagePrice: 45873,
  },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId);
}

export function getAllBrands(): string[] {
  const brands = new Set(products.map(p => p.brand));
  return Array.from(brands).sort();
}

export function getCategoryById(id: string): CategoryInfo | undefined {
  return categories.find(c => c.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}

export function filterProducts(options: {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  sortBy?: string;
}): Product[] {
  let filtered = [...products];

  if (options.category) {
    filtered = filtered.filter(p => p.category === options.category);
  }

  if (options.brand) {
    filtered = filtered.filter(p => p.brand === options.brand);
  }

  if (options.minPrice !== undefined && options.minPrice > 0) {
    const minPrice = options.minPrice;
    filtered = filtered.filter(p => p.lowestPrice >= minPrice);
  }

  if (options.maxPrice !== undefined && options.maxPrice > 0) {
    const maxPrice = options.maxPrice;
    filtered = filtered.filter(p => p.lowestPrice <= maxPrice);
  }

  if (options.inStockOnly) {
    filtered = filtered.filter(p => p.prices.some(price => price.inStock));
  }

  // Sort
  switch (options.sortBy) {
    case 'price-low-high':
      filtered.sort((a, b) => a.lowestPrice - b.lowestPrice);
      break;
    case 'price-high-low':
      filtered.sort((a, b) => b.lowestPrice - a.lowestPrice);
      break;
    case 'name-a-z':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-z-a':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'best-deal':
      filtered.sort((a, b) => (b.priceDropPercentage || 0) - (a.priceDropPercentage || 0));
      break;
  }

  return filtered;
}

export function getBestDeals(limit: number = 6): Product[] {
  return products
    .filter(p => p.priceDropPercentage && p.priceDropPercentage > 0)
    .sort((a, b) => (b.priceDropPercentage || 0) - (a.priceDropPercentage || 0))
    .slice(0, limit);
}
