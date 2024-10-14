import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import TopBar from "../components/header/TopBar";
import Footer from "./../components/footer/Footer";

const Root = () => {
  return (
    <div className='bg-[#080808] min-h-screen'>
      <header>
        <Navbar />
      </header>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
