// 'use client'
import Image from 'next/image'
import {Navb} from '@/app/components'
import ProductFilters from '@/app/products/_components/ProductFilters'
  
  export default  function Page  ()  {
    return (
    <div>
        <div className='w-full md:w-full lg:w-full' style={{ position: 'relative', display: 'inline-block' }} >
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
        <h1 className='absolute lg:top-1/4 top-40 lg:left-96 md:left-48 left-14 lg:ml-24 text-center lg:mt-12  md:text-6xl text-4xl font-semibold text-orange-600' style={{fontFamily: 'playfair_display'}}>
          Our Products
        </h1>
    </div>
        {/* <div className='flex sm:flex-row sm:space-x-4 flex-col space-y-3'> */}
            <ProductFilters/>
        {/* </div> */}
        <br />
        <hr />
    </div>
  )
}

export async function generateMetadata(){
  return {
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets | Our Products",
  appleMobileWebAppTitle: 'Elite Treat For Pets | Our Products',
  description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
  openGraph: {
    title: "Elite Treat For Pets | Our Products",
    description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treats For Pets",
    images: "https://www.elitetreatforpets.com/logoP.png",
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
    title: "Elite Treat For Pets | Our Products",
    images: "https://www.elitetreatforpets.com/logoP.png"
  }
}
}


