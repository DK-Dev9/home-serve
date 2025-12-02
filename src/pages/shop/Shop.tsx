
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShoppingCart, Search } from "lucide-react";
import { categories, products, getProductsByCategory } from '@/data/shopData';
import ProductCard from '@/components/shop/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { Filter, X } from "lucide-react";


const Shop: React.FC = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);



  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { totalItems } = useCart();

  const filteredProducts = activeCategory === "all" 
    ? products 
    : getProductsByCategory(activeCategory);

  const searchResults = searchQuery 
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) 
    : filteredProducts;

  return (
    <div className="container mt-16 mx-auto px-4 py-8 ">

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">        
        <div className="flex items-center space-x-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search products..." 
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>          
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
      {/* Filter sidebar - desktop */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={category.id}
                        name="category"
                        checked={selectedCategory === category.name}
                        onChange={() => {setSelectedCategory(category.name); setActiveCategory(category.id);}}
                        className="mr-2 accent-terracotta"
                      />
                      <label htmlFor={category.id} className="text-sm">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    ${priceRange.min} - ${priceRange.max}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground">Min</label>
                    <input
                      type="number"
                      min="0"
                      max={priceRange.max}
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                      className="w-full p-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Max</label>
                    <input
                      type="number"
                      min={priceRange.min}
                      max="1000"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 0 })}
                      className="w-full p-2 border rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile filter button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow-sm"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex justify-end">
              <div className="bg-white w-4/5 h-full p-6 overflow-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          id={`mobile-${category}`}
                          name="mobile-category"
                          checked={selectedCategory === category.name}
                          onChange={() => setSelectedCategory(category.name)}
                          className="mr-2 accent-terracotta"
                        />
                        <label htmlFor={`mobile-${category}`} className="text-sm">
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-sm mb-3">Price Range</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      ${priceRange.min} - ${priceRange.max}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground">Min</label>
                      <input
                        type="number"
                        min="0"
                        max={priceRange.max}
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                        className="w-full p-2 border rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Max</label>
                      <input
                        type="number"
                        min={priceRange.min}
                        max="1000"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 0 })}
                        className="w-full p-2 border rounded-md text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowFilters(false)}
                  className="mt-6 w-full bg-terracotta text-white p-3 rounded-lg"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        
          <div className=" md:w-3/4 lg:w-4/5">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded-md p-1">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
