'use client';

import { useParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { getProductsByCategory, getCategoryById, filterProducts } from '@/data/products';
import { Category } from '@/types';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryById(slug);
  const categoryProducts = getProductsByCategory(slug);

  // Filter states
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');

  // Calculate min/max price range from products
  const priceRange = useMemo(() => {
    if (categoryProducts.length === 0) return { min: 0, max: 1000000 };
    const prices = categoryProducts.map((p) => p.lowestPrice);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [categoryProducts]);

  // Get brands for this category
  const categoryBrands = useMemo(() => {
    const brands = new Set(categoryProducts.map((p) => p.brand));
    return Array.from(brands).sort();
  }, [categoryProducts]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    return filterProducts({
      category: slug as Category,
      brand: selectedBrand || undefined,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      inStockOnly,
      sortBy: sortBy || undefined,
    });
  }, [slug, selectedBrand, minPrice, maxPrice, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedBrand('');
    setMinPrice(0);
    setMaxPrice(0);
    setInStockOnly(false);
    setSortBy('');
  };

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-8">The category you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/categories" className="text-blue-600 hover:text-blue-700 font-medium">
          Browse All Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-blue-600">
          Categories
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
        </div>
        <p className="text-gray-600">{category.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Showing {filteredProducts.length} of {categoryProducts.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <FilterSidebar
            brands={categoryBrands}
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
          {filteredProducts.length === 0 ? (
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
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
