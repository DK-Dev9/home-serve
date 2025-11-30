
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

// Sample categories
export const categories: Category[] = [
  { id: '1', name: 'Cleaning Supplies', icon: 'spray-bottle' },
  { id: '2', name: 'Tools', icon: 'wrench' },
  { id: '3', name: 'Safety Equipment', icon: 'hard-hat' },
  { id: '4', name: 'Plumbing', icon: 'pipe' },
  { id: '5', name: 'Electrical', icon: 'plug' },
  { id: '6', name: 'Garden', icon: 'shovel' }
];

// Sample products
export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Tool Kit',
    price: 129.99,
    description: 'Complete 108-piece toolkit for professional home maintenance and repairs. Includes various sized screwdrivers, pliers, wrenches, and a durable carry case.',
    image: 'https://images.unsplash.com/photo-1581612129334-51629cb7d541?auto=format&fit=crop&q=80&w=500',
    category: '2',
    stock: 25,
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: '2',
    name: 'Multi-Surface Cleaner',
    price: 9.99,
    description: 'Powerful all-purpose cleaner that works on countertops, appliances, and bathroom surfaces. Eco-friendly formula.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=500',
    category: '1',
    stock: 100,
    rating: 4.5,
    reviews: 89
  },
  {
    id: '3',
    name: 'Safety Goggles',
    price: 12.99,
    description: 'Impact-resistant safety goggles with anti-fog coating. Essential for any home improvement project.',
    image: 'https://images.unsplash.com/photo-1577554105754-602c7bc6adcf?auto=format&fit=crop&q=80&w=500',
    category: '3',
    stock: 75,
    rating: 4.2,
    reviews: 45
  },
  {
    id: '4',
    name: 'Pipe Wrench Set',
    price: 34.99,
    description: 'Set of 2 heavy-duty pipe wrenches perfect for plumbing repairs and installations.',
    image: 'https://images.unsplash.com/photo-1616196800442-6f0e71e70038?auto=format&fit=crop&q=80&w=500',
    category: '4',
    stock: 30,
    rating: 4.7,
    reviews: 62
  },
  {
    id: '5',
    name: 'LED Work Light',
    price: 49.99,
    description: 'Rechargeable LED work light with adjustable stand, providing bright illumination for any project.',
    image: 'https://images.unsplash.com/photo-1504279352685-6533104347df?auto=format&fit=crop&q=80&w=500',
    category: '5',
    stock: 40,
    rating: 4.6,
    reviews: 78,
    featured: true
  },
  {
    id: '6',
    name: 'Garden Gloves',
    price: 14.99,
    description: 'Puncture-resistant gardening gloves with breathable fabric and reinforced fingertips.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade1944bedff?auto=format&fit=crop&q=80&w=500',
    category: '6',
    stock: 85,
    rating: 4.3,
    reviews: 56
  },
  {
    id: '7',
    name: 'Cordless Drill',
    price: 89.99,
    description: '20V cordless drill with lithium-ion battery, multiple speed settings, and a set of drill bits.',
    image: 'https://images.unsplash.com/photo-1572981903348-f39c5e0ea0b8?auto=format&fit=crop&q=80&w=500',
    category: '2',
    stock: 20,
    rating: 4.9,
    reviews: 112,
    featured: true
  },
  {
    id: '8',
    name: 'Bathroom Cleaner',
    price: 7.99,
    description: 'Specialized cleaner for tough bathroom stains, mold, and mildew.',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74320886e?auto=format&fit=crop&q=80&w=500',
    category: '1',
    stock: 120,
    rating: 4.4,
    reviews: 72
  }
];

// Helper function to get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}
