"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  SlidersHorizontal, 
  Search,
  Filter,
  ArrowDown, 
  ArrowUp, 
  TrendingUp 
} from "lucide-react";
import Header from "@/components/layout/header";

// --- Types ---
interface CpuProduct {
  id: string;
  name: string;
  specs: string; 
  price: string;
  retailer: string;
  image: string;
  trend?: { direction: "up" | "down"; amount: string };
  brand: "Intel" | "AMD";
}

interface ProductCardProps {
  title: string;
  specs: string;
  price: string;
  retailer: string;
  image: string;
  trend?: {
    direction: "up" | "down";
    amount: string;
  };
}

// --- Product Card Component ---
function ProductCard({ title, specs, price, retailer, image, trend }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-card-accent hover:shadow-xl hover:shadow-card-accent/10 hover:-translate-y-1">
      <div className="relative aspect-video w-full overflow-hidden bg-black/40 p-6">
        <div className="absolute inset-0 bg-gradient-to-t from-card-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="text-lg font-bold text-white line-clamp-2 group-hover:text-card-accent transition-colors duration-300 min-h-[3.5rem]">{title}</h4>
            <p className="text-sm text-gray-400 font-medium">{specs}</p>
          </div>

          <div className="mt-2 flex items-end justify-between border-t border-white/5 pt-4">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Lowest Price</p>
              <p className="text-2xl font-bold text-white group-hover:text-card-accent transition-colors">{price}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">from</p>
              <p className="font-semibold text-white">{retailer}</p>
            </div>
          </div>

          {trend && (
            <div className="mt-1 flex items-center justify-between rounded-lg bg-white/5 p-2.5 border border-white/5">
              <div className={`flex items-center gap-1.5 text-sm font-semibold ${trend.direction === 'down' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {trend.direction === 'down' ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
                <span>{trend.amount}</span>
              </div>
              <TrendingUp className={`h-4 w-4 opacity-70 ${trend.direction === 'down' ? 'text-emerald-400' : 'text-rose-400'}`} />
            </div>
          )}
        </div>

        <Button className="mt-5 w-full text-white font-bold bg-card-accent hover:bg-card-accent/90">
          View Deal
        </Button>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-fast bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      
      <div className="absolute -inset-1 bg-gradient-to-r from-card-accent/0 via-card-accent/10 to-card-accent/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />
    </div>
  );
}

// --- Mock Data ---
const cpuData: CpuProduct[] = [
  {
    id: "1",
    name: "AMD Ryzen 7 7800X3D - This card has a very long title that spans three lines, forcing it to be the reference height for all cards in this flex container.",
    specs: "8 Cores, 16 Threads, 5.0GHz, AM5",
    price: "LKR 165,000",
    retailer: "Redline",
    brand: "AMD",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY", 
    trend: { direction: "down", amount: "LKR 2,500" }
  },
  {
    id: "2",
    name: "Intel Core i9-14900K",
    specs: "24 Cores, 32 Threads, 6.0GHz, LGA1700",
    price: "LKR 245,000",
    retailer: "Nanotek",
    brand: "Intel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaXH8irxO78RpsUQppRk7xIHHAVCqVoi9VIBpAaiArjHtFnnDdsQ8vhJihO0bh_xCHY69t7eotTtpmoaSko4k7i8_TKGF4D8Yrj3xuJx1KZ16az3Na4H0qYJqXaGseuJxc5qZcYEKyqwJO9OKEKvR3VTO8X6aTSbhgT1odOdgDdilvRlFVXigWATc9S-mF2X_H5LqW_Y4FcDjXxNBU_HFdIwG3kX383jmMF-b9ICp7a9nKXGjYhJ0I2pILQMPuXS3agR1FWlTzwrY",
    trend: { direction: "up", amount: "LKR 5,000" }
  },
  {
    id: "3",
    name: "Intel Core i5-13400F",
    specs: "10 Cores, 16 Threads, 4.6GHz, LGA1700",
    price: "LKR 78,000",
    retailer: "GameStreet",
    brand: "Intel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbd7eEOcFK7xY4XBnWWey8vCDw-Ii6ueEimQGC3gRN26ZlcAZNIWr9nlFJyWqWb8jlj6Ls-T2ffdXE0FspqpC1_0I4cOVK8BKs6VzUDJChhSdvL6348Km-rM9E0bTEYUkOTha3wrjWJFlXSXFOqZP1XsePS7cZlEWIib0R4eKHdNxwYcc1igqDJLXyLevsj6xiLUpPUCJjx9S6TwctH83HtqMLnLe-XxA6T52MNsU-pX_PoOksfjsy3-dGijk0jBCOaNcToK191Cw",
    trend: { direction: "down", amount: "LKR 1,200" }
  },
  {
    id: "4",
    name: "AMD Ryzen 5 7600 - Standard length title in the second row.",
    specs: "6 Cores, 12 Threads, 5.1GHz, AM5",
    price: "LKR 82,000",
    retailer: "TechLanka",
    brand: "AMD",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
    trend: { direction: "up", amount: "LKR 800" }
  },
  {
    id: "5",
    name: "AMD Ryzen 9 7950X",
    specs: "16 Cores, 32 Threads, 5.7GHz, AM5",
    price: "LKR 210,000",
    retailer: "Unity Plaza",
    brand: "AMD",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaXH8irxO78RpsUQppRk7xIHHAVCqVoi9VIBpAaiArjHtFnnDdsQ8vhJihO0bh_xCHY69t7eotTtpmoaSko4k7i8_TKGF4D8Yrj3xuJx1KZ16az3Na4H0qYJqXaGseuJxc5qZcYEKyqwJO9OKEKvR3VTO8X6aTSbhgT1odOdgDdilvRlFVXigWATc9S-mF2X_H5LqW_Y4FcDjXxNBU_HFdIwG3kX383jmMF-b9ICp7a9nKXGjYhJ0I2pILQMPuXS3agR1FWlTzwrY",
  },
  {
    id: "6",
    name: "Intel Core i7-14700K",
    specs: "20 Cores, 28 Threads, 5.6GHz, LGA1700",
    price: "LKR 185,000",
    retailer: "PCOne",
    brand: "Intel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbd7eEOcFK7xY4XBnWWey8vCDw-Ii6ueEimQGC3gRN26ZlcAZNIWr9nlFJyWqWb8jlj6Ls-T2ffdXE0FspqpC1_0I4cOVK8BKs6VzUDJChhSdvL6348Km-rM9E0bTEYUkOTha3wrjWJFlXSXFOqZP1XsePS7cZlEWIib0R4eKHdNxwYcc1igqDJLXyLevsj6xiLUpPUCJjx9S6TwctH83HtqMLnLe-XxA6T52MNsU-pX_PoOksfjsy3-dGijk0jBCOaNcToK191Cw",
    trend: { direction: "up", amount: "LKR 1,500" }
  },
];

export default function CpuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 

  return (
      <main ref={containerRef} className="relative min-h-screen w-full text-white selection:bg-primary/30 font-sans bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Header show={true} />
      <div className="relative">
        {/* Simplified Header */}

        {/* Main Content Wrapper */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="page-header mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-card-accent/10 border border-card-accent/20">
                  <Cpu className="h-6 w-6 text-card-accent" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Processors (CPUs)</h1>
              </div>
              <p className="text-gray-400 max-w-2xl">
                Compare prices for the latest Intel Core and AMD Ryzen processors across Sri Lankan retailers.
              </p>
            </div>
            
            {/* Mobile Filter Toggle */}
            <Button 
              variant="outline" 
              className="md:hidden w-full flex items-center gap-2 border-white/10 bg-white/5"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* --- Filter Sidebar --- */}
            <aside className={`filter-sidebar w-full lg:w-72 shrink-0 space-y-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-card-accent" /> Filters
                  </h3>
                  <span className="text-xs text-card-accent cursor-pointer hover:underline">Reset</span>
                </div>

                {/* Search Filter */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <input 
                      type="text" 
                      placeholder="Search Model..." 
                      className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-card-accent/50 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-gray-300">Brand</p>
                  <div className="space-y-3">
                    {["Intel", "AMD"].map((brand) => (
                      <div key={brand} className="flex items-center space-x-3">
                        <input type="checkbox" id={brand} className="rounded border-white/20 bg-white/5 text-card-accent focus:ring-card-accent/20 h-4 w-4" />
                        <label htmlFor={brand} className="text-sm text-gray-400 cursor-pointer select-none hover:text-white transition-colors">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Socket Filter */}
                <div className="space-y-4 border-t border-white/10 pt-6 mt-6">
                  <p className="text-sm font-semibold text-gray-300">Socket Type</p>
                  <div className="space-y-3">
                    {["LGA 1700", "AM5", "AM4", "LGA 1200"].map((socket) => (
                      <div key={socket} className="flex items-center space-x-3">
                        <input type="checkbox" id={socket} className="rounded border-white/20 bg-white/5 text-card-accent focus:ring-card-accent/20 h-4 w-4" />
                        <label htmlFor={socket} className="text-sm text-gray-400 cursor-pointer select-none hover:text-white transition-colors">
                          {socket}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-4 border-t border-white/10 pt-6 mt-6">
                  <p className="text-sm font-semibold text-gray-300">Price Range</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-card-accent"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>LKR 5k</span>
                    <span>LKR 300k+</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* --- Product Grid --- */}
            <div className="flex-1 w-full">
              
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <p className="text-sm font-medium text-gray-400">
                  Showing <span className="text-white font-bold">{cpuData.length}</span> processors
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 whitespace-nowrap">Sort by:</span>
                  <select className="bg-black/20 border border-white/10 text-white text-sm rounded-lg focus:ring-card-accent focus:border-card-accent block w-full p-2">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>
              </div>

              {/* Product Grid with Equal Heights */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {cpuData.map((cpu) => (
                  <div key={cpu.id} className="product-item h-full">
                    <ProductCard
                      title={cpu.name}
                      specs={cpu.specs}
                      price={cpu.price}
                      retailer={cpu.retailer}
                      image={cpu.image}
                      trend={cpu.trend}
                    />
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center mt-12">
                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white min-w-[200px]">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-gray-500">
            © 2025 AssembleZ. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}