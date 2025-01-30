import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Banner = () => {
  //   Slider ==============
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    "/image/hero1.png",
    "/image/hero2.png",
    "/image/hero3.png",
    "/image/hero4.png",
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-96 w-full md:h-[550px] lg:h-screen relative overflow-hidden">
      {/* arrow left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 hover:scale-125 duration-300 hover:text-pClr"
      >
        <FaChevronLeft />
      </button>
      {/* arrow right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 hover:scale-125 duration-300 hover:text-pClr"
      >
        <FaChevronRight />
      </button>
      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselImages.map((_, inx) => (
          <button
            key={_}
            onClick={() => setCurrentSlider(inx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === inx ? "w-8" : "wz-2 size-2"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel container */}
      <div className="h-full relative">
        <div
          className="h-full ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img
              key={slide}
              src={slide}
              className="min-w-full h-full bg-black/20 object-cover"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
        <div className="bg-[#0200009c] absolute top-0 left-0 h-full w-full"></div>
      </div>
    </div>
  );
};
