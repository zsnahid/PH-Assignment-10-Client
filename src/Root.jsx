import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterWithSocialLinks from "./components/Footer";
import StickyNavbar from "./components/Navbar";
export default function Root() {
  return (
    <div>
      <StickyNavbar />
      <Outlet />
      <FooterWithSocialLinks />
      <ToastContainer
        position="top-center"
        hideProgressBar
      />
    </div>
  );
}
