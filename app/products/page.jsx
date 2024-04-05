// 'use client'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Navb from '@/components/Navb'
import ProductFilters from '@/components/ProductFilters/ProductFilters'


async function getData() {
    const res = await fetch('https://pets-elite-backend-wvj4.vercel.app/api/bully-sticks')
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
        <div className='w-full md:w-full lg:w-screen' style={{ position: 'relative', display: 'inline-block' }} >
        <Image
          src='/hero-2.png'
          alt='dog-chewing-bully-stick'
          height={100}
          width={1500}
          className='object-cover h-96 filter brightness-50'
          style={{ zIndex: 1, height: '30rem'}}
        />
        <div className='absolute top-0 left-0 ml-0 mt-0 w-full'>
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

export async function generateMetadata() {
  return{
  title: "Elite Treat For Pets | Our Products",
  appleMobileWebAppTitle: 'Elite Treat For Pets - Our Products',
  openGraph: {
    title: "Elite Treat For Pets - Our Products",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treats For Pets",
    images: "https://www.elitetreatforpets.com/logoP.webp",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `https://www.elitetreatforpets.com/`,
    languages: {
      "en-US": "/",
    },
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
  twitter: {
    card: "summary_large_image",
    title: "Elite Treat For Pets - Our Products",
    images: "https://www.elitetreatforpets.com/logoP.png"
  }
  }

}


