import { Link } from "react-router-dom";
import React from "react";
import { FaEye, FaPlus, FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";
import { errorToast, successToast } from "../toast/toast";
import { axiosPublic } from "./../../hooks/useAxiosPublic";

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.wishlist.message);
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["trendingProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/products");
      return res.data;
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
    successToast("Successfully, add to cart");
  };

  const handleFavorite = (product) => {
    dispatch(addToWishlist(product));
    if (message) {
      return errorToast("Already added!");
    }
    successToast("Add to Favorite");
  };

  return (
    <section className='w-[96%] mx-auto mt-20'>
      <h2 className='text-3xl text-white t-shadow mb-8'>TrendingProducts</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {products?.map((product) => (
          <div key={product?._id} className='bg-[#1c1c1c] p-5'>
            <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
              <Link to={`/product/${product?._id}`}>
                <img
                  className='w-56 h-64'
                  src={product?.img}
                  width={220}
                  height={350}
                  alt='ultra'
                />
              </Link>
              <button
                onClick={() => handleAddToCard(product)}
                className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white hover:bg-blue-600 transition duration-50 ease-in-out'
              >
                <FaPlus />
                Add to Cart
              </button>
            </div>

            <h2 className='text-2xl text-white my-2'>{product?.title}</h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>$56.00</h3>
            <hr />
            <div className='flex items-center justify-evenly mt-4 gap-5 *:text-blue-700 *:text-lg'>
              <AiOutlineHeart
                onClick={() => handleFavorite(product)}
                className='text-lg cursor-pointer'
              />
              <Link to={`/product/${product?._id}`}>
                <FaEye className='text-2xl cursor-pointer' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
