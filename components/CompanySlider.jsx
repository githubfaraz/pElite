'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube,Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


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
  >
    {data.map((blog)=> 
              <SwiperSlide key={blog.name} className="shadow-2xl">
              <div style={{ position: 'relative', display: 'inline-block',borderWidth: '1px' }} className="pl-8 text-center w-full border-gray-300  rounded-md py-4">
                  {/* <Image
                    src={blog.logo}
                    alt="dog-eating-bully-stick"
                    height={100}
                    width={100}
                    style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
                    className="rounded-ss-2xl h-20 w-60 ml-5"
                
                  /> */}
                  {/* <Link href={`/blogs/${blog._id}`} className="flex flex-row space-x-3 align-middle justify-center absolute top-0 left-0 ml-14 mt-32 text-center bg-orange-700 p-2 rounded-lg"> */}
                    {/* <Image
                      src='/eye.png'
                      alt="dog-eating-bully-stick"
                      height={20}
                      width={20}
                    /> */}
                    {/* <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2> */}
                  {/* </Link> */}
                  <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-40"  style={{fontFamily: 'robot'}}>{blog.name}</h4>
                  <h4 className="mt-6 text-center text-xl text-gray-800 font-light w-40 min-h-96"  style={{fontFamily: 'inter'}}>{blog.description}</h4>
                  <Link href='/company'>
                    <button  className='rounded-full py-1 px-8 my-4 mr-9 sm:px-6 border-2 bg-amber-800 hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52 ' style={{fontFamily: "inter"}}>
                      See More
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