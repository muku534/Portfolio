"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const page = ({ isMobileOrTabletDevice }) => {
    return (
        <footer id="Footer" className={`text-gray-400  body-font ${isMobileOrTabletDevice ? 'mb-16' : ''}`}>
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                    <Image src="/assets/favicon.png" alt="Logo" height={40} width={40} />
                    <span className="ml-3 text-xl text-gray-900 font-bold">Mukesh</span>
                </Link>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link href={"https://facebook.com/"} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                        <FacebookIcon />
                    </Link>
                    <Link href={"https://twitter.com/"} className="ml-5 text-gray-700 hover:text-blue-400 transition-colors duration-300">
                        <TwitterIcon />
                    </Link>
                    <Link href={"https://github.com/muku534"} className="ml-5 text-gray-700 hover:text-gray-800 transition-colors duration-300">
                        <GitHubIcon />
                    </Link>
                    <Link href={"https://www.youtube.com/@ByteOps_0412"} className="ml-5 text-gray-700 hover:text-red-600 transition-colors duration-300">
                        <YouTubeIcon />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default page
