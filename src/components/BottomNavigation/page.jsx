"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LinkIcon from '@mui/icons-material/Link';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FolderZipIcon from '@mui/icons-material/FolderZip';

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
        <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
                <ScrollLink
                    to="Home" // ID of the Home section
                    smooth={true} // Enable smooth scrolling
                    duration={500}
                    offset={-30} // Offset for fixed header, adjust as needed
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="sr-only">Home</span>
                </ScrollLink>

                <ScrollLink
                    to="About" // ID of the Home section
                    smooth={true} // Enable smooth scrolling
                    duration={500}
                    offset={-30} // Offset for fixed header, adjust as needed
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span class="sr-only">Profile</span>
                </ScrollLink>

                <ScrollLink
                    to="Projects" // ID of the Home section
                    smooth={true} // Enable smooth scrolling
                    duration={500}
                    offset={-30} // Offset for fixed header, adjust as needed
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg className=" text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </ScrollLink>

                <ScrollLink
                    to="Footer" // ID of the Home section
                    smooth={true} // Enable smooth scrolling
                    duration={500}
                    offset={-30} // Offset for fixed header, adjust as needed
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg className=" text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </ScrollLink>




            </div>
        </div >


    )
}

export default BottomNavigation
