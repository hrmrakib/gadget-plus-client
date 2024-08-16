import React from "react";
import TopBar from "./TopBar";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <TopBar />

      <div className='bg-[#080808] h-16 px-3 md:px-10 flex items-center justify-between'>
        {/* logo */}
        <div>
          <Link href='/' className='text-white'>
            gadgetPlus
          </Link>
        </div>

        {/* menubar item */}
        <div className='flex items-center gap-8 *:text-white'>
          <div className='relative group'>
            <div className="flex group items-center gap-1 cursor-pointer relative text-sm text-gray-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-width after:duration-500 after:ease-in-out hover:after:w-full">
              Home
              {/* <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' /> */}
            </div>

            {/* <div className='z-50 absolute mt-5 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div
                className='py-1 pl-4 flex flex-col gap-2 group'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                <a
                  href='#'
                  className="w-max text-sm text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-width after:duration-500 after:ease-in-out hover:after:w-full"
                  role='menuitem'
                >
                  Option 1
                </a>
                <a
                  href='#'
                  className='w-max text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Option 2
                </a>
                <a
                  href='#'
                  className='w-max text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Option 3
                </a>
              </div>
            </div> */}
          </div>
          <div className='relative group'>
            <li className="flex items-center gap-1 cursor-pointer relative text-sm text-gray-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-width after:duration-500 after:ease-in-out hover:after:w-full">
              Products
              <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' />
            </li>

            <div className='z-50 absolute mt-5 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div
                className='py-1 pl-2'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  iPhone 15 Pro
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  OnePlus 11
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  OPPO F23 Ultra
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Sumsang Galaxy
                </Link>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <li className="flex items-center gap-1 cursor-pointer relative text-sm text-gray-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-width after:duration-500 after:ease-in-out hover:after:w-full">
              Pages
              <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' />
            </li>

            <div className='z-50 absolute mt-5 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div
                className='py-1 pl-2'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  About Us
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Contact
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  FAQ's
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Privacy & Policy
                </Link>
                <Link
                  href='#'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Shipping & Return
                </Link>
                <Link
                  href='/terms'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Terms & Condition
                </Link>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <li className="flex items-center gap-1 cursor-pointer relative text-sm text-gray-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-width after:duration-500 after:ease-in-out hover:after:w-full">
              Blog
              <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' />
            </li>

            <div className='z-50 absolute mt-5 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div
                className='py-1 pl-2'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                <Link
                  href='blog'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Blog Page
                </Link>
                <Link
                  href='/article'
                  className='inline-block px-4 py-2 text-sm text-white hover:text-blue-500'
                  role='menuitem'
                >
                  Article Page
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* search, user, cart */}
        <div className='flex items-center gap-5 *:text-lg *:text-white'>
          <div>
            <IoSearchOutline />
          </div>
          <div>
            <FaRegUser />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <IoBagAddSharp />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
