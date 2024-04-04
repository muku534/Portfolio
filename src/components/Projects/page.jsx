"use client";

import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const page = () => {
    const list = [
        {
            img: "/assets/demo.png",
            price: "$5.50",
            title: "Struktura",
            durection: "August 2022",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam harum blanditiis, doloremque quibusdam, vitae repellendus quos corrupti, repudiandae neque ex ipsa facere obcaecati assumenda cum similique dicta voluptas fugiat repellat saepe? Nam, maxime!"
        },
        {
            img: "/assets/demo2.png",
            price: "$3.00",
            title: "Struktura",
            durection: "August 2022",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam harum blanditiis, doloremque quibusdam, vitae repellendus quos corrupti, repudiandae neque ex ipsa facere obcaecati assumenda cum similique dicta voluptas fugiat repellat saepe? Nam, maxime!"
        },
        {
            img: "/assets/demo3.png",
            price: "$10.00",
            title: "Struktura",
            durection: "August 2022",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam harum blanditiis, doloremque quibusdam, vitae repellendus quos corrupti, repudiandae neque ex ipsa facere obcaecati assumenda cum similique dicta voluptas fugiat repellat saepe? Nam, maxime!"
        },
        {
            img: "/assets/demo4.png",
            price: "$5.30",
            title: "Struktura",
            durection: "August 2022",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam harum blanditiis, doloremque quibusdam, vitae repellendus quos corrupti, repudiandae neque ex ipsa facere obcaecati assumenda cum similique dicta voluptas fugiat repellat saepe? Nam, maxime!"
        },
    ];
    return (
        <div id="Projects">
            <section className="bg-gray-50">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-5 mt-10">
                    <div className="max-w-2xl lg:pt-10 mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-gray-800">
                            Selected works
                        </h2>
                        {/* <hr className="w-32 h-1 mx-auto my-2 bg-indigo-300 border-0 rounded md:my-1 dark:bg-indigo-300"></hr> */}
                        {/* <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                            Discover a variety of projects demonstrating my skills and enthusiasm for technology. From web development to mobile apps, each project represents a step forward in my journey as a developer.
                        </p> */}
                    </div>

                    <div className="mt-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {list.map((item, index) => (
                            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                                <CardBody className="overflow-visible p-0">
                                    <Image
                                        shadow="sm"
                                        radius="lg"
                                        width="100%"
                                        alt={item.title}
                                        className="w-full object-cover h-[300px]"
                                        src={item.img}
                                    />
                                </CardBody>
                                <CardFooter className="text-small pt-5 flex flex-col gap-1 items-start">
                                    <b className="text-xl lg:text-xl">{item.title}</b>
                                    <p className="text-default-500 pt-2 pb-2 text-center">{item.durection}</p>
                                    <p className="text-default-500 text-start">{item.description}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-40 mb-32 items-center justify-center lg:px-40">
                        <div className="flex gap-4 items-center justify-center">
                            <Avatar radius="sm" className="w-10 h-10" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                            <Avatar radius="sm" className="w-10 h-10" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <Avatar radius="sm" className="w-16 h-16" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar radius="sm" className="w-10 h-10" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar radius="sm" className="w-10 h-10" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        </div>
                        <p className="lg:mt-5 text-default-500 text-center"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, officia eaque, reprehenderit quis tenetur quisquam omnis at voluptates et numquam veniam laudantium architecto dignissimos, suscipit labore cum necessitatibus accusamus alias cumque perferendis? At, maxime. </p>
                        <p className="lg:mt-5 text-default-900 font-bold text-center"> John johnson </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="space-y-4 border border-2 border-gray-100 rounded-lg p-5 shadow-xl hover:shadow-2xl">
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-700">{title}</h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <div className="mt-auto flex justify-center">
                <Link href={link} title="" className="text-gray-700 bg-indigo-100 justify-center hover:bg-indigo-200 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button">
                    View
                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default page;
