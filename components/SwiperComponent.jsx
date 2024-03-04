'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube,Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { IoEye } from "react-icons/io5";
// import 'swiper/swiper.css';

const SwiperComponent = ({data}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    effect={"cube"}
    cubeEffect={{
      shadow: false,
      slideShadows: false,
      shadowOffset: 0,
      shadowScale: 0,
    }}
    breakpoints={{
      768: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // Add more breakpoints here if needed
    }}
  >
    
    {data.map((blog)=> 
              <SwiperSlide key={blog._id} >
              <div style={{ position: 'relative', display: 'inline-block' }} className="ml-16 sm:ml-64 ">
                  <Image
                    src={blog.image}
                    alt="dog-eating-bully-stick"
                    height={100}
                    width={200}
                    style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
                    className="rounded-ss-2xl h-40 w-40 ml-5 sm:h-56 sm:w-56 sm:ml-0"
                
                  />
                  <Link href={`/blogs/${blog._id}`} className="flex flex-row space-x-3 align-middle justify-center absolute top-0 lg:top-0 md:top-2/3 left-0 ml-14 mt-32 text-center bg-orange-700 p-2 rounded-lg text-white">
                    <IoEye size={20}/>

                    <h2 className="block  font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
                  </Link>
                  <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-48  sm:mx-auto"  style={{fontFamily: 'robot'}}>{blog.title}</h4>
              </div>
            </SwiperSlide>
              )
      }

  </Swiper>
  );
};

export default SwiperComponent;