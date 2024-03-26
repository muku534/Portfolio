"use client";


import React from 'react';
import CSS from "../../../public/Logo/CSS3.png";
import Fiebase from "../../../public/Logo/Firebase.png";
import Git from "../../../public/Logo/Git.png";
import GitHub from "../../../public/Logo/GitHub.png";
import HTML5 from "../../../public/Logo/HTML5.png";
import JavaScript from "../../../public/Logo/JavaScript.png";
import jquery from "../../../public/Logo/jquery.png";
import Reactjs from "../../../public/Logo/React.js.png";
import Next from "../../../public/Logo/Next.js.png";
import Node from "../../../public/Logo/Node.js.png";
import Reactnative from "../../../public/Logo/Reactnative.png";
import MongoDB from "../../../public/Logo/MongoDB.png";
import Redux from "../../../public/Logo/Redux.png";
import Tailwind from "../../../public/Logo/Tailwind CSS.png";

const page = () => {
    return (
        <div className="flex justify-center">
            <section className="text-gray-400 body-font lg:ml-5 lg:pl-10">
                <h1 className="title-font sm:text-3xl text-3xl mb-1 font-extrabold text-gray-800">Skills</h1>
                <div className="container px-5 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap lg:pl-14 lg:m-4 -m-4">
                        {/* Icon components representing skills */}
                        <SkillIcon src="/Logo/CSS3.png" alt="CSS3" />
                        <SkillIcon src="/Logo/Firebase.png" alt="Firebase" />
                        <SkillIcon src="/Logo/Git.png" alt="Git" />
                        <SkillIcon src="/Logo/GitHub.png" alt="GitHub" />
                        <SkillIcon src="/Logo/HTML5.png" alt="HTML5" />
                        <SkillIcon src="/Logo/JavaScript.png" alt="JavaScript" />
                        <SkillIcon src="/Logo/jquery.png" alt="jQuery" />
                        <SkillIcon src="/Logo/React.js.png" alt="React.js" />
                        <SkillIcon src="/Logo/Next.js.png" alt="Next.js" />
                        <SkillIcon src="/Logo/Node.js.png" alt="Node.js" />
                        <SkillIcon src="/Logo/Reactnative.png" alt="React Native" />
                        <SkillIcon src="/Logo/MongoDB.png" alt="MongoDB" />
                        <SkillIcon src="/Logo/Redux.png" alt="Redux" />
                        <SkillIcon src="/Logo/Tailwind CSS.png" alt="Tailwind CSS" />
                    </div>
                </div>
            </section>
        </div>
    )
}

const SkillIcon = ({ src, alt }) => {
    return (
        <div className="p-8 lg:w-1/6 md:w-1/3 w-1/3">
            <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
    )
};

export default page
