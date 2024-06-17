// src/components/ProductList.jsx
import React from "react";

const ProductList = (props) => {
  const products = [
    {
      id: 1,
      name: "Visitas a Museos",
      description: "Visitas a museos virtuales",
      price: "PEN 80.00",
      imageUrl: "/product1.png", // Replace with your image paths
    },
    {
      id: 2,
      name: "Historias",
      description: "Historias interactivas populares",
      price: "PEN 50.00",
      imageUrl: "/product2.png",
    },
    {
      id: 3,
      name: "Juegos",
      description: "Juegos interactivos virtuales",
      price: "PEN 90.00",
      imageUrl: "/product3.png",
    },
    {
      id: 4,
      name: "Meditación",
      description: "Relajación y meditación",
      price: "PEN 50.00",
      imageUrl: "/product4.png",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800">
            {props.asdf ? <>Productos Populares</> : <>Mejores Ofertas</>}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden shadow-lg">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-gray-100">
                <h4 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h4>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-semibold mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="outline outline-2 py-2 px-12 hover:bg-gray-800 hover:text-white transition duration-300">
            Mostrar más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
