import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TiUserAddOutline } from "react-icons/ti";
import { FaStarOfLife } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [anyError, setAnyError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = async () => {};

  return (
    <div className='bg-[#080808] bg-cover flex items-center min-h-screen'>
      <div className='mt-32 w-[90%] mx-auto flex items-center justify-evenly'>
        <div className='hidden lg:flex flex-col gap-10'>
          <div className='mb-5'>
            <div className='flex items-center gap-2'>
              <FaStarOfLife className='text-[#E3E93D]' />
              <h3 className='text-white'>Gadget Plus</h3>
            </div>
            <h2 className='text-white text-2xl font-semibold'>
              Buying amazing gadget!
            </h2>
          </div>

          <div className='flex flex-col gap-2.5'>
            <HiCheckBadge className='text-[#E3E93D] text-xl' />
            <h3 className='text-white text-xl'>Ensure Compilance</h3>
            <p className='text-white text-sm max-w-80'>
              Intregrate with guaranted developer frinedly-APIs or openly choose
              a build or low code solutions.
            </p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <MdOutlineSecurity className='text-[#E3E93D] text-xl' />
            <h3 className='text-white text-xl'>Built-in Security</h3>
            <p className='text-white text-sm max-w-80'>
              Intregrate with guaranted developer frinedly-APIs or openly choose
              a build or low code solutions.
            </p>
          </div>

          <ul className='flex items-center gap-5 *:text-blue-500 *:text-sm'>
            <li>
              <a href='#'>Terms</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
            <li>
              <a href='#'>Docs</a>
            </li>
            <li>
              <a href='#'>Help</a>
            </li>
          </ul>
        </div>
        <div className='relative min-h-[calc(100vh-100px)] max-w-xl px-10 py-5 bg-[#080808] rounded-lg shadow'>
          <div className='flex flex-col items-center justify-center mb-3'>
            <h2 className='text-2xl font-semibold text-gray-100'>
              Sign Up with
            </h2>
          </div>

          {/* signup form */}
          <form onSubmit={handleSubmit(onSubmit)} className='bg-[#080808]'>
            <div className='mb-3'>
              <label
                htmlFor='name'
                className='block mb-1 text-sm font-semibold text-white'
              >
                Full Name
              </label>
              <div className='flex items-center gap-1.5 shadow-sm bg-transparent border *:text-white text-sm rounded-lg w-full p-2.5'>
                <TiUserAddOutline />
                <input
                  type='text'
                  id='name'
                  className='bg-transparent border-none outline-none'
                  {...register("name", { required: true })}
                  placeholder='John Doe'
                />
              </div>
              {errors.name && (
                <span className='text-red-600 font-medium'>
                  Full name is required
                </span>
              )}
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block mb-1 text-sm font-semibold text-white'
              >
                Email address
              </label>
              <div className='flex items-center gap-1.5 shadow-sm bg-transparent border *:text-white text-sm rounded-lg w-full p-2.5'>
                <TiUserAddOutline />
                <input
                  type='text'
                  id='email'
                  className='bg-transparent border-none outline-none'
                  {...register("email", { required: true })}
                  placeholder='name@example.com'
                />
              </div>
              {errors.email && (
                <span className='text-red-600 font-medium'>
                  Email is required!
                </span>
              )}
            </div>

            <div className='relative mb-4'>
              <label
                htmlFor='password'
                className='block mb-1 text-sm font-semibold text-white'
              >
                Password
              </label>
              <div className='flex items-center gap-1.5 shadow-sm bg-transparent border *:text-white text-sm rounded-lg w-full p-2.5'>
                <TiUserAddOutline />
                <input
                  type={viewPassword ? "text" : "password"}
                  id='password'
                  className='bg-transparent border-none outline-none'
                  {...register("password", { required: true })}
                  placeholder='*******'
                />
              </div>
              <p className='text-gray-100 mt-1'>
                Minimum length is 6 characters
              </p>
              <span
                onClick={() => setViewPassword(!viewPassword)}
                className='absolute right-2 top-9'
              >
                {viewPassword ? (
                  <FaRegEye className='cursor-pointer text-white' />
                ) : (
                  <FaEyeSlash className='cursor-pointer text-white' />
                )}
              </span>
              {errors.password && (
                <span className='text-red-600 font-medium'>
                  Password is required!
                </span>
              )}
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='photo'
                className='block mb-1 text-sm font-semibold text-white'
              >
                Photo
              </label>
              <div className='flex items-center gap-1.5 shadow-sm bg-transparent border *:text-white text-sm rounded-lg w-full p-2.5'>
                <TiUserAddOutline />
                <input
                  type='file'
                  id='photo'
                  className='bg-transparent border-none outline-none'
                  {...register("photo", { required: true })}
                  placeholder='Photo'
                />
              </div>

              {errors.photo && (
                <span className='text-red-600 font-medium'>
                  Photo is required!
                </span>
              )}
            </div>

            <p className='text-red-500 font-semibold my-1'>{anyError}</p>

            <button
              type='submit'
              className='w-full text-white bg-blue-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 me-2 mb-2'
            >
              <span className='w-max mx-auto'>SignIn</span>
            </button>
          </form>

          <p className='mt-2 text-white'>
            Already have an account? Please
            <Link to='/login' className='ml-2 font-bold underline'>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
