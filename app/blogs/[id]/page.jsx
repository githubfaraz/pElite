import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import { Product } from '@/types/Product'
import Image from 'next/image'
import React from 'react'

const page = () => {

  
  
  return (
    <div>
      {/* <BlogDetails params={params}/> */}
    <div style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/unit-3.jpg'
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover h-96 filter brightness-50'
          style={{ zIndex: 1}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0'>
          {/* <MainNavbar /> */}
          <Navb linkActive='3'/>
        </div>
        <div className='absolute sm:top-1/4 top-32 sm:left-96 left-0 sm:ml-36 ml-20 mt-12 sm:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          Our Blogs
        </div>
      </div>
      <div className='sm:mx-14 mx-4 sm:my-10 my-5 flex sm:flex-row sm:space-x-16 flex-col space-y-3'>
        <div className='sm:w-8/12 w-full'>
          <div>
            <Image 
              src='/unit-1.jpeg'
              height={100}
              width={800}
              alt='dog-chewing bully-stick'
              className='rounded-lg'
              />
              {/* <h3 className='sm:text-6xl text-2xl font-bold text-orange-500 sm:my-5 my-3' style={{fontFamily: 'playfair_display'}}>Bully Sticks Production</h3> */}
              {/* <p className='font-normal text-lg' style={{fontFamily: 'open_sans'}}>Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives</p> */}
              {/* <h3 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-7 sm:my-4 my-2' style={{fontFamily: 'roboto'}}>1.Preservation</h3> */}
              {/* <p className='font-normal text-lg' style={{fontFamily: 'open_sans'}}>Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives</p> */}
              {/* <h3 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-7 sm:my-4 my-2' style={{fontFamily: 'roboto'}}>2.Sterilization</h3> */}
              {/* <p className='font-normal text-lg' style={{fontFamily: 'open_sans'}}>Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives</p> */}
              {/* <h3 className='text-orange-500 sm:text-2xl text-xl font-semibold ml-7 sm:my-4 my-2' style={{fontFamily: 'roboto'}}>3.Treatment</h3> */}
              {/* <p className='font-normal text-lg' style={{fontFamily: 'open_sans'}}>Elevate your pet&apos;s chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives Elevate your pet's chewing delight with our premium bully sticks. Made from 100% all-natural beef, these long-lasting treats are free from artificial additives and preservatives</p> */}
          </div>
        </div>

        <div className='sm:w-3/12 '>
                <div className=''>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-500 border-orange-400 ' style={{fontFamily: 'playfair_display'}}>Recommended</h2>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit-3.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>

                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit-3.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-500 border-orange-400 ' style={{fontFamily: 'playfair_display'}}>Popular</h2>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit-1.jpeg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>
                </div>

                
                </div>

        {/* <div className='w-3/12'>
                <div className='py-4 px-6 border-2 rounded-lg border-gray-700 flex flex-row space-x-52'>
                    <h1 className='text-lg' style={{fontFamily: 'lora'}}>Search</h1>
                    <Image
                        src='/magnifying.svg'
                        width={20}
                        height={50}
                        alt='search-bully-stick'
                    />
                </div>
                <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-500 border-orange-400 '>Recommended</h2>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit-3.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-medium'>Bully Sticks Production</h3>
                       </div>
                    </div>

                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-medium'>Bully Sticks Production</h3>
                       </div>
                    </div>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit-3.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-medium'>Bully Sticks Production</h3>
                       </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-500 border-orange-400 '>Popular</h2>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-medium'>Bully Sticks Production</h3>
                       </div>
                    </div>
                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300'>
                        <Image
                            src='/unit-1.jpeg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-medium'>Bully Sticks Production</h3>
                       </div>
                    </div>
                </div>


                
        </div> */}

      </div>
      <br />
      <hr />
      <Footer />
    </div>
  )
}

export default page
