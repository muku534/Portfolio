"use client";

import Image from "next/image";
const page = () => {
    return (
        <div className="flex justify-center" >
            <section className="text-gray-400 body-font lg:ml-5 lg:pl-5 md:pl-5 ">
                <h1 className="title-font  sm:text-3xl text-xl font-bold text-gray-800">Education
                </h1>
                <div className="container py-2 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-full lg:pl-20 md:w-full">
                            <div className="flex p-8 sm:flex-row flex-col">
                                <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-indigo-600 text-lg title-font font-bold mb-3">2017-2018</h2>
                                    <h2 className="text-gray-900 text-xl title-font font-bold mb-3">S.S.C</h2>
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                            <hr className="h-px w-auto my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                        <div className=" lg:w-full lg:pl-20 md:w-full">
                            <div className="flex p-8 sm:flex-row flex-col">
                                <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-indigo-600 text-lg title-font font-bold mb-3">2019-2020</h2>
                                    <h2 className="text-gray-900 text-xl title-font font-bold mb-3">H.S.C</h2>
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                            <hr className="h-px w-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                        <div className="lg:w-full lg:pl-24 md:w-full">
                            <div className="flex p-4 sm:flex-row flex-col">
                                <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-indigo-600 text-lg title-font font-bold mb-3">2021-2023</h2>
                                    <h2 className="text-gray-900 text-xl title-font font-bold mb-3">BCA(Bachelor Of Compute Application)</h2>
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <hr className="h-px w-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                        <div className=" lg:w-full lg:pl-24 md:w-full">
                            <div className="flex p-4 md:p-8 sm:flex-row flex-col">
                                <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-indigo-600 text-lg title-font font-bold mb-3">2023-</h2>
                                    <h2 className="text-gray-900 text-xl title-font font-bold mb-3">MCA (Master Of Computer Application)</h2>
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
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
