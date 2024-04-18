import {Navb} from '@/app/components'
import Image from 'next/image'
import React from 'react'
import ContactForm from '@/app/contact/_components/ContactForm'

// Note:remember to remove the navbar
const Page = () => {
  return (
    <div >
      <div className='w-full'>
        <Navb linkActive='5' />
      </div>
        
        {/* MainSection */}
        <div className='flex lg:flex-row flex-col lg:space-x-8 space-y-10 lg:my-24 mb-6 lg:mx-10 mx-5 h-full'>
            <div className='relative inline-block'>
                <Image
                    src='/production.jpg'
                    height={800}
                    width={1250}
                    alt='dog-chewing-bully-stick'
                    className='rounded-2xl brightness-50  h-full w-full'
                    style={{ zIndex: 1}}
                />
                <h1 className='absolute md:top-1/4 top-4 text-center md:mt-64 mt-16 md:text-6xl text-4xl font-semibold text-white' style={{fontFamily: "playfair_display"}}>
                    Contact Us
                    <h1 className='md:text-xl text-sm font-light text-center md:w-5/6 w-full mx-auto font-serif' >Ask about our products,our processes,implementation or anything else.We would be interested to hear from you.</h1>
                </h1>
            </div>
            <div className=' w-full'>
                <ContactForm />
            </div>
        </div>
        <hr />
    </div>
  )
}


export async function generateMetadata(){
  return {
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets | Contact",
  appleMobileWebAppTitle: 'Elite Treat For Pets | Contact',
  description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
  openGraph: {
    title: "Elite Treat For Pets | Contact",
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
    title: "Elite Treat For Pets | Contact",
    images: "https://www.elitetreatforpets.com/logoP.png"
  }
}
}


export default Page
