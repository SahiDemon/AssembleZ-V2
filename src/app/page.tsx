import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products, categories, getBestDeals } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  const bestDeals = getBestDeals(6);
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find the Best PC Parts Prices in
              <span className="text-yellow-400"> Sri Lanka</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Compare prices from multiple local retailers and save money on your next PC build.
              Updated daily with the latest prices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/categories"
                className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Browse Categories
              </Link>
              <Link
                href="/deals"
                className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                View Best Deals
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">{products.length}+</p>
              <p className="text-blue-200">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">5</p>
              <p className="text-blue-200">Retailers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">{categories.length}</p>
              <p className="text-blue-200">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">Daily</p>
              <p className="text-blue-200">Price Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Deals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">🔥 Best Deals</h2>
              <p className="text-gray-600 mt-1">Products with the biggest price drops</p>
            </div>
            <Link
              href="/deals"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-gray-600 mt-2">Find exactly what you need for your build</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-1">Popular components for your PC build</p>
            </div>
            <Link
              href="/categories"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">How AssembleZ Works</h2>
            <p className="text-gray-300 mt-2">
              Save money on PC parts in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Browse</h3>
              <p className="text-gray-400">
                Search for any PC component or browse our organized categories to find what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare Prices</h3>
              <p className="text-gray-400">
                View prices from multiple Sri Lankan retailers side by side and find the best deal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-400">
                Click through to your chosen retailer and purchase at the best available price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Real-Time Price Comparison
                </h2>
                <p className="text-gray-600 mb-6">
                  We continuously monitor prices from Sri Lanka&apos;s top computer retailers including
                  Nanotek, Red Line Technologies, Barclays, TechSurge, and PC House to bring you
                  the most accurate and up-to-date pricing information.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Prices updated daily
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stock availability shown
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Direct links to retailer websites
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Example: RTX 4060</h3>
                <div className="space-y-3">
                  {products.find(p => p.id === 'nvidia-rtx-4060')?.prices.slice(0, 3).map((price, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${i === 0 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                      <span className={`font-medium ${i === 0 ? 'text-green-700' : 'text-gray-700'}`}>
                        {price.retailerId.charAt(0).toUpperCase() + price.retailerId.slice(1)}
                      </span>
                      <span className={`font-bold ${i === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                        {formatPrice(price.price)}
                        {i === 0 && <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Best</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
