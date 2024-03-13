import BlogDetails from '@/components/BlogDetails/BlogDetails'
import Footer from '@/components/Footer'
import Navb from '@/components/Navb'
import Image from 'next/image'
import React from 'react'

const page = ({params}) => {

  
  
  return (
    <div>
      <BlogDetails params={params}/>
      <br />
      <hr />
      <hr />
      <Footer />
    </div>
  )
}

export const metadata = {
  title: "Blogs - Elite Treat For Pets Insights",
  description: "Explore our Elite Bully Sticks blog for expert insights into dog care, nutrition tips, and the benefits of all-natural bully sticks for your canine's health and happiness.",
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
    alternates: {
      canonical: `https://www.elitetreatforpets.com`,
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
      title: "@PetsEliteTreat",
      images: "/logoP.png"
    },
}  

export default page
