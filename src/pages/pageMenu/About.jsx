import { MdOutlineAttachEmail } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { roles, whyChoose } from "../../constants";

const About = () => {
  return (
    <div className='min-h-screen bg-[#080808] flex flex-col'>
      <div className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Gadget Plus</h1>
        </div>
      </div>

      <div className='flex-grow'>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='flex flex-col md:flex-row items-center mb-12'>
              <div className='md:w-1/2 mb-6 md:mb-0'>
                <img
                  src='/iphone-15.jpg'
                  alt='TechGadgetry Team'
                  width={400}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
              </div>
              <div className='md:w-1/2 md:pl-8'>
                <h2 className='text-2xl font-bold text-gray-100 mb-4'>
                  About Gadget Plus
                </h2>
                <p className='text-gray-300 mb-4'>
                  Founded in 2010, TechGadgetry has been at the forefront of
                  bringing cutting-edge gadgets to tech enthusiasts worldwide.
                  Our passion for innovation drives us to curate the most
                  exciting and useful gadgets on the market.
                </p>
                <p className='text-gray-300'>
                  With a team of dedicated tech experts, we strive to provide
                  not just products, but a gateway to the future of technology.
                  Our commitment to quality and customer satisfaction has made
                  us a trusted name in the world of gadgets and tech
                  accessories.
                </p>
              </div>
            </div>

            <div className='bg-[#080808] shadow rounded-lg p-6 mb-12'>
              <h3 className='text-xl font-semibold text-gray-100 mb-4'>
                Why Choose Gadget Plus?
              </h3>
              <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {whyChoose.map((item, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-500 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span className='text-white'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-[#080808] shadow rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-gray-100 mb-4'>
                Our Team
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {roles.map((role, index) => (
                  <div key={index} className='text-center'>
                    <img
                      src={role?.img}
                      alt={role?.role}
                      width={100}
                      height={100}
                      className='rounded-full mx-auto mb-2'
                    />
                    <h4 className='font-semibold text-white'>{role?.role}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#080808] text-white'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h4 className='text-lg font-semibold mb-2'>Contact Us</h4>
              <div className='flex items-center mb-2'>
                <HiMapPin className='h-5 w-5 mr-2' />
                <span>123 Gadget Street, Tech City, 1845</span>
              </div>
              <div className='flex items-center mb-2'>
                <FaPhoneAlt className='h-5 w-5 mr-2' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center'>
                <MdOutlineAttachEmail className='h-5 w-5 mr-2' />
                <span>info@techgadgetry.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
