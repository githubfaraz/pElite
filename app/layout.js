import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import {Footer} from '@/app/components'
// import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL("https://www.elitetreatforpets.com"),
  author: "Elite Treat For Pets",
  keywords: "Elite Treat For Pets,Pets Elite,Treat For Pets,Elite Treats, Treat Pets,Pets Treat,Pets Elite Treat,Bully Stick,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks",
  title: "Elite Treat For Pets",
  description: "Elite Treat for Pets is a manufacturing company that takes pride in sustainably sourcing the highest-quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States.",
  appleMobileWebAppTitle: 'Elite Treat For Pets',
  openGraph: {
    title: "Elite Treat For Pets",
    description: "At Elite Treat for Pets, we manufacture premium-quality Bully Sticks. Sourced from 100% beef, our all-natural, long-lasting chews are designed to promote your dog's dental health.",
    keywords: "Elite Treat For Pets,Pets Elite,Treat For Pets,Elite Treats, Treat Pets,Pets Treat,Pets Elite Treat,Bully Stick,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treat For Pets",
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
    site: "https://twitter.com/PetsEliteTreat",
    card: "summary_large_image",
    title: "Elite Treat For Pets",
    images: "/logoP.png"
  },
}


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
        <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57NWNHT8');`,
          }}/>
          
      <body className={roboto.className}>
      {children}
      <Script 
          strategy="lazyOnload"
          src="https://embed.tawk.to/65dc7ab79131ed19d971b513/1hnijunq3"
          charset="UTF-8"
          crossorigin="*"
        />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57NWNHT8"
          height="0" width="0" style={{
            display:"none",
            visibility:"hidden"
          }}></iframe>
        </noscript>
      <Footer/>
      </body>
    </html>
  );
};



