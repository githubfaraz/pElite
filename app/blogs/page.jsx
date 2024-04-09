import Blogs from '@/components/Blogs/Blogs'
import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import PopularBlogs from '@/components/PopularBlogs/PopularBlogs'
import SearchInput from '@/components/SearchInput'
import Image from 'next/image'
import React from 'react'
import { CiTimer } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const page = () => {
  return (
    <div className='w-full'>
      {/* Header */}
      <div style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/unit-3.jpg'
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover h-96 filter brightness-50 w-screen'
          style={{ zIndex: 1}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0 w-screen sm:w-full'>
          <Navb linkActive='4' />
        </div>
        <div className='absolute sm:top-1/4 top-32 sm:left-96 left-0 sm:ml-36 ml-20 mt-12 sm:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          Our Blogs
        </div>
      </div>
      {/* Header */}

      <div className='flex sm:flex-row flex-col sm:space-x-2 sm:my-10 my-5 sm:mx-10 align-middle '>
        
        <div className='sm:w-9/12 w-full sm:mx-0 mx-2'>
        <h1 className='border-b-2 w-32 border-black'>Trending</h1>
        <hr />
        <div>
          <div className='relative mt-4'>
            <Image
              alt='bankt'
              src='/expo.jpg'
              width={900}
              height={900}
              className='w-screen sm:w-full h-3/12'
            />
            <div className='absolute bottom-0 sm:bottom-16 text-lg sm:text-4xl font-bold text-white border-l-8 border-amber-400 left-3 sm:left-12 pl-4'>
              <p>Our Journey to Global Pet Expo and the Story Behind Our Bully Sticks</p>
              <p className='text-sm sm:text-xl flex font-extralight align-middle'>
                <CiTimer/>
                19th March 2024
                </p>
            </div>
          </div>

          <div className='flex flex-row space-x-4  sm:w-full'>
          <div className='relative mt-4'>
            <Image
              alt='bankt'
              src='/expo1.jpeg'
              width={600}
              height={700}
              className='sm:w-full h-2/12'
            />
            <div className='absolute bottom-0 sm:bottom-16 text-sm sm:text-2xl font-bold text-white border-l-8 border-amber-400 left-2 sm:left-12 pl-4'>
              <p>Latest Trends in Dog Treats Unveiled at Global Pet Expo</p>
              <p className='sm:text-xl text-sm flex font-extralight align-middle'>
                <CiTimer/>
                19th March 2024
                </p>
            </div>
          </div>

          <div className='relative mt-4'>
            <Image
              alt='bankt'
              src='/expo2.jpeg'
              width={600}
              height={700}
              className=' sm:w-full h-3/12'
            />
            <div className='absolute bottom-0 sm:bottom-16 text-sm sm:text-2xl font-bold text-white border-l-8 border-amber-400 left-2 sm:left-12 pl-4'>
              <p>What Experts at Global Pet Expo are Saying About Dog Nutrition</p>
              <p className='sm:text-xl text-sm flex font-extralight align-middle'>
                <CiTimer/>
                19th March 2024
                </p>
            </div>
          </div>
          </div>
        </div>
          <h1 className='border-b-2 w-32 border-black mt-6'>Blogs & Insights</h1>
          <hr />
          <Blogs />
        </div>
      {/* Blog section */}

        {/* search input and Popular blogs */}
        <div className='sm:w-2/6  w-full px-5'>
                
                <div className=''>
                    <div className='hidden sm:flex flex-row space-x-14'>
                      <a href="#" class="fa fa-facebook"><FaFacebook/></a>
                      <a href="#" class="fa fa-twitter"><FaTwitter/></a>
                      <a href="#" class="fa fa-instagram"><FaTiktok/></a>
                    </div>
                    <h2 className='border-b-2 w-32  text-2xl font-semibold text-orange-500 border-orange-400 ' style={{fontFamily: 'playfair_display'}}>Popular</h2>
                    <hr />
                    <PopularBlogs />
                    
                </div>
        {/* search input and Popular blogs */}
        </div>
      </div>
      {/* social icons for sm screens */}
      <div className='flex flex-row space-x-7 sm:hidden ml-14'>
                      
                        <Image
                          src='/facebook-sm.png'
                          alt=''
                          height={50}
                          width={50}
                        />
                      
                      <Image
                          src='/twitter-sm.png'
                          alt=''
                          height={50}
                          width={50}
                        />
                      <Image
                          src='/instagram-sm.png'
                          alt=''
                          height={50}
                          width={50}
                        />
      </div>
      {/* social icons for sm screens */}
      <br />
      <hr />
      <Footer />
    </div>
  )
}

export const metadata = {
    title: "Elite Treat For Pets | Blogs",
  appleMobileWebAppTitle: 'Elite Treat For Pets | Blogs',
  openGraph: {
    title: "Elite Treat For Pets | Blogs",
    description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treats For Pets",
    images: "https://www.elitetreatforpets.com/logoP.webp",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `https://www.elitetreatforpets.com/`,
    languages: {
      "en-US": "/",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Treat For Pets | Blogs",
    images: "/logoP.png"
  },
}  

export default page
