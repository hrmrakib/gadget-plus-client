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
import ProductPage from "./../pages/ProductPage";
import About from "../pages/pageMenu/About";
import Contact from "../pages/pageMenu/Contact";
import FAQ from "../pages/pageMenu/FAQ";
import PrivacyAndPolicy from "../pages/pageMenu/PrivacyAndPolicy";
import ShippingAndReturn from "../pages/pageMenu/ShippingAndReturn";
import TermAndCondition from "../pages/pageMenu/TermAndCondition";
import ArticlePage from "../pages/blogMenu/ArticlePage";
import BlogPage from "../pages/blogMenu/BlogPage";

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
        path: `/products/:title`,
        element: <ProductPage />,
      },
      {
        path: `/about`,
        element: <About />,
      },
      {
        path: `/contact`,
        element: <Contact />,
      },
      {
        path: `/faq`,
        element: <FAQ />,
      },
      {
        path: `/privacy-policy`,
        element: <PrivacyAndPolicy />,
      },
      {
        path: `/shipping-and-return`,
        element: <ShippingAndReturn />,
      },
      {
        path: `/terms-and-conditions`,
        element: <TermAndCondition />,
      },
      {
        path: `/blog`,
        element: <BlogPage />,
      },
      {
        path: `/article`,
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;
