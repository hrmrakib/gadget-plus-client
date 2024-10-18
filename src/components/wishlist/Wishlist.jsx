import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import {
  deleteAllWishlist,
  deleteWishlist,
} from "../../features/wishlist/wishlistSlice";
import { addToCart } from "../../features/cart/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlists = useSelector((state) => state.wishlist.wishlists);

  return (
    <div>
      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / Page / Wishlist </h3>
        <p className='mt-3 text-xl'>
          A wishlist description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      <div className='pt-12'>
        <h3 className='text-3xl font-bold text-center text-white my-10'>
          Wishlist ({wishlists.length})
        </h3>

        <div className='grid grid-cols-4 px-10'>
          <div className='bg-gray-900 text-center py-2 border-r border-r-gray-300 text-white'>
            Product
          </div>
          <div className='bg-gray-900 text-center py-2 border-r border-r-gray-300 text-white'>
            Product
          </div>
          <div className='bg-gray-900 text-center py-2 border-r border-r-gray-300 text-white'>
            Product
          </div>
          <div className='bg-gray-900 text-center py-2 text-white'>Product</div>
        </div>

        <div className='flex flex-col gap-6'>
          {wishlists?.map((list) => (
            <div className='mt-5 grid grid-cols-4 items-center justify-center px-10'>
              <div className='flex items-center justify-center'>
                <img className='w-36 h-36' src={list?.img} alt={list.title} />
              </div>

              <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-white text-sm'>{list?.brand}</p>
                <h2 className='text-white text-xl font-bold'>{list?.title}</h2>
                <p className='text-red-500 font-semibold'>${list?.price}</p>
                <p className='text-white'>Color: {list?.color}</p>
              </div>

              <div className='flex items-center justify-center'>
                <button
                  onClick={() => dispatch(addToCart(list))}
                  className='bg-blue-500 text-white px-5 py-2 hover:bg-blue-600'
                >
                  Add to Cart
                </button>
              </div>

              <div className='flex items-center justify-center'>
                <TiDeleteOutline
                  onClick={() => dispatch(deleteWishlist(list?._id))}
                  className='text-red-600 text-3xl cursor-pointer'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-20 flex items-center justify-center'>
        {wishlists.length > 0 && (
          <button
            onClick={() => dispatch(deleteAllWishlist())}
            className='bg-blue-500 text-white px-8 py-2 hover:bg-blue-600'
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
