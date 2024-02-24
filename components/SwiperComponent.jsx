'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation,Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
// import 'swiper/swiper.css';

const SwiperComponent = ({data}) => {
    const slides = [
      {
        _id: "65d67d94bca235a5010e5ea3",
        title: "The Benefits of Bully Sticks: A Comprehensive Guide",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708554708/PElite/e3bcaiiesb6mfxd7k9vw.jpg",
        introduction: "Bully sticks, also known as pizzle sticks, have gained popularity as a natural chew treat for dogs...",
        subtitles: [
          "Natural Ingredients",
          "Dental Health",
          "Mental Stimulation",
          "Nutritional Value",
          "Long-Lasting",
          "Odorless Options",
          "Suitable for All Dogs"
        ],
        content: [
          "Bully sticks are made from 100% beef, making them a natural and easily digestible treat for dogs.",
          "Chewing on bully sticks can help promote good dental hygiene in dogs.The act of gnawing on the stick helps remove plaque and tartar buildup, reducing the risk of dental issues such as gum disease and tooth decay.",
          "Dogs have a natural instinct to chew, and bully sticks provide a satisfying outlet for this behavior.",
          "Bully sticks are rich in protein, making them a nutritious snack for dogs.They also contain essential nutrients such as amino acids, which are important for muscle growth and overall health.",
          "Bully sticks are known for their durability and long-lasting chew time.Unlike some other treats that may be devoured in seconds, bully sticks provide hours of chewing enjoyment for dogs, making them a cost-effective option for pet owners.",
          "While some dog treats can have a strong odor that may be off-putting to pet owners, bully sticks are available in odor-free varieties.",
          "Bully sticks come in various shapes, sizes, and textures, making them suitable for dogs of all ages, breeds, and sizes."
        ]
      },
      {
        _id: "65d67d94bca235a5010e5ea4",
        title: "Why Quality Matters: The Importance of Premium Ingredients in Bully Sticks",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708554705/PElite/a7codlrlq2fv5evpfuq5.jpg",
        introduction: "Bully sticks have emerged as a popular choice among dog owners seeking a natural, long-lasting chew for their pets. However, the quality of ingredients used in these treats significantly impacts their safety and efficacy. This article explores the importance of opting for bully sticks made from premium ingredients.",
        subtitles: [
          "Safety",
          "Nutritional Value",
          "Digestibility",
          "Longevity",
          "Taste and Satisfaction"
        ],
        content: [
          "High-quality ingredients ensure the safety of bully sticks for your dog by reducing the risk of harmful contaminants or toxins. Premium ingredients sourced from reputable suppliers undergo rigorous quality control measures.",
          "Bully sticks made from premium ingredients offer better nutritional value for your dog, providing essential nutrients such as protein, vitamins, and minerals. In contrast, inferior ingredients may lack nutritional benefits and contain artificial additives or fillers.",
          "Quality ingredients contribute to better digestibility, reducing the risk of digestive issues such as upset stomach or diarrhea. Bully sticks made from inferior ingredients may be harder for your dog to digest, leading to gastrointestinal discomfort.",
          "Premium ingredients result in a denser, longer-lasting chew, providing hours of entertainment for your dog. In contrast, bully sticks made from low-quality ingredients may break apart quickly, posing a choking hazard.",
          "Quality ingredients enhance the taste and overall satisfaction of bully sticks for your dog. Premium options offer a natural, delicious flavor that dogs love, while low-quality ingredients may have an unpleasant taste or odor."
        ] 
      },
      {
        _id: "65d67d94bca235a5010e5ea5",
        title: " Bully Stick Buyer's Guide: What to Look for When Purchasing Bully Sticks",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708554704/PElite/zcxhld7ez6jpzmylp1i2.jpg",
        introduction: "Choosing the right bully sticks for your dog can be overwhelming given the variety of options available on the market. However, understanding what to look for when purchasing bully sticks can help ensure that you select a safe, high-quality product that meets your pet's needs. In this buyer's guide, we'll outline essential factors to consider to make an informed decision when buying bully sticks for your furry friend.",
        subtitles: [
          "Ingredients",
          "Manufacturing Process",
          "Size and Thickness",
          "Odor and Taste",
          "Safety"
        ],
        content: [
          "Opt for bully sticks made from a single, natural ingredient, preferably high-quality beef. Avoid products with additives, preservatives, or artificial flavors.",
          "Choose bully sticks that undergo minimal processing and are free from harmful chemicals or contaminants. Seek products manufactured in facilities that adhere to strict quality control standards and regulations",
          "Select bully sticks that are appropriate for your dog's size, breed, and chewing habits. Bully sticks come in various lengths and thicknesses, so choose one that matches your pet's chewing preferences",
          "Choose bully sticks with minimal odor and a natural, appealing taste. Avoid products with strong, unpleasant smells, as these may indicate low-quality ingredients or improper processing.",
          "Prioritize bully sticks that are free from potential choking hazards, such as small pieces or sharp edges. Inspect the product for any signs of splintering or breakage before giving it to your dog."
        ]
        }
    ]

      // console.log(data)

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
      {/* <SwiperSlide >
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
      </SwiperSlide> */}
  </Swiper>
  );
};

export default SwiperComponent;