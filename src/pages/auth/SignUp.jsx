import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Here you would typically handle the signup logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#080808] text-white p-4'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold'>
            Create your account
          </h2>
          <p className='mt-2 text-center text-sm'>
            Join the gadget revolution today!
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm space-y-4'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FaUser className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='appearance-none bg-[#080808] rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
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
                  className='appearance-none bg-[#080808] rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                  autoComplete='new-password'
                  required
                  className='appearance-none bg-[#080808] rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor='confirmPassword' className='sr-only'>
                Confirm Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FaLock className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  autoComplete='new-password'
                  required
                  className='appearance-none bg-[#080808] rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
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
              Sign up
            </button>
          </div>
        </form>
        <div className='text-center'>
          <p className='text-sm'>
            Already have an account?{" "}
            <Link
              to={"/login"}
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
