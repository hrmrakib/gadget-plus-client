import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 text-center'>
        <div className='space-y-4'>
          <h1 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Oops!
          </h1>
          <div className='w-full max-w-sm mx-auto'>
            <img src='/error/error.webp' alt='Error - 404' />
          </div>
          <h2 className='mt-6 text-3xl font-bold text-gray-900'>
            Something went wrong
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            "We're sorry, but an unexpected error occurred."
          </p>
        </div>
        <div className='mt-8 space-y-4'>
          <button
            onClick={() => handleGoBack()}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200'
          >
            Get Back
          </button>
          <Link
            to={"/"}
            className='w-full flex justify-center py-2 px-4 border border-purple-300 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200'
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
