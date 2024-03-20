import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <GoogleAnalyticsScript/>
      <link rel="icon" type="image/svg+xml" href="/Plogo.png"></link>
        
      <body className={inter.className}>{children}
      <Script 
          strategy="lazyOnload"
          src="https://embed.tawk.to/65dc7ab79131ed19d971b513/1hnijunq3"
          charset="UTF-8"
          crossorigin="*"
        />
        
      </body>
    </html>
  );
}

export async function generateMetadata() {
  return{
    metadataBase: new URL("https://www.elitetreatforpets.com"),
    author: "Elite Treat For Pets",
    keyword: "Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality,beef pizzle sticks,bully stick,what is a bully stick,bully stick holder,what is a bully stick made of,bully stick holder for dogs,bully stick for dogs,dog swallowed bully stick,bully stick made of,what is bully stick made of,what's a bully stick,bully stick ingredients,bully stick calories",
    title: "Elite Treat For Pets - Premium Natural Dog Chews and Treats",
    description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
    appleMobileWebAppTitle: 'Elite Treat For Pets',
    openGraph: {
      title: "Elite Treat For Pets - Premium Natural Dog Chews and Treats",
      description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
      url: "https://www.elitetreatforpets.com",
      siteName: "Elite Treats For Pets",
      images: "https://www.elitetreatforpets.com/favicon.ico",
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
      title: "Elite Treat For Pets - Premium Natural Dog Chews and Treats",
      images: "/logoP.png"
    },
}}


// export const metadata = {
//   metadataBase: "https://www.elitetreatforpets.com",
//   author: "Elite Treat For Pets",
//   keyword: "Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks",
//   title:{
//     default: "Elite Treat For Pets",
//     template: '%s - Elite Treat For Pets'
//   },
//   description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
//   appleMobileWebAppTitle: 'Elite Treat For Pets',
//   openGraph: {
//     title: "Elite Treat For Pets",
//     description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
//     url: "https://www.elitetreatforpets.com",
//     siteName: "Elite Treats For Pets",
//     images: "https://www.elitetreatforpets.com/logoP.webp",
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "@PetsEliteTreat",
//     images: "/logoP.png"
//   },
// };