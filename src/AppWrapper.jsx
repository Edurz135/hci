import { useEffect } from "react";
import App from "./App";
import { useNavigate } from "react-router-dom";

export default function AppWrapper({ toggleSettings, child }) {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
  }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez al montar el componente

  const navigate = useNavigate();
  const detectKeyDown = (e) => {
    if (e.key === "Q" && e.shiftKey) {
      navigate("/");
    } else if (e.key === "W" && e.shiftKey) {
      navigate("/Tienda");
    } else if (e.key === "E" && e.shiftKey) {
      navigate("/Contacto");
    } else if (e.key === "T" && e.shiftKey) {
      navigate("/Carrito");
    } else if (e.key === "R" && e.shiftKey) {
        toggleSettings();
      console.log("Botón de accesibilidad");
      //   setIsSettingsOpen((a) => !a);
    } else if (e.key === "2" && e.shiftKey) {
      // Escuchar funcionalidades
      console.log("Escuchar funcionalidades");
      // Implementa la acción necesaria, por ejemplo, abrir un modal de funcionalidades
    } else if (e.key === "3" && e.shiftKey) {
      // Escuchar atajos de teclado
      console.log("Escuchar atajos de teclado");
      // Implementa la acción necesaria, por ejemplo, abrir un modal de atajos de teclado
    }
  };

  return <>{child}</>;
}
