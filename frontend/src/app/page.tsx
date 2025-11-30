"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/header";
import AnimatedBackground from "@/components/ui/animated-background";
import SearchHero from "@/components/assemblez/search-hero";
import TrustBanner from "@/components/assemblez/trust-banner";
import ProductCard from "@/components/assemblez/product-card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Cpu, Gamepad2, HardDrive, MemoryStick, Box, Monitor, ChevronLeft, ChevronRight, Fan, Battery, Cable, Speaker } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "@/components/Preloader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredScroll, setFeaturedScroll] = useState(0);
  const [trendingScroll, setTrendingScroll] = useState(0);
  const [retailersScroll, setRetailersScroll] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  const products = [ // meh tika passe dynamic karamu
    {
      title: "NVIDIA GeForce RTX 4070",
      specs: "12GB GDDR6X, DLSS 3",
      price: "LKR 250,000",
      retailer: "Nanotek",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "down" as const, amount: "LKR 3,000" }
    },
    {
      title: "AMD Radeon RX 7800 XT",
      specs: "16GB GDDR6, RDNA 3",
      price: "LKR 235,000",
      retailer: "Redline",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaXH8irxO78RpsUQppRk7xIHHAVCqVoi9VIBpAaiArjHtFnnDdsQ8vhJihO0bh_xCHY69t7eotTtpmoaSko4k7i8_TKGF4D8Yrj3xuJx1KZ16az3Na4H0qYJqXaGseuJxc5qZcYEKyqwJO9OKEKvR3VTO8X6aTSbhgT1odOdgDdilvRlFVXigWATc9S-mF2X_H5LqW_Y4FcDjXxNBU_HFdIwG3kX383jmMF-b9ICp7a9nKXGjYhJ0I2pILQMPuXS3agR1FWlTzwrY",
      trend: { direction: "up" as const, amount: "LKR 1,880" }
    },
    {
      title: "NVIDIA GeForce RTX 4090",
      specs: "24GB GDDR6X, Ultimate Perf",
      price: "LKR 780,000",
      retailer: "GameStreet",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbd7eEOcFK7xY4XBnWWey8vCDw-Ii6ueEimQGC3gRN26ZlcAZNIWr9nlFJyWqWb8jlj6Ls-T2ffdXE0FspqpC1_0I4cOVK8BKs6VzUDJChhSdvL6348Km-rM9E0bTEYUkOTha3wrjWJFlXSXFOqZP1XsePS7cZlEWIib0R4eKHdNxwYcc1igqDJLXyLevsj6xiLUpPUCJjx9S6TwctH83HtqMLnLe-XxA6T52MNsU-pX_PoOksfjsy3-dGijk0jBCOaNcToK191Cw",
      trend: { direction: "up" as const, amount: "LKR 16,380" }
    },
    {
      title: "NVIDIA GeForce RTX 4060 Ti",
      specs: "8GB GDDR6, DLSS 3",
      price: "LKR 185,000",
      retailer: "TechLanka",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 925" }
    },
    {
      title: "AMD Radeon RX 7900 XTX",
      specs: "24GB GDDR6, RDNA 3",
      price: "LKR 410,000",
      retailer: "Unity Plaza",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaXH8irxO78RpsUQppRk7xIHHAVCqVoi9VIBpAaiArjHtFnnDdsQ8vhJihO0bh_xCHY69t7eotTtpmoaSko4k7i8_TKGF4D8Yrj3xuJx1KZ16az3Na4H0qYJqXaGseuJxc5qZcYEKyqwJO9OKEKvR3VTO8X6aTSbhgT1odOdgDdilvRlFVXigWATc9S-mF2X_H5LqW_Y4FcDjXxNBU_HFdIwG3kX383jmMF-b9ICp7a9nKXGjYhJ0I2pILQMPuXS3agR1FWlTzwrY",
      trend: { direction: "down" as const, amount: "LKR 3,690" }
    },
    {
      title: "NVIDIA GeForce RTX 3060",
      specs: "12GB GDDR6, Ampere",
      price: "LKR 130,000",
      retailer: "Nanotek",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 1,950" }
    }
  ];

  const trendingProducts = [
    {
      title: "Intel Core i9-14900K",
      specs: "24 Cores, 32 Threads, 6.0GHz",
      price: "LKR 285,000",
      retailer: "Nanotek",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 5,200" }
    },
    {
      title: "AMD Ryzen 9 7950X",
      specs: "16 Cores, 32 Threads, 5.7GHz",
      price: "LKR 320,000",
      retailer: "Redline",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaXH8irxO78RpsUQppRk7xIHHAVCqVoi9VIBpAaiArjHtFnnDdsQ8vhJihO0bh_xCHY69t7eotTtpmoaSko4k7i8_TKGF4D8Yrj3xuJx1KZ16az3Na4H0qYJqXaGseuJxc5qZcYEKyqwJO9OKEKvR3VTO8X6aTSbhgT1odOdgDdilvRlFVXigWATc9S-mF2X_H5LqW_Y4FcDjXxNBU_HFdIwG3kX383jmMF-b9ICp7a9nKXGjYhJ0I2pILQMPuXS3agR1FWlTzwrY",
      trend: { direction: "down" as const, amount: "LKR 8,500" }
    },
    {
      title: "Corsair Vengeance RGB 32GB",
      specs: "DDR5 6000MHz, 2x16GB",
      price: "LKR 45,000",
      retailer: "GameStreet",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 1,500" }
    },
    {
      title: "Samsung 990 PRO 2TB",
      specs: "NVMe Gen 4, 7450MB/s Read",
      price: "LKR 68,000",
      retailer: "TechLanka",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "down" as const, amount: "LKR 3,200" }
    },
    {
      title: "ASUS ROG Strix B650E-F",
      specs: "AM5, DDR5, PCIe 5.0",
      price: "LKR 95,000",
      retailer: "PCOne",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 2,800" }
    },
    {
      title: "Corsair RM850x 850W",
      specs: "80+ Gold, Fully Modular",
      price: "LKR 42,000",
      retailer: "Unity Plaza",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "down" as const, amount: "LKR 1,200" }
    },
    {
      title: "NZXT H7 Flow RGB",
      specs: "Mid Tower, Tempered Glass",
      price: "LKR 38,500",
      retailer: "Abans",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 950" }
    },
    {
      title: "LG 27GP850-B 27\"",
      specs: "1440p, 165Hz, IPS, 1ms",
      price: "LKR 125,000",
      retailer: "Singer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYHP__c99cAk5ZT1SqsvL9X4DYgmJQsnfUbjJEi2O3b-58NtteS4O5BaRpTYb4xVcYQIn8iTP03NokVoE2IUtG9NZMGMvRFU8iKfqzsKrAtscqVNB1y57d3zgyP45tlsXeNo_jbc2BYvc-Ljgavxjr6PulNw0Tm3vrkVfzLvWBmN7qQSGXwX6qBdYnPkRSuo01A2CCMHRK4miSOFSQ9hdIa1Q0AjfY1g97EdBt1EzCCBUiLtHGWwiE0FqeWJphiJ46zqbs8slKgY",
      trend: { direction: "up" as const, amount: "LKR 4,100" }
    }
  ];

  const scrollFeatured = (direction: 'left' | 'right') => {
    const container = document.getElementById('featured-scroll');
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTrending = (direction: 'left' | 'right') => {
    const container = document.getElementById('trending-scroll');
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRetailers = (direction: 'left' | 'right') => {
    const container = document.getElementById('retailers-scroll');
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    gsap.set("#featured-section .section-header", { opacity: 0, y: 30 });
    gsap.set("#featured-scroll > div", { opacity: 0, y: 40, scale: 0.97 });
    gsap.set("#categories-section .section-header", { opacity: 0, scale: 0.95 });
    gsap.set("#trending-section .section-header", { opacity: 0, x: -30 });
    gsap.set("#trending-scroll > div", { opacity: 0, y: 40, scale: 0.97 });
    gsap.set("#retailers-section .section-header", { opacity: 0, y: 30 });
    gsap.set("#features-section .section-header", { opacity: 0, y: 30 });
    gsap.set("#features-section .feature-card", { opacity: 0, y: 40, rotateX: -10 });
    gsap.set("#cta-section", { opacity: 0, scale: 0.97 });

    if (isLoading) return;

    const masterTl = gsap.timeline({ delay: 1.0 });

    masterTl.add(() => {
      gsap.to("#featured-section .section-header", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    })
    .add(() => {
      gsap.to("#featured-scroll > div", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: 0.04,
        ease: "power2.out",
      });
    }, "+=0.1");

    gsap.to("#categories-section .section-header", {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#categories-section",
        start: "top 90%",
      }
    });

    gsap.to("#trending-section .section-header", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#trending-section",
        start: "top 90%",
      }
    });

    gsap.to("#trending-scroll > div", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.35,
      stagger: 0.04,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#trending-scroll",
        start: "top 90%",
      }
    });

    gsap.to("#retailers-section .section-header", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#retailers-section",
        start: "top 90%",
      }
    });

    gsap.to("#features-section .section-header", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#features-section",
        start: "top 90%",
      }
    });

    gsap.to("#features-section .feature-card", {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#features-section",
        start: "top 85%",
      }
    });

    gsap.to("#cta-section", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#cta-section",
        start: "top 90%",
      }
    });

  }, { dependencies: [isLoading], scope: mainRef });

  return (
    <main ref={mainRef} className="relative min-h-screen w-full text-white selection:bg-primary/30">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div className="relative">
        <AnimatedBackground />
        <Header show={!isLoading} />

        <div className="relative z-10">
          <SearchHero showTitle={!isLoading} /> {/* meken search functionality eka implement karanna */}
          <TrustBanner showContent={!isLoading} /> {/* retailers count eka dynamic karanna */}

          {/* Featured Deals Section - API ekin deals tika ganna */}
          <section id="featured-section" className="w-full py-16">
            <div className="section-header flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Featured Deals</h2>
                <p className="text-gray-400 text-sm">Hot deals on the best PC components</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollFeatured('left')}
                  className="carousel-nav-btn p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-card-accent/50 transition-all"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={() => scrollFeatured('right')}
                  className="carousel-nav-btn p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-card-accent/50 transition-all"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
                <Button variant="outline" className="view-all-btn ml-2">View All</Button>
              </div>
            </div>

            <div id="featured-scroll" className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-6 lg:px-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {products.map((product, index) => (
                <div key={index} className="flex-none w-[300px]">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section - database ekin categories count eka dynamic karamu */}
          <section id="categories-section" className="w-full pt-8 pb-20">
            <div className="section-header text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                Find exactly what you need for your PC build
              </p>
              <Button variant="outline" className="px-8">
                View All Categories
              </Button>
            </div>

            <div className="relative overflow-hidden mt-8 py-4">
              <div className="flex gap-6 animate-scroll">
                {[
                  { name: 'CPUs', icon: Cpu, count: '120+' },
                  { name: 'GPUs', icon: Gamepad2, count: '85+' },
                  { name: 'Motherboards', icon: Cpu, count: '150+' },
                  { name: 'RAM', icon: MemoryStick, count: '200+' },
                  { name: 'Storage', icon: HardDrive, count: '180+' },
                  { name: 'Cases', icon: Box, count: '90+' },
                  { name: 'Coolers', icon: Fan, count: '75+' },
                  { name: 'PSU', icon: Battery, count: '110+' },
                  { name: 'Monitors', icon: Monitor, count: '95+' },
                  { name: 'Peripherals', icon: Cable, count: '300+' },
                  { name: 'Audio', icon: Speaker, count: '65+' },
                  { name: 'CPUs', icon: Cpu, count: '120+' },
                  { name: 'GPUs', icon: Gamepad2, count: '85+' },
                  { name: 'Motherboards', icon: Cpu, count: '150+' },
                  { name: 'RAM', icon: MemoryStick, count: '200+' },
                  { name: 'Storage', icon: HardDrive, count: '180+' }
                ].map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="group flex-none w-[200px] flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-card-accent/50 hover:bg-white/10 transition-all duration-500 cursor-pointer hover:scale-[1.08] hover:-translate-y-1 hover:shadow-2xl hover:shadow-card-accent/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-card-accent/0 via-card-accent/5 to-card-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 p-3 rounded-full bg-card-accent/10 group-hover:bg-card-accent/20 mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 overflow-visible">
                        <IconComponent className="h-8 w-8 text-card-accent group-hover:drop-shadow-[0_0_8px_rgba(133,155,255,0.6)]" />
                      </div>
                      <h3 className="relative z-10 text-lg font-bold text-white mb-1 group-hover:text-card-accent transition-colors duration-300">{category.name}</h3>
                      <p className="relative z-10 text-xs text-gray-400 group-hover:text-card-accent transition-colors duration-300">{category.count} items</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Trending Products Section - view count ekata adala trending products tika pennanna */}
          <section id="trending-section" className="w-full py-8">
            <div className="section-header flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Trending Now</h2>
                <p className="text-gray-400 text-sm">Most popular products this week</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollTrending('left')}
                  className="carousel-nav-btn p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-card-accent/50 transition-all"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={() => scrollTrending('right')}
                  className="carousel-nav-btn p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-card-accent/50 transition-all"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
                <Button variant="outline" className="view-all-btn ml-2">View All</Button>
              </div>
            </div>

            <div id="trending-scroll" className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-6 lg:px-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {trendingProducts.map((product, index) => (
                <div key={index} className="flex-none w-[300px]">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </section>

          {/* Trusted Retailers Section -  logo images add karannana one hriyata */}
          <section id="retailers-section" className="w-full py-16">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Trusted Retailers</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We partner with Sri Lanka's most trusted computer retailers to bring you the best deals
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {['Nanotek', 'Redline', 'GameStreet', 'TechLanka', 'Unity Plaza', 'PCOne', 'NetSL', 'Abans', 'Microimage', 'Singer', 'Softlogic', 'Singhagiri', 'Nanasala', 'Dealz Woot', 'Tech Market', 'Barclays', 'Nanotek', 'Redline', 'GameStreet', 'TechLanka', 'Unity Plaza', 'PCOne', 'NetSL', 'Abans'].map((retailer, index) => (
                  <div key={index} className="group flex-none w-[180px] flex items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-card-accent/50 hover:bg-white/10 transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-xl hover:shadow-card-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-card-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-center relative z-10">
                      <div className="h-12 w-12 rounded-full bg-card-accent/10 group-hover:bg-card-accent/20 mx-auto mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                        <span className="text-2xl font-bold text-card-accent group-hover:drop-shadow-[0_0_6px_rgba(133,155,255,0.5)]">{retailer[0]}</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">{retailer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="section-header text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose AssembleZ?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Your trusted companion for finding the best PC component deals in Sri Lanka
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-card-accent/50 transition-all duration-300">
                <div className="p-4 rounded-full bg-card-accent/10 mb-4">
                  <TrendingUp className="h-8 w-8 text-card-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Pricing</h3>
                <p className="text-gray-400 text-sm">
                  Stay updated with hourly price checks across all major retailers in Sri Lanka
                </p>
              </div>

              <div className="feature-card flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-card-accent/50 transition-all duration-300">
                <div className="p-4 rounded-full bg-card-accent/10 mb-4">
                  <Zap className="h-8 w-8 text-card-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Comparison</h3>
                <p className="text-gray-400 text-sm">
                  Compare prices instantly and find the best deals without visiting multiple sites
                </p>
              </div>

              <div className="feature-card flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-card-accent/50 transition-all duration-300">
                <div className="p-4 rounded-full bg-card-accent/10 mb-4">
                  <Shield className="h-8 w-8 text-card-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Verified Retailers</h3>
                <p className="text-gray-400 text-sm">
                  Only trusted and verified retailers listed for your peace of mind
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="cta-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-card-accent/10 to-transparent p-12 text-center backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream PC?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Start comparing prices and find the best deals on all the components you need
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Start Searching
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Browse Categories
                </Button>
              </div>
            </div>
          </section>

          <footer className="mt-12 border-t border-white/10 bg-black/50 backdrop-blur-md"> {/* social media links add karanna, newsletter signup eka add karanna */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-primary" />
                    <span className="text-lg font-bold text-white">AssembleZ</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Your guide to the best PC part deals in Sri Lanka.
                    We track prices from all major retailers to help you build better for less.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white">Navigation</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white">Legal</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                © 2025 AssembleZ. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}


