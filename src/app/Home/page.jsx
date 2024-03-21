"use client";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import About from "@/app/About/page";
import Resume from "@/app/Resume/page"
import Projects from "@/app/Projects/page"
import Contact from "@/app/Contact/page"
import downArrow from "../../../public/assets/down-arrow.GIF"

export default function Home() {
    return (
        <>
            <main id="Home" className="flex w-full h-screen justify-center items-center bg-linear-gradient">
                <div className="text-center ">
                    <h1 className="text-lg font-extrabold leading-none tracking-tight lg:pl-10 lg:ml-5 text-blue-700  dark:text-text-blue-700">HEY! I AM</h1>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight lg:pl-24 lg:ml-12 sm:text-lg md:text-6xl lg:text-7xl dark:text-gray-900">MUKESH PRAJAPATI</p>
                    <ScrollLink to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} className="cursor-pointer  inline-flex items-center justify-center mt-4 px-5 ml-8 lg:ml-10 lg:pl-12 py-3 text-base font-medium text-center text-white animate-moveDown ">
                        <div className="">
                            <Image src={downArrow} height={55} width={55} alt="image not found" />
                        </div>
                    </ScrollLink>
                </div>
            </main>
            <div>
                <About />
                <Resume />
                <Projects />
            </div>
            <div className="flex w-full mt-20 p-20 justify-center items-center  bg-gradient-to-r from-indigo-100 to-indigo-100" >
                <div className="text-center">
                    <p className="mt-2 mb-5 text-lg font-extrabold text-gray-900 tracking-tight sm:text-lg md:text-2xl lg:text-4xl dark:text-gray-400">I'm Available for freelancing</p>
                    <h1 className="text-lg font-extrabold leading-none tracking-tight text-blue-700  dark:text-white">A small river named Duden flows by their place and supplies it with the necessary regelialia.</h1>
                    <ScrollLink
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={500} href="#" className="inline-flex items-center justify-center mt-4 px-10 py-3 text-base font-medium text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-800 dark:focus:ring-indigo-700">
                        Hire Me
                    </ScrollLink>
                </div>
            </div>
            <Contact />
        </>
    )
}
