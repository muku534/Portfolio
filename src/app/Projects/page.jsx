"use client";

import Link from "next/link";
import Image from "next/image";

const page = () => {
    return (
        <div id="Projects">
            <section className="bg-white  antialiased">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-5 mt-10  ">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-gray-800">
                            Projects
                        </h2>
                        <hr className="w-32 h-1 mx-auto my-2 bg-indigo-300 border-0 rounded md:my-1 dark:bg-indigo-300"></hr>
                        <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                            Discover a variety of projects demonstrating my skills and enthusiasm for technology. From web development to mobile apps, each project represents a step forward in my journey as a developer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-4 border border-2 border-gray-100 rounded-lg p-5 shadow-xl hover:shadow-2xl">

                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-700">
                                SCS Website (React.js)
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                Developed SCS (Sustainable Computer Solution), an e-commerce app built using React.js, Node.js, Express.js, MongoDB and ....
                            </p>
                            <Link href="https://github.com/muku534/bug-free-adventure" title=""
                                className="text-gray-700 bg-indigo-100 justify-center hover:bg-indigo-200 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                role="button">
                                View
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        <div className="space-y-4 border border-2 border-gray-100 rounded-lg p-5 shadow-xl hover:shadow-2xl">

                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-700">
                                CallVerse (React Native Expo)
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                CallVerse, a secure and seamless chat app built using React Native Expo, Node.js, Express.js, MongoDB, and Socket.io. The application ....
                            </p>
                            <Link href="https://github.com/muku534/CallVerse-new-version-" title=""
                                className="text-gray-700 bg-indigo-100 justify-center hover:bg-indigo-200  inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                role="button">
                                View
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        <div className="space-y-4 border border-2 border-gray-100 rounded-lg p-5 shadow-xl hover:shadow-2xl">
                            <h3 className="text-2xl font-bold leading-tight  text-gray-900 dark:text-gray-700">
                                SCS  (React Native)
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                Developed SCS (Sustainable Computer Solution), an e-commerce app built using React Native CLI, Node.js, Express.js, MongoDB.
                            </p>
                            <Link href="https://github.com/muku534/bug-free-adventure-app" title=""
                                className="text-gray-700 bg-indigo-100 justify-center hover:bg-indigo-200  inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                role="button">
                                View
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        <div className="space-y-4 border border-2 border-gray-100 rounded-lg p-5 shadow-xl hover:shadow-2xl">
                            <h3 className="text-2xl font-bold leading-tight  text-gray-900 dark:text-gray-700">
                                CallVerse  (React Native CLI and Firebase)
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 ">
                                Developed CallVerse (Chat App), a chat application using React Native CLI and Firebase. The
                                application features a unique offering where....
                            </p>
                            <Link href="https://github.com/muku534/bug-free-adventure-app" title=""
                                className="text-gray-700 bg-indigo-100 justify-center hover:bg-indigo-200  inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                role="button">
                                View
                                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
