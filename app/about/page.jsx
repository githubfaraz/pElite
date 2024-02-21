import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SwiperComp from '@/components/Swiper'
import SwiperComponent from '@/components/SwiperComponent'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/Team.jpg'
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover filter brightness-50'
          style={{ zIndex: 1}}
        />
        {/* <Image
          src='/unit-3.jpg'
          alt='dog-chewing-bully-stick'
          height={50}
          width={1500}
          className='object-cover h-96 bg-gray-800'
        /> */}
        <div className='absolute top-0 left-0 ml-0 mt-0'>
          {/* <MainNavbar /> */}
          <Navb linkActive='2'/>
        </div>
        <div className='absolute top-1/4 sm:left-96 left-0 sm:ml-36 ml-20 mt-12 sm:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          About Us
        </div>
      </div>

      <div className='sm:mx-10 sm:my-10 my-5 mx-5 flex flex-col sm:flex-row sm:space-x-5 space-y-2'>
        <h1 className="sm:text-6xl text-4xl mb-23 leading-snug sm:leading-9xl sm:w-3/5 w-full text-left mb-10 text-orange-400 font-extrabold" style={{
              // fontSize: '3.5rem',
              // lineHeight: '4rem',
              fontFamily: 'playfair_display'
            }}>We stand by the <span className='text-orange-600'>quality</span> of our bully sticks! Your <span className='text-orange-600 font-extrabold'>happiness</span> is our priority.</h1>
        <h1 className='sm:w-2/5 sm:mt-6 mt-3 sm:text-2xl text-xl font-extralight' style={{fontFamily: 'inter'}}>
          Welcome to EliteBullySticks, where our passion for pets and commitment to excellence converge. At the core of our mission is the belief that our pets deserve the utmost care,
          reflected in our premium Pets Bully Sticks.
        </h1>
        <h1 className='sm:w-2/5 sm:text-2xl text-xl sm:mt-6 mt-3 font-extralight' style={{fontFamily: 'inter'}}>
          As devoted pet enthusiasts, we recognize the joy our furry friends bring, driving us to reciprocate that love with a treat distinguished by its exceptional quality, taste, and nutritional value.
        </h1>
      </div>

      <div className='sm:mx-10 mx-5 my-5 sm:my-10 flex sm:flex-row sm:space-x-12 flex-col space-x-2'>
          <div className='flex sm:flex-row flex-col sm:space-x-4 space-y-2 sm:w-3/6 w-40 align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg mx-auto sm:mx-0'>
            <Image
              src='/chemical-free.png'
              height={200}
              width={100}
              alt='chemical-free-bully-stick'
              className='bg-orange-500 rounded-2xl sm:h-28 sm:w-28 h-12 w-12 mx-auto'
            />
            <div className='mt-2 font-extralight text-center sm:text-left' style={{fontFamily: 'inter'}} >Made from 100% all-natural from Grass-fed Beef</div>
          </div>

          <div className='flex flex-row space-x-3 sm:space-x-8 mt-6 sm:mt-0'>
            <div className='flex sm:flex-row flex-col space-y-2 sm:space-x-4 sm:w-3/6 w-40 align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg' style={{fontFamily: 'poppins'}}>
              <Image
                src='/molecular.png'
                height={50}
                width={100}
                alt='chemical-free-bully-stick'
                className='bg-orange-600 rounded-2xl py-3 px-3 sm:h-28 sm:w-28 w-12 mx-auto'
              />
              <div className='mt-2 font-extralight text-center sm:text-left ' style={{fontFamily: 'inter'}} >Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team</div>
            </div>
            <div className='flex sm:flex-row flex-col space-y-2 sm:space-x-4 sm:w-3/6 w-40  align-middle justify-center border px-2 py-3 rounded-lg sm:shadow-2xl shadow-lg'>
              <Image
                src='/test-tube.png'
                height={10}
                width={80}
                alt='chemical-free-bully-stick'
                className='bg-orange-500 rounded-2xl py-3 px-3 sm:h-28 sm:w-28 w-12 mx-auto'
              />
              <div className='mt-2 font-extralight text-center sm:text-left' style={{fontFamily: 'inter'}}>Crafted with precision and expertise, our bully sticks are a testament to the dedication of our team</div>
            </div>
          </div>
      </div>

      <div className='sm:my-16 relative inline-block sm:ml-96 ml-9 my-8'>
        <Image 
          src='/AboutUs2.png'
          alt='bully-sticks'
          width={500}
          height={400}
          className='rounded-xl sm:w-4/5 sm:h-5/6 w-3/5 h-4/6'
          style={{zIndex: 1}}
          />
          <Image 
            src='/AboutUs3.png'
            alt='bully-sticks'
            width={400}
            height={400}
            className='absolute sm:top-16 top-10 left-32 sm:left-96 ml-0 mt-0 mx-auto rounded-2xl border-4 sm:border-8 stroke-white border-white sm:w-3/5 sm:h-4/6 w-2/5 h-3/6'
          />
      </div>
      
      <div className='mx-10'>
        <h3 className='text-center sm:text-4xl text-3xl font-bold text-orange-500' style={{fontFamily: 'playfair_display'}}>Our Companies</h3>
        <div className='flex flex-col align-middle border py-5 rounded-xl shadow-lg w-56 sm:w-72 mx-auto mt-4'>
            <Image
              src='/logo.png'
              alt='bully-sticks'
              width={200}
              height={400}
              className='rounded-full mx-auto'
            />
            <h3 className='text-center my-4 text-orange-500 font-semibold sm:text-2xl text-xl' style={{fontFamily: 'roboto'}}>Zemy Group LLC</h3>
            {/* <h1 className='w-3/5 text-center mx-auto text-lg' style={{fontFamily: 'lora'}}>For the UK,US,EU,Canada & Australia (minimum spend).</h1> */}

          </div>
            
          
          
        <div className='flex flex-row sm:space-x-4 space-x-2 my-12'>


          

        </div>

      </div>
      
      <hr />
      <Footer />
    </div>
  )
}

export default page
