import Navbar from "../components/Navbar.component";
import vrImage from "../assets/metaquest3.png";
import ProductList from "../components/ProductList.component";
import Footer from "../components/Footer.component";

export default function Home() {
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

      <ProductList asdf={true}/>
      <ProductList />

      <Footer/>
    </>
  );
}
