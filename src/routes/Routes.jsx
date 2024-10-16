import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import Home from "../pages/Home";
import TrendingCollection from "../pages/TrendingCollection";
import ProductDetail from "../pages/ProductDetail";
import Wishlist from "../components/wishlist/Wishlist";
import NewProductCollection from "../pages/NewProductCollection";
import BestProductCollection from "./../pages/BestProductCollection";
import Cart from "../pages/Cart";
import AllCollection from "../pages/AllCollection";

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
        path: `/collection/new`,
        element: <NewProductCollection />,
      },
      {
        path: `/collection/best`,
        element: <BestProductCollection />,
      },
      {
        path: `/product/:id`,
        element: <ProductDetail />,
      },
      {
        path: `/page/wishlist`,
        element: <Wishlist />,
      },
      {
        path: `/cart`,
        element: <Cart />,
      },
      {
        path: `/collection/all`,
        element: <AllCollection />,
      },
    ],
  },
]);

export default router;
