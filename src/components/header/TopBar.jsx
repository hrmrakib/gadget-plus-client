import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineHotelClass } from "react-icons/md";

const TopBar = () => {
  return (
    <div className='h-10 bg-[#262626] flex items-center justify-between px-3 md:px-10'>
      <div className='flex items-center gap-5 *:text-white *:text-lg'>
        <FaFacebookF />
        <FaXTwitter />
        <FaYoutube />
        <FaPinterestP />
        <FaInstagram />
      </div>
      <div className='flex items-center gap-2 *:text-white *:text-sm'>
        <MdOutlineHotelClass />
        <p>Summer sale discount off 30%!</p>
      </div>
    </div>
  );
};

export default TopBar;
