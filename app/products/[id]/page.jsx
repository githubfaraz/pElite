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

export const metadata =  {
  title: "Products - High-Quality Dog Treats | Elite Treat For Pets",
  keyword: "Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks",
  description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
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

