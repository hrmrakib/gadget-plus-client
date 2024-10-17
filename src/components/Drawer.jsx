import React, { useRef, useEffect } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
  const carts = useSelector((state) => state.cart.carts);

  const drawerRef = useRef(null);

  const cartProducts = useSelector((state) => state.cart.carts);

  // Handle clicks outside the drawer to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 z-50 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
      ref={drawerRef}
    >
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        ref={drawerRef}
      >
        <div className='p-4 flex items-center justify-between border-b-2 border-b-gray-600'>
          <h2 className='text-lg font-semibold'>Your Cart</h2>
          <button
            onClick={onClose}
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='px-4 py-2'>
          {carts.length ? (
            <p className='pb-1.5 mb-2.5 border-b border-gray-700'>
              <strong>Congrats!</strong> You are eligible for{" "}
              <strong>FREE Shipping</strong>
            </p>
          ) : (
            <p>Add to Cart</p>
          )}

          <div className='overflow-y-scroll scrollbar-hide h-[420px]'>
            {cartProducts?.map((product) => (
              <div
                key={product?._id}
                className='mt-3 flex justify-between pb-3 border-b border-b-gray-800'
              >
                <div className='bg-[#F5F5F5] flex items-center p-2 rounded-sm'>
                  <img
                    className='size-10'
                    width={10}
                    height={10}
                    src={product?.img}
                    alt=''
                  />
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>{product?.title}</h3>
                  <p>$210.00</p>
                  <p>
                    <strong>Color:</strong> Gray
                  </p>
                  <div className='mt-2 w-[110px] flex items-center border border-zinc-600'>
                    <button className='border-r-2 px-3 py-2 font-medium'>
                      -
                    </button>
                    <span className='px-3 py-2'>1</span>
                    <button className='border-l-2 px-3 py-2 font-medium'>
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <FaDeleteLeft />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute w-full h-28 bottom-0'>
          <div className='px-2 flex items-center justify-between *:text-lg *:font-semibold'>
            <h3>Total Item</h3>
            <h3>Subtotal</h3>
          </div>
          <div className='px-2 flex items-center justify-between *:text-base'>
            <p>25</p>
            <p>$5000</p>
          </div>

          <div className='mt-5 bottom-0 w-full flex'>
            <Link
              to={"/cart"}
              className='bg-gray-600 text-white w-1/2 py-2 text-center'
              href='#'
            >
              View Cart
            </Link>
            <a
              className='bg-gray-900 text-white w-1/2 py-2 text-center'
              href='#'
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
