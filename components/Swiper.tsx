'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
// import 'swiper/swiper.css';

const SwiperComp = () => {
    const slides = [
        {
          "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
          "title": "Avatar: The Way of Water",
          "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          "interval": 1500
        },
        {
          "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          "title": "Black Adam",
          "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          "interval": 500
        },
        {
          "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
          "title": "Black Panther: Wakanda Forever",
          "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
          "interval": 2500
        }
      ]

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
    spaceBetween={50}
    slidesPerView={3}
    autoplay
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
      <SwiperSlide >
      <div className='flex flex-col align-middle border py-5 rounded-xl shadow-lg sm:w-72 w-28 h-18'>
            <Image
              src='/logo.png'
              alt='bully-sticks'
              width={200}
              height={400}
              className='rounded-full mx-auto'
            />
            <h3 className='text-center my-4 text-orange-500 font-semibold sm:text-2xl text-xl' style={{fontFamily: 'roboto'}}>Musha Khan LLC</h3>

          </div>
      </SwiperSlide>

      <SwiperSlide >
      <div className='flex flex-col align-middle border py-5 rounded-xl shadow-lg sm:w-72 w-28 h-18'>
            <Image
              src='/logo.png'
              alt='bully-sticks'
              width={200}
              height={400}
              className='rounded-full mx-auto'
            />
            <h3 className='text-center my-4 text-orange-500 font-semibold sm:text-2xl text-xl' style={{fontFamily: 'roboto'}}>Musha Khan LLC</h3>

          </div>
      </SwiperSlide>

      <SwiperSlide >
      <div className='flex flex-col align-middle border py-5 rounded-xl shadow-lg sm:w-72 w-28 h-18'>
            <Image
              src='/logo.png'
              alt='bully-sticks'
              width={200}
              height={400}
              className='rounded-full mx-auto'
            />
            <h3 className='text-center my-4 text-orange-500 font-semibold sm:text-2xl text-xl' style={{fontFamily: 'roboto'}}>Musha Khan LLC</h3>

          </div>
      </SwiperSlide>

      <SwiperSlide >
      <div className='flex flex-col align-middle border py-5 rounded-xl shadow-lg sm:w-72 w-28 h-18'>
            <Image
              src='/logo.png'
              alt='bully-sticks'
              width={200}
              height={400}
              className='rounded-full mx-auto'
            />
            <h3 className='text-center my-4 text-orange-500 font-semibold sm:text-2xl text-xl' style={{fontFamily: 'roboto'}}>Musha Khan LLC</h3>

          </div>
      </SwiperSlide>
  </Swiper>
  );
};

export default SwiperComp;