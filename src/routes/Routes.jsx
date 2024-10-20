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
import Checkout from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: `/checkout/:id`,
        element: <Checkout />,
      },
      {
        path: `/checkout`,
        element: <Checkout />,
      },
      {
        path: `/iphone-15`,
        element: <h2>iphone-15 - lorem ipsum </h2>,
      },
    ],
  },
]);

export default router;
