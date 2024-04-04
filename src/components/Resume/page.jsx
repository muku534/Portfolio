"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Education from "@/components/Education/page";
import Experience from "@/components/Experience/page";
import Skills from "@/components/Skills/page";

const Page = () => {
    const mainContentRef = useRef(null);
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div id="Resume">
            <main className="flex w-full lg:flex-row flex-col p-5 mt-10 lg:mt-28 lg:mb-10 justify-center items-center ">
                <div className="lg:w-1/2 lg:pr-10 lg:px-32 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="lg:mb-10 lg:ml-5 ">
                        <h1 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight text-gray-900 dark:text-text-gray-900 mb-4">Experiemce with a variety of Projects and industries</h1>
                        <p className="text-md  lg:text-md font-normal text-gray-400 tracking-tight mb-4 leading-relaxed">versatile experience across diverse projects and industries adaptability and valuable Skills to any task.</p>

                        <div className="mt-10 flex flex-row justify-center lg:justify-start items-center lg:items-start">
                            <Link href="#" className="text-gray-100 bg-gray-900 justify-center  inline-flex items-center  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 " role="button">
                                Talk with me
                            </Link>
                            <Link href="#" className="text-gray-700 ml-5 justify-center inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 border border-gray-400 border-solid border-2" role="button">
                                See my work
                            </Link>


                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-14 justify-center items-center">
                    <div className='mb-10 lg:ml-5 justify-center items-center'>

                    </div>
                </div>
            </main>
        </div >
    );
};

export default Page;
