'use client';

import { useState } from 'react';

interface FilterSidebarProps {
  brands: string[];
  selectedBrand: string;
  minPrice: number;
  maxPrice: number;
  currentMinPrice: number;
  currentMaxPrice: number;
  inStockOnly: boolean;
  sortBy: string;
  onBrandChange: (brand: string) => void;
  onMinPriceChange: (price: number) => void;
  onMaxPriceChange: (price: number) => void;
  onInStockChange: (inStock: boolean) => void;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

interface FilterContentProps {
  brands: string[];
  selectedBrand: string;
  minPrice: number;
  maxPrice: number;
  currentMinPrice: number;
  currentMaxPrice: number;
  inStockOnly: boolean;
  sortBy: string;
  onBrandChange: (brand: string) => void;
  onMinPriceChange: (price: number) => void;
  onMaxPriceChange: (price: number) => void;
  onInStockChange: (inStock: boolean) => void;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

function formatPriceLabel(price: number) {
  if (price >= 1000) {
    return `${(price / 1000).toFixed(0)}K`;
  }
  return price.toString();
}

function FilterContent({
  brands,
  selectedBrand,
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  inStockOnly,
  sortBy,
  onBrandChange,
  onMinPriceChange,
  onMaxPriceChange,
  onInStockChange,
  onSortChange,
  onReset,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Relevance</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A to Z</option>
          <option value="name-z-a">Name: Z to A</option>
          <option value="best-deal">Best Deals</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
        <select
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range (LKR)
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={currentMinPrice || ''}
            onChange={(e) => onMinPriceChange(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Max"
            value={currentMaxPrice || ''}
            onChange={(e) => onMaxPriceChange(Number(e.target.value) || maxPrice)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatPriceLabel(minPrice)}</span>
          <span>{formatPriceLabel(maxPrice)}</span>
        </div>
      </div>

      {/* In Stock Only */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">In Stock Only</span>
        </label>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default function FilterSidebar({
  brands,
  selectedBrand,
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  inStockOnly,
  sortBy,
  onBrandChange,
  onMinPriceChange,
  onMaxPriceChange,
  onInStockChange,
  onSortChange,
  onReset,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const filterContentProps = {
    brands,
    selectedBrand,
    minPrice,
    maxPrice,
    currentMinPrice,
    currentMaxPrice,
    inStockOnly,
    sortBy,
    onBrandChange,
    onMinPriceChange,
    onMaxPriceChange,
    onInStockChange,
    onSortChange,
    onReset,
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>Filters</span>
        </button>

        {/* Mobile Filter Panel */}
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <FilterContent {...filterContentProps} />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
        <FilterContent {...filterContentProps} />
      </div>
    </>
  );
}
