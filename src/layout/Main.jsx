import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10 md:max-w-7xl mx-auto" >
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
