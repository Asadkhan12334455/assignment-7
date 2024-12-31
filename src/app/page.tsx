"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  // Use effect hook to call the API on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='text-2xl '>
     <h1 className="text-center text-7xl text-cyan-600 text-bold mb-20 mt-10">Product List</h1>
<ul className="space-y-6">
  {products.map((product: any) => (
    <li key={product.id} className="bg-white transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-lg text-gray-600">${product.price}</p>
        <p className="text-sm text-gray-500 text-center">{product.description}</p>
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain rounded-md shadow-md"
        />
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Page;
