import React from "react";
import { MdAdd } from "react-icons/md";

const BigDiscount = () => {
  return (
    <div className='w-[96%] mx-auto bg-[#1C1C1C] mt-20 flex flex-col items-center'>
      <div className='text-center pt-12'>
        <p className='text-[#FAFAFA]'>BIG DISCOUNT</p>
        <h2 className='text-white text-5xl my-4'>Apple iPhone 15 pro max</h2>
        <p>
          <span className='text-blue-600 font-medium text-lg'>$50.00</span>{" "}
          <del className='text-red-600 ml-3'>$55.00</del>
        </p>
        <div className='mt-5 flex items-center justify-center gap-2 text-center'>
          <button className='px-6 py-2.5 flex items-center gap-3 bg-[#2996D8] text-white delay-100 hover:bg-white hover:text-[#2996D8]'>
            <MdAdd /> <span>Add To Cart</span>
          </button>
        </div>
      </div>

      <div className='mt-5'>
        <img
          src='/iphone-15-pro-max2.jpg'
          width={900}
          height={200}
          alt='iphone15'
        />
      </div>
    </div>
  );
};

export default BigDiscount;
