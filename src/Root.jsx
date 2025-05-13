import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterWithSocialLinks from "./components/Footer";
import StickyNavbar from "./components/Navbar";

export default function Root() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {!isDashboard && <StickyNavbar />}
      <Outlet />
      {!isDashboard && <FooterWithSocialLinks />}
      <ToastContainer position="top-center" hideProgressBar />
    </div>
  );
}
