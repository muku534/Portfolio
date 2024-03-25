"use client";

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                // Optionally, you can reset the form fields here
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <div id="Contact">
            <section className="text-gray-400 body-font relative">
                <div className="flex items-center justify-center">
                    <p className="mt-20 text-4xl sm:text-5xl text-3xl font-extrabold text-gray-800">Get in Touch</p>
                </div>
                <hr className="w-48 h-1 mx-auto my-2 bg-indigo-300 border-0 rounded md:my-1 dark:bg-indigo-300" />
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">Introduction</h2>
                                <p className="mt-1">As a junior React Native developer and MCA student, I&apos;m passionate about building innovative mobile applications and learning new technologies. Let&apos;s collaborate and create something awesome together!</p>
                                <ScrollLink
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="text-indigo-400 mt-4 inline-flex items-center">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Form</h2>
                        <p className="leading-relaxed mb-5">Send me a message directly through this contact form:</p>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Your Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Your Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-100 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Your Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full rounded border border-gray-400 bg-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
                        </form>
                        <p className="text-xs text-gray-400 text-opacity-90 mt-3">Looking forward to hearing from you!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
