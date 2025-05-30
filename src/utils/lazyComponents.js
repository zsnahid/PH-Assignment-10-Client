import { lazy } from "react";

export const LazyRoot = lazy(() => import("../Root"));
export const LazyDashboardOverview = lazy(() => import("../components/DashboardOverview"));
export const LazyAddEquipment = lazy(() => import("../pages/AddEquipment"));
export const LazyAllEquipments = lazy(() => import("../pages/AllEquipments"));
export const LazyAllProducts = lazy(() => import("../pages/AllProducts"));
export const LazyBlog = lazy(() => import("../pages/Blog"));
export const LazyBlogDetail = lazy(() => import("../pages/BlogDetail"));
export const LazyCategoryProducts = lazy(() => import("../pages/CategoryProducts"));
export const LazyDashboard = lazy(() => import("../pages/Dashboard"));
export const LazyDetails = lazy(() => import("../pages/Details"));
export const LazyErrorPage = lazy(() => import("../pages/ErrorPage"));
export const LazyHome = lazy(() => import("../pages/Home"));
export const LazyLogIn = lazy(() => import("../pages/LogIn"));
export const LazyOfferProducts = lazy(() => import("../pages/OfferProducts"));
export const LazyProfile = lazy(() => import("../pages/Profile"));
export const LazyRegister = lazy(() => import("../pages/Register"));
export const LazyUpdate = lazy(() => import("../pages/Update"));
