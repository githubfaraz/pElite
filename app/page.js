import ContactUsButton from "@/components/ContactUsButton";
import Footer from "@/components/Footer";
import LearnMoreButton from "@/components/LearnMoreButton";
import MainNavbar from "@/components/MainNavbar";
import Navb from "@/components/Navb";
import Navbar from "@/components/Navbar";
import ProductsButton from "@/components/ProductsButton";
import SwiperComponent from "@/components/SwiperComponent";
import Image from "next/image";
import Link from "next/link";
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      {/* <Navbar/> */}
      <div className="h-max w-full sm:w-full bg-orange-300 pb-4 ">
        {/* Add more circles or customize as needed */}
        {/* <BullyStick /> */}
        {/* <MainNavbar /> */}
        <Navb linkActive='1'/>

      <div className="bg-orange-300 sm:mx-10 mx-2 sm:py-10 sm:my-8">
        <h6 className="text-6xl mb-23 sm:w-4/6 w-72 sm:mb-10 mb-5 text-amber-600 font-bold sm:text-7xl font-playfair_display leading-2xl sm:leading-7xl" >Buy for your <span className="text-amber-900">pet</span> whatever is needed</h6>
        <p className="sm:w-3/5 mt-2 sm:text-3xl text-xl sm:mb-6 mb-5 font-light text-amber-900 sm:leading-8xl leading-snug font-open_sans w-72" style={{
              fontFamily: 'open_sans'
        }}>
          Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all natural and made from Free-Range, Grass-Fed Beef to ensure a nutritious and flavorful snack for your pups
        </p>
        <ProductsButton buttonName={'Browse All products'}/>

        
      </div>
      {/* images */}
      <div className="absolute bg-orange-400 sm:block hidden" style={{
          borderRadius: '50%',
          width: '30rem',
          height: '30rem',
          left: '56%',
          bottom: '4rem',
          // marginLeft: '10rem'
      }}>
      <Image
          src='/bankt.png'
          alt="Bully Stick"
          width={300}
          height={320}
          // style={{
          //   marginLeft: '50rem'
          // }}
          className="w-52 h-60 absolute bottom-52 rounded-xl left-5"
        />
        <Image
          src='/hero-2.png'
          alt="Bully Stick"
          width={100}
          height={96}
          className="bottom-0 absolute left-60 top-52  w-48 h-60 rounded"
        />
      </div>

      </div>
      {/* Hero section */}



      {/* Difference Section */}
      <div className="sm:mx-10 mx-2 my-5 sm:py-14 py-7 flex sm:flex-row sm:space-x-0 flex-col space-y-2">
      <div>
          <h1 className="text-4xl leading-10xl  sm:leading-7xl sm:text-7xl mb-23 w-11/12 sm:mb-10 mb-5 text-amber-700 font-bold" style={{
            fontFamily: 'playfair_display'
          }}>What makes us different from others</h1>
          <p className="w-5/6 mt-2  sm:leading-8xl sm:text-8xl leading-snug text-xl mb-6 font-light text-slate-900" style={{
                fontFamily: 'open_sans'
          }}>
            Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all natural and made from Free-Range, Grass-Fed Beef to ensure a nutritious and flavorful snack for your pups
          </p>
          <button className="bg-white py-2 px-6 border-orange-700 border-2 rounded-full hover:border-slate-200 hover:text-white hover:bg-orange-700 stroke-2 text-lg sm:block hidden sm:w-52 transition-all">Learn More</button>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="sm:flex sm:flex-row sm:space-y-2 mb-2 flex flex-col space-y-2 ">
            <div className="flex flex-col space-x-2 align-middle">
              <Image 
                src='/awardRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                style={{
                  marginLeft: '6.5rem',
                  marginRight: '2rem',
                }}
              />
              <p className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                  fontFamily: 'lora'
            }}
            >
              Before our bully sticks make it to your pet, they undergo meticulous testing protocols to ensure they meet our high standards for safety, taste, and overall quality. 
            </p>
            </div>
            <div className="flex flex-col space-x-2 align-middle">
              <Image 
                src='/qualityRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                style={{
                  marginLeft: '6.5rem',
                  marginRight: '2rem',
                  fontFamily: 'lora'
                }}
              />
              <p className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                  fontFamily: 'lora'
            }}>
              Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team, ensuring that each chew is of the highest quality for the happiness and well-being of your pets.
            </p>
            </div>
            <div className="flex flex-col space-x-2 align-middle sm:hidden">
              <Image 
                src='/testRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                style={{
                  marginLeft: '6.5rem',
                  marginRight: '2rem',
                  fontFamily: 'lora'
                }}
              />
              <p className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                  fontFamily: 'lora'
            }}>
              Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team, ensuring that each chew is of the highest quality for the happiness and well-being of your pets.
            </p>
            </div>
          </div>
          
          <div >
            <div className="hidden sm:flex flex-col sm:space-x-2 align-middle w-5/6 sm:ml-18 ml-0">
                <Image 
                  src='/testRibbon.png'
                  alt="Quality product"
                  height={200}
                  width={100}
                  style={{
                    marginLeft: '15.5rem',
                    marginRight: '2rem',
                  }}
                />
                <p className="w-3/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center" style={{
                    // fontSize: '1rem',
                    lineHeight: '1.5rem',
                    marginLeft: '10.5rem',
                    fontFamily: 'lora'
              }}>
                Free from artificial additives and preservatives, our bully sticks stand out for their pure, natural goodness.
              </p>
            </div>
          </div>
        </div>
        <LearnMoreButton />
      </div>
      {/* Difference Section */}
      
      {/* Featured Products */}
      <div className="bg-orange-200 h-max pb-2 pt-2">
        <h1 className="mb-6 text-amber-900 text-3xl font-bold text-center pt-4" style={{
          fontFamily: 'robot_slab'
        }}>
            Our Featured Products
        </h1>

        <div className="flex sm:flex-row flex-col space-y-3 align-middle justify-between pt-4 px-9">
          <div className="flex flex-col align-middle space-y-3  bg-white w-88 p-6 rounded-md shadow-xl hover:shadow-none hover:cursor-pointer">
            <Image
              src='/bully-stick1.png'
              alt="bully stick"
              height={200}
              width={300}
              className="rounded-2xl"
            />
            <br />
            <hr />
            <br />
            <h1 className="text-2xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'lora'}}>6-inch bully sticks thick</h1>
          </div>

          <div className="flex flex-col align-middle space-y-3  bg-white w-88 p-6 rounded-md shadow-xl hover:shadow-none hover:cursor-pointer">
            <Image
              src='/bully-stick1.png'
              alt="bully stick"
              height={200}
              width={300}
              className="rounded-2xl"
            />
            <br />
            <hr />
            <br />
            <h1 className="text-2xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'lora'}}>6-inch bully sticks thick</h1>
          </div>

          <div className="flex flex-col align-middle space-y-3  bg-white w-88 p-6 rounded-md shadow-xl hover:shadow-none hover:cursor-pointer">
            <Image
              src='/bully-stick1.png'
              alt="bully stick"
              height={200}
              width={300}
              className="rounded-2xl"
            />
            <br />
            <hr />
            <br />
            <h1 className="text-2xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'lora'}}>6-inch bully sticks thick</h1>
          </div>

          {/* <h1 className="rounded-full py-2 px-6 bg-amber-800 text-white w-36">Bully Sticks</h1> */}
        </div>

        <div className="mt-8 mb-10 sm:ml-7xl " >
          <ProductsButton buttonName={'See more'}/>
        </div>
      </div>      
      {/* Featured Products */}



      {/* Tips Section */}
      <div className="h-max sm:py-10 sm:px-9 py-5 px-2">
        <h3  className="text-center sm:text-4xl text-3xl mb-5 text-amber-700 font-bold" style={{fontFamily: "playfair_display"}}>Tips for Elite Bully Sticks Production</h3>
        <h3  className="text-center text-xl font-light sm:w-2/4 w-full text-amber-700 mx-auto" style={{fontFamily: 'robot'}}>Pet treats packed with nutritious ingredients,vitamins and supplements to help dogs</h3>
        <div className="hidden sm:flex flex-row space-x-6 py-8">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Image
              src='/unit.jpg'
              alt="dog-eating-bully-stick"
              height={600}
              width={400}
              style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
              className="rounded-ss-2xl"
          
            />
            <Link href='/' className="flex flex-row space-x-3 align-middle justify-center absolute top-0 left-0 ml-40 mt-60 text-center bg-orange-700 hover:bg-orange-500 transition-all p-2 rounded-lg">
              <Image
                src='/eye.png'
                alt="dog-eating-bully-stick"
                height={20}
                width={20}
              />
              <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
            </Link>
            <h4 className="mt-6 text-center text-2xl text-amber-700 font-bold w-96"  style={{fontFamily: 'robot'}}>Understanding Bully Sticks Production</h4>
            <h3 className="mt-3 w-96 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3>
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Image
              src='/unit.jpg'
              alt="dog-eating-bully-stick"
              height={600}
              width={400}
              style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
              className="rounded-ss-2xl"
          
            />
            <Link href='/' className="flex flex-row space-x-3 align-middle justify-center hover:bg-orange-500 transition-all absolute top-0 left-0 ml-40 mt-60 text-center bg-orange-700 p-2 rounded-lg">
              <Image
                src='/eye.png'
                alt="dog-eating-bully-stick"
                height={20}
                width={20}
              />
              <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
            </Link>
            <h4 className="mt-6 text-center text-2xl text-amber-700 font-bold w-96"  style={{fontFamily: 'robot'}}>Understanding Bully Sticks Production</h4>
            <h3 className="mt-3 w-96 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3>
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Image
              src='/unit.jpg'
              alt="dog-eating-bully-stick"
              height={600}
              width={400}
              style={{ zIndex: 1,borderRadius: '10rem 10rem 10px 10px' }}
              className="rounded-ss-2xl"
          
            />
            <Link href='/' className="flex flex-row space-x-3 hover:bg-orange-500 transition-all align-middle justify-center absolute top-0 left-0 ml-40 mt-60 text-center bg-orange-700 p-2 rounded-lg">
              <Image
                src='/eye.png'
                alt="dog-eating-bully-stick"
                height={20}
                width={20}
              />
              <h2 className="block text-black font-medium" style={{fontFamily: 'poppins'}}>See more</h2>
            </Link>
            <h4 className="mt-6 text-center text-2xl text-amber-700 font-bold w-96"  style={{fontFamily: 'robot'}}>Understanding Bully Sticks Production</h4>
            <h3 className="mt-3 w-96 text-center font-light text-lg"  style={{fontFamily: 'lora'}}>Learn the steps our Bully sticks Production go through before reaching the belly of your Pet</h3>
          </div>
        </div>

        <div className="sm:hidden block">
          <SwiperComponent />
        </div>


      </div>
      {/* Tips Section */}

      {/* Contact Us section */}
      <div className="bg-orange-300 h-max sm:py-8 flex flex-col sm:flex-row sm:space-x-48 sm:pl-28 pl-2 py-4">
        <div className="sm:flex-col sm:space-y-4 space-y-2 mx-auto ">
          <div className="flex flex-row space-x-10">
          <Image
              src='/banktBs.png'
              alt="dog eating bully-stick"
              height={100}
              width={200}
              className="h-28 w-28 sm:h-44 sm:w-56 border-white border-2"
              style={{  borderRadius: '48%'}}
            />
            <div className="sm:p-14 p-6 bg-amber-500 text-3xl text-white">Elite</div>
          </div>
          <div className="flex flex-row space-x-4 ">
          <div className="sm:p-14 p-8 bg-amber-500 text-3xl text-white ">Pets</div>
            <Image
              src='/bankt_bs.png'
              alt="dog eating bully-stick"
              height={100}
              width={200}
              className="h-28 w-28 sm:h-44 sm:w-52 border-white border-2"
              style={{  borderRadius: '48%'}}
            />
          </div>
        </div>

        <div className="pb-10">
          <h3 className="text-4xl mb-23 sm:w-5/6 w-full mb-6  sm:text-9xl leading-tight sm:leading-7xl text-amber-700 font-bold" style={{
          fontFamily: 'playfair_display'
        }}>Best online pet product in your Area</h3>
          <h3 className="mt-2 mb-4 font-light text-xl sm:w-3/4 w-full sm:text-2xl " style={{fontFamily: 'open_sans'}}>Interested about us & and our products,we would like to hear more from you.</h3>
          <ContactUsButton />
        </div>
      </div>
      {/* Contact Us section */}

      <Footer />

      <div>

      </div>

    </div>
  );
}
