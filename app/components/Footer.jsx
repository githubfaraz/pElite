// "use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF} from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=' bg-orange-400 text-white sm:py-4'>
    <div className="flex flex-col text-left sm:flex-row sm:space-x-24 sm:space-y-0 space-y-10 sm:h-60 h-30  px-10" >
      <div>
        <h4 className='font-extrabold'>elitetreatforpets.com</h4>
        <h4 className='mt-2'>Eco-Friendly Chews for Eco-Loving Paws.</h4>
        <div className='flex space-x-2 mt-7'>
          <Link href='https://www.facebook.com/profile.php?id=61556973973125' className="ml-2 flex flex-row space-x-2">
              <FaFacebookF />
              </Link>
              <Link href='https://twitter.com/PetsEliteTreat' className="ml-2 flex flex-row space-x-2">
              <FaXTwitter />
              </Link>
              <Link href='https://www.instagram.com/elitetreatbullysticks/' className="ml-2 flex flex-row space-x-2">
              <IoLogoInstagram />
          </Link>
        </div>
      </div>
      <div className='flex flex-col space-y-5'>
        <h3 className='font-extrabold font-oswald text-2xl'>Quick Navigation</h3>
        <Link href='/'>Home</Link>
        <Link href='/about'>About us</Link>
        <Link href='/contact-us'>Contact</Link>
      </div>
      <div className='flex flex-col space-y-5'>
        <h3 className='font-extrabold font-oswald text-2xl'>Contact Us</h3>
        <div className='flex space-x-1'>
        <BiSolidPhoneCall />
          <h3 className=' '>+1(917) 6094-597</h3>
        </div>
        <div className='flex space-x-1'>
          <FiMail />
          <Link href="mailto:info@zemy-group.com?subject=Mail to Elite Bully Sticks">
            info@zemy-group.com
          </Link>
        </div>
        <div className='flex space-x-1'>
          <FiMail />
          <Link href="mailto:bullystick@elitetreatforpets.com?subject=Mail to Elite Bully Sticks">
            bullystick@elitetreatforpets.com
          </Link>
        </div>
      </div>
      <div className='space-y-2'>
        <h1 className='font-extrabold text-2xl font-oswald'>Company info</h1>
          {/* <h1>Elite Treat For Pets</h1> */}
        <div className='flex space-x-1'>
        <FaLocationDot />
        <h1>Kongoni,B09 </h1>
        </div>
        <h1>Athi River </h1>
        <h1>P.O. Box 42875, Machakos, Kenya</h1>
      </div>
        {/* <div className="flex flex-row lg:space-x-36 justify-end lg:ml-60 lg:py-6  lg:justify-center py-4 space-x-4 lg:mx-7" >
        
          <div className='flex flex-col sm:flex-row lg:space-x-3 sm:space-y-0 w-full space-y-4'>
            <div className="flex flex-row space-x-2 justify-center align-middle w-full">
              <Image
                src='/call.png'
                alt="phoneCall"
                width={50}
                height={40}
                className=" bg-orange-400 rounded-xl p-2 lg:w-14 lg:h-14 w-8 h-8"
              />
              <div className="flex flex-col lg:space-y-2 space-y-1 w-full">
                <h3 className="lg:text-xl text-sm text-orange-500 font-bold">Contact Us</h3>
                <h3 className='lg:text-base text-sm w-full'>+1(917) 6094-597</h3>
              </div>
            </div>

            <div className="flex flex-row space-x-2 justify-center align-middle w-full">
              <Image
                src='/email.png'
                alt="phoneCall"
                width={60}
                height={40}
                className=" bg-orange-400 rounded-xl p-2 lg:w-14 lg:h-14 w-9 h-9"
              />
              <div className="flex flex-col lg:space-y-2 space-y-1 w-full">
                <h3 className="text-sm lg:text-base text-orange-500 font-bold">
                <a href="mailto:info@zemy-group.com?subject=Mail to Elite Bully Sticks">
                    Email Us
                </a>
                </h3>
                <a href="mailto:info@zemy-group.com?subject=Mail to Elite Bully Sticks">
                  <h3 className='text-sm sm:text-base w-full'>info@zemy-group.com</h3>
                </a>
                <a href="mailto:bullystick@elitetreatforpets.com?subject=Mail to Elite Bully Sticks">
                  <h3 className='text-sm sm:text-base w-full'>bullystick@elitetreatforpets.com</h3>
                </a>
              </div>
              <path stroke="black" d="M5 40 l215 0" />
            </div>
          </div>
        </div>

        <hr style={{height: '4px'}}/>
        <div className="flex flex-row lg:space-x-20 md:space-x-32 space-x-4 justify-center lg:justify-center lg:ml-96 ml-4 py-6 lg:py-2">
          <div className="flex flex-col sm:space-y-2 space-y-1">
            <h5 className="text-orange-500 font-bold text-sm lg:text-base">Our Products</h5>
            <Link href='/products' className="ml-2 text-sm lg:text-base">Bully Sticks</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="text-orange-500 font-bold text-sm lg:text-lg">Community</h5>
            <Link href='/about' className="ml-2 text-sm lg:text-base">About Us</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="text-orange-500 font-bold text-sm lg:text-lg">Get in Touch</h5>
            <Link href='/contact' className="ml-2 text-sm lg:text-base">Contact Us</Link>
          </div>
          <div className="lg:flex flex-col space-y-2 hidden">
            <h5 className="text-orange-500 font-bold text-lg">Social Media</h5>
            <Link href='https://www.facebook.com/profile.php?id=61556973973125' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/facebook.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Facebook</h3>
            </Link>
            <Link href='https://twitter.com/PetsEliteTreat' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/twitter.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Twitter</h3>
            </Link>
            <Link href='https://www.instagram.com/elitetreatbullysticks/' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/instagram.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Instagram</h3>
            </Link>
            <Link href='https://www.tiktok.com/@petselitetreat' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/tiktok.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Tiktok</h3>
            </Link>
          </div>
        </div>
        <hr />
        <div className='lg:hidden flex flex-row  py-2 justify-end mr-3'>
        <Link href='https://www.facebook.com/profile.php?id=61556973973125' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/facebook.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
            <Link href='https://twitter.com/PetsEliteTreat' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/twitter.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
            <Link href='https://www.instagram.com/elitetreatbullysticks/' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/instagram.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
            <Link href='https://www.tiktok.com/@petselitetreat' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/tiktok.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
        </div> */}
      </div>
      <br />
      <hr className="border-t border-gray-300 mx-10"/>

      <h2 className='mx-auto text-center mt-2'>© 2024 All Rights Reserved | ZEMY GROUP GLOBAL LIMITED</h2>
      </div>
  )
}

export default Footer
