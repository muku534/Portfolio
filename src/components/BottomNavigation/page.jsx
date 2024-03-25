"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const BottomNavigation = () => {

    // const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(false);

    // useEffect(() => {
    //     // Function to handle resizing
    //     const handleResize = () => {
    //         setIsMediumOrSmaller(window.innerWidth <= 768); // Adjust the breakpoint as needed
    //     };

    //     // Call handleResize when the component mounts
    //     handleResize();

    //     // Add event listener for window resize
    //     window.addEventListener("resize", handleResize);

    //     // Remove event listener when component unmounts
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);
    return (

        <div className="fixed z-50 w-full max-w-lg bottom-1 left-1/2 transform -translate-x-1/2 bg-gray-100 border border-gray-200 rounded-full shadow-md"
        // style={{ display: isMediumOrSmaller ? 'block' : 'none' }}
        >
            <div className="grid h-full max-w-lg grid-cols-5 gap-2 mx-auto">
                <ScrollLink
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // aria-current="page"
                    // activeclassName="active"
                    style={{ textDecoration: "none" }}
                    className="flex items-center cursor-pointer">
                    <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="33" viewBox="0 -960 960 960" width="33"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" /></svg>
                        <span className="sr-only">Home</span>
                    </button>
                </ScrollLink>
                <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Home
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <ScrollLink to="About"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="flex items-center cursor-pointer">
                    <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 ">
                        <svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M8.12695 21C8.571 19.2748 10.1371 18 12.0009 18C13.8648 18 15.4309 19.2748 15.8749 21M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="sr-only">About</span>
                    </button>
                </ScrollLink>
                <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    About
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div className="flex items-center justify-center">
                    <ScrollLink to="Resume"
                        spy={true}
                        smooth={true}
                        duration={500} className="flex items-center cursor-pointer">
                        <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium  rounded-full ">
                            <svg width="30" height="28" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M917.333333 512c-12.8 0-21.333333 8.533333-21.333333 21.333333v85.333334c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333334-21.333333v-85.333334c0-12.8-8.533333-21.333333-21.333334-21.333333zM902.4 433.066667c-4.266667 4.266667-6.4 8.533333-6.4 14.933333 0 2.133333 0 6.4 2.133333 8.533333s2.133333 4.266667 4.266667 6.4c4.266667 4.266667 10.666667 6.4 14.933333 6.4h4.266667c2.133333 0 2.133333 0 4.266667-2.133333 2.133333 0 2.133333-2.133333 4.266666-2.133333s2.133333-2.133333 4.266667-2.133334c2.133333-2.133333 4.266667-4.266667 4.266667-6.4V448c0-6.4-2.133333-10.666667-6.4-14.933333-8.533333-8.533333-21.333333-8.533333-29.866667 0z" fill="" /><path d="M938.666667 298.666667c0-2.133333 0-4.266667-2.133334-8.533334-2.133333-2.133333-2.133333-4.266667-4.266666-6.4l-256-256c-2.133333-2.133333-4.266667-4.266667-6.4-4.266666-2.133333-2.133333-6.4-2.133333-8.533334-2.133334H213.333333C142.933333 21.333333 85.333333 78.933333 85.333333 149.333333v725.333334c0 70.4 57.6 128 128 128h597.333334c70.4 0 128-57.6 128-128v-170.666667c0-12.8-8.533333-21.333333-21.333334-21.333333s-21.333333 8.533333-21.333333 21.333333v170.666667c0 46.933333-38.4 85.333333-85.333333 85.333333H213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V149.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h426.666667v128c0 70.4 57.6 128 128 128h128v42.666667c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333334-21.333333v-64zM682.666667 192V93.866667l183.466666 183.466666H768c-46.933333 0-85.333333-38.4-85.333333-85.333333z" fill="" /><path d="M234.666667 298.666667h277.333333c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333H234.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333334zM768 490.666667H234.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h533.333333c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333zM768 725.333333H234.666667c-12.8 0-21.333333 8.533333-21.333334 21.333334s8.533333 21.333333 21.333334 21.333333h533.333333c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" fill="" /></svg>
                            <span className="sr-only">Resume</span>
                        </button>
                    </ScrollLink>
                </div>
                <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Resume
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div className="flex items-center justify-center">
                    <ScrollLink to="Projects"
                        spy={true}
                        smooth={true}
                        duration={500} className="flex items-center cursor-pointer">
                        <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium  rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"></path>
                            </svg>
                            <span className="sr-only">Resume</span>
                        </button>
                    </ScrollLink>
                </div>
                <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Projects
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <ScrollLink to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500} className="flex items-center cursor-pointer">
                    <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 ">
                        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341" />
                        </svg>
                        <span className="sr-only">Contact</span>
                    </button>
                </ScrollLink>
            </div>
        </div>

    )
}

export default BottomNavigation
