import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <GoogleAnalyticsScript/>
      {/* <Head>
      <meta name="author" content="Elite Treat For Pets" />
          <meta
            name="keywords"
            content="Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks"
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting."
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta
            property="og:description"
            content="Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/browserconfig.xml"
          />
          <meta name="twitter:site" content="@elite_treat" />
          <meta
            name="twitter:image"
            content="https://ibb.co/vv32yhK"
          />
        <meta property="twitter:url" content="https://www.elitetreatforpets.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta property="twitter:description" content="Exclusive selection of top-notch bully sticks for your dog. Shop now for unbeatable prices and free shipping options." />
        <link rel="canonical" href="https://www.elitebullysticks.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link rel="preconnect" href="https://i.ibb.co/"  />
          <link rel="shortcut icon" href="/icons/favicon.ico" />


          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

          <link rel="icon" href="/icons/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />
          <link
            rel="author"
            href="https://lh3.googleusercontent.com/KUg3rbUWiVpV83Sdsy5FcsGeOlpcOgi1o3wLhcZGmGkjDmWCj4Hh4kLEEn_1b4dGsm9hzW7lGGvEsUpH2wpCRk9vlfod3ojbJyG7Rdb3ViBaBric9MwvP6J422dIifjzdT4gMJdKkWB4TIlfouuwVm9lxBgxoXEoGm3yiF7xMtFPNIEOTbbgG-WcV6I6jGhLj4AKoRJS_M2g2m5g132WKRTgWSLO4D4sL05lRPAATNq2h3bD72vFGm_Zk-r53dJGBe7FlHIcTV6rU85XD7wwF5sKtmddNbO9nbKg1L-W5pGcU-Ntvx9ayUmxMmGck0FXhf3saN6Qys_dh_C31jy1StMNeceswq1cH8712PvVmca1uNircDdNUbgKIstcn2Q3Egw1w_P5fJ17H6Ru7ZB8gmgEtivx8enUeE_TknyYz37p71GEGCg9-E2m5bl9YaUNTnODjQ2Lh8xeXYnsnCFkvw-XTlWFi799mxtjQFbPK32oAbV728dCld7eB8oTcvB4msAah-hukPKOr83q4GeiZlUe-w_L9hXzFDXF5d86CQbD7ypeUnlhdMaZi8KXOXrkEUMD_njXWSFEh9Xdcnt87Yvkz7VqRxbDHUz4Nid5oiUFAYtUgV917fg1PHroY1Iy0R3g97GXAxHsVc0PfzKLcKgZvoDVURscN8jlpDvbwGfiJ_4HwRHFRys=w1080-h1440-no"
          />
          <meta property="og:title" content="Elite BullyStick Treats" />
          <meta property="og:url" content="https://www.elitetreatforpets.com" />
          <meta
            property="og:image"
            content="https://ibb.co/vv32yhK"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Elite Treats For Pets"
          />
          <link rel="icon" type="image/x-icon" href="https://www.elitetreatforpets.com/logoP.webp"></link>
          <meta name="next-head-count" content="21" />
          <meta name="ahrefs-site-verification" content="ac93f42ab779a78e58adc89faca4fbd57398b2a72b284eca10d5795532ef1e80"></meta>
      </Head> */}
        
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
    keyword: "Elite Treat For Pets,Bully Stick,Treats,Pets,BullyStick,Pet Treat,Bully sticks,Dog chews,Natural dog treats,Elite bully sticks,Premium dog chews,Best bully sticks for puppies,Long-lasting dog chews natural,Organic bully sticks for dogs,High-quality beef pizzle sticks",
    title:{
      default: "Elite Treat For Pets",
      template: '%s - Elite Treat For Pets'
    },
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
      title: "@PetsEliteTreat",
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