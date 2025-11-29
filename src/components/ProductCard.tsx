import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { getRetailerById } from '@/data/retailers';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const lowestPriceEntry = product.prices.reduce((min, p) => 
    p.price < min.price ? p : min, product.prices[0]
  );
  const retailer = getRetailerById(lowestPriceEntry.retailerId);
  const hasMultiplePrices = product.prices.length > 1;
  const priceDiff = product.highestPrice - product.lowestPrice;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col group">
        {/* Deal Badge */}
        {product.priceDropPercentage && product.priceDropPercentage > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{product.priceDropPercentage}% OFF
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Brand */}
          <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
            {product.brand}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">
            {product.description}
          </p>

          {/* Price Section */}
          <div className="mt-auto">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(product.lowestPrice)}
              </span>
              {hasMultiplePrices && priceDiff > 0 && (
                <span className="text-xs text-gray-500">
                  Save up to {formatPrice(priceDiff)}
                </span>
              )}
            </div>

            {/* Retailer Info */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">
                Lowest at <span className="font-medium text-gray-700">{retailer?.name}</span>
              </span>
              <span className="text-green-600 font-medium flex items-center">
                {lowestPriceEntry.inStock ? (
                  <>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                    In Stock
                  </>
                ) : (
                  <>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></span>
                    <span className="text-red-500">Out of Stock</span>
                  </>
                )}
              </span>
            </div>

            {/* Compare Prices */}
            {hasMultiplePrices && (
              <p className="text-xs text-blue-600 mt-2">
                Compare {product.prices.length} prices →
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
