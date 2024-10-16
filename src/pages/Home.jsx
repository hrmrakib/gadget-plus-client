import Hero from "../components/header/Hero";
import TrendingCategories from "./../components/home/TrendingCategories";
import NewAndBestCollection from "./../components/home/NewAndBestCollection";
import TrendingProducts from "./../components/home/TrendingProducts";
import BigDiscount from "./../components/home/BigDiscount";
import TopNewArrivals from "./../components/home/TopNewArrivals";
import LimitedTimeOffer from "./../components/home/LimitedTimeOffer";
import CheckoutTheDiscount from "./../components/home/CheckoutTheDiscount";
import CustomerFeedback from "./../components/home/CustomerFeedback";
import BlogPosts from "../components/home/BlogPosts";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingCategories />
      <NewAndBestCollection />
      <TrendingProducts />
      <BigDiscount />
      <TopNewArrivals />
      <LimitedTimeOffer />
      <CheckoutTheDiscount />
      <CustomerFeedback />
      <BlogPosts />
    </div>
  );
};

export default Home;
