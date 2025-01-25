"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaEnvelope, FaFolderOpen, FaRegLightbulb } from "react-icons/fa";

const BottomNavigation = () => {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        Events.scrollEvent.register("begin", (to) => {
            setActiveSection(to);
        });

        return () => {
            Events.scrollEvent.remove("begin");
        };
    }, []);

    // Adjust the icon color logic
    const getIconColor = (section) =>
        activeSection === section
            ? "text-black dark:text-white" // Black for light mode, white for dark mode
            : "text-gray-500 dark:text-gray-400";

    const iconVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
        active: { scale: 1.4, transition: { type: "spring", stiffness: 300 } },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed z-50 bottom-2 transform -translate-x-1/2 w-full max-w-lg"
        >
            <div className="bg-white dark:bg-gray-800 shadow-2xl dark:shadow-lg rounded-full px-4 py-3 flex justify-between items-center gap-4 mx-auto">
                {/* Home */}
                <ScrollLink
                    to="Home"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="flex flex-col items-center group"
                >
                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        animate={activeSection === "Home" ? "active" : "initial"}
                        className={`text-2xl transition-colors duration-300 ${getIconColor(
                            "Home"
                        )}`}
                    >
                        <FaHome />
                    </motion.div>
                </ScrollLink>

                {/* About */}
                <ScrollLink
                    to="About"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="flex flex-col items-center group"
                >
                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        animate={activeSection === "About" ? "active" : "initial"}
                        className={`text-2xl transition-colors duration-300 ${getIconColor(
                            "About"
                        )}`}
                    >
                        <FaUser />
                    </motion.div>
                </ScrollLink>

                {/* Skills */}
                <ScrollLink
                    to="Skills"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="flex flex-col items-center group"
                >
                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        animate={activeSection === "Skills" ? "active" : "initial"}
                        className={`text-2xl transition-colors duration-300 ${getIconColor(
                            "Skills"
                        )}`}
                    >
                        <FaRegLightbulb />
                    </motion.div>
                </ScrollLink>

                {/* Projects */}
                <ScrollLink
                    to="Projects"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="flex flex-col items-center group"
                >
                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        animate={activeSection === "Projects" ? "active" : "initial"}
                        className={`text-2xl transition-colors duration-300 ${getIconColor(
                            "Projects"
                        )}`}
                    >
                        <FaFolderOpen />
                    </motion.div>
                </ScrollLink>

                {/* Contact */}
                <ScrollLink
                    to="Footer"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    role="button"
                    className="flex flex-col items-center group"
                >
                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        animate={activeSection === "Footer" ? "active" : "initial"}
                        className={`text-2xl transition-colors duration-300 ${getIconColor(
                            "Footer"
                        )}`}
                    >
                        <FaEnvelope />
                    </motion.div>
                </ScrollLink>
            </div>
        </motion.div>
    );
};

export default BottomNavigation;
