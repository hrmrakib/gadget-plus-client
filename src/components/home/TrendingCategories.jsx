import React from "react";
import Image from "next/image";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const TrendingCategories = () => {
  return (
    <div className='relative'>
      <div className='mt-10 px-10 py-20'>
        <h2 className='text-3xl text-white t-shadow'>TrendingCategories</h2>

        <div className='mt-10 flex gap-10 px-4 overflow-x-scroll scrollbar-zero'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => (
            <div key={i}>
              <div className='bg-[#534848] rounded-full w-32 h-32 flex items-center justify-center'>
                <Image
                  src='/headphone.png'
                  className=''
                  width={150}
                  height={150}
                  alt='headphone'
                />
              </div>
              <h2 className='text-center text-white mt-2'>Headphone</h2>
            </div>
          ))}
        </div>
        {/* forward and back */}
        <div className='absolute top-1/2 cursor-pointer left-1 bg-[#2043f1] hover:bg-[#163cf7ab] p-1 rounded'>
          <BiLeftArrowAlt className='text-white text-xl' />
        </div>

        <div className='absolute top-1/2 cursor-pointer right-1 bg-[#2043f1] hover:bg-[#163cf7a9] p-1 rounded'>
          <BiRightArrowAlt className='text-white text-xl' />
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
