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
      <h2 className='text-2xl md:text-3xl text-white t-shadow mb-8'>
        OUR CUSTOMER FEEDBACK
      </h2>
      <div className='flex flex-col lg:flex-row items-center gap-10 h-[300px]'>
        <div className='sm:min-w-[300px] sm:max-w-[300px] sm:h-[300px]'>
          <img
            className='sm:min-w-[300px] sm:max-w-[300px] sm:h-[300px]'
            src={items[currentIndex]?.img}
            width={300}
            height={300}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
