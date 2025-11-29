import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-xl font-bold text-white">AssembleZ</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Sri Lanka&apos;s leading PC parts price comparison platform. Find the best
              deals on computer components from multiple local retailers.
            </p>
            <p className="text-sm text-gray-500">
              Prices are updated regularly from our partner retailers. Final prices
              may vary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/processors" className="hover:text-white transition-colors">
                  Processors
                </Link>
              </li>
              <li>
                <Link href="/category/graphics-cards" className="hover:text-white transition-colors">
                  Graphics Cards
                </Link>
              </li>
              <li>
                <Link href="/category/motherboards" className="hover:text-white transition-colors">
                  Motherboards
                </Link>
              </li>
              <li>
                <Link href="/category/memory" className="hover:text-white transition-colors">
                  Memory (RAM)
                </Link>
              </li>
              <li>
                <Link href="/category/storage" className="hover:text-white transition-colors">
                  Storage
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/deals" className="hover:text-white transition-colors">
                  Best Deals
                </Link>
              </li>
              <li>
                <Link href="/retailers" className="hover:text-white transition-colors">
                  Partner Retailers
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  All Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AssembleZ. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Made with ❤️ in Sri Lanka 🇱🇰
          </p>
        </div>
      </div>
    </footer>
  );
}
