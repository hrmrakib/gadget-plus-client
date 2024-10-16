const CheckoutTheDiscount = () => {
  return (
    <div className='mt-20 flex items-center justify-around gap-10'>
      <div>
        <p className='text-[#2996D8] text-center'>Hurry Up!</p>
        <h2 className='w-[400px] mx-auto leading-10 mt-4 text-white text-center text-4xl'>
          Up To 25% Discount Check it Out
        </h2>
        <div className='flex items-center justify-center '>
          <button className='mt-5 px-5 py-2 border border-gray-700 text-white hover:bg-blue-600 transition duration-50 ease-in-out'>
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <img src='/mini-sound-box.webp' width={200} height={200} alt='box' />
      </div>
    </div>
  );
};

export default CheckoutTheDiscount;
