import Header from "@/components/Main/Header";
import AnimatedBackground from "@/components/ui/animated-background";
import SearchHero from "@/components/assemblez/search-hero";
import TrustBanner from "@/components/assemblez/trust-banner";
import FilterSidebar from "@/components/assemblez/filter-sidebar";
import ProductCard from "@/components/assemblez/product-card";

export default function Home() {
  const products = [
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

  return (
    <main className="relative min-h-screen w-full text-white selection:bg-primary/30">
      <AnimatedBackground />
      <Header />

      <div className="relative z-10">
        <SearchHero />
        <TrustBanner />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <FilterSidebar />

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Top Deals</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Sort by:</span>
                  <select className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sm text-white focus:border-primary focus:outline-none">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    {...product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-white/10 bg-black/50 backdrop-blur-md">
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
    </main>
  );
}
