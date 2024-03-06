// 'use client'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Navb from '@/components/Navb'
import ProductFilters from '@/components/ProductFilters/ProductFilters'


async function getData() {
    const res = await fetch('https://pets-elite-b.fly.dev/api/bully-sticks')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default  function Page  ()  {


    return (
    <div>
        <div className='w-full md:w-screen lg:w-full' style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/hero-2.png'
          alt='dog-chewing-bully-stick'
          height={100}
          width={1500}
          className='object-cover h-96 filter brightness-50'
          style={{ zIndex: 1, height: '30rem'}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0'>
          {/* <MainNavbar /> */}
          <Navb linkActive='3' />
        </div>
        <div className='absolute lg:top-1/4 top-40 lg:left-96 md:left-48 left-14 lg:ml-24 text-center lg:mt-12  md:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          Our Products
        </div>
    </div>
    
        {/* <div className='flex sm:flex-row sm:space-x-4 flex-col space-y-3'> */}
            <ProductFilters/>
        {/* </div> */}
        <br />
        <hr />
        <Footer />
    </div>
  )
}

export const metadata = {
  title: "Shop Premium Bully Sticks - High-Quality Dog Treats | Elite Treat For Pets",
  description: "Discover our range of premium, all-natural bully sticks and dog treats crafted for your pet's health and enjoyment. Find the perfect chew for your dog at Elite Bully Sticks."
}


