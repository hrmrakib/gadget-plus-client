import React, { useState } from "react";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import Drawer from "../Drawer";
import { blogLinks, pageLinks, productLinks } from "../../constants";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const carts = useSelector((state) => state.cart.carts);
  const wishlists = useSelector((state) => state.wishlist.wishlists);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className='w-full fixed top-0 z-50'>
      <TopBar />

      <div className='bg-[#080808] h-16 px-3 md:px-10 flex items-center justify-between'>
        {/* logo */}
        <div>
          <Link href='/' className='text-white'>
            gadgetPlus
          </Link>
        </div>

        {/* menubar item */}
        <div className='hidden lg:flex items-center gap-8 *:text-white'>
          <div className='relative group'>
            <Link
              to={"/"}
              className="flex group items-center gap-1 cursor-pointer relative text-sm text-gray-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-width after:duration-500 after:ease-in-out hover:after:w-full"
            >
              Home
            </Link>
          </div>
          <div className='relative group'>
            <li className='flex items-center gap-1 cursor-pointer text-sm text-gray-100 relative'>
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
                Products
              </span>
              <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' />
            </li>

            <div className='absolute z-50 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300'>
              <div
                className='py-1 pl-2'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                {productLinks.map((link, i) => (
                  <Link
                    key={i}
                    href='#'
                    className='block px-4 py-2 text-sm text-white hover:text-blue-500'
                    role='menuitem'
                  >
                    {link?.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='relative group'>
            <li className='flex items-center gap-1 cursor-pointer text-sm text-gray-100 relative'>
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
                Pages
              </span>
              <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' />
            </li>

            <div className='absolute z-50 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300'>
              <div
                className='py-1 pl-2'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                {pageLinks.map((link, i) => (
                  <Link
                    key={i}
                    href='#'
                    className='block px-4 py-2 text-sm text-white hover:text-blue-500'
                    role='menuitem'
                  >
                    {link?.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='relative group'>
            <li className='flex items-center gap-1 cursor-pointer text-sm text-gray-100 relative'>
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
                Blog
              </span>
              <FaAngleDown className='transition-transform duration-400 ease-in-out group-hover:rotate-180' />
            </li>

            <div className='absolute z-50 w-40 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300'>
              <div
                className='py-1 pl-2'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                {blogLinks.map((link, i) => (
                  <Link
                    key={i}
                    href='#'
                    className='block px-4 py-2 text-sm text-white hover:text-blue-500'
                    role='menuitem'
                  >
                    {link?.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* search, user, cart */}
        <div className='flex items-center gap-5 *:text-lg *:text-white'>
          {/* TODO: Work later */}

          {/* <div>
            <IoSearchOutline />
          </div>
          <div>
            <FaRegUser />
          </div> */}
          <Link to={"/page/wishlist"} className='relative'>
            <FaRegHeart />
            <span
              className={`absolute w-4 h-4 -top-2 -right-2 rounded-full bg-blue-600 text-[12px] flex items-center justify-center`}
            >
              {wishlists.length || 0}
            </span>
          </Link>
          <div className='relative cursor-pointer' onClick={toggleDrawer}>
            <IoBagAddSharp />
            <span className='absolute w-4 h-4 -top-2 -right-2 rounded-full bg-blue-600 text-[12px] flex items-center justify-center'>
              {carts.length || 0}
            </span>
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </nav>
  );
};

export default Navbar;
