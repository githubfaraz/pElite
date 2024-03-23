import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elitetreatforpets.com/#organization",
        "name": "Elite Treat For Pets",
        "sameAs": ["https://www.facebook.com/PetTreat"]
      },
      {
        "@type": "WebSite",
        "@id": "https://elitetreatforpets.com/#website",
        "url": "https://elitetreatforpets.com",
        "name": "Elite Treat For Pets",
        "publisher": {
          "@id": "https://elitetreatforpets.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://elitetreatforpets.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://elitetreatforpets.com",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://elitetreatforpets.com/",
              "name": "Elite Treat For Pets"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://elitetreatforpets.com/#webpage",
        "url": "https://elitetreatforpets.com/",
        "name": "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting. | Elite Treat For Pets",
        "isPartOf": {
          "@id": "https://elitetreatforpets.com/#website"
        },
        "inLanguage": "en-US",
        "breadcrumb": {
          "@id": "https://elitetreatforpets.com/#breadcrumb"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <GoogleAnalyticsScript/>
      <link rel="icon" type="image/svg+xml" href="/logoP.png"></link>
    <link rel='dns-prefetch' href='//www.google.com' />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel="alternate" type="application/rss+xml" title="Elite Treat For Pets &raquo; Feed" href="https://rss.app/feeds/SRjwJEauF0ZESkkJ.xml" />
    <Script
          id="my-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
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
};


export async function generateMetadata() {
  return{
    metadataBase: new URL("https://www.elitetreatforpets.com"),
    author: "Elite Treat For Pets",
    keyword: "Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality,beef pizzle sticks,bully stick,what is a bully stick,bully stick holder,what is a bully stick made of,bully stick holder for dogs,bully stick for dogs,dog swallowed bully stick,bully stick made of,what is bully stick made of,what's a bully stick,bully stick ingredients,bully stick calories",
    title: "Elite Treat For Pets",
    description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
    appleMobileWebAppTitle: 'Elite Treat For Pets',
    openGraph: {
      title: "Elite Treat For Pets",
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
      title: "Elite Treat For Pets",
      images: "/logoP.png"
    },
}}

//<rssapp-wall id="SRjwJEauF0ZESkkJ"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script>
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
