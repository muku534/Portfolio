"use client";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({ isMobileOrTabletDevice, scrolled }) => {

    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Check if the user has scrolled more than 20 pixels from the top
    //         setScrolled(window.scrollY > 250);
    //     };

    //     // Add event listener for the "scroll" event
    //     window.addEventListener("scroll", handleScroll);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);

            const currentHour = now.getHours();
            let greeting;

            if (currentHour >= 5 && currentHour < 12) {
                greeting = "Good morning";
            } else if (currentHour >= 12 && currentHour < 17) {
                greeting = "Good afternoon";
            } else {
                greeting = "Good evening";
            }

            setGreeting(greeting);
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);


    return (
        <nav className={`hidden lg:flex fixed w-full z-20 top-0 left-0 transition-all ${scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}>
            <div className="max-w-screen-lg flex flex-wrap lg:ml-32 p-4">
                <div className="max-w-screen-xl flex flex-wrap justify-between p-1">
                    <ScrollLink
                        spy={true}
                        smooth={true}
                        duration={500} className="flex  cursor-pointer">
                        <Image src="/assets/favicon.png" width={35} height={35} className="h-8 mr-8" alt="Flowbite Logo" />

                    </ScrollLink>
                </div>

                <div
                    className="items-center justify-between w-full md:flex md:w-auto md:order-1"
                >
                    {isMobileOrTabletDevice && (
                        <ul className="flex flex-col font-medium p-4 md:p-0 lg:border-0 border border-gray-100 rounded-lg items-center bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <ScrollLink
                                    to="Home"
                                    spy={true}
                                    smooth={true}
                                    duration={500} // Animation duration in milliseconds
                                    className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                    activeclassName="active"
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={isMobileOrTabletDevice && -70}
                                    activeClass="active"
                                    duration={500} // Animation duration in milliseconds
                                    className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </ScrollLink>
                            </li>

                            <li>
                                <ScrollLink
                                    to="Projects"
                                    spy={true}
                                    smooth={true}
                                    offset={isMobileOrTabletDevice && -70}
                                    duration={500}
                                    className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                >
                                    Projects
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    // offset={isMobileOrTabletDevice && -70}
                                    className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </ScrollLink>
                            </li>

                            {/* <li>
                            <Link
                                href="/"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                            >
                                Blog

                            </Link>
                        </li> */}
                        </ul>
                    )}
                    <div className="items-center ml-4">
                        <p className='text-gray-900 text-sm font-bold lg:text-md'>
                            Hey {greeting}, {currentTime.toLocaleTimeString()}
                        </p>
                    </div>
                    <Link href="#" className="ml-4 text-gray-100 bg-gray-900 justify-center  inline-flex items-center  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 " role="button">
                        Talk with me
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

