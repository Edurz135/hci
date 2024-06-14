// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">LOGO.</div>
          <div className="flex space-x-8">
            <a href="/links" className="text-gray-600 hover:text-gray-800">Links</a>
            <a href="/" className="text-gray-600 hover:text-gray-800">Inicio</a>
            <a href="/store" className="text-gray-600 hover:text-gray-800">Tienda</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contacto</a>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 text-center text-gray-600">
          2024 Logo. Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
