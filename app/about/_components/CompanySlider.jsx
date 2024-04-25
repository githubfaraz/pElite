'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube,Autoplay } from 'swiper/modules';
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";


const CompanySlider = ({data}) => {

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
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
      
    }}
  >
    {data.map((blog)=> 
              <SwiperSlide key={blog.name} className="shadow-xl">
              <div style={{ position: 'relative', display: 'inline-block',borderWidth: '1px' }} className="flex flex-col p-4 justify-center align-middle text-center w-full border-gray-100  rounded-md py-4">
                  <h4 className="mt-6 block text-center text-xl text-amber-700 font-bold w-full text-oswald"  >{blog.name}</h4>
                  <Image 
                    alt='main-company'
                    height={100}
                    width={100}
                    src={blog.logo}
                    className='mx-auto my-10'
                  />
                  <h4 className="mt-6 block text-center text-xl text-gray-800 font-light w-full min-h-60"  >{blog.description}</h4>
                  <Link href='/company' className="block mx-auto">
                    <button  className='rounded-full py-1 px-8 my-4 mr-9 sm:px-6 border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg w-full' style={{fontFamily: "inter"}}>
                      Visit our Website
                    </button>
                  </Link>
              </div>
            </SwiperSlide>
              )
      }

  </Swiper>
  );
};

export default CompanySlider;