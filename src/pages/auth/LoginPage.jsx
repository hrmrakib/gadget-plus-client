import React, { useState } from "react";
import { FaEnvelope, FaLock, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login form submitted:", formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#080808] text-white p-4'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold'>
            Log in to your account
          </h2>
          <p className='mt-2 text-center text-sm'>
            Access your gadget wonderland
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm space-y-5'>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email address
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FaEnvelope className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none bg-[#080808] rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FaLock className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none bg-[#080808] rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-300'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <FaMobileAlt className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' />
              </span>
              Sign in
            </button>
          </div>
        </form>
        <div className='text-center'>
          <p className='text-sm'>
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
