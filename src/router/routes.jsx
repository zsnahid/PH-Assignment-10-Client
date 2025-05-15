import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import DashboardOverview from "../components/DashboardOverview";
import AddEquipment from "../pages/AddEquipment";
import AllEquipments from "../pages/AllEquipments";
import AllProducts from "../pages/AllProducts";
import CategoryProducts from "../pages/CategoryProducts";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import { SimpleRegistrationForm } from "../pages/Register";
import Update from "../pages/Update";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://ph-assignment-10-server-rosy.vercel.app/equipments-for-home"
          ),
      },
      {
        path: "/products",
        element: <AllProducts />,
        loader: () =>
          fetch("https://ph-assignment-10-server-rosy.vercel.app/equipments"),
      },
      {
        path: "/category/:category",
        element: <CategoryProducts />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "",
            element: <DashboardOverview />,
          },

          {
            path: "add-equipment",
            element: <AddEquipment />,
          },
          {
            path: "all-equipments",
            element: <AllEquipments />,
            loader: () =>
              fetch(
                "https://ph-assignment-10-server-rosy.vercel.app/equipments"
              ),
          },
        ],
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-rosy.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <Update />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-rosy.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <SimpleRegistrationForm />,
      },
    ],
  },
]);
