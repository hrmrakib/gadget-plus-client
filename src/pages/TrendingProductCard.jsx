import { FaEye, FaPlus, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const TrendingProductCard = ({ product, viewMode }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <>
      {/* viewMode ? cloumn view : row view */}
      {viewMode ? (
        <div className='mt-10 flex gap-10'>
          <div className='bg-[#1c1c1c] p-5'>
            <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
              <Link to={`/product/${product?._id}`}>
                <img
                  src={product?.img}
                  className='w-full h-60 lg:h-72'
                  width={220}
                  height={350}
                  alt='ultra'
                />
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white'
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
            <h3 className='text-2xl text-red-700 font-semibold my-2'>
              ${product?.price}
            </h3>
            <hr />
            <div className='flex items-center justify-center my-2 gap-10 *:text-blue-700 *:text-xl'>
              <AiOutlineHeart
                className='cursor-pointer'
                onClick={() => handleAddToWishlist(product)}
              />
              <Link to={`/product/${product?._id}`}>
                <FaEye />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='mt-10 grid grid-cols-1 gap-10'>
          <div className='bg-[#1c1c1c] p-5 flex flex-col lg:flex-row items-center justify-between gap-10'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-7'>
              <div className='bg-[#262626] w-60 h-60'>
                <img
                  src={product?.img}
                  className='w-full h-full p-6 zooming'
                  width={220}
                  height={350}
                  alt='ultra'
                />
              </div>
              <div className='max-w-80'>
                <h2 className='text-2xl text-white font-semibold my-2'>
                  {product?.title}
                </h2>
                <p className='text-white mt-2'>{product?.description}</p>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-1 *:text-orange-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3 className='text-2xl text-red-700 font-semibold my-2'>
                ${product?.price}
              </h3>
              <hr />
              <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
                <AiOutlineHeart
                  className='cursor-pointer'
                  onClick={() => handleAddToWishlist(product)}
                />
                <Link to={`/product/${product?._id}`}>
                  <FaEye />
                </Link>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white'
              >
                <FaPlus />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TrendingProductCard;
