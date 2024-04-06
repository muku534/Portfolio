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
                                {/* <Avatar
                                    isBordered
                                    radius="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                /> */}
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
                            <hr className="mt-4 border-gray-300  mr-36" />

                            <div className="flex mt-4  items-center">
                                {/* <Avatar
                                    isBordered
                                    radius="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                /> */}
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
                                {/* <Avatar
                                    isBordered
                                    radius="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                /> */}
                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <SchoolIcon />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold">H.S.C</h3>
                                    <p className="text-sm font-normal text-gray-400">2020</p>
                                </div>
                            </div>
                            <hr className="mt-4 border-gray-300  mr-40" />


                            <div className="flex mt-4  items-center">
                                {/* <Avatar
                                    isBordered
                                    radius="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                /> */}
                                <div className="bg-gray-200 p-2 rounded-lg">
                                    <SchoolIcon />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700 font-semibold"><span className="font-bold text-gray-900">BCA</span> (Bachelor of Computer Applications)</h3>
                                    <p className="text-sm font-normal text-gray-400">2020 - 2023</p>
                                </div>
                            </div>
                            <hr className="mt-4 border-gray-300  mr-40" />

                            <div className="flex mt-4  items-center">
                                {/* <Avatar
                                    isBordered
                                    radius="sm"
                                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                /> */}
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
            </section >
            <div className="pt-20 bg-gray-50 pb-10 p-5">
                <div className="flex flex-row  lg:px-32 w-full justify-between">
                    <div className=" lg:ml-5  items-center">
                        <h1 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight text-gray-900 dark:text-text-gray-900 mb-4">I can help you with</h1>
                    </div>
                    <div className="items-center">
                        <Link href="https://github.com/muku534" className="text-gray-700 ml-5 justify-center inline-flex items-center font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-primary-600 border border-gray-400 border-solid border-2" role="button">
                            See my work
                        </Link>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:px-32 w-full justify-between">
                    <div className="lg:w-1/2 lg:pr-10 lg:px-10 flex flex-col ">
                        <div className="flex mt-4 mb-5 lg:ml-5 items-center">
                            <Avatar
                                radius="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <div className="ml-4">
                                <h1 className="text-xl lg:text-xl font-normal leading-tight tracking-tight text-gray-7 00 dark:text-text-gray-700 mb-4">Full page web site design</h1>
                            </div>
                        </div>
                        <div className="lg:pl-5">
                            <Image src="/assets/demo.png" width={450} height={450} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-14  items-center">
                        <div className="flex mt-4 mb-5 lg:ml-5 items-center">
                            <div className="">
                                <p className="text-sm font-normal text-gray-400">crafting immersive and engaging full-page website design that captivate audiences and deliver a seamless user experience</p>
                            </div>
                        </div>
                        <div className="lg:pl-5">
                            <Image src="/assets/demo2.png" width={450} height={450} />
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default page
