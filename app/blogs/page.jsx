import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import SearchInput from '@/components/SearchInput'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
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
          <Navb linkActive='4' />
        </div>
        <div className='absolute sm:top-1/4 top-32 sm:left-96 left-0 sm:ml-36 ml-20 mt-12 sm:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          Our Blogs
        </div>
      </div>

        <div className='block sm:hidden'>
                    <SearchInput/>
        </div>

      <div className='flex sm:flex-row flex-col sm:space-x-2 sm:my-10 my-5 sm:mx-10 '>
        <div className='sm:w-3/4 w-full sm:mx-0 mx-2'>
            <div className='flex flex-col space-y-5 '>
                {/* Recommended */}
                <div className='flex flex-row space-x-2'>
                    <div className="flex flex-col align-middle space-y-3  bg-white sm:w-72 w-36 sm:p-6 p-2 rounded-md shadow-xl sm:h-96  border hover:shadow-sm " style={{borderWidth: '1px'}}>
                        <Image
                       src='/unit.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'roboto'}}>Bully Sticks Production</h1>
                        <h2 className='' style={{fontFamily: 'open_sans'}}>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                    <div className="flex flex-col align-middle space-y-3  bg-white sm:w-72 w-36  sm:p-6 p-2 rounded-md shadow-xl sm:h-96 border hover:shadow-sm">
                        <Image
                        src='/unit-3.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'roboto'}}>Bully Sticks Production</h1>
                        <h2 className='' style={{fontFamily: 'open_sans'}}>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                    <div className="sm:flex hidden flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border hover:shadow-lg">
                        <Image
                        src='/unit.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900" style={{fontFamily: 'roboto'}}>Bully Sticks Production</h1>
                        <h2 className='' style={{fontFamily: 'open_sans'}}>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                </div>
                {/* Recommended */}


                <div className='flex flex-row space-x-4'>
                    <div className="flex flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border">
                        <Image
                        src='/unit-3.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900">Bully Sticks Production</h1>
                        <h2 className=''>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                    <div className="flex flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border">
                        <Image
                        src='/unit.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900">Bully Sticks Production</h1>
                        <h2 className=''>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                    <div className="flex flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border">
                        <Image
                        src='/unit.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900">Bully Sticks Production</h1>
                        <h2 className=''>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                </div>

                <div className='flex flex-row space-x-4'>
                    <div className="flex flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border">
                        <Image
                        src='/unit-1.jpeg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900">Bully Sticks Production</h1>
                        <h2 className=''>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                    <div className="flex flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border">
                        <Image
                        src='/unit.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900">Bully Sticks Production</h1>
                        <h2 className=''>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                    <div className="flex flex-col align-middle space-y-3  bg-white w-72 p-6 rounded-md shadow-xl h-96 border">
                        <Image
                        src='/unit.jpg'
                        alt="bully stick"
                        height={200}
                        width={300}
                        />
                        <br />
                        <hr />
                        <h1 className="text-xl font-semibold w-full text-center text-gray-900">Bully Sticks Production</h1>
                        <h2 className=''>At elite Bully Sticks we make sure that our Bully Sticks go through a thorough processing</h2>
                    </div>
                </div>
            </div>

        </div>

        <div className='sm:w-1/4 w-full px-5'>
                {/* <div className='py-4 px-6 border-2 rounded-lg border-gray-700 sm:flex hidden flex-row space-x-52'>
                    <h1 className='text-lg' style={{fontFamily: 'lora'}}>Search</h1>
                    <Image
                        src='/magnifying.svg'
                        width={20}
                        height={50}
                        alt='search-bully-stick'
                    />
                </div> */}

                <div className='sm:block hidden'>
                    <SearchInput/>
                </div>

                
                <div className='mt-6'>
                    <h2 className='border-b-8 text-2xl font-semibold text-orange-500 border-orange-400 ' style={{fontFamily: 'playfair_display'}}>Recommended</h2>
                    <div className='mt-4 space-y-4 text-xl '>
                       <div className='flex flex-row space-x-2  justify-between sm:p-2 px-2 py-2 border-2 rounded-md border-gray-300' style={{borderWidth: '1px'}}>
                        <Image
                            src='/unit-3.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold text-xl' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>

                    <div className='mt-4 space-y-4 text-xl'>
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300 ' style={{borderWidth: '1px'}}>
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
                       <div className='flex flex-row space-x-2 p-2 border-2 rounded-md border-gray-300' style={{borderWidth: '1px'}}>
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
                    <div className='mt-4 space-y-4 text-xl' >
                       <div className='flex flex-row space-x-2 p-2  border-2 rounded-md border-gray-300' style={{borderWidth: '1px'}}>
                        <Image
                            src='/unit.jpg'
                            width={150}
                            height={100}
                            alt='bully-sticks-article'
                        />
                        <h3 className='font-semibold' style={{fontFamily: 'roboto'}}>Bully Sticks Production</h3>
                       </div>
                    </div>
                    <div className='mt-4 space-y-4 text-xl' >
                       <div className='flex flex-row space-x-2 p-2 border-2  rounded-md border-gray-300' style={{borderWidth: '1px'}}>
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
      </div>
      <br />
      <hr />
      <Footer />
    </div>
  )
}

export const metadata = {
    title: "Elite Treat For Pets - Blogs",
  appleMobileWebAppTitle: 'Elite Treat For Pets - Blogs',
  openGraph: {
    title: "Elite Treat For Pets - Blogs",
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
    title: "Elite Treat For Pets - Blogs",
    images: "/logoP.png"
  },
}  

export default page
