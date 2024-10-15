import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import Home from "../pages/Home";
import TrendingCollection from "../pages/TrendingCollection";
import ProductDetail from "../pages/ProductDetail";
import Wishlist from "../components/wishlist/Wishlist";

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
      {
        path: `/page/wishlist`,
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
