import Link from 'next/link';
import { retailers } from '@/data/retailers';
import { products } from '@/data/products';

export const metadata = {
  title: 'Partner Retailers - AssembleZ',
  description: 'Our partner retailers in Sri Lanka. Compare prices from trusted computer parts stores.',
};

export default function RetailersPage() {
  // Calculate stats for each retailer
  const retailerStats = retailers.map((retailer) => {
    const retailerPrices = products.flatMap((product) =>
      product.prices.filter((p) => p.retailerId === retailer.id)
    );
    const bestPriceCount = products.filter((product) => {
      const lowestPrice = Math.min(...product.prices.map((p) => p.price));
      return product.prices.some((p) => p.retailerId === retailer.id && p.price === lowestPrice);
    }).length;
    const inStockCount = retailerPrices.filter((p) => p.inStock).length;

    return {
      ...retailer,
      productCount: retailerPrices.length,
      bestPriceCount,
      inStockCount,
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Retailers</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Partner Retailers</h1>
        <p className="text-gray-600">
          We compare prices from {retailers.length} trusted computer parts retailers in Sri Lanka
        </p>
      </div>

      {/* Retailers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {retailerStats.map((retailer) => (
          <div key={retailer.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {retailer.name.charAt(0)}
                  </span>
                </div>
                {retailer.bestPriceCount > 0 && (
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                    {retailer.bestPriceCount} Best Prices
                  </span>
                )}
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-2">{retailer.name}</h2>
              
              <a
                href={retailer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm flex items-center mb-4"
              >
                {retailer.website.replace('https://', '')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500">Products Listed</p>
                  <p className="text-lg font-semibold text-gray-900">{retailer.productCount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">In Stock</p>
                  <p className="text-lg font-semibold text-green-600">{retailer.inStockCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-3">
              <a
                href={retailer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center"
              >
                Visit Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">About Our Retailers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-4">
              AssembleZ partners with Sri Lanka&apos;s most trusted computer parts retailers to bring
              you accurate and up-to-date pricing information. Our system automatically collects
              and compares prices from each retailer daily.
            </p>
            <p className="text-gray-600">
              When you click through to a retailer&apos;s website, you&apos;ll be taken directly to the
              product page where you can complete your purchase.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Why Compare Prices?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save money on every component
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Check stock availability instantly
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Find the best deals quickly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
