// 'use client'
import React from 'react'
import ProductDetails from '@/components/ProductDetails/ProductDetails'


export default function Page({ params }) {

  return (
    <div>
        <ProductDetails params={params} />
    </div>
  )
}

export async function generateMetadata (){
  return{
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets - Our Products",
  description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
  appleMobileWebAppTitle: 'Elite Treat For Pets - Our Products',
  openGraph: {
    title: "Elite Treat For Pets - Our Products",
    description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
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
    title: "@PetsEliteTreat",
    images: "https://www.elitetreatforpets.com/logoP.png"
  }
  }
}

