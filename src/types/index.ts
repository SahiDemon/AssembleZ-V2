// Product types for AssembleZ price comparison platform

export type Category = 
  | 'processors'
  | 'graphics-cards'
  | 'motherboards'
  | 'memory'
  | 'storage'
  | 'power-supplies'
  | 'cases'
  | 'cooling'
  | 'monitors'
  | 'peripherals';

export interface Retailer {
  id: string;
  name: string;
  website: string;
  logo?: string;
}

export interface PriceEntry {
  retailerId: string;
  price: number;
  currency: string;
  url: string;
  inStock: boolean;
  lastUpdated: string;
}

export interface ProductSpecs {
  [key: string]: string | number | boolean | undefined;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  image: string;
  description: string;
  specs: ProductSpecs;
  prices: PriceEntry[];
  lowestPrice: number;
  highestPrice: number;
  averagePrice: number;
  priceDropPercentage?: number;
}

export interface FilterOptions {
  categories: Category[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: SortOption;
}

export type SortOption = 
  | 'price-low-high'
  | 'price-high-low'
  | 'name-a-z'
  | 'name-z-a'
  | 'best-deal';

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  description: string;
  productCount: number;
}
