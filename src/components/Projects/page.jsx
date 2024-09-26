"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const page = () => {
    const list = [
        {
            title: "ResumeCraft",
            technology: "Next.js, Firebase",
            description: "Introducing ResumeCraft, where crafting a professional resume has never been easier. With a selection of three ATS-friendly templates, our platform offers a seamless experience for users to input their information using the intuitive editor powered by OverLeaf. Designed for both simplicity and effectiveness, our templates ensure your resume stands out to employers and passes through Applicant Tracking Systems effortlessly. Best of all, our service is completely free – no hidden fees or subscriptions required. Download your personalized resume as a PDF with just one click and take the next step towards securing your dream job.",
            Github: "https://github.com/muku534/ResumeCraft"
        },
        {
            title: "CallVerse",
            technology: "React Native, Firebase",
            description: "Developed CallVerse (Chat App), a chat application using React Native CLI and Firebase. The application features a unique offering where users are provided with random phone numbers for secure communication, prioritizing privacy. The app allows user registration and sign-in using unique identifiers or registered email. It also includes robust search functionality for easy contact discovery and connection, and users can also add contacts. Real-time messaging capabilities were integrated for seamless conversations. Additionally, the app facilitates the sharing of images and videos, enhancing the user experience.",
            Github: "https://github.com/muku534/CallverseNative"
        },
        {
            title: "SCS (Sustainable Computer Solution)",
            technology: "React Native CLI, Firebase, Redux",
            description: "Introducing SCS (Sustainable Computer Solutions), an innovative e-commerce application tailored for IT companies and universities. SCS serves as a comprehensive platform facilitating the seamless selling, inspection, repair, and customization of computer systems. With a focus on ensuring all systems are in prime working condition, SCS not only promotes technology accessibility but also contributes to sustainability by facilitating the resale of systems. By fostering the accessibility of cutting-edge technology, SCS plays a pivotal role in promoting sustainability and technological advancement.",
            Github: "https://github.com/muku534/bug-free-adventure-app"
        },
        {
            title: "MarketChat",
            technology: "React Native CLI, Rest APIs, Firebase",
            description: "MarketChat is a dynamic social media platform designed for connecting people, creating communities, and facilitating various forms of expression. With features like friend discovery, page creation, group joining, event organization, and seamless content sharing, MarketChat offers a comprehensive social experience. Real-time notifications, intuitive chat, and robust privacy controls ensure a safe and engaging environment. As a key contributor to MarketChat's development, I played a pivotal role in shaping its features and functionalities, contributing to its success in the competitive social media landscape.",
            Github: "https://github.com/muku534"
        },
        {
            title: "rn-toastify",
            technology: "React Native CLI",
            description: "rn-toastify is a versatile and animated toast notification component built for React Native applications. It offers an intuitive API with features like customizable layouts, flexible configuration, and promise handling for asynchronous actions. The component provides various toast types, including success, error, and custom toasts, all designed to enhance the user experience with seamless notifications. Its simple setup, position control, and emoji support make it a flexible tool for mobile app developers looking to integrate toast messages.",
            Github: "https://www.npmjs.com/package/rn-toastify"
        },
        {
            title: "PixelVista",
            technology: " React Native CLI, Pexels API, Redux",
            description: "PixelVista is a mobile wallpaper application built using React Native CLI, leveraging the Pexels REST API to provide users with a vast collection of high-quality wallpapers. Users can browse, search, and download wallpapers directly to their devices. The app implements Redux for state management, ensuring a smooth user experience by efficiently handling user preferences, downloaded wallpapers, and API data. With a focus on intuitive design and performance, PixelVista offers seamless navigation and personalized collections for users to explore their favorite categories and styles.",
            Github: "https://github.com/muku534/PixelVista"
        },
    ];

    const handleCardClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div id="Projects">
            <section className="bg-gray-50">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-5 mt-10">
                    <div className="max-w-2xl lg:pt-10 mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-gray-800">
                            Selected Works
                        </h2>
                        <p className="text-md mt-4 lg:text-md font-normal text-gray-400 tracking-tight mb-4 leading-relaxed">
                            Discover a variety of projects demonstrating my skills and enthusiasm for technology.
                            From <span className="font-semibold">web development</span> to <span className="font-semibold">mobile apps</span>,
                            each project represents a <span className="font-semibold">step forward</span> in my journey as a developer.
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
                                                onClick={() => handleCardClick(item.Github)}
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
        </div>
    );
};

export default page;
