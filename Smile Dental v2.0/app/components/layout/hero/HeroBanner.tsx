"use client";

import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import hero1 from "@/public/images/hero1.png";
import hero2 from "@/public/images/hero2.png";
import hero3 from "@/public/images/sdfgsdf.png";
import hero4 from "@/public/images/hero4.png";
import hero5 from "@/public/images/hero5.png";
import hero6 from "@/public/images/hero6.webp";

export const Banner: React.FC = () => {
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const carouselImages: StaticImageData[] = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
  ];

  const prevSlider = () =>
    setCurrentSlider((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );

  const nextSlider = useCallback(() => {
    setCurrentSlider((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  }, [carouselImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-96 w-full md:h-[550px] lg:h-screen relative overflow-hidden">
      {/* Arrow Left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 hover:scale-125 duration-300 hover:text-pClr"
      >
        <FaChevronLeft />
      </button>
      {/* Arrow Right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 hover:scale-125 duration-300 hover:text-pClr"
      >
        <FaChevronRight />
      </button>
      {/* Dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlider(index)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === index ? "w-8" : "w-2 h-2"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel Container */}
      <div className="h-full relative">
        <div
          className="h-full ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {carouselImages.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt={`Slider - ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="min-w-full h-full bg-black/20"
            />
          ))}
        </div>
        <div className="bg-[#0200009c] absolute top-0 left-0 h-full w-full"></div>
      </div>
    </div>
  );
};
