"use client";

import { useEffect, useState } from 'react'
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/page'
import BottomNavigation from '@/components/BottomNavigation/page'
import Footer from '@/components/Footer/page'
import Head from 'next/head';
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export const getServerSideProps = async ({ req }) => {
//   const userAgent = req.headers['user-agent'] || ''; // Retrieve user-agent from request headers
//   return { props: { userAgent } };
// };

export default function RootLayout({ children }) {
  const [isMobileOrTabletDevice, setIsMobileOrTabletDevice] = useState(false);

  // Function to check if the user is on a mobile or tablet device
  const checkDeviceType = () => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsMobileOrTabletDevice(
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      );
    }
  };

  useEffect(() => {
    checkDeviceType();
  }, []);


  return (
    <html lang="en">
      <Head>
        <Link rel='icon' href='/assets/favicon.png' />
      </Head>
      <body className={inter.className}>
        {isMobileOrTabletDevice ? null : <Navbar />} {/* Render Navbar only if not on a mobile or tablet device */}
        {children}
        {isMobileOrTabletDevice ? <BottomNavigation /> : null} {/* Render BottomNavigation only if on a mobile or tablet device */}
        <Footer />
      </body>
    </html>
  )
}
