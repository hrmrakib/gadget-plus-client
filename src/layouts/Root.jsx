import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "./../components/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className='bg-[#080808] min-h-screen'>
      <header>
        <Navbar />
      </header>
      <Toaster />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
