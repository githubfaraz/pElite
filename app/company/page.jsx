import React from 'react'
import Image from 'next/image';
import {Navb} from '@/app/components';

const Page = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <Navb />

      <Image
        src='/construction.svg'
        alt='company_in_progress'
        width={400}
        height={400}
        className='mx-auto my-10'
        sizes="(max-width: 480px) 40vw,(max-width: 1200px) 30vw,23vw"
      />
      <p className='text-center  text-5xl font-bold'>Under Maintenance</p>
      <p className='text-center my-3'>Our website is under construction we are working <span className='inline sm:block'>very hard to give you the best experience with this one</span></p>
      <h1 className='text-center text-2xl font-extralight'>Notify me when it&apos;s ready</h1>
      <form className='mx-auto flex flex-col sm:flex-row sm:space-x-4 space-y-2'>
        <input type="text" placeholder='Email' className='bg-slate-300 rounded-md px-2'/>
        <button className='text-white bg-burgundy px-3 sm:px-6 py-3 rounded-md'>NOTIFY ME</button>
      </form>
      <br />
      <hr />
      <br />
    </div>
  )
}

export async function generateMetadata() {
  return{
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets - Company",
  appleMobileWebAppTitle: 'Elite Treat For Pets',
  openGraph: {
    title: "Elite Treat For Pets - Company",
    description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treats For Pets",
    images: "https://www.elitetreatforpets.com/logoP.webp",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
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
    title: "@PetsEliteTreat",
    images: "https://www.elitetreatforpets.com/logoP.png"
  }
}
}


export default Page
