import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  metadataBase: "https://www.elitetreatforpets.com",
  author: "Elite Treat For Pets",
  keyword: "Elite Treat For Pets",
  title: "Elite Treat For Pets",
  description: "Elite Treat For Pets",
  appleMobileWebAppTitle: 'Elite Treat For Pets',
  openGraph: {
    title: "Elite Treat For Pets",
    description: "Premium all-natural bully sticks for dogs. Healthy, delicious, and long-lasting.",
    url: "https://www.elitetreatforpets.com",
    siteName: "Elite Treats For Pets",
    images: "/logoP.png",
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
  twitter: {
    card: "summary_large_image",
    title: "@elite_treat",
    images: "/logoP.png"
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
         <link rel="canonical" href="https://www.elitetreatforpets.com" />
        <link rel="icon" href="/icons/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://i.ibb.co/"   />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/logoP.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/logoP.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/logoP.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logoP.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/logoP.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon.ico"
          /> 
      <body className={inter.className} suppressHydrationWarning={true}>{children}
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

