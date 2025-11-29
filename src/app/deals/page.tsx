import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getBestDeals } from '@/data/products';
import { formatPrice } from '@/lib/utils';

export const metadata = {
  title: 'Best Deals - AssembleZ',
  description: 'Find the best deals on PC components in Sri Lanka. Products with the biggest price drops and savings.',
};

export default function DealsPage() {
  const deals = getBestDeals(20);
  const totalSavings = deals.reduce((sum, product) => {
    return sum + (product.highestPrice - product.lowestPrice);
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Best Deals</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-4xl">🔥</span>
          <h1 className="text-3xl font-bold">Best Deals</h1>
        </div>
        <p className="text-red-100 text-lg mb-6">
          Products with the biggest price drops across all retailers. Save up to {formatPrice(totalSavings)} on your PC build!
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm text-red-100">Products on Sale</p>
            <p className="text-2xl font-bold">{deals.length}</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm text-red-100">Max Discount</p>
            <p className="text-2xl font-bold">
              {Math.max(...deals.map((d) => d.priceDropPercentage || 0))}% OFF
            </p>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      {deals.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <p className="text-gray-600 mb-4">No deals available at the moment.</p>
          <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-medium">
            Browse All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-12 bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">About Our Deals</h2>
        <p className="text-gray-600">
          We track prices across multiple Sri Lankan retailers and highlight products that have
          significant price drops or represent exceptional value. Prices are updated daily, and
          the discount percentage is calculated based on the difference between the highest and
          lowest available prices from our partner retailers.
        </p>
      </div>
    </div>
  );
}
