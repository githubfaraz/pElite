'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube,Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const CompanyCard= ({data}) => {

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay]}
    spaceBetween={40}
    slidesPerView={3}
    // navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    effect={"flip"}
    flipEffect={{
      shadow: false,
      slideShadows: false,
      shadowOffset: 0,
      shadowScale: 0,
    }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
    }}
  >
    {data.map((blog)=> 
              <SwiperSlide key={blog.name} className="shadow-xl ">
              <div style={{ borderWidth: '1px' }} className="text-center w-full border-gray-300 p-8 lg:p-8 md:p-0 rounded-md py-4">
                  <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-full"  style={{fontFamily: 'robot'}}>{blog.name}</h4>
                  <h4 className="mt-6 text-center text-xl text-gray-800 font-light w-full min-h-52"  style={{fontFamily: 'inter'}}>{blog.description}</h4>
                  <Link href='/company'>
                    <button  className='rounded-full py-1 px-8 my-4 mr-9 md:mr-0 sm:px-6 border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg lg:w-52 md:w-48' style={{fontFamily: "inter"}}>
                      Visit Our Website
                    </button>
                  </Link>
              </div>
            </SwiperSlide>
              )
      }

  </Swiper>
  );
};

export default CompanyCard;