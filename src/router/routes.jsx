import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import PrivateRoutes from "./PrivateRoutes";
import {
  LazyRoot,
  LazyDashboardOverview,
  LazyAddEquipment,
  LazyAllEquipments,
  LazyAllProducts,
  LazyBlog,
  LazyBlogDetail,
  LazyCategoryProducts,
  LazyDashboard,
  LazyDetails,
  LazyErrorPage,
  LazyHome,
  LazyLogIn,
  LazyOfferProducts,
  LazyProfile,
  LazyRegister,
  LazyUpdate,
} from "../utils/lazyComponents";
import { SimpleRegistrationForm } from "../pages/Register";

const withSuspense = (Component) => (
  <Suspense fallback={<LoadingSpinner />}>
    {Component}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<LazyRoot />),
    errorElement: withSuspense(<LazyErrorPage />),
    children: [
      {
        path: "/",
        element: withSuspense(<LazyHome />),
        loader: () =>
          fetch(
            "https://ph-assignment-10-server-rosy.vercel.app/equipments-for-home"
          ),
      },
      {
        path: "/products",
        element: withSuspense(<LazyAllProducts />),
        loader: () =>
          fetch("https://ph-assignment-10-server-rosy.vercel.app/equipments"),
      },
      {
        path: "/category/:category",
        element: withSuspense(<LazyCategoryProducts />),
      },
      {
        path: "/offers",
        element: withSuspense(<LazyOfferProducts />),
      },
      {
        path: "/dashboard",
        element: withSuspense(
          <PrivateRoutes>
            <LazyDashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "",
            element: withSuspense(<LazyDashboardOverview />),
          },
          {
            path: "profile",
            element: withSuspense(<LazyProfile />),
          },
          {
            path: "add-equipment",
            element: withSuspense(<LazyAddEquipment />),
          },
          {
            path: "all-equipments",
            element: withSuspense(<LazyAllEquipments />),
            loader: () =>
              fetch(
                "https://ph-assignment-10-server-rosy.vercel.app/equipments"
              ),
          },
        ],
      },
      {
        path: "/details/:id",
        element: withSuspense(<LazyDetails />),
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-rosy.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: withSuspense(
          <PrivateRoutes>
            <LazyUpdate />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-rosy.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/login",
        element: withSuspense(<LazyLogIn />),
      },
      {
        path: "/register",
        element: <SimpleRegistrationForm/>,
      },
      {
        path: "/blog",
        element: withSuspense(<LazyBlog />),
      },
      {
        path: "/blog/:id",
        element: withSuspense(<LazyBlogDetail />),
      },
    ],
  },
]);
