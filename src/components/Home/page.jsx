"use client";

import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import About from "@/components/About/page";
import Resume from "@/components/Resume/page"
import Projects from "@/components/Projects/page"
import Contact from "@/components/Contact/page"
import downArrow from "../../../public/assets/down-arrow.gif";
import banner from "../../../public/assets/banner2__1_-removebg.png";
import Typewriter from 'typewriter-effect'; // Importing from 'typewriter-effect'
import { Avatar } from '@nextui-org/react';
import Phone from '../PhoneLayout/Page';

export default function Home() {
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setIsTyping(true);
    }, []);

    const [showPhone, setShowPhone] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    const scrollToPortfolio = () => {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth', offset: -80 });

        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    const toggleShowPhone = () => {
        setShowPhone(prevState => !prevState);
    };

    return (
        <>
            <main id="Home" className="flex w-full flex-col lg:flex-row  lg:mt-60 lg:mb-20 justify-center items-center ">
                <div className="lg:w-1/2 lg:pr-10 lg:px-32 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="lg:mb-10 ml-5 pr-5 justify-center items-center mt-16 lg:mt-0"> {/* Add mt-5 for small and medium screens */}
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className='mb-5' />
                        <h1 className="text-3xl lg:text-5xl font-normal leading-tight tracking-tight text-start text-gray-900 dark:text-text-gray-900 mb-8 lg:mb-14">Hello! I&apos;m Mukesh Prajapati </h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-14 justify-center items-center">
                    <div className='mb-10 ml-5 justify-center items-center'>
                        <p className="text-3xl lg:ml-10 lg:text-4xl font-normal text-gray-900 tracking-tight mb-4 leading-relaxed">A Junior React Native Developer based in Surat, India.</p>
                        <p className="text-md lg:ml-10 lg:text-md font-normal text-gray-400 tracking-tight mb-4 leading-relaxed">Passionate about software development.</p>

                        <div className="mt-10 flex flex-row  items-center lg:ml-10  lg:items-start">
                            <button href="#" onClick={() => setShowPhone(!showPhone)} className="text-gray-100 bg-gray-900 justify-center  inline-flex items-center  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 " role="button">
                                Talk with me
                            </button>
                            <ScrollLink to="About" // ID of the project section
                                smooth={true} // Enable smooth scrolling
                                duration={500}
                                offset={-30}
                                role="button"
                                className="text-gray-700 ml-5 justify-center inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 border border-gray-400 border-solid border-2"
                            >
                                Explore Portfolio
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </main>
            {showPhone && <Phone togglePhone={() => setShowPhone(!showPhone)} />}
            <div>
                <About />
                <Resume togglePhone={() => setShowPhone(!showPhone)} />
                <Projects />
            </div>
            {/* <div className="flex w-full  p-10 justify-center items-center" >
                <div className="text-center">
                    <p className=" mb-5 text-sm font-bold text-gray-900 tracking-tight sm:text-sm md:text-sm lg:text-sm dark:text-gray-400">Have a project?</p>
                    <p className="mt-2 mb-5 text-lg font-medium text-gray-900 tracking-tight sm:text-lg md:text-2xl lg:text-4xl dark:text-gray-400">Let's talk with me</p>
                    <Link href="#" className="mt-2 mb-5 text-gray-100 bg-gray-900 justify-center  inline-flex items-center  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 " role="button">
                        Talk with me
                    </Link>
                    <p className='text-gray-500 text-sm lg:text-md'>My local time <span className='text-gray-900 font-bold lg:ml-4'>{currentTime.toLocaleTimeString()}</span> </p>

                </div>
            </div> */}
            {/* <Contact /> */}
        </>
    )
}
