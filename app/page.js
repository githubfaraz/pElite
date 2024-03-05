import ContactUsButton from "@/components/ContactUsButton";
import FeaturedBlogs from "@/components/FeaturedBlogs/FeaturedBlogs";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Footer from "@/components/Footer";
import LearnMoreButton from "@/components/LearnMoreButton";
import MainNavbar from "@/components/MainNavbar";
import Navb from "@/components/Navb";
import Navbar from "@/components/Navbar";
import ProductsButton from "@/components/ProductsButton";
import SwiperComponent from "@/components/SwiperComponent";
import useScript from "@/hooks/useScript";
import Image from "next/image";
import Link from "next/link";
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


export default function Home() {

  return (
    <div>

      {/* Hero section */}
      {/* <Navbar/> */}
      <div className="h-max w-full lg:w-full bg-orange-300 pb-4 ">
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
      <div className="absolute bg-orange-400 lg:block hidden" style={{
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
          style={{
            borderWidth: '2px'
          }}
          className="w-52 h-60 absolute bottom-52 rounded-xl left-5 border-orange-400"
        />
        <Image
          src='/hero-2.png'
          alt="Bully Stick"
          width={100}
          height={96}
          style={{
            borderWidth: '2px'
          }}
          className="bottom-0 absolute left-60 top-52  w-48 h-60 rounded border-orange-400"
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
            With a long-standing reputation for excellence, we&apos;ve established ourselves as the premier choice for discerning pet owners who demand nothing but the best for their furry companions
            {/* Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all natural and made from Free-Range, Grass-Fed Beef to ensure a nutritious and flavorful snack for your pups */}
          </p>
          {/* <button className="bg-white py-2 px-6 border-orange-700 border-2 rounded-full hover:border-slate-200 hover:text-white hover:bg-orange-700 stroke-2 text-lg sm:block hidden sm:w-52 transition-all">Learn More</button> */}
        </div>
        <div className="flex flex-col space-y-3">
          <div className="sm:flex sm:flex-row sm:space-y-2 mb-2 flex flex-col space-y-2 ">
            <div className="flex flex-col  align-middle">
              <Image 
                src='/awardRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                // style={{
                //   marginLeft: '6.5rem',
                //   marginRight: '2rem',
                // }}
                className="mx-auto"
              />
              <p className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                  fontFamily: 'lora'
            }}
            >
              Before our bully sticks make it to your pet, they undergo meticulous testing protocols to ensure they meet our high standards for safety, taste, and overall quality. 
            </p>
            </div>
            <div className="flex flex-col  align-middle">
              <Image 
                src='/qualityRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                // style={{
                //   marginLeft: '6.5rem',
                //   marginRight: '2rem',
                //   fontFamily: 'lora'
                // }}
                className="mx-auto"
              />
              <p className="w-5/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center pl-9" style={{
                  lineHeight: '1.5rem',
                  fontFamily: 'lora'
            }}>
              We go above and beyond industry standards to ensure the health and safety of both pets and their owners, offering peace of mind with every purchase.
            </p>
            </div>
            <div className="flex flex-col justify-center align-middle sm:hidden">
              <Image 
                src='/testRibbon.png'
                alt="Quality product"
                height={200}
                width={100}
                // style={{
                //   marginLeft: '6.5rem',
                //   marginRight: '2rem',
                //   fontFamily: 'lora'
                // }}
                className="mx-auto"

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
            <div className="hidden sm:flex flex-col sm:space-x-2 align-middle w-5/6 sm:ml-18 ml-0 justify-center">
                <Image 
                  src='/testRibbon.png'
                  alt="Quality product"
                  height={200}
                  width={100}
                  // style={{
                  //   marginLeft: '15.5rem',
                  //   marginRight: '2rem',
                  // }}
                className="mx-auto"

                />
                <p className="w-3/6 mt-2 text-lg mb-6 font-light text-slate-900 text-center mx-auto" style={{
                    // fontSize: '1rem',
                    lineHeight: '1.5rem',
                    marginLeft: '6rem',
                    fontFamily: 'lora'
              }}>
                Free from artificial additives and preservatives, our bully sticks stand out for their pure, natural goodness.
              </p>
            </div>
          </div>
        </div>
        {/* <LearnMoreButton /> */}
      </div>
      {/* Difference Section */}

      <FeaturedProducts/>
      




      {/* Tips Section */}
      <div className="h-max sm:py-10 sm:px-9 py-5 px-2">
        <h3  className="text-center sm:text-4xl text-3xl mb-5 text-amber-700 font-bold" style={{fontFamily: "playfair_display"}}>Tips for Elite Treats Bully Sticks Production</h3>
        <h3  className="text-center text-xl font-light sm:w-2/4 w-full text-amber-700 mx-auto" style={{fontFamily: 'robot'}}>Pet treats packed with nutritious ingredients,vitamins and supplements to help dogs</h3>
        {/* <div className="hidden sm:flex flex-row space-x-6 py-8">
          
        </div> */}

      <FeaturedBlogs/>




      </div>
      {/* Tips Section */}


      {/* Contact Us section */}
      <div className="bg-orange-300 h-max lg:py-8 flex flex-col lg:flex-row lg:space-x-48 lg:pl-28 pl-2 py-4">
        <div className="sm:flex-col sm:space-y-4 space-y-2 mx-auto ">
          <div className="flex flex-row space-x-10">
          <Image
              src='/banktBs.png'
              alt="dog eating bully-stick"
              height={300}
              width={400}
              className="h-28 w-28 sm:h-36 sm:w-36 border-white border-2 "
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
              className="h-28 w-28 sm:h-36 sm:w-36 border-white border-2"
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

export const metadata = {
  title: "Elite Treat For Pets - Premium Natural Dog Chews and Treats",
  description: "Shop the best selection of all-natural bully sticks at Elite Bully Sticks. Keep your dog healthy and happy with our high-quality, digestible, and long-lasting chews."
}
