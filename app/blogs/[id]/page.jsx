import BlogDetails from '@/app/blogs/_components/BlogDetails'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <BlogDetails params={params}/>
      <br />
      <hr />
      <hr />
    </div>
  )
}

export async function generateMetadata() {
  return{
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  title: "Elite Treat For Pets - Blogs",
  description: "Explore our Elite Bully Sticks blog for expert insights into dog care, nutrition tips, and the benefits of all-natural bully sticks for your canine's health and happiness.",
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
      title: "@PetsEliteTreat",
      images: "https://www.elitetreatforpets.com/logoP.png"
    },
  }
}  

export default page
