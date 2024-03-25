"use client";

import Link from "next/link";
import Image from "next/image";
import Profile from "../../../public/assets/Profile.jpg"
import { FaDownload } from "react-icons/fa";

const page = () => {

    return (
        <div id="About">
            <section className="text-gray-400 body-font mt-40 ">
                <div className="container mx-auto flex lg:px-5  md:flex-row flex-col items-center justify-center" >
                    {/* <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 lg:ml-24 lg:pl-24 ">
                        <!-- Add the 'hidden' class for small screens -->
                        <div className="custom-image overflow-hidden object-cover object-center rounded lg:block hidden">
                            <Image alt="hero" src={Profile} width={600} height={600} />
                        </div>
                    </div> */}
                    <div className="lg:flex-grow lg:pl-24  lg:mx-20  md:pt-5 flex flex-col md:text-left items-center text-center items-center justify-center">
                        <div className="mb-4">
                            <h1 className="title-font sm:text-5xl text-3xl mb-1 font-extrabold text-gray-800">About Me</h1>
                            <hr className="w-48 h-1 mx-auto my-2 bg-indigo-300 border-0 rounded md:my-1 dark:bg-indigo-300"></hr>
                        </div>
                        <div className="lg:pl-24 lg:pr-24 pt-5 md:pl-4 md:pr-4">
                            <p className="mb-6 leading-relaxed text-gray-600">Hi there! I'm Mukesh Prajapati, a Junior React Native Developer based in Surat, India. I am passionate about software development and am currently pursuing a Master's in Computer Applications with a focus on app development.</p>
                            <p className="mb-6 leading-relaxed text-gray-600">My journey into the world of software began during my Bachelor's at Veer Narmad South Gujarat University, where I honed my skills in web and cross-platform app development.</p>
                            <p className="mb-6 leading-relaxed text-gray-600">During an intensive internship at Blockchaindev Surat, Gujarat, I dived deep into React Native, Node.js, MongoDB, and Firebase, contributing significantly to projects like CallVerse a privacy-focused chat app.</p>
                            <p className="mb-6 leading-relaxed text-gray-600">As a Junior React Native Developer, I collaborated with a dynamic team to bring ideas to life, ensuring seamless user experiences in every project.</p>
                            <p className="mb-6 leading-relaxed text-gray-600">With expertise in HTML, CSS, JavaScript, React.js, React Native, Node.js, MongoDB, and Rest APIs, I'm ready to tackle any challenge head-on.</p>
                            <p className="mb-6 leading-relaxed text-gray-600">Let's connect and explore the endless possibilities together!</p>


                            <div className="flex justify-center">
                                {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Download Resume </button> */}
                                <a
                                    href="/assets/MukeshPrajapati_Resume.pdf"
                                    download="MukeshPrajapati_Resume.pdf"
                                    className="inline-flex items-center  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    <FaDownload className="mr-2" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page
