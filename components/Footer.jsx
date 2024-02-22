import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col space-y-0 " >
        <div className="flex flex-row sm:space-x-48 sm:ml-96 sm:py-10 justify-evenly sm:justify-center py-4 space-x-1 sm:mx-11" >
        <Image
              src='/logoP.png'
              alt="phoneCall"
              width={90}
              height={50}
              className="p-2 sm:w-24 sm:h-24 w-16 h-16"
            />
          
          <div className="flex flex-row space-x-2 justify-center align-middle sm:w-full">
            <Image
              src='/call.png'
              alt="phoneCall"
              width={50}
              height={40}
              className=" bg-orange-400 rounded-xl p-2 sm:w-14 sm:h-14 w-8 h-8"
            />
            <div className="flex flex-col sm:space-y-2 space-y-1 ">
              <h3 className="sm:text-xl text-sm text-orange-500 font-bold">Contact Us</h3>
              <h3 className='sm:text-base text-sm'>+1(703) 555-0123</h3>
            </div>
          </div>
          <div className="flex flex-row space-x-2 justify-center align-middle sm:w-full">
            <Image
              src='/email.png'
              alt="phoneCall"
              width={60}
              height={40}
              className=" bg-orange-400 rounded-xl p-2 sm:w-14 sm:h-14 w-9 h-9"
            />
            <div className="flex flex-col sm:space-y-2 space-y-1">
              <h3 className="text-sm sm:text-base text-orange-500 font-bold">Email Us</h3>
              <h3 className='text-sm sm:text-base'>info@zemy-group.com</h3>
            </div>
            <path stroke="black" d="M5 40 l215 0" />
          </div>
        </div>
        <hr style={{height: '4px'}}/>
        <div className="flex flex-row sm:space-x-40 space-x-4 sm:ml-96 ml-4 py-6 sm:py-12">
          <div className="flex flex-col sm:space-y-2 space-y-1">
            <h5 className="text-orange-500 font-bold text-sm sm:text-base">Our Products</h5>
            <Link href='/products' className="ml-2 text-sm sm:text-base">Bully Sticks</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="text-orange-500 font-bold text-sm sm:text-lg">Community</h5>
            <Link href='/about' className="ml-2 text-sm sm:text-base">About Us</Link>
            {/* <Link href='/products' className="ml-2 text-sm sm:text-base">Our Blogs</Link> */}
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="text-orange-500 font-bold text-sm sm:text-lg">Get in Touch</h5>
            <Link href='/contact' className="ml-2 text-sm sm:text-base">Contact Us</Link>
          </div>
          <div className="sm:flex flex-col space-y-2 hidden">
            <h5 className="text-orange-500 font-bold text-lg">Social Media</h5>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/facebook.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Facebook</h3>
            </Link>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/twitter.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Twitter</h3>
            </Link>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/instagram.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
              <h3>Instagram</h3>
            </Link>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
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
        <div className='sm:hidden flex flex-row ml-48 py-2'>
        <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/facebook.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/twitter.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/instagram.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
            <Link href='/products' className="ml-2 flex flex-row space-x-2">
              <Image
                src='/tiktok.png'
                alt='elite-bully-sticks-facebook'
                height={50}
                width={20}
              />
            </Link>
        </div>
      </div>
  )
}

export default Footer
