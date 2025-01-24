"use client";

import Link from "next/link";
import Image from "next/image";
import Profile from "../../../public/assets/Profile.jpg"
import { FaDownload } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
const page = () => {

    return (
        <div id="About">
            <section className="flex lg:flex-row flex-col w-full pt-14" style={{ backgroundColor: '#F5F5F0' }}>
                <div className="w-full lg:w-1/2 lg:px-20 p-5 items-center">
                    <div className="lg:ml-5">
                        <h1 className="text-2xl lg:text-4xl font-normal leading-tight tracking-tight text-gray-900 dark:text-gray-900 mb-4">
                            Working Experience
                        </h1>
                        <div className="lg:mt-8 space-y-6">
                            {/* Freelance React Native Developer */}
                            <div className="group flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-lg">
                                        <WorkIcon className="inline" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm text-gray-700 font-semibold">
                                            <span className="font-bold text-gray-900">Freelance</span> React Native Developer
                                        </h3>
                                        <p className="text-sm font-normal text-gray-500">Feb 2024 - Present</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-4 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                                    Currently working on building dynamic and user-friendly mobile applications for clients. Specializing in integrating features such as real-time messaging, push notifications, and seamless data exchange, utilizing Firebase and REST APIs for optimized user engagement and experience.
                                </p>
                            </div>

                            <hr className="border-gray-300" />

                            {/* Junior React Native Developer */}
                            <div className="group flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-lg">
                                        <WorkIcon className="inline" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm text-gray-700 font-semibold">
                                            Junior React Native Developer at <span className="font-bold text-gray-900">Blockchaindev</span>
                                        </h3>
                                        <p className="text-sm font-normal text-gray-500">Aug 2023 - Feb 2024</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-4 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                                    Contributed to the development of a social media application, enhancing user interaction with features like real-time messaging, push notifications, and friend discovery. Worked closely with Firebase for seamless data handling and improved user engagement by 30%. Refined application performance through code optimization and API integration, ensuring a 15% improvement in response time.
                                </p>
                            </div>

                            <hr className="border-gray-300" />

                            {/* React Native Intern */}
                            <div className="group flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-lg">
                                        <WorkIcon className="inline" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm text-gray-700 font-semibold">
                                            React Native Intern at <span className="font-bold text-gray-900">Blockchaindev</span>
                                        </h3>
                                        <p className="text-sm font-normal text-gray-500">May 2023 - July 2023</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-4 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                                    Gained hands-on experience in mobile app development using React Native, Node.js, and MongoDB. Contributed to backend tasks such as integrating REST APIs for efficient communication between the app and the server. Focused on data synchronization, ensuring smooth updates across all devices, and participated in code reviews to maintain high-quality standards in the project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:px-16 p-5 items-center">
                    <div className="mb-10 lg:ml-5 items-center">
                        <p className="text-2xl lg:ml-10 lg:text-4xl font-normal leading-tight tracking-tight text-gray-900 dark:text-gray-900 mb-4">
                            Education
                        </p>
                        <div className="lg:ml-10 lg:mt-8 space-y-6">
                            {/* MCA */}
                            <div className="group flex flex-col transition-all duration-1000 ease-in-out">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-lg">
                                        <SchoolIcon />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm text-gray-700 font-semibold">
                                            <span className="font-bold text-gray-900">Master of Computer Applications (MCA)</span>
                                        </h3>
                                        <p className="text-sm font-normal text-gray-500">2023 - 2025 | Gujarat Technological University</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-1000 ease-in-out">
                                    Currently pursuing a Master's degree in Computer Applications with a focus on software development and app development.
                                    Exploring advanced technologies and frameworks to develop impactful and user-friendly applications.
                                </p>
                            </div>

                            <hr className="border-gray-300" />

                            {/* BCA */}
                            <div className="group flex flex-col transition-all duration-1000 ease-in-out">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-lg">
                                        <SchoolIcon />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm text-gray-700 font-semibold">
                                            <span className="font-bold text-gray-900">Bachelor of Computer Applications (BCA)</span>
                                        </h3>
                                        <p className="text-sm font-normal text-gray-500">2020 - 2023 | Veer Narmad South Gujarat University</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-1000 ease-in-out">
                                    Completed Bachelor's degree in Computer Applications, with an average CGPA of 7.2 Gained hands-on experience in web development and cross-platform mobile applications.
                                    Specialized in React Native, Node.js, and MongoDB during various course projects.
                                </p>
                            </div>

                            <hr className="border-gray-300" />

                            {/* Commerce Background */}
                            <div className="group flex flex-col transition-all duration-1000 ease-in-out">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-lg">
                                        <SchoolIcon />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm text-gray-700 font-semibold">H.S.C</h3>
                                        <p className="text-sm font-normal text-gray-500">Pre-2020</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-1000 ease-in-out">
                                    Started academic journey in commerce before transitioning into the field of computer science. Developed a strong foundation in logical thinking and problem-solving,
                                    which helped in adapting to programming and software development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
