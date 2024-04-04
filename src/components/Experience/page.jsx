"use client";


import React from 'react'

const page = () => {
    return (
        <div className="flex justify-center"  >
            <section className="text-gray-400 body-font lg:ml-5 lg:pl-10 ">
                <h1 className="title-font sm:text-3xl text-3xl mb-1 font-extrabold text-gray-800">Experience</h1>
                <div className="container px-5  mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="mt-10 lg:w-full lg:pl-24 md:w-full">
                            <div className="flex sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-indigo-600 text-lg title-font font-bold mb-3">May 2023 - July 2023</h2>
                                    <h2 className="text-gray-900 text-xl title-font font-bold mb-3">React Native Intern (Blockchaindev)</h2>
                                    <p className="leading-relaxed text-base">• Completed an intensive internship focused on React Native, concurrently deepening expertise in Node.js, MongoDB, and Firebase.
                                        <br /> • Applied acquired knowledge to contribute significantly to project development.</p>
                                    {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                            <hr className="h-px w-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                        <div className=" lg:w-full lg:pl-24 md:w-full">
                            <div className="flex  sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-indigo-600 text-lg title-font font-bold mb-3">Aug 2023 - Jan 2024</h2>
                                    <h2 className="text-gray-900 text-xl title-font font-bold mb-3">Junior React Native Developer (Blockchaindev)</h2>
                                    <p className="leading-relaxed text-base">• Actively engaged in the development of a social media application.
                                        <br />  • Collaborated with a team to design, implement, and maintain features using React Native CLI and Firebase.
                                        <br /> • Contributed innovative solutions to enhance user experience and application performance.
                                        <br /> • Adhered to project timelines and objectives.</p>
                                    {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                            <hr className="h-px w-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default page