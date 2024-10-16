import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const FeedbackCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-[96%] mx-auto mt-20'>
      <h2 className='text-3xl text-white t-shadow mb-8'>
        OUR CUSTOMER FEEDBACK
      </h2>
      <div className='flex flex-col lg:flex-row items-center gap-10 h-[300px]'>
        <div className='min-w-[300px] max-w-[300px] h-[300px]'>
          <img
            className='min-w-[300px] max-w-[300px] h-[300px]'
            src={items[currentIndex]?.image}
            width={300}
            height={300}
            alt=''
          />
        </div>
        <div className='relative w-full h-[300px] bg-[#1c1c1c] p-8'>
          <p className='text-white min-h-24'>
            "{items[currentIndex]?.reviewText}"
          </p>

          <div className='flex justify-between'>
            <div>
              <h2 className='text-2xl text-white'>
                {items[currentIndex]?.name}
              </h2>
              <h3 className='text-blue-600 mt-2'>
                {items[currentIndex]?.designation}
              </h3>
            </div>

            <div className='-ml-10'>
              <img
                className='-ml-10'
                src={items[currentIndex]?.quotePng}
                width={100}
                height={100}
                alt='quote'
              />
            </div>
          </div>

          {/* forward and backword */}
          <div className='absolute bottom-5 left-8 flex'>
            <div
              onClick={handlePrevious}
              className='cursor-pointer left-1 bg-[#2043f1] hover:bg-[#163cf7ab] p-1'
            >
              <BiLeftArrowAlt className='text-white text-xl' />
            </div>

            <div
              onClick={handleNext}
              className='cursor-pointer right-1 bg-[#2043f1] hover:bg-[#163cf7a9] p-1'
            >
              <BiRightArrowAlt className='text-white text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
