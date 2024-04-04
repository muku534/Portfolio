"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const page = () => {
    return (
        <main id="Home" className="flex w-full lg:mt-60 lg:mb-20 justify-center items-center ">
            <div className="lg:w-1/2 lg:pr-10 lg:px-32 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="mb-10 lg:ml-5 ">
                    <h1 className="text-3xl lg:text-5xl font-normal leading-tight tracking-tight text-gray-900 dark:text-text-gray-900 mb-4">Hello! I'm Mukesh Prajapati </h1>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-14 justify-center items-center">
                <div className='mb-10 lg:ml-5 justify-center items-center'>
                    <p className="text-3xl lg:ml-10 lg:text-4xl font-normal text-gray-900 tracking-tight mb-4 leading-relaxed">A Junior React Native Developer based in Surat, India.</p>
                    <p className="text-md lg:ml-10 lg:text-md font-normal text-gray-400 tracking-tight mb-4 leading-relaxed">Passionate about software development.</p>

                    <div className="mt-10 flex flex-col lg:flex-row items-center lg:ml-10  lg:items-start">
                        <Link href="#" className="text-gray-100 bg-gray-900 justify-center  inline-flex items-center  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 " role="button">
                            Talk with me
                        </Link>
                        <Link href="#" className="text-gray-700 ml-5 justify-center inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 border border-gray-400 border-solid border-2" role="button">
                            See my work
                        </Link>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
