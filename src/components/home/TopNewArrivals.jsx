import { FaEye, FaPlus, FaStar } from "react-icons/fa";
import useGetProductByTitle from "../../hooks/useGetProductByTitle";
import FadeLoading from "../loading/FadeLoading";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

const TopNewArrivals = () => {
  const dispatch = useDispatch();

  const {
    data: product1,
    isLoading,
    error,
  } = useGetProductByTitle("Sennheiser HD 660S");
  const { data: product2, isLoading: isLoading2 } =
    useGetProductByTitle("Beats Fit Pro");
  const { data: product3, isLoading: isLoading3 } =
    useGetProductByTitle("Marshall Emberton");

  if (isLoading) return <FadeLoading />;
  if (isLoading2) return <FadeLoading />;
  if (isLoading3) return <FadeLoading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='w-[96%] mx-auto mt-20'>
      <h2 className='text-2xl md:text-3xl text-white t-shadow mb-8'>
        TOP NEW ARRIVALS
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='bg-[#1c1c1c] p-5 flex flex-col justify-between'>
          <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
            <img
              className='h-[560px] w-full'
              src='/top-new-arrivals/headphone.webp'
              width={220}
              height={850}
              alt='ultra'
            />
            <button
              onClick={() => dispatch(addToCart(product1))}
              className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white hover:bg-blue-600 transition duration-50 ease-in-out'
            >
              <FaPlus />
              Add to Cart
            </button>
          </div>

          <h2 className='text-2xl text-white my-2'>
            {product1?.title || "Ultra max 2.01 Big Diaplay"}
          </h2>
          <div className='flex items-center gap-1 *:text-orange-500'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className='text-2xl text-red-700 font-semibold my-2'>
            ${product1?.price || "56.00"}
          </h3>
          <hr />
          <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
            <IoHeartOutline
              onClick={() => dispatch(addToWishlist(product1))}
              className='cursor-pointer text-xl'
            />

            <Link to={`/product/${product1?._id}`}>
              <FaEye className='cursor-pointer text-xl' />
            </Link>
          </div>
        </div>

        {/* two card is a one div */}
        <div className='space-y-10'>
          <div className='bg-[#1c1c1c] p-5'>
            <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
              <img src={product2?.img} width={220} height={350} alt='ultra' />
              <button
                onClick={() => dispatch(addToCart(product2))}
                className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white hover:bg-blue-600 transition duration-50 ease-in-out'
              >
                <FaPlus />
                Add to Cart
              </button>
            </div>

            <h2 className='text-2xl text-white my-2'>{product2?.title}</h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>
              ${product2?.price}
            </h3>
            <hr />
            <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
              <IoHeartOutline
                onClick={() => dispatch(addToWishlist(product2))}
                className='cursor-pointer text-xl'
              />

              <Link to={`/product/${product2?._id}`}>
                <FaEye className='cursor-pointer text-xl' />
              </Link>
            </div>
          </div>
          <div className='bg-[#1c1c1c] p-5'>
            <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
              <img src={product3?.img} width={220} height={350} alt='ultra' />
              <button
                onClick={() => dispatch(addToCart(product3))}
                className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white hover:bg-blue-600 transition duration-50 ease-in-out'
              >
                <FaPlus />
                Add to Cart
              </button>
            </div>

            <h2 className='text-2xl text-white my-4'>{product3?.title}</h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>
              ${product3?.price}
            </h3>
            <hr />
            <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
              <IoHeartOutline
                onClick={() => dispatch(addToWishlist(product3))}
                className='cursor-pointer text-xl'
              />

              <Link to={`/product/${product3?._id}`}>
                <FaEye className='cursor-pointer text-xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewArrivals;
