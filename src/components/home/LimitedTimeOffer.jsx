import Image from "next/image";
import React from "react";
import { FaEye, FaHeart, FaPlus, FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const LimitedTimeOffer = () => {
  return (
    <div className='w-[96%] mx-auto mt-20'>
      <h2 className='text-3xl text-white t-shadow mb-8'>LIMITED TIME OFFER</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='bg-[#1c1c1c] p-5 flex gap-10'>
          <div className='bg-[#262626]'>
            <Image
              src='/ultramax-watch.avif'
              width={220}
              height={200}
              alt='ultra'
            />
          </div>

          <div>
            <h2 className='text-2xl text-white my-2'>
              Ultra max 2.01 Big Diaplay
            </h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>$56.00</h3>
            <button className='w-full mb-2 flex items-center justify-center gap-3 py-2 border border-gray-700 text-white'>
              <FaCartPlus />
              Add to Cart
            </button>
            <hr />
            <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
              <FaHeart />
              <FaEye />
            </div>
          </div>
        </div>
        <div className='bg-[#1c1c1c] p-5 flex gap-10'>
          <div className='bg-[#262626]'>
            <Image
              src='/ultramax-watch.avif'
              width={220}
              height={200}
              alt='ultra'
            />
          </div>

          <div>
            <h2 className='text-2xl text-white my-2'>
              Ultra max 2.01 Big Diaplay
            </h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>$56.00</h3>
            <button className='w-full mb-2 flex items-center justify-center gap-3 py-2 border border-gray-700 text-white'>
              <FaCartPlus />
              Add to Cart
            </button>
            <hr />
            <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
              <FaHeart />
              <FaEye />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;
