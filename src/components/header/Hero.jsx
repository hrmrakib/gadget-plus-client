import React from "react";
import HeroCarousel from "@/components/header/HeroContent";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-[url('/gadget.jpg')]  h-[600px] min-w-full bg-no-repeat flex justify-center bg-cover">
      <div className='min-w-full min-h-full bg-black bg-opacity-50 inset-0'>
        <div className='mt-8'>
          <HeroCarousel />
        </div>

        {/* <div className='absolute top-12 left-16 bounce duration-1000 ease-in-out'>
          <Image src='/blutooth-ear.avif' width={200} height={300} alt='' />
        </div>
        <div className='absolute bottom-12 right-16 bounce2 duration-1000 ease-in-out'>
          <Image src='/blutooth-head.avif' width={200} height={300} alt='' />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
