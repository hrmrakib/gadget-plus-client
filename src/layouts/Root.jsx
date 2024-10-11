import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import TopBar from "../components/header/TopBar";
import Footer from "./../components/footer/Footer";

const Root = () => {
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
      </header>

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Root;
