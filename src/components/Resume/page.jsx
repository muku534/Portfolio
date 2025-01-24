"use client";

import { useRef, useState } from "react";
// import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Education from "@/components/Education/page";
import Experience from "@/components/Experience/page";
import Skills from "@/components/Skills/page";

const Page = ({ togglePhone }) => {
    const mainContentRef = useRef(null);
    const [activeLink, setActiveLink] = useState(null);


    // Example usage:
    const handleClick = () => {
        // Call the togglePhone function passed down as prop
        togglePhone();
    };

    return (
        <div id="Resume">
            <main className="flex w-full lg:flex-row flex-col p-5 px-4 py-16 mt-10 lg:mt-16 lg:mb-10 justify-center items-center">
                <div className="lg:w-2/2 lg:pr-10 lg:px-32 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="lg:mb-10 lg:ml-5 text-center">
                        <h1 className="text-2xl lg:text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-text-gray-900 mb-4">Extensive Experience Across Diverse Projects and Industries</h1>
                        <p className="text-md lg:text-md font-normal text-gray-500 tracking-tight mb-4 leading-relaxed">A diverse background with hands-on experience in a range of projects, spanning multiple industries. Proven ability to adapt quickly and bring valuable skills to tackle challenges across any domain.</p>

                        <div className="mt-10 flex flex-row justify-center items-center lg:items-start">
                            <button href="#" onClick={handleClick} className="text-gray-100 bg-gray-900 justify-center  inline-flex items-center  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 " role="button">
                                Talk with me
                            </button>
                            <ScrollLink
                                to="Projects" // ID of the project section
                                smooth={true} // Enable smooth scrolling
                                duration={500}
                                offset={-30} // Duration of the scroll animation
                                className="text-gray-700 ml-5 justify-center inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 border border-gray-400 border-solid border-2"
                                role="button"
                            >
                                View Projects
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full lg:w-1/2 lg:px-14 justify-center items-center">
                    <div className='mb-10 lg:ml-5 justify-center items-center'>

                    </div>
                </div> */}
            </main>
        </div>
    );
};

export default Page;
