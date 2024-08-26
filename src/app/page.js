import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";
import ProductList from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <SubHeader />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr]">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <div>
          <Main />
          <div className="container mx-auto p-4 ">
            <ProductList className="flex gap-4 space-x-5" />
          </div>
        </div>

      </div>
      <div className="flex items-center justify-end space-x-2 my-4">
        <button className="text-blue-500 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <button className="text-[#116A6C] hover:bg-gray-100 px-3 py-1 font-semibold text-lg rounded-full">1</button>
        <button className="text-[#116A6C] hover:bg-gray-100 font-semibold text-lg  px-3 py-1 rounded-full">2</button>
        <span className=" text-[#116A6C] px-3 py-1 rounded-full font-semibold text-lg ">3</span>
        <span className="text-[#116A6C] font-semibold text-lg ">...</span>
        <button className="text-[#116A6C] hover:bg-gray-100 px-3 py-1 rounded-full font-semibold text-lg ">12</button>

        <button className="text-blue-500 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
