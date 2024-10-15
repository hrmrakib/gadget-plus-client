import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import Home from "../pages/Home";
import TrendingCollection from "../pages/TrendingCollection";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/collection/:category`,
        element: <TrendingCollection />,
      },
      {
        path: `/product/:id`,
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
