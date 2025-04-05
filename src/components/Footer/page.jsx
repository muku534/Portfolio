"use client";

import Link from "next/link";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const page = ({ isMobileOrTabletDevice }) => {
    return (
        <footer id="Footer" className={`text-gray-400  body-font ${isMobileOrTabletDevice ? 'mb-16' : ''}`} style={{ backgroundColor: '#F5F5F0' }}>
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                    <Image src="/assets/favicon.png" alt="Logo" height={40} width={40} />
                    <span className="ml-3 text-xl text-gray-900 font-bold">Mukesh Prajapati</span>
                </Link>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
                    {/* Fiverr with gray default and green hover */}
                    <Link href="https://www.fiverr.com/s/0b11YXE" target="_blank" rel="noopener noreferrer" className="ml-5 group">
                        <div className="p-1 rounded-full bg-gray-700 transition-colors duration-300 group-hover:bg-[#1DBF73]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 50 50" fill="white">
                                <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z" />
                            </svg>
                        </div>
                    </Link>

                    {/* Upwork with gray default and green hover */}
                    <Link href="https://www.upwork.com/freelancers/~01f6f3520464637b36?mp_source=share" target="_blank" rel="noopener noreferrer" className="ml-5 group">
                        <div className="p-1 rounded-full bg-gray-700 transition-colors duration-300 group-hover:bg-[#6FDA44]">
                            <Image
                                src="/logo/upwork.png"
                                alt="Upwork"
                                width={15}
                                height={15}
                                className="invert group-hover:invert-0 transition duration-300"
                            />
                        </div>
                    </Link>

                    <Link href={"https://www.linkedin.com/in/mukesh-prajapati-a6a670235/"} className="ml-5 text-gray-700 hover:text-blue-400 transition-colors duration-300">
                        <LinkedInIcon />
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
