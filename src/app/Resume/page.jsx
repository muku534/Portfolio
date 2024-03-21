"use client";

import { Link as ScrollLink } from "react-scroll";
import { useRef, useState } from "react";

import Image from "next/image";
import Education from "@/components/Education/page";
import Experience from "@/components/Experience/page";
import Skills from "@/components/Skills/page";

const Page = () => {
    const mainContentRef = useRef(null);
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div id="Resume">
            <section className="text-gray-400 body-font mt-40 ">
                <div className="lg:flex-grow lg:pl-24 lg:mx-20 md:pt-5 flex flex-col md:text-left items-center text-center items-center justify-center">
                    <div className="mb-4">
                        <h1 className="title-font sm:text-5xl text-3xl font-extrabold text-gray-800">Qualifications and Experience
                        </h1>
                        <hr className="w-48 h-1 mx-auto my-2 bg-indigo-300 border-0 rounded md:my-1 dark:bg-indigo-300"></hr>
                    </div>
                    <p className="text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Discover my educational background and professional journey, highlighting my skills and expertise.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center h-screen lg:mt-10 md:mt-24 mt-10 ml-24 md:ml-10 lg:ml-24 lg:pl-24">
                    {/* Sidebar */}
                    <div className="hidden lg:flex w-40 lg:ml-12">
                        <div className="text-lg py-10 font-medium text-center text-gray-500 dark:text-gray-400">
                            <ul className="flex-wrap -mb-px">
                                <li className="mb-2">
                                    <ScrollLink
                                        to="Education"
                                        spy={true}
                                        containerId="mainContent"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        activeClass="active"
                                        onSetActive={() => setActiveLink("Education")}
                                        className="inline-block p-4 border-b-2 cursor-pointer border-transparent rounded-t-lg text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-700"
                                    >
                                        Education
                                    </ScrollLink>
                                </li>
                                <li className="mr-2">
                                    <ScrollLink to="Experience"
                                        spy={true}
                                        containerId="mainContent"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        activeClass="active"
                                        onSetActive={() => setActiveLink("Experience")}
                                        className="inline-block p-4 border-b-2 cursor-pointer border-transparent rounded-t-lg text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-700"
                                        aria-current="page"
                                    >
                                        Experience
                                    </ScrollLink>
                                </li>
                                <li className="mr-2">
                                    <ScrollLink to="Skills"
                                        spy={true}
                                        containerId="mainContent"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        activeClass="active"
                                        onSetActive={() => setActiveLink("Skills")}
                                        className="inline-block p-4 border-b-2 cursor-pointer border-transparent rounded-t-lg  text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-700"
                                    >
                                        Skills
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div ref={mainContentRef} id="mainContent" className="w-full md:w-100 overflow-y-scroll hide-scrollbar mt-4 ">
                        <div id="Education">
                            <Education />
                        </div>
                        <div id="Experience">
                            <Experience />
                        </div>
                        <div id="Skills">
                            <Skills />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Page;
