import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='pt-80 lg:pt-28'>
      <div className='bg-[#1C1C1C]'>
        <div className='w-[90%] mx-auto'>
          <div className='flex flex-wrap justify-between items-center pt-12 pb-10 border-b-2 border-b-gray-300'>
            <div>
              <h2 className='text-2xl text-white'>
                Subscribe To Our Newsletter
              </h2>
              <div className='mt-5'>
                <input
                  className='border-none outline-none px-3 py-2'
                  type='text'
                  placeholder='Your email address ...'
                />
                <button className='bg-blue-600 text-white px-4 py-2'>
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h2 className='text-white text-2xl'>Join Our Social Media</h2>
              <div className='flex items-center gap-3 mt-5'>
                <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaFacebookF className='text-black' />
                </div>
                <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaXTwitter className='text-black' />
                </div>
                <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaYoutube className='text-black' />
                </div>
                <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaPinterestP className='text-black' />
                </div>
                <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaInstagram className='text-black' />
                </div>
              </div>
            </div>
          </div>
          <div className='px-3 py-8 lg:px-12 grid grid-cols-2  lg:grid-cols-4 gap-2 md:gap-10 justify-center'>
            <div>
              <h2 className='text-gray-200 text-[17px] font-medium'>COMPANY</h2>

              <ul className='text-gray-200 mt-3 space-y-2'>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Search</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>All collections</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>All Products</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>My cart</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-gray-200 text-[17px] font-medium'>
                INFORMATION
              </h2>

              <ul className='text-gray-200 mt-3 space-y-2'>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>airpods</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>headphones</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>laptops</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>mobiles</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>smart-watches</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>speaker</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-gray-200 text-[17px] font-medium'>SHOP</h2>

              <ul className='text-gray-200 mt-3 space-y-2'>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Apple iPhone 15 pro max</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>OnePlus 11</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Oppo F25 Pro</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Samsung Galaxy Z Flip 5</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>OnePlus 11</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='text-gray-200 text-[17px] font-medium'>
                USEFULL LINK
              </h2>

              <ul className='text-gray-200 mt-3 space-y-2'>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>About us</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Contact</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>FAQ's</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Shipping & Return</a>
                </li>
                <li className='hover:translate-x-2 cursor-pointer transition-all'>
                  <a href='#'>Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-50 py-2.5 px-3 md:px-10 flex items-center justify-between flex-wrap'>
        <p className='text-sm text-gray-700'>
          © 2024, Techno WorkDo, Powered by WorkDo.io
        </p>

        <div className='flex items-center gap-3'>
          {[
            "/payments/visa.png",
            "/payments/mastercard.png",
            "/payments/american-express.jpeg",
            "/payments/paypal.png",
            "/payments/diners-club.png",
            "/payments/discover.jpeg",
          ].map((img, i) => (
            <img
              key={i}
              className='border w-6 h-4 rounded-sm'
              src={img}
              width={30}
              height={20}
              title={img.split("/")[2].split(".")[0]}
              alt='payment'
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
