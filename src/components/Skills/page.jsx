"use client";

import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";

const Skills = () => {
    return (
        <div id="Skills">
            <div className="flex flex-col w-full px-4 py-16" style={{ backgroundColor: '#F5F5F0' }}>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-gray-800 text-center">
                    My Skills
                </h2>
                <p className="text-md mt-4 lg:text-md text-gray-400 text-center mb-8">
                    A glimpse of the tools and technologies I use to craft high-quality software solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:mt-5 lg:mb-5 lg:grid-cols-7 gap-8">
                    {/* Skill Item 1 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/HTML5.png" alt="HTML" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">HTML</span>
                    </div>

                    {/* Skill Item 2 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/CSS3.png" alt="CSS" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">CSS</span>
                    </div>

                    {/* Skill Item 3 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/JavaScript.png" alt="JavaScript" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">JavaScript</span>
                    </div>

                    {/* Skill Item 4 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/React.js.png" alt="React.js" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">React.js</span>
                    </div>

                    {/* Skill Item 5 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/Node.js.png" alt="Node.js" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">Node.js</span>
                    </div>

                    {/* Skill Item 6 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/Firebase.png" alt="Firebase" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">Firebase</span>
                    </div>

                    {/* Skill Item 7 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/Git.png" alt="Git" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">Git</span>
                    </div>

                    {/* Skill Item 8 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/GitHub.png" alt="GitHub" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">GitHub</span>
                    </div>

                    {/* Skill Item 9 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/jQuery.png" alt="jQuery" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">jQuery</span>
                    </div>

                    {/* Skill Item 10 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/MongoDB.png" alt="MongoDB" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">MongoDB</span>
                    </div>

                    {/* Skill Item 11 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/Next.js.png" alt="Next.js" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">Next.js</span>
                    </div>

                    {/* Skill Item 12 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/ReactNative.png" alt="ReactNative" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">ReactNative</span>
                    </div>

                    {/* Skill Item 13 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/Redux.png" alt="Redux" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">Redux</span>
                    </div>

                    {/* Skill Item 14 */}
                    <div className="flex items-center justify-center text-center">
                        <Image src="/Logo/Tailwind CSS.png" alt="Tailwind CSS" width={48} height={48} className="object-contain" />
                        <span className="ml-2 text-gray-700">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Skills
