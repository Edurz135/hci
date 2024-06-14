export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-semibold text-black">
            Inicio
          </a>
          <a href="/store" className="text-xl font-semibold text-black">
            Tienda
          </a>
          <a href="/contact" className="text-xl font-semibold text-black">
            Contacto
          </a>
        </div>
        <div className="text-3xl font-bold text-black">Logo</div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-xl font-semibold text-black">
            Identificarse
          </a>
          <a href="/cart" className="text-xl font-semibold text-black">
            Carrito
          </a>
        </div>
      </div>
    </nav>
  );
}
