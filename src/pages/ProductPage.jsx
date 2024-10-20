import { IoBasketOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { SiLoopback } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { BsEnvelopeCheck } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementOrderCount,
  incrementOrderCount,
} from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../hooks/useAxiosPublic";
import ProductDescTab from "./../components/product/ProductDescTab";

const ProductPage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: [title],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/product-by-title", {
        params: { title },
      });
      return res.data;
    },
  });

  const currentProduct = useSelector((state) => {
    return state.cart.carts.find((cart) => cart._id === product?._id);
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
  };

  const handleFavorite = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className='bg-[#080808]'>
      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / {product?.title} </h3>
        <p className='mt-3 text-xl'>
          A {product?.title} description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      <div className='w-full mt-12 pb-12 px-8 flex flex-col md:flex-row gap-10'>
        <div className='bg-[#1c1c1c] w-1/2'>
          <img
            className='p-8 w-full'
            width={10}
            height={10}
            src={product?.img}
            alt='img'
          />
        </div>
        <div>
          <h2 className='text-white text-3xl font-semibold'>
            {product?.title}
          </h2>
          <h3 className='text-blue-500 mt-2'>
            ${product?.price}{" "}
            <del className='text-red-400'>
              ${product?.price > 50 ? product?.price + 20 : product?.price + 5}
            </del>
          </h3>
          <p className='text-white mt-3'>{product?.description}</p>

          <div className='mt-3'>
            <h3 className='text-white'>Color:</h3>
            <p className='text-white'>{product?.color}</p>
          </div>

          <div className='mt-3 flex flex-col md:flex-row items-center gap-5'>
            <div className='bg-white w-max flex items-center border border-zinc-600'>
              <button
                onClick={() => dispatch(decrementOrderCount(product?._id))}
                className='border-r-2 px-3 py-2 font-medium'
              >
                -
              </button>
              <span className='px-3 py-2'>
                {currentProduct?.orderCount || 1}
              </span>
              <button
                onClick={() => dispatch(incrementOrderCount(product?._id))}
                className='border-l-2 px-3 py-2.5 font-medium'
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAddToCard(product)}
              className='text-white bg-blue-500 py-2.5 px-3 flex items-center gap-2'
            >
              <IoBasketOutline />
              Add to Cart
            </button>
            <Link
              to={`/checkout/${product?._id}}`}
              className='text-white bg-[#1c1c1c] py-2.5 px-4'
            >
              Buy it now
            </Link>
            <div
              onClick={() => handleFavorite(product)}
              className='border py-2.5 px-2.5 cursor-pointer'
            >
              <IoHeartOutline className='text-white text-lg' />
            </div>
          </div>
          <div className='mt-4 flex flex-wrap items-center gap-5 *:text-white pb-5 border-b'>
            <p className='flex items-center gap-2 *:text-white'>
              <GoQuestion />
              Ask a Question
            </p>
            <p className='flex items-center gap-2 *:text-white'>
              <IoShareSocialOutline />
              Share
            </p>
            <p className='flex items-center gap-2 *:text-white'>
              <SiLoopback />
              Delivery & Return
            </p>
          </div>

          <div className='mt-4 pb-5 border-b'>
            <div className='flex items-center justify-between gap-5 *:text-white'>
              <p className='flex items-center gap-2'>
                <GiCargoShip /> Shipping & Return
              </p>
              <p className='flex items-center gap-2'>
                <BsEnvelopeCheck /> Contact
              </p>
            </div>

            <div className='mt-2 flex items-center gap-2 *:text-white'>
              <LuCalendarClock />
              <p className='text-white'>Estimated Delivery : Sep 30 - Oct 04</p>
            </div>
          </div>

          <div className='mt-5 *:text-white'>
            <p>
              Available: <span className='text-green-600'>23 products</span>
            </p>
            <p>Brand: ws20</p>
            <p>Category: Watch</p>
          </div>
        </div>
      </div>

      <div>
        <ProductDescTab />
      </div>
    </div>
  );
};

export default ProductPage;
