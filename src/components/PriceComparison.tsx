import { PriceEntry } from '@/types';
import { formatPrice, getTimeAgo } from '@/lib/utils';
import { getRetailerById } from '@/data/retailers';

interface PriceComparisonProps {
  prices: PriceEntry[];
  lowestPrice: number;
}

export default function PriceComparison({ prices, lowestPrice }: PriceComparisonProps) {
  // Sort prices from lowest to highest
  const sortedPrices = [...prices].sort((a, b) => a.price - b.price);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Price Comparison
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Compare prices from {prices.length} retailers
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {sortedPrices.map((priceEntry, index) => {
          const retailer = getRetailerById(priceEntry.retailerId);
          const isLowest = priceEntry.price === lowestPrice;
          const savings = priceEntry.price - lowestPrice;

          return (
            <div
              key={priceEntry.retailerId}
              className={`p-4 ${isLowest ? 'bg-green-50' : 'hover:bg-gray-50'} transition-colors`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0
                        ? 'bg-yellow-400 text-yellow-900'
                        : index === 1
                        ? 'bg-gray-300 text-gray-700'
                        : index === 2
                        ? 'bg-orange-300 text-orange-900'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Retailer Info */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">
                        {retailer?.name || priceEntry.retailerId}
                      </span>
                      {isLowest && (
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                          Best Price
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 mt-1">
                      <span
                        className={`text-xs flex items-center ${
                          priceEntry.inStock ? 'text-green-600' : 'text-red-500'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1 ${
                            priceEntry.inStock ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        ></span>
                        {priceEntry.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      <span className="text-xs text-gray-400">
                        Updated {getTimeAgo(priceEntry.lastUpdated)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className={`text-xl font-bold ${isLowest ? 'text-green-600' : 'text-gray-900'}`}>
                    {formatPrice(priceEntry.price)}
                  </p>
                  {!isLowest && savings > 0 && (
                    <p className="text-xs text-red-500">+{formatPrice(savings)} more</p>
                  )}
                </div>
              </div>

              {/* Visit Store Button */}
              <div className="mt-3">
                <a
                  href={priceEntry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2 px-4 rounded-lg font-medium transition-colors ${
                    isLowest
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Visit Store →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
