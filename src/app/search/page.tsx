'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { searchProducts } from '@/data/products';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter states
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');

  // Search results
  const searchResults = useMemo(() => {
    return query ? searchProducts(query) : [];
  }, [query]);

  // Calculate min/max price range
  const priceRange = useMemo(() => {
    if (searchResults.length === 0) return { min: 0, max: 1000000 };
    const prices = searchResults.map((p) => p.lowestPrice);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [searchResults]);

  // Get brands from search results
  const resultBrands = useMemo(() => {
    const brands = new Set(searchResults.map((p) => p.brand));
    return Array.from(brands).sort();
  }, [searchResults]);

  // Apply additional filters to search results
  const filteredResults = useMemo(() => {
    let results = [...searchResults];

    if (selectedBrand) {
      results = results.filter((p) => p.brand === selectedBrand);
    }

    if (minPrice > 0) {
      results = results.filter((p) => p.lowestPrice >= minPrice);
    }

    if (maxPrice > 0) {
      results = results.filter((p) => p.lowestPrice <= maxPrice);
    }

    if (inStockOnly) {
      results = results.filter((p) => p.prices.some((price) => price.inStock));
    }

    // Sort
    switch (sortBy) {
      case 'price-low-high':
        results.sort((a, b) => a.lowestPrice - b.lowestPrice);
        break;
      case 'price-high-low':
        results.sort((a, b) => b.lowestPrice - a.lowestPrice);
        break;
      case 'name-a-z':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        results.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'best-deal':
        results.sort((a, b) => (b.priceDropPercentage || 0) - (a.priceDropPercentage || 0));
        break;
    }

    return results;
  }, [searchResults, selectedBrand, minPrice, maxPrice, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedBrand('');
    setMinPrice(0);
    setMaxPrice(0);
    setInStockOnly(false);
    setSortBy('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Search Results</span>
      </nav>

      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {query ? (
            <>
              Search Results for &quot;<span className="text-blue-600">{query}</span>&quot;
            </>
          ) : (
            'Search Products'
          )}
        </h1>
        {query && (
          <p className="text-gray-600">
            Found {filteredResults.length} of {searchResults.length} products
          </p>
        )}
      </div>

      {!query ? (
        // No search query
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-gray-600 mb-4">Enter a search term to find products</p>
          <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-medium">
            Or browse all categories
          </Link>
        </div>
      ) : searchResults.length === 0 ? (
        // No results
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-600 mb-4">No products found for &quot;{query}&quot;</p>
          <p className="text-gray-500 text-sm mb-4">
            Try searching for something else or browse our categories
          </p>
          <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-medium">
            Browse All Categories
          </Link>
        </div>
      ) : (
        // Results with filters
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              brands={resultBrands}
              selectedBrand={selectedBrand}
              minPrice={priceRange.min}
              maxPrice={priceRange.max}
              currentMinPrice={minPrice}
              currentMaxPrice={maxPrice}
              inStockOnly={inStockOnly}
              sortBy={sortBy}
              onBrandChange={setSelectedBrand}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onInStockChange={setInStockOnly}
              onSortChange={setSortBy}
              onReset={resetFilters}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredResults.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-md">
                <p className="text-gray-600 mb-4">No products match your filters.</p>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
