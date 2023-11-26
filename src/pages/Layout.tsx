import MobileNavbar from "@/components/layouts/Navbar/MobileNavbar";
import { Navbar } from "@/components/layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
