// src/components/ProductList.jsx
import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'PEN 500.000',
      imageUrl: 'path/to/your/image1.png', // Replace with your image paths
    },
    {
      id: 2,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'PEN 500.000',
      imageUrl: 'path/to/your/image1.png',
    },
    {
      id: 3,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'PEN 500.000',
      imageUrl: 'path/to/your/image1.png',
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'PEN 500.000',
      imageUrl: 'path/to/your/image1.png',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800">Productos Populares</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold text-gray-800">{product.name}</h4>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-semibold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Mostrar más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
