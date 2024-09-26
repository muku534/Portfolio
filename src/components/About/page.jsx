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
            <section className="flex lg:flex-row flex-col w-full pt-14 bg-gray-50">
                <div className="lg:w-1/2 lg:pr-10 lg:px-32 p-5 flex flex-col ">
                    <div className="lg:ml-5 ">
                        <h1 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight text-gray-900 dark:text-text-gray-900 mb-4">Working experience</h1>
                        <div className="lg:mt-8">
                            <div className="flex items-center">

                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <ModelTrainingIcon />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold">
                                        React Native Intern at <span className="font-bold text-gray-900">Blockchaindev</span>
                                    </h3>
                                    <p className="text-sm font-normal text-gray-400">May 2023 - July 2023</p>
                                </div>
                            </div>
                            <hr className="mt-4 border-gray-300  lg:mr-36 md:mr-3" />

                            <div className="flex mt-4  items-center">

                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <WorkIcon className='inline' />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold">
                                        Junior React Native Developer at <span className="font-bold text-gray-900">Blockchaindev</span>
                                    </h3>
                                    <p className="text-sm font-normal text-gray-400">Aug 2023 - Feb 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-14 p-5 items-center">
                    <div className='mb-10 lg:ml-5  items-center'>
                        <p className="text-2xl lg:ml-10 lg:text-3xl font-normal leading-tight tracking-tight text-gray-900 dark:text-text-gray-900 mb-4">Qualifications</p>
                        <div className="lg:ml-10 lg:mt-8">
                            <div className="flex items-center">

                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <SchoolIcon />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold">H.S.C</h3>
                                    <p className="text-sm font-normal text-gray-400">2020</p>
                                </div>
                            </div>
                            <hr className="mt-4 border-gray-300  lg:mr-36 md:mr-3" />
                            <div className="flex mt-4  items-center">

                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <SchoolIcon />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold"><span className="font-bold text-gray-900">BCA</span> (Bachelor of Computer Applications)</h3>
                                    <p className="text-sm font-normal text-gray-400">2020 - 2023</p>
                                </div>
                            </div>
                            <hr className="mt-4 border-gray-300  lg:mr-36 md:mr-3" />
                            <div className="flex mt-4  items-center">

                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <SchoolIcon />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold"><span className="font-bold text-gray-900">MCA</span> (Master of Computer Application)</h3>
                                    <p className="text-sm font-normal text-gray-400">2023 - 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
