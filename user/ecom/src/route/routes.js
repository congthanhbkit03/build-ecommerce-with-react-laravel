import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductSubCategoryPage from "../pages/ProductSubCategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <UserLoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forget",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/reset/:id",
    element: <ResetPasswordPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    // loader:
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/purchase",
    element: <PurchasePage />,
  },
  {
    path: "/refund",
    element: <RefundPage />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/productcategory/:category",
    element: <ProductCategoryPage />,
  },
  {
    path: "/productsubcategory/:category/:subcategory",
    element: <ProductSubCategoryPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/favourite",
    element: <FavouritePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
