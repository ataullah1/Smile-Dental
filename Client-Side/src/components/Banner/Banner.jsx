import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://img.freepik.com/free-photo/young-female-patient-visiting-dentist-office_496169-930.jpg?t=st=1718867366~exp=1718870966~hmac=3fdf6dd1a6212cd93afb6507e8d09f0e53fcaa5800eee12797752f9e07550904&w=900',
    'https://img.freepik.com/free-photo/woman-patient-dentist_1303-9355.jpg?t=st=1718867442~exp=1718871042~hmac=99732e25ac612c13740c52fdf97e4573f6d578d69ded6396e543f06706deba2b&w=900',
    'https://img.freepik.com/premium-photo/woman-doctor-dentist-treating-teeth-patient-dental-chair-dental-treatment-medicine-dentistry-health-care-concept_116407-12487.jpg?w=900',
    'https://img.freepik.com/free-photo/happy-afro-kid-regular-check-up-teeth-dental-clinic_651396-1411.jpg?t=st=1718867533~exp=1718871133~hmac=67168c44db9fc960b4afb1e24c54018c86359e83458c7b58089ebaebb8b84165&w=900',
    'https://img.freepik.com/premium-photo/dentist-s-teeth-checkup-series-related-photos_21730-8424.jpg?w=900',
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
    <div className="h-60 w-full md:h-[470px] lg:h-screen relative overflow-hidden">
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
              currentSlider === inx ? 'w-8' : 'wz-2 size-2'
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
        <div className="bg-[#0200009c] absolute top-0 left-0 h-full w-full">
        <div className='w-11/12 mx-auto h-full flex items-center gap-5'>
              <div className="h-64 w-1/2 border-slate-200 rounded-md"></div>
              <div className="h-64 w-1/2 border-2 border-slate-200 rounded-md">
              <h1 className='text-4xl text-center font-bold text-slate-100'>Book A Appointment</h1>
              </div>
        </div>
        </div>
      </div>
    </div>
  );
};
