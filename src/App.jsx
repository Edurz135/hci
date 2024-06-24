import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.page";
import { useState } from "react";

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(14); // Estado para el tamaño de fuente
  const [contrast, setContrast] = useState(100); // Estado para el tamaño de fuente
  const [selectedTheme, setSelectedTheme] = useState("base");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home fontSize={fontSize} contrast={contrast}/>,
    },
  ]);
  

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const increaseFontSize = () => {
    if (fontSize >= 20) return;
    setFontSize((prevSize) => prevSize + 2); // Incrementa el tamaño de fuente en 2 unidades
  };

  const decreaseFontSize = () => {
    if (fontSize <= 8) return;
    setFontSize((prevSize) => prevSize - 2); // Decrementa el tamaño de fuente en 2 unidades, con un límite mínimo de 10
  };

  const increaseContrast = () => {
    if (contrast >= 200) return;
    setContrast((prevContrast) => prevContrast + 20); // Incrementa el tamaño de fuente en 2 unidades
  };

  const decreaseContrast = () => {
    if (contrast <= 0) return;
    setContrast((prevContrast) => prevContrast - 20); // Decrementa el tamaño de fuente en 2 unidades, con un límite mínimo de 10
  };
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <RouterProvider router={router} />
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
          <button className="mb-4 bg-gray-200 p-2 rounded mx-auto block">
            REINICIAR AJUSTES
          </button>
          <div className="mb-4 text-center">
            <label className="block font-semibold">
              Ajustar tamaño de fuente
            </label>
            <div className="flex justify-center items-center">
              <button
                onClick={decreaseFontSize}
                className="mr-2 bg-gray-200 p-2 rounded"
              >
                -
              </button>
              {fontSize == 14
                ? "Tamaño por defecto"
                : `Tamaño: ${fontSize} puntos`}
              <button
                onClick={increaseFontSize}
                className="ml-2 bg-gray-200 p-2 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-4 text-center">
            <label className="block font-semibold">Ajustar contraste</label>
            <div className="flex justify-center items-center">
              <button
                onClick={decreaseContrast}
                className="mr-2 bg-gray-200 p-2 rounded"
              >
                -
              </button>
              {contrast == 100
                ? "Contraste por defecto"
                : `Contraste: ${contrast/2} `}
              <button
                onClick={increaseContrast}
                className="ml-2 bg-gray-200 p-2 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-4 text-center">
            <label className="block font-semibold">Temas de colores</label>
            <div className="flex justify-center space-x-4">
              <div
                onClick={() => handleThemeChange("base")}
                className={`cursor-pointer flex flex-col items-center ${
                  selectedTheme === "base" ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <p>Tema base</p>
                <img src="/tema1.png" className="w-16" alt="Tema base" />
              </div>
              <div
                onClick={() => handleThemeChange("esmeralda")}
                className={`cursor-pointer flex flex-col items-center ${
                  selectedTheme === "esmeralda" ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <p>Tema esmeralda</p>
                <img src="/tema2.png" className="w-16" alt="Tema esmeralda" />
              </div>
              <div
                onClick={() => handleThemeChange("atardecer")}
                className={`cursor-pointer flex flex-col items-center ${
                  selectedTheme === "atardecer" ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <p>Tema atardecer</p>
                <img src="/tema3.png" className="w-16" alt="Tema atardecer" />
              </div>
            </div>
          </div>
          <br />
          <div className="mb-4 text-center">
            <h3 className="font-bold">Atajos de teclado</h3>
            <br />
            <h4 className="font-semibold">Funcionalidades</h4>
            <div className="bg-gray-200 p-4 rounded">
              <ul className="text-left">
                <li>Acceder a inicio: TAB + Q</li>
                <li>Acceder a tienda: TAB + W</li>
                <li>Acceder a contacto: TAB + E</li>
                <li>Acceder a buscador: TAB + R</li>
                <li>Acceder a carrito: TAB + T</li>
                <li>Acceder a perfil o identificarse: TAB + Y</li>
                <li>Acceder a notificaciones: TAB + U</li>
              </ul>
            </div>
            <h4 className="font-semibold mt-4">Accesibilidad</h4>
            <div className="bg-gray-200 p-4 rounded">
              <ul className="text-left">
                <li>Botón de accesibilidad: TAB + 1</li>
                <li>Escuchar funcionalidades: TAB + 2</li>
                <li>Escuchar atajos de teclado: TAB + 3</li>
              </ul>
            </div>
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded mx-auto block">
            Guardar
          </button>
        </div>
      )}
    </div>
  );
}
