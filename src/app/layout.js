import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { NextSeo } from "next-seo";
// import { DefaultSeo } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "МЕДИРЕН",
  description: "Mediren - МЕДИРЕН",
  url: "https://mediren.netlify.app",
  image: "https://mediren.netlify.app/mediren-logo.svg",
  content: "МЕДИРЕН",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EeNrX_Vhd4bMEJnslGv6D89shImpFKT1eTXHeeqUF8I"
        />
        <link rel="canonical" href="https://www.mediren.uz/" />
        <meta property="og:url" content="https://mediren.uz/" />
        <meta property="og:title" content="МЕДИРЕН" />
        <meta property="og:description" content="МЕДИРЕН" />
        <meta
          property="og:image"
          content="https://mediren.netlify.app/mediren-logo.svg"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image"
          content="https://mediren.netlify.app/mediren.png"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="800" />
        <meta
          property="og:image"
          content="https://mediren.netlify.app/mediren.png"
        />
        <meta
          property="og:image"
          content="https://mediren.netlify.app/mediren.png"
        />
        <meta property="og:site_name" content="МЕДИРЕН" />
        {/* Telegram */}
        <meta property="telegram:channel" content="@SpringPharmaceutic" />
        {/*Instagram*/}
        <meta property="instagram:account" content="@springpharmaceutic/" />
        {/*Facebook*/}
        <meta
          property="article:publisher"
          content="https://www.facebook.com/spring.pharm.3/"
        />
        {/*Email*/}
        <meta property="email" content="spring_pharmaceutic@gmail.com" />
      </head>
      <body className={inter.className}>
        {/*<DefaultSeo*/}
        {/*    title="Invirep"*/}
        {/*    description="Invirep"*/}
        {/*    openGraph={{*/}
        {/*        type: 'website',*/}
        {/*        url: 'https://invirep.vercel.app',*/}
        {/*        site_name: 'Invirep',*/}
        {/*    }}*/}
        {/*/>*/}
        {children}
      </body>
    </html>
  );
}
