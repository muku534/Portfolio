"use client";

import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import About from "@/components/About/page";
import Resume from "@/components/Resume/page"
import Projects from "@/components/Projects/page"
import { Avatar } from '@nextui-org/react';
import Phone from '../PhoneLayout/Page';
import Skills from '../Skills/page';

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
            <main id="Home" className="flex w-full flex-col lg:flex-row  lg:mt-20 lg:px-4 lg:py-20 py-10 lg:mb-10 justify-center items-center ">
                <div className="lg:w-1/2 lg:pr-10 lg:px-32 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="ml-5 pr-5 justify-center items-center mt-16 lg:mt-0"> {/* Add mt-5 for small and medium screens */}
                        <Avatar src="/assets/Profile.jpg" className='mb-5' />
                        <h1 className="text-3xl lg:text-5xl line-clamp-3 font-normal leading-tight lg:leading-snug tracking-tight text-start text-gray-900 dark:text-text-gray-900 mb-8 lg:mb-14">Hello! I&apos;m Mukesh Prajapati </h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-14 justify-center items-center lg:text-start md:text-center">
                    <div className='mb-10 ml-5 justify-center items-center'>
                        <p className="text-3xl lg:ml-10 lg:text-4xl font-normal text-gray-900 tracking-tight mb-4 lg:leading-tight">A Junior React Native Developer based in Surat, India.</p>
                        <p className="text-md lg:ml-10 lg:text-md font-normal text-gray-500 tracking-tight mb-4 lg:leading-relaxed"> Driven by a love for clean code, user-friendly design, and continuous learning.</p>

                        <div className="mt-10 flex flex-row items-center lg:ml-10 lg:items-start md:justify-center">
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
                <Skills />
                <Projects />
            </div>
        </>
    )
}
