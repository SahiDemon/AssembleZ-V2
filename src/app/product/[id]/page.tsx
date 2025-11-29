import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, getCategoryById } from '@/data/products';
import { formatPrice, calculateSavings, calculateSavingsPercentage } from '@/lib/utils';
import PriceComparison from '@/components/PriceComparison';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.category);
  const savings = calculateSavings(product.highestPrice, product.lowestPrice);
  const savingsPercentage = calculateSavingsPercentage(product.highestPrice, product.lowestPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-blue-600">
          {category?.name || product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image & Info */}
        <div>
          {/* Image */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                {product.brand}
              </span>
              {product.priceDropPercentage && product.priceDropPercentage > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{product.priceDropPercentage}% OFF
                </span>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Price Summary */}
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-gray-600">Best Price</span>
                <span className="text-3xl font-bold text-green-600">
                  {formatPrice(product.lowestPrice)}
                </span>
              </div>
              {savings > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    vs. highest price ({formatPrice(product.highestPrice)})
                  </span>
                  <span className="text-green-600 font-medium">
                    Save {formatPrice(savings)} ({savingsPercentage}%)
                  </span>
                </div>
              )}
            </div>

            {/* Price Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Lowest</p>
                <p className="font-semibold text-green-600">{formatPrice(product.lowestPrice)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Average</p>
                <p className="font-semibold text-gray-700">{formatPrice(product.averagePrice)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Highest</p>
                <p className="font-semibold text-red-600">{formatPrice(product.highestPrice)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Comparison */}
        <div>
          <PriceComparison prices={product.prices} lowestPrice={product.lowestPrice} />
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          Specifications
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="font-medium text-gray-900">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
