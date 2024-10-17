import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.carts);

  return (
    <section>
      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / Your Shopping Cart </h3>
        <p className='mt-3 text-xl'>
          A new collection description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      <div className='pt-12 px-6 w-full grid grid-cols-7 gap-10'>
        <div className='col-span-5'>
          <h3 className='text-3xl font-bold text-center text-white mb-10'>
            Cart ({cartProducts.length})
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
            <div className='bg-gray-900 text-center py-2 text-white'>
              Product
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            {cartProducts?.map((list) => (
              <div className='mt-5 grid grid-cols-4 items-center justify-center px-10'>
                <div className='flex items-center justify-center'>
                  <img className='w-36 h-36' src={list?.img} alt={list.title} />
                </div>

                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='text-white text-sm'>{list?.brand}</p>
                  <h2 className='text-white text-xl font-bold'>
                    {list?.title}
                  </h2>
                  <p className='text-red-500 font-semibold'>${list?.price}</p>
                  <p className='text-white'>Color: {list?.color}</p>
                </div>

                <div className='flex items-center justify-center'>
                  <button className='bg-blue-500 text-white px-5 py-2 hover:bg-blue-600'>
                    Add to Cart
                  </button>
                </div>

                <div className='flex items-center justify-center'>
                  <TiDeleteOutline
                    //   onClick={() => dispatch(deleteWishlist(list?._id))}
                    className='text-red-600 text-3xl cursor-pointer'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-2 bg-[#262626] p-5'>
          <p className='text-white text-sm font-semibold'>
            Add Special instructions for your order.
          </p>
          <textarea
            className='w-full h-24 bg-black text-white p-2.5 mt-3 outline-none'
            placeholder='Order special instructions'
          ></textarea>

          <div className='flex items-center justify-between *:text-white font-semibold'>
            <p>Subtotal</p>
            <p>$500</p>
          </div>

          <p className='text-white text-sm my-4'>
            Taxes and shipping calculated at checkout
          </p>

          <button className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white bg-blue-500 hover:bg-white hover:text-blue-600 transition duration-50 ease-in-out'>
            Checkout
          </button>

          <Link
            to={"/collection/all"}
            className='mt-5 w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white bg-gray-900 hover:bg-white hover:text-blue-600 transition duration-50 ease-in-out'
          >
            Continoue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
