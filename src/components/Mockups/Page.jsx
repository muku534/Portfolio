import React, { useState } from 'react';
import Image from 'next/image';

export default function Mockup({ project }) {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

    // Fallback when image is not available
    const fallbackMessage = "No mockup available";

    const handleNextImage = () => {
        if (project.mockups && currentIndex < project.mockups.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevImage = () => {
        if (project.mockups && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-full relative">
            {/* Device Mockup Container */}
            {/* <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[250px] shadow-lg overflow-y-auto scrollbar-hide"> */}
                {/* <div className="rounded-[2rem] overflow-hidden w-[250px] h-[470px] bg-white dark:bg-gray-800 flex justify-center items-center"> */}
                    <div className="overflow-y-auto h-full flex justify-center items-center">
                        {/* Conditionally Render Image or Message */}
                        {project && project.mockups && project.mockups.length > 0 ? (
                            <div className="w-full h-full justify-center items-center pr-2">
                                <Image
                                    src={project.mockups[currentIndex]} // Use the current image based on index
                                    alt={`Project Mockup ${currentIndex + 1}`}
                                    width={230}  // Specify a width
                                    height={225} // Specify a height
                                    className="rounded-md"
                                    objectFit="contain"
                                />
                            </div>
                        ) : (
                            <div className="text-center text-gray-600 dark:text-gray-300 pr-5">
                                <p className="text-lg font-semibold">{fallbackMessage}</p>
                            </div>
                        )}
                    </div>
                {/* </div> */}
            {/* </div> */}

            {project && project.mockups && project.mockups.length > 0 && (
                <>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-1">
                        <button
                            onClick={handlePrevImage}
                            disabled={currentIndex === 0}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Prev
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-1">
                        <button
                            onClick={handleNextImage}
                            disabled={currentIndex === (project.mockups ? project.mockups.length - 1 : 0)}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
