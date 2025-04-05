"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mockup from "../Mockups/Page";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Page = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const list = [
        {
            title: "Travelogger – AI-Powered Travel Planner",
            technology: "React Native, Firebase, REST APIs, Android Studio, Xcode",
            description: "Travelogger is a cross-platform travel planning app designed to streamline trip management with the help of AI. It offers smart itinerary suggestions, manual schedule customization, and personalized recommendations for destinations, dining, and attractions. Key features include Google Sign-In, OTP authentication, AI-powered search, and real-time plan updates. The app has been published on both the Play Store and App Store, ensuring a seamless and intuitive experience for travelers.",
            PlayStore: "https://play.google.com/store/apps/details?id=com.yourapp.travelogger", // Replace with actual link
            AppStore: "https://apps.apple.com/app/idXXXXXXXXX", // Replace with actual link
            mockups: ["/Images/Travelogger/1.png", "/Images/Travelogger/2.png", "/Images/Travelogger/3.png", "/Images/Travelogger/4.png","/Images/Travelogger/5.png","/Images/Travelogger/6.png",]
        },
        {
            title: "FreshWave",
            technology: "React Native, Firebase, REST APIs, Android Studio",
            description: "FreshWave is an e-commerce platform designed for selling laundry soap and liquid products. The app features product listings, detailed views, cart management, and a streamlined checkout experience. It also offers robust user authentication, including login, signup, and password recovery. Profile management allows users to edit and delete accounts, while invoice generation enables seamless PDF downloads after purchases. Optimized for performance and app size, FreshWave ensures a smooth experience across devices.",
            Github: "https://github.com/muku534",
            mockups: ["/Images/freshwave.jpg", "/Images/freshwave1.jpg", "/Images/freshwave2.jpg", "/Images/freshwave3.jpg", "/Images/freshwave4.jpg", "/Images/freshwave5.jpg"]
        },
        {
            title: "join-Social: Activity and Event Management",
            technology: "React Native, Firebase, REST APIs, Android Studio",
            description: "join-Social is an event management app that allows users to create, share, and join events for various social activities. The app includes features like social login for easy sign-up, event creation and posting, and the ability to interact with events through likes, shares, and comments. Users can join events, connect with other attendees via chat, and receive real-time push notifications. The app also supports sending friend requests and event participation requests, fostering a vibrant social community.",
            PlayStore: "https://play.google.com/store/apps/details?id=com.applab.joinapp",
            mockups: ["/Images/Join/Join1.webp", "/Images/Join/Join2.webp", "/Images/Join/Join3.webp", "/Images/Join/Join4.webp", "/Images/Join/Join5.webp"],
        },
        {
            title: "MarketChat",
            technology: "React Native CLI, Rest APIs, Firebase",
            description: "MarketChat is a dynamic social media platform tailored to foster communication, create communities, and facilitate diverse forms of expression. It features friend discovery, page creation, group participation, event organization, and content sharing. Real-time notifications, secure chat functionality, and advanced privacy controls ensure a safe and engaging user experience. My contributions to the development of MarketChat helped shape its features, enhancing its competitiveness in the social media landscape.",
            Github: "https://github.com/muku534",
            mockups: null,
        },
        {
            title: "CallVerse",
            technology: "React Native, Firebase",
            description: "CallVerse is a unique privacy-first chat app built with React Native CLI and Firebase, offering users random phone numbers for secure, anonymous communication. The app supports user registration and login with unique identifiers or emails. Key features include real-time messaging, media sharing (images and videos), and a robust search function for easy contact discovery. CallVerse ensures a seamless, private chat experience while maintaining high standards of security.",
            Github: "https://github.com/muku534/CallverseNative",
            mockups: null,
        },
        {
            title: "rn-toastify",
            technology: "React Native CLI",
            description: "rn-toastify is an animated toast notification component for React Native apps, offering a customizable and user-friendly API. It supports a variety of toast types such as success, error, and custom notifications, enhancing user interaction. Features include flexible configuration, promise handling for asynchronous actions, and easy integration with React Native apps. With position control, emoji support, and simple setup, rn-toastify is an essential tool for developers seeking to implement notifications seamlessly.",
            Github: "https://www.npmjs.com/package/rn-toastify",
            mockups: null,
        },
        {
            title: "PixelVista",
            technology: "React Native CLI, Pexels API, Redux",
            description: "PixelVista is a mobile wallpaper application that provides users with a curated collection of high-quality wallpapers from the Pexels API. Built with React Native CLI and Redux, the app allows users to search, browse, and download wallpapers directly to their devices. It offers personalized collections based on user preferences, ensuring an intuitive and seamless experience. PixelVista combines design, performance, and customization, making it a must-have app for wallpaper enthusiasts.",
            Github: "https://github.com/muku534/PixelVista",
            mockups: null,
        },
        {
            title: "SCS (Sustainable Computer Solution)",
            technology: "React Native CLI, Firebase, Redux",
            description: "SCS (Sustainable Computer Solutions) is an e-commerce platform designed for IT companies and universities, enabling the sale, inspection, repair, and customization of computer systems. Focused on sustainability, the app facilitates the resale of technology while ensuring each system is in prime working condition. By promoting access to affordable technology, SCS contributes to a more sustainable tech ecosystem, bridging the gap between sustainability and innovation.",
            Github: "https://github.com/muku534/bug-free-adventure-app",
            mockups: null,
        },
    ];

    const handleViewDetails = (project) => {
        setSelectedProject({
            ...project,
            mockups: project.mockups || [] // Make sure to pass the array of images to Mockup
        });
        setShowModal(true);
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    const handleCardClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div id="Projects">
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-5 mt-10">
                    <div className="max-w-2xl lg:pt-10 mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-gray-800">
                            Featured Projects
                        </h2>
                        <p className="text-md mt-4 lg:text-md font-normal text-gray-500 tracking-tight mb-4 leading-relaxed">
                            Explore a curated selection of my projects, each showcasing my dedication and expertise in technology. From
                            <span className="font-semibold text-gray-700"> web development</span> to <span className="font-semibold text-gray-700"> mobile applications</span>,
                            every project reflects my continuous growth and passion for innovation as a developer.
                        </p>
                    </div>

                    <div className="mt-10 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <Card shadow="sm" key={index}>
                                    <CardBody className="text-small pt-5 flex flex-col gap-1 items-start">
                                        <b className="text-xl lg:text-xl">{item.title}</b>
                                        <p className="text-gray-600 pt-2 pb-2 text-center">{item.technology}</p>
                                        <p className="text-md text-gray-500 text-start dark:text-gray-300 ">
                                            {/* Truncated description */}
                                            {item.description.length > 100
                                                ? `${item.description.substring(0, 400)}...`
                                                : item.description}
                                        </p>
                                    </CardBody>
                                    <CardFooter>
                                        {/* Button wrapper to handle hover visibility */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Button
                                                onClick={() => handleViewDetails(item)}
                                                className="mt-1 px-5 py-2 bg-black text-white font-medium text-sm rounded-md transition-all duration-300 hover:bg-gray-700"
                                            >
                                                View Detail Works
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {showModal && selectedProject && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-6 w-full flex flex-col lg:flex-row gap-6 lg:max-w-4xl md:max-w-2xl sm:max-w-xs sm:max-h-[90%] overflow-auto"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >

                            {/* Left Side: Image Conditionally render Mockup based on screen size*/}
                            <div className="flex-1 flex justify-center items-center hidden lg:block md:block">
                                <Mockup project={selectedProject} />
                            </div>

                            {/* Right Side: Description */}
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                                    <button
                                        onClick={handleCloseModal}
                                        className="text-gray-800 lg:text-3xl md:text-2xl text-xl hover:text-gray-700"
                                    >
                                        <CancelOutlinedIcon className="inline" fontSize="large" />
                                    </button>
                                </div>
                                <p className="text-gray-600 mt-4">{selectedProject.description}</p>
                                <div className="mt-6">
                                    <p className="text-gray-500 font-medium">
                                        <strong className="text-gray-800">Technologies:</strong> {selectedProject.technology}
                                    </p>
                                </div>
                                <div className="lg:pt-10">
                                    <Button
                                        onClick={() => handleCardClick(selectedProject.Github || selectedProject.PlayStore)}
                                        className="mt-1 px-5 py-2 bg-black text-white font-medium text-sm rounded-md transition-all duration-300 hover:bg-gray-700"
                                    >
                                        View on {selectedProject.Github ? 'Github' : 'PlayStore'}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Page;
