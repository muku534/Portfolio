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
                        <img src="/Logo/HTML5.png" alt="HTML" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">HTML</span>
                    </div>

                    {/* Skill Item 2 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/CSS3.png" alt="CSS" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">CSS</span>
                    </div>

                    {/* Skill Item 3 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/JavaScript.png" alt="JavaScript" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">JavaScript</span>
                    </div>

                    {/* Skill Item 4 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/React.js.png" alt="React.js" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">React.js</span>
                    </div>

                    {/* Skill Item 5 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/Node.js.png" alt="Node.js" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">Node.js</span>
                    </div>

                    {/* Skill Item 6 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/Firebase.png" alt="Firebase" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">Firebase</span>
                    </div>

                    {/* Skill Item 7 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/Git.png" alt="Git" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">Git</span>
                    </div>

                    {/* Skill Item 8 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/GitHub.png" alt="GitHub" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">GitHub</span>
                    </div>

                    {/* Skill Item 9 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/jQuery.png" alt="jQuery" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">jQuery</span>
                    </div>

                    {/* Skill Item 9 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/MongoDB.png" alt="MongoDB" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">MongoDB</span>
                    </div>

                    {/* Skill Item 10 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/Next.js.png" alt="Next.js" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">Next.js</span>
                    </div>

                    {/* Skill Item 11 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/ReactNative.png" alt="ReactNative" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">ReactNative</span>
                    </div>

                    {/* Skill Item 12 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/Redux.png" alt="Redux" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">Redux</span>
                    </div>

                    {/* Skill Item 13 */}
                    <div className="flex items-center justify-center text-center">
                        <img src="/Logo/Tailwind CSS.png" alt="Tailwind CSS" className="w-12 h-12 object-contain" />
                        <span className="ml-2 text-gray-700">Tailwind CSS</span>
                    </div>

                    {/* Repeat for additional skills */}
                </div>
            </div>
        </div>

    )
}
export default Skills
