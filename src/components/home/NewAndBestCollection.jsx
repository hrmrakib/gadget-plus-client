import React from "react";

const NewAndBestCollection = () => {
  return (
    <div className='mb-12 w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <div className="min-w-full bg-[url('/new-collection-headphone.jpg')] bg-no-repeat bg-cover h-80 flex items-center justify-center">
        <div className='text-center'>
          <p className='text-lg text-white'>Sony Mdr 10rbt</p>
          <h2 className='text-3xl text-white my-3'>New Collection</h2>
          <button className='bg-[#2996D8] text-white px-6 py-2 delay-100 hover:bg-white hover:text-[#2996D8]'>
            Shop Now
          </button>
        </div>
      </div>
      <div className="min-w-full bg-[url('/best-new-laptop.jpg')] bg-no-repeat bg-cover h-80 flex items-center justify-center">
        <div className='text-center'>
          <p className='text-lg text-white'>MacBook Pro</p>
          <h2 className='text-3xl text-white my-3'>Best New</h2>
          <button className='bg-[#2996D8] text-white px-6 py-2 delay-100 hover:bg-white hover:text-[#2996D8]'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewAndBestCollection;
