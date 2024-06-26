// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FaRegComments } from 'react-icons/fa';

export default function BlogCarosal() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div>
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-60 rounded-t-md"
              style={{
                backgroundImage: `url('https://i.ibb.co/fMPF1YK/dentistry.jpg')`,
              }}
            />
            <div className="p-3 border rounded-b-md hover:bg-[#9adbf332] duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Author: <span className="font-medium">Md Ataullah</span>
                </h3>
                <button className="flex items-center gap-1 text-lg">
                  <span className="text-pClr text-xl">
                    <FaRegComments />
                  </span>
                  6
                </button>
              </div>

              <h1 className="text-2xl font-bold pt-4">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="py-3 pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                nesciunt iure quaerat sint totam illo amet rerum doloribus, odit
                sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-60 rounded-t-md"
              style={{
                backgroundImage: `url('https://i.ibb.co/fMPF1YK/dentistry.jpg')`,
              }}
            />
            <div className="p-3 border rounded-b-md hover:bg-[#9adbf332] duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Author: <span className="font-medium">Md Ataullah</span>
                </h3>
                <button className="flex items-center gap-1 text-lg">
                  <span className="text-pClr text-xl">
                    <FaRegComments />
                  </span>
                  6
                </button>
              </div>

              <h1 className="text-2xl font-bold pt-4">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="py-3 pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                nesciunt iure quaerat sint totam illo amet rerum doloribus, odit
                sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-60 rounded-t-md"
              style={{
                backgroundImage: `url('https://i.ibb.co/fMPF1YK/dentistry.jpg')`,
              }}
            />
            <div className="p-3 border rounded-b-md hover:bg-[#9adbf332] duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  Author: <span className="font-medium">Md Ataullah</span>
                </h3>
                <button className="flex items-center gap-1 text-lg">
                  <span className="text-pClr text-xl">
                    <FaRegComments />
                  </span>
                  6
                </button>
              </div>

              <h1 className="text-2xl font-bold pt-4">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="py-3 pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                nesciunt iure quaerat sint totam illo amet rerum doloribus, odit
                sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
