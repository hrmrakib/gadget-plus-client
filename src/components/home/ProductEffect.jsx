import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ProductEffect() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='w-full py-20'
      >
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-1.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px] '
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-2.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px] '
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-3.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-4.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-5.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-6.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-7.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-8.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            width={10}
            height={10}
            src='https://swiperjs.com/demos/imgs/nature-9.jpg'
            alt='img'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
