import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elite Treats Bully Sticks",
  description: "Elite Treats Bully Sticks",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
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

