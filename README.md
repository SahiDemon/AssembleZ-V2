# AssembleZ

AssembleZ is a Sri Lankan price-comparison platform that automatically scrapes computer parts from multiple local retailers and organizes them into a single, searchable catalog.

## Features

- **Price Comparison**: Compare prices from 5+ Sri Lankan retailers including Nanotek, Red Line Technologies, Barclays, TechSurge, and PC House
- **Searchable Catalog**: Search for any PC component by name, brand, or description
- **Category Browsing**: Browse products by category - Processors, Graphics Cards, Motherboards, Memory, Storage, and more
- **Filtering & Sorting**: Filter by brand, price range, stock availability, and sort by various criteria
- **Best Deals**: Highlights products with the biggest price drops
- **Real-time Updates**: Prices are updated daily from partner retailers
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist Sans & Geist Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── category/[slug]/    # Category pages
│   ├── product/[id]/       # Product detail pages
│   ├── categories/         # All categories listing
│   ├── deals/              # Best deals page
│   ├── retailers/          # Partner retailers page
│   └── search/             # Search results page
├── components/             # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ProductCard.tsx     # Product card component
│   ├── CategoryCard.tsx    # Category card component
│   ├── FilterSidebar.tsx   # Filter sidebar component
│   └── PriceComparison.tsx # Price comparison component
├── data/                   # Data files
│   ├── products.ts         # Product data and helper functions
│   └── retailers.ts        # Retailer data
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions
└── types/                  # TypeScript types
    └── index.ts            # Type definitions
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Categories

- ⚡ Processors (CPUs)
- 🎮 Graphics Cards
- 🔌 Motherboards
- 💾 Memory (RAM)
- 💿 Storage
- 🔋 Power Supplies
- 🖥️ PC Cases
- ❄️ Cooling
- 🖵 Monitors
- ⌨️ Peripherals

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.

---

Made with ❤️ in Sri Lanka 🇱🇰
