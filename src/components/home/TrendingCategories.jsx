import React, { useRef } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { trending } from "../../constants";

const TrendingCategories = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative'>
      <div className='mt-10 px-10 py-20'>
        <h2 className='text-3xl text-white t-shadow'>TrendingCategories</h2>

        <div
          ref={scrollContainerRef}
          className='mt-10 flex gap-16 px-4 overflow-x-auto scrollbar-zero'
        >
          {trending.map((item, i) => (
            <Link
              to={`/collection/${item?.url}`}
              key={i}
              className='cursor-pointer'
            >
              <div className='bg-[#534848] rounded-full w-40 h-40 flex items-center justify-center'>
                <img
                  src={item?.img}
                  className='w-28 h-28'
                  width={150}
                  height={150}
                  alt={item?.name}
                />
              </div>
              <h2 className='text-center text-white mt-2'>{item?.name}</h2>
            </Link>
          ))}
        </div>
        {/* forward and back */}
        <button
          onClick={scrollLeft}
          className='absolute top-1/2 cursor-pointer left-1 bg-[#2043f1] hover:bg-[#163cf7ab] p-1 rounded'
        >
          <BiLeftArrowAlt className='text-white text-xl' />
        </button>

        <button
          onClick={scrollRight}
          className='absolute top-1/2 cursor-pointer right-1 bg-[#2043f1] hover:bg-[#163cf7a9] p-1 rounded'
        >
          <BiRightArrowAlt className='text-white text-xl' />
        </button>
      </div>
    </div>
  );
};

export default TrendingCategories;
