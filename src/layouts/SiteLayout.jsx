import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SiteLayout = () => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;