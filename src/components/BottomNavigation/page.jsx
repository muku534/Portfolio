"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import LinkIcon from '@mui/icons-material/Link';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const BottomNavigation = () => {
    // State to track the active section
    const [activeSection, setActiveSection] = useState('Home');

    // Effect to track active section changes
    useEffect(() => {
        Events.scrollEvent.register('begin', function (to) {
            setActiveSection(to);
        });

        // Cleanup to prevent memory leaks
        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, []);

    // Function to determine the icon color based on the active section
    const getIconColor = (section) => {
        return activeSection === section ? 'text-blue-600' : 'text-gray-500';
    };

    return (
        <div className="fixed z-50 w-full h-12 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-2 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
                <ScrollLink
                    to="Home" // ID of the Home section
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <HomeOutlinedIcon className={`mb-1 ${getIconColor('Home')} dark:text-gray-400 group-hover:${getIconColor('Home')}`} />
                    <span className="sr-only">Home</span>
                </ScrollLink>

                <ScrollLink
                    to="About" // ID of the About section
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <ConnectWithoutContactIcon className={`mb-1 ${getIconColor('About')} dark:text-gray-400 group-hover:${getIconColor('About')}`} />
                    <span className="sr-only">Profile</span>
                </ScrollLink>

                <ScrollLink
                    to="Projects" // ID of the Projects section
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <AccountTreeIcon className={`mb-1 ${getIconColor('Projects')} dark:text-gray-400 group-hover:${getIconColor('Projects')}`} />
                    <span className="sr-only">Projects</span>
                </ScrollLink>

                <ScrollLink
                    to="Footer" // ID of the Footer section
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="inline-flex flex-col items-center justify-center px-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <LinkIcon className={`mb-1 ${getIconColor('Footer')} dark:text-gray-400 group-hover:${getIconColor('Footer')}`} />
                    <span className="sr-only">Link</span>
                </ScrollLink>
            </div>
        </div>
    );
}

export default BottomNavigation;
