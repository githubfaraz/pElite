import Footer from '@/components/Footer'
import MainNavbar from '@/components/MainNavbar'
import Navb from '@/components/Navb'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from '@/components/ContactForm'
// Note:remember to remove the navbar
const Page = () => {
    
  return (
    <div>
        <Navb linkActive='4' />
        
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
                <div className='absolute md:top-1/4 top-4 text-center md:mt-64 mt-16 md:text-6xl text-4xl font-semibold text-white' style={{fontFamily: "playfair_display"}}>
                    Contact Us
                    <h1 className='md:text-xl text-sm font-light text-center md:w-5/6 w-full mx-auto' style={{fontFamily: 'roboto'}}>Ask about our products,our processes,implementation or anything else.We would be interested to hear from you.</h1>
                </div>
            </div>
            <div className=' w-full'>
                <ContactForm />
            </div>
            

        </div>
{/* MainSection */}
        <hr />
        <Footer />
    </div>
  )
}

export const metadata = {
    title: "Get in Touch with Elite Treat For Pets - Contact Us Today",
    description: "Have questions about our bully sticks or need assistance with your order? Contact Elite Bully Sticks for dedicated support and quick responses to all your inquiries.",
    keyword: "Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks",
    title:{
      default: "Elite Treat For Pets",
      template: '%s - Elite Treat For Pets'
    },
    appleMobileWebAppTitle: 'Elite Treat For Pets',
    openGraph: {
      title: "Elite Treat For Pets",
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
        canonical: `https://www.elitetreatforpets.com`,
        languages: {
          "en-US": "/",
        },
      },
    twitter: {
      card: "summary_large_image",
      title: "@PetsEliteTreat",
      images: "/logoP.png"
    },
}


export default Page
