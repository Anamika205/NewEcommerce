"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const products = [
  { id: 1, name: "Men's Shirt", category: "men", size: "small" },
  { id: 2, name: "Women's Dress", category: "women", size: "large" },
  { id: 3, name: "Men's Jeans", category: "men", size: "large" },
  { id: 4, name: "Women's T-shirt", category: "women", size: "small" },
];

export default function CategoryPage() {
  const [filters, setFilters] = useState({ category: "", size: "" });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.size || product.size === filters.size)
    );
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onFilterChange={handleFilterChange} />

      {/* Products List */}
      <main className="ml-64 p-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Size: {product.size}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
