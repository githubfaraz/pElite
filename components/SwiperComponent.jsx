'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
// import 'swiper/swiper.css';

const SwiperComponent = ({data}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
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
  >
    {data.map((blog)=> 
              <SwiperSlide key={blog._id} >
              <div style={{ position: 'relative', display: 'inline-block' }} className="ml-16">
                  <Image
                    src={blog.image}
                    alt="dog-eating-bully-stick"
                    height={100}
                    width={200}
                    style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
                    className="rounded-ss-2xl h-40 w-40 ml-5"
                
                  />
                  <Link href={`/blogs/${blog._id}`} className="flex flex-row space-x-3 align-middle justify-center absolute top-0 left-0 ml-14 mt-32 text-center bg-orange-700 p-2 rounded-lg">
                    <Image
                      src='/eye.png'
                      alt="dog-eating-bully-stick"
                      height={20}
                      width={20}
                    />
                    <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
                  </Link>
                  <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-48"  style={{fontFamily: 'robot'}}>{blog.title}</h4>
              </div>
            </SwiperSlide>
              )
      }

  </Swiper>
  );
};

export default SwiperComponent;