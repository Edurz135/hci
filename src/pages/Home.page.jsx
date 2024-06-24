import Navbar from "../components/Navbar.component";
import vrImage from "../assets/metaquest3.png";
import ProductList from "../components/ProductList.component";
import Footer from "../components/Footer.component";
import { useState } from "react";

export default function Home() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-200 to-blue-200 flex items-center justify-center py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-start">
            <img
              src={vrImage}
              alt="VR Headset"
              className="w-full h-auto md:w-3/4"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-gray-800">Logo</h1>
            <h2 className="text-5xl font-bold text-gray-800 mt-4">
              Experiencias Virtuales y Simulaciones
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              La tienda Nro 1 de venta de experiencias virtuales y simulaciones
              a nivel mundial
            </p>
            <a
              href="/store"
              className="mt-6 inline-block bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded"
            >
              TIENDA
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">TENEMOS</h2>
          <p className="text-xl text-gray-600 mt-2">
            Los mejores productos de simulación y experiencia virtual para ti
          </p>
        </div>
      </div>

      <ProductList asdf={true} />
      <ProductList />

      <Footer />

      {/* Botón flotante */}
      <button
        onClick={toggleSettings}
        className="fixed bottom-6 right-6 w-20 rounded-full shadow-lg focus:outline-none"
      >
        <img
          src="/icona (2).png"
          alt="Botón de accesibilidad"
          className="w-full h-full object-contain"
        />
      </button>

      {/* Modal de configuraciones */}
      {isSettingsOpen && (
        <div className="fixed top-28 right-4 w-1/3 h-[80vh] bg-white shadow-lg p-6 overflow-y-auto transform">
          <button onClick={toggleSettings} className="text-right mb-4 text-xl">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ajustes de accesibilidad
          </h2>
          <div className="mb-4 text-center">
            <label className="block font-semibold">
              Ajustar tamaño de fuente
            </label>
            <button className="mr-2 bg-gray-200 p-2 rounded">-</button>
            Tamaño por defecto
            <button className="ml-2 bg-gray-200 p-2 rounded">+</button>
          </div>
          <div className="mb-4 text-center">
            <label className="block font-semibold">Ajustar contraste</label>
            <button className="mr-2 bg-gray-200 p-2 rounded">-</button>
            Contraste por defecto
            <button className="ml-2 bg-gray-200 p-2 rounded">+</button>
          </div>
          <div className="mb-4 text-center">
            <label className="block font-semibold">Temas de colores</label>
            <div className="flex justify-center space-x-2">
              <button className="w-10 h-10 bg-black rounded"></button>
              <button className="w-10 h-10 bg-white border border-gray-400 rounded"></button>
              <button className="w-10 h-10 bg-yellow-500 rounded"></button>
            </div>
          </div>
          <div className="mb-4 text-center">
            <h3 className="font-bold">Atajos de teclado</h3>
            <ul className="text-left inline-block">
              <li>Acceder a inicio: TAB + Q</li>
              <li>Acceder a tienda: TAB + W</li>
              <li>Acceder a contacto: TAB + E</li>
              <li>Acceder a buscador: TAB + R</li>
              <li>Acceder a carrito: TAB + T</li>
              <li>Acceder a perfil o identificarse: TAB + Y</li>
              <li>Acceder a notificaciones: TAB + U</li>
              <li>Botón de accesibilidad: TAB + 1</li>
              <li>Escuchar funcionalidades: TAB + 2</li>
              <li>Escuchar atajos de teclado: TAB + 3</li>
            </ul>
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded mx-auto block">
            Guardar
          </button>
        </div>
      )}
    </>
  );
}
