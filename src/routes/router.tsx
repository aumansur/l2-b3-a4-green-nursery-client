import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Management from "../pages/Management";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CheckoutPage from "@/pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/cart",
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default router;
