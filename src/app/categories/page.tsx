import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/products';

export const metadata = {
  title: 'All Categories - AssembleZ',
  description: 'Browse all PC component categories. Find processors, graphics cards, motherboards, RAM, storage, and more.',
};

export default function CategoriesPage() {
  const totalProducts = categories.reduce((sum, cat) => sum + cat.productCount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Categories</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h1>
        <p className="text-gray-600">
          Browse {totalProducts}+ products across {categories.length} categories
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Popular Categories Quick Links */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-blue-600"
            >
              {category.icon} {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
