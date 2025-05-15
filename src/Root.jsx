import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterWithSocialLinks from "./components/Footer";
import StickyNavbar from "./components/Navbar";

export default function Root() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <StickyNavbar />}
      <div className="flex-1 min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      {!isDashboard && <FooterWithSocialLinks />}
      <ToastContainer position="top-center" hideProgressBar />
    </div>
  );
}
