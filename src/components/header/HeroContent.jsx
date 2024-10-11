import React, { useEffect } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel = (slider) => {
  const z = 300;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("detailsChanged", rotate);

  // Automatic sliding
  let timeout;
  function autoSlide() {
    timeout = setTimeout(() => {
      slider.next();
      autoSlide();
    }, 2500); // Change slide every 3 seconds
  }

  slider.on("created", autoSlide);
  slider.on("destroyed", () => clearTimeout(timeout));
};

export default function HeroCarousel() {
  const [sliderRef] =
    useKeenSlider <
    HTMLDivElement >
    ({
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]);

  return (
    <div className='wrapper'>
      <div className='scene'>
        <div className='carousel keen-slider' ref={sliderRef}>
          <div className='carousel__cell number-slide1 '>
            <img
              src='/iphone14vs15.jpg'
              width={350}
              height={350}
              alt='iphone'
            />
          </div>
          <div className='carousel__cell number-slide2'>
            <img src='/vivobook.avif' width={350} height={350} alt='iphone' />
          </div>
          <div className='carousel__cell number-slide3'>
            <img src='/watch.avif' width={350} height={350} alt='iphone' />
          </div>
          <div className='carousel__cell number-slide4'>
            <img src='/speaker.avif' width={350} height={350} alt='iphone' />
          </div>
          <div className='carousel__cell number-slide5'>
            <img src='/headphone.png' width={350} height={350} alt='iphone' />
          </div>
          <div className='carousel__cell number-slide6'>
            <img src='/macbook.jpg' width={350} height={350} alt='iphone' />
          </div>
        </div>
      </div>
    </div>
  );
}
