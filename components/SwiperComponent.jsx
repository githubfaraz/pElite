'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
// import 'swiper/swiper.css';

const SwiperComponent = () => {
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
        <div style={{ position: 'relative', display: 'inline-block' }} className="ml-16">
            <Image
              src='/unit.jpg'
              alt="dog-eating-bully-stick"
              height={100}
              width={200}
              style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
              className="rounded-ss-2xl h-40 w-40 ml-5"
          
            />
            <Link href='/' className="flex flex-row space-x-3 align-middle justify-center absolute top-0 left-0 ml-14 mt-32 text-center bg-orange-700 p-2 rounded-lg">
              <Image
                src='/eye.png'
                alt="dog-eating-bully-stick"
                height={20}
                width={20}
              />
              <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
            </Link>
            <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-48"  style={{fontFamily: 'robot'}}>Understanding Bully Sticks Production</h4>
            <h3 className="mt-3 w-48 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div style={{ position: 'relative', display: 'inline-block' }} className="ml-16">
            <Image
              src='/unit.jpg'
              alt="dog-eating-bully-stick"
              height={100}
              width={200}
              style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
              className="rounded-ss-2xl h-40 w-40 ml-5"
          
            />
            <Link href='/' className="flex flex-row space-x-3 align-middle justify-center absolute top-0 left-0 ml-14 mt-32 text-center bg-orange-700 p-2 rounded-lg">
              <Image
                src='/eye.png'
                alt="dog-eating-bully-stick"
                height={20}
                width={20}
              />
              <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
            </Link>
            <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-48"  style={{fontFamily: 'robot'}}>Understanding Bully Sticks Production</h4>
            <h3 className="mt-3 w-48 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{ position: 'relative', display: 'inline-block' }} className="ml-16">
            <Image
              src='/unit.jpg'
              alt="dog-eating-bully-stick"
              height={100}
              width={200}
              style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
              className="rounded-ss-2xl h-40 w-40 ml-5"
          
            />
            <Link href='/' className="flex flex-row space-x-3 align-middle justify-center absolute top-0 left-0 ml-14 mt-32 text-center bg-orange-700 p-2 rounded-lg">
              <Image
                src='/eye.png'
                alt="dog-eating-bully-stick"
                height={20}
                width={20}
              />
              <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
            </Link>
            <h4 className="mt-6 text-center text-xl text-amber-700 font-bold w-48"  style={{fontFamily: 'robot'}}>Understanding Bully Sticks Production</h4>
            <h3 className="mt-3 w-48 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3>
        </div>
      </SwiperSlide>
  </Swiper>
  );
};

export default SwiperComponent;