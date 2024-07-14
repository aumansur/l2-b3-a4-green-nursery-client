import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Management from "../pages/Management";
import Home from "../pages/Home";
import Products from "../pages/Products";

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
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "management",
        element: <Management />,
      },
    ],
  },
]);

export default router;
