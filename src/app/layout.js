"use client";

import { useEffect, useState } from 'react'
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/page'
import Footer from '@/components/Footer/page'
import Head from 'next/head';
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";
import { siteMetadata } from './SitMetaData';
import BottomNavigator from '@/components/BottomNavigation/page';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isMobileOrTabletDevice, setIsMobileOrTabletDevice] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 20 pixels from the top
      setScrolled(window.scrollY > 100);
    };

    // Add event listener for the "scroll" event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    window.addEventListener('resize', checkDeviceType); // Listen for resize events
    return () => {
      window.removeEventListener('resize', checkDeviceType); // Cleanup the event listener
    };
  }, []);



  return (
    <html lang="en">
      <head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </head>
      <NextUIProvider>
        <body className={inter.className}>
          <Navbar scrolled={scrolled} isMobileOrTabletDevice={!isMobileOrTabletDevice} />
          {children}
          {isMobileOrTabletDevice && <BottomNavigator />}
          <Footer isMobileOrTabletDevice={isMobileOrTabletDevice} />
        </body>
      </NextUIProvider>
    </html>
  )
}
