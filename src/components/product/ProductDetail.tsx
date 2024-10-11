import React from "react";
import { IoBasketOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { SiLoopback } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { BsEnvelopeCheck } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import ProductDescTab from "./ProductDescTab";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className='bg-[#080808]'>
      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / Ultra Max 2.01 Big Display</h3>
        <p className='mt-3 text-xl'>
          A speaker description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      <div className='mt-12 pb-12 px-8 flex flex-col md:flex-row gap-10'>
        <div className='bg-[#1c1c1c]'>
          <Image
            className='p-8'
            width={10}
            height={10}
            src='/watch.webp'
            alt='img'
          />
        </div>
        <div>
          <h2 className='text-white text-3xl font-semibold'>
            Ultra Max 2.01 Big Display
          </h2>
          <h3 className='text-blue-500 mt-2'>
            $25.00 <del className='text-red-400'>$30.00</del>
          </h3>
          <p className='text-white mt-3'>
            The Ultra Max 2.01 Big Display offers a large and vibrant display
            for efficient viewing. With its upgraded technology, it allows for
            more detailed and precise data to be displayed. Enhance your
            experience with clear and crisp visuals.
          </p>

          <div className='mt-3'>
            <h3 className='text-white'>Color:</h3>
            <p className='text-white'>red, white, blue</p>
          </div>

          <div className='mt-3 flex flex-col md:flex-row items-center gap-5'>
            <div className='bg-white w-[110px] flex items-center border border-zinc-600'>
              <button className='border-r-2 px-3 py-2 font-medium'>-</button>
              <span className='px-3 py-2'>22</span>
              <button className='border-l-2 px-3 py-2.5 font-medium'>+</button>
            </div>
            <button className='text-white bg-blue-500 py-2.5 px-3 flex items-center gap-2'>
              <IoBasketOutline />
              Add to Cart
            </button>
            <button className='text-white bg-[#1c1c1c] py-2.5 px-4'>
              Buy it now
            </button>
            <div className='border py-2.5 px-2.5 cursor-pointer'>
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

export default ProductDetail;
