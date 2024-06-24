import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.page";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";
import AppWrapper from "./AppWrapper";
import { useSpeechSynthesis } from "react-speech-kit";

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [contrast, setContrast] = useState(100);
  const [selectedTheme, setSelectedTheme] = useState("base");
  const [isAccessibilityActive, setIsAccessibilityActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Iniciamos como muteado
  const { speak } = useSpeechSynthesis();

  // Función para alternar la apertura de configuraciones
  const toggleSettings = () => {
    setIsSettingsOpen((temp) => !temp);
    if (isSettingsOpen) {
      readMessage("Ajustes de accesibilidad cerrado");
    } else {
      readMessage("Ajustes de accesibilidad abierto");
    }
  };

  // Función para alternar el lector de accesibilidad
  const toggleAccessibility = () => {
    setIsAccessibilityActive((active) => !active); // Cambia el estado de accesibilidad

    // Determinar el mensaje correcto según el estado de accesibilidad y mute
    const message = !isAccessibilityActive ? "Lector activado." : "Lector desactivado.";

    // Leer el mensaje si no está muteado y se activa la accesibilidad
    if (!isMuted && !isAccessibilityActive) {
      speak({ text: message });
    }

    // Actualizar el estado de mute según el estado de accesibilidad
    setIsMuted(isAccessibilityActive);

    // También podrías querer mostrar un mensaje visual de activación/desactivación, pero esto depende de tu diseño.
    readMessage(message); // Esto es opcional, dependiendo de cómo desees gestionar la interfaz de usuario.
  };

  // Función para cambiar el tema seleccionado
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    readMessage(`Tema ${theme} seleccionado.`);
  };

  // Función para aumentar el tamaño de fuente
  const increaseFontSize = () => {
    if (fontSize >= 20) return;
    setFontSize((prevSize) => prevSize + 2);
    readMessage(`Tamaño de fuente aumentado a ${fontSize + 2} puntos.`);
  };

  // Función para disminuir el tamaño de fuente
  const decreaseFontSize = () => {
    if (fontSize <= 8) return;
    setFontSize((prevSize) => prevSize - 2);
    readMessage(`Tamaño de fuente disminuido a ${fontSize - 2} puntos.`);
  };

  // Función para aumentar el contraste
  const increaseContrast = () => {
    if (contrast >= 200) return;
    setContrast((prevContrast) => prevContrast + 20);
    readMessage(`Contraste aumentado a ${(contrast + 20) / 2}.`);
  };

  // Función para disminuir el contraste
  const decreaseContrast = () => {
    if (contrast <= 0) return;
    setContrast((prevContrast) => prevContrast - 20);
    readMessage(`Contraste disminuido a ${(contrast - 20) / 2}.`);
  };

  // Función para leer un mensaje usando la síntesis de voz
  const readMessage = (message) => {
    if (!isMuted) {
      speak({ text: message });
    }
  };

  // Configuración del enrutador
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppWrapper
          toggleSettings={toggleSettings}
          child={<Home fontSize={fontSize} contrast={contrast} />}
        />
      ),
    },
    {
      path: "/Carrito",
      element: (
        <AppWrapper
          toggleSettings={toggleSettings}
          child={<Carrito fontSize={fontSize} contrast={contrast} />}
        />
      ),
    },
    {
      path: "/Contacto",
      element: (
        <AppWrapper
          toggleSettings={toggleSettings}
          child={<Contacto fontSize={fontSize} contrast={contrast} />}
        />
      ),
    },
    {
      path: "/Tienda",
      element: (
        <AppWrapper
          toggleSettings={toggleSettings}
          child={<Tienda fontSize={fontSize} contrast={contrast} />}
        />
      ),
    },
  ]);

  // Efecto para manejar atajos de teclado
  useEffect(() => {
    const detectKeyDown = (e) => {
      switch (e.key) {
        case "1":
          toggleSettings();
          break;
        case "2":
          readMessage(
            "Funcionalidades: Acceder a inicio: Q, Acceder a tienda: W, Acceder a contacto: E, Acceder a carrito: T"
          );
          break;
        case "3":
          readMessage(
            "Atajos de teclado: Botón de accesibilidad: 1, Escuchar funcionalidades: 2, Escuchar atajos de teclado: 3"
          );
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", detectKeyDown, true);
    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, [isSettingsOpen, toggleSettings, readMessage]); // Añadimos readMessage y toggleSettings al arreglo de dependencias

  // Renderizado del componente
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <RouterProvider router={router}></RouterProvider>

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
          {/* Botón de lector de accesibilidad */}
          <button
            onClick={toggleAccessibility}
            className={`absolute top-3 right-4 w-40 py-2 rounded-lg shadow-lg focus:outline-none ${
              isAccessibilityActive
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {isAccessibilityActive
              ? "Lector Activado"
              : "Lector Desactivado"}
          </button>
          <button onClick={toggleSettings} className="text-right mb-4 text-xl">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ajustes de accesibilidad
          </h2>
          <button
            className="mb-4 bg-gray-200 p-2 rounded mx-auto block"
            onClick={() => {
              setFontSize(14);
              setContrast(100);
              setSelectedTheme("base");
              readMessage("Ajustes reiniciados a los valores por defecto.");
            }}
          >
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
              {fontSize === 14
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
              {contrast === 100
                ? "Contraste por defecto"
                : `Contraste: ${contrast / 2} `}
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
                <img
                  src="/tema1.png"
                  className="w-16"
                  alt="Tema base"
                />
              </div>
              <div
                onClick={() => handleThemeChange("esmeralda")}
                className={`cursor-pointer flex flex-col items-center ${
                  selectedTheme === "esmeralda" ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <p>Tema esmeralda</p>
                <img
                  src="/tema2.png"
                  className="w-16"
                  alt="Tema esmeralda"
                />
              </div>
              <div
                onClick={() => handleThemeChange("atardecer")}
                className={`cursor-pointer flex flex-col items-center ${
                  selectedTheme === "atardecer" ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <p>Tema atardecer</p>
                <img
                  src="/tema3.png"
                  className="w-16"
                  alt="Tema atardecer"
                />
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
                <li>Acceder a inicio: SHIFT + Q</li>
                <li>Acceder a tienda: SHIFT + W</li>
                <li>Acceder a contacto: SHIFT + E</li>
                <li>Acceder a carrito: SHIFT + R</li>
              </ul>
            </div>
            <h4 className="font-semibold mt-4">Accesibilidad</h4>
            <div className="bg-gray-200 p-4 rounded">
              <ul className="text-left">
                <li>Botón de accesibilidad: SHIFT + 1</li>
                <li>Escuchar funcionalidades: SHIFT + 2</li>
                <li>Escuchar atajos de teclado: SHIFT + 3</li>
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
