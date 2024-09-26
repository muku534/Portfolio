"use client";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import Phone from "../PhoneLayout/Page";
import Link from "next/link";

const Navbar = ({ isMobileOrTabletDevice, scrolled }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState("");
    const [showPhone, setShowPhone] = useState(false);

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

    // Updated navItems array with "Contact"
    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    // Function to toggle the phone modal
    const toggleShowPhone = () => {
        setShowPhone(prevState => !prevState);
    };

    return (
        <>
            <nav className={`fixed w-full z-20 top-0 left-0 transition-all ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                <div className="max-w-screen-lg flex items-center p-4 lg:ml-32">
                    <ScrollLink
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="flex cursor-pointer"
                    >
                        <Image src="/assets/favicon.png" width={36} height={38} className="h-8 mr-8" alt="Logo" />
                    </ScrollLink>

                    <div className="flex-grow">
                        {isMobileOrTabletDevice && (
                            <ul className="flex flex-col font-medium p-4 md:p-0 lg:border-0 border border-gray-100 rounded-lg items-center bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                                <li>
                                    <ScrollLink
                                        to="Home"
                                        spy={true}
                                        smooth={true}
                                        duration={500} // Animation duration in milliseconds
                                        offset={isMobileOrTabletDevice && -220}
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
                                    <button
                                        onClick={toggleShowPhone}
                                        className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Greeting and Resume Button */}
                    <div className="flex items-center ml-auto">
                        <p className="text-gray-900 text-sm font-bold lg:text-md">
                            Hey {greeting}, {currentTime.toLocaleTimeString()}
                        </p>
                        <Link href="/assets/Mukesh_Resume.pdf" download className="ml-8 text-gray-100 bg-gray-900 inline-flex items-center rounded-lg text-sm px-5 py-2.5">
                            Resume
                        </Link>
                    </div>
                </div>
            </nav>

            {showPhone && <Phone togglePhone={() => setShowPhone(!showPhone)} />}
        </>
    );
};

export default Navbar;
