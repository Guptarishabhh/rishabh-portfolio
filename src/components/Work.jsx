'use client'; // Required if you are using Next.js
import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
    const WorkData = [
        {
            title: "Full stack Developer",
            company: "Techno thrive Solutions",
            duration: "2025 - 2026 March",
            description: [
                "Successfully completed Full Stack Development training.",
                "Developed Responsive Web Design (RWD) and ensured cross-browser compatibility.",
                "Gained basic knowledge of PHP, MySQL, and Object-Oriented Programming concepts.",
                "Implemented frontend-backend integration and performed database management for real-world projects.",
                " Knowledge of WordPress development, theme customization, Basic Plugins and CMS management."
            ]
        },
        {
            title: "Web Developer Intern",
            company: "MY JOB GROW, Techfest IIT Bombay (Online)",
            duration: "Nov 2024 - Jan 2025",
            description: [
                "Acquired practical knowledge of front-end web technologies including HTML5, CSS3,JavaScript, and Bootstrap framework",
                " Designed and developed a responsive Website capable of displaying real-time data.",
                " Strengthened problem-solving and  skills through hands-on project development"
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id='experience'
            className='py-24 bg-[#1a1a1a] min-h-screen text-white'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Work <span className='text-purple-500'>Experience</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    My professional journey so far
                </p>

                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'>
                        {WorkData.map((data, index) => (
                            <div key={index} className='relative pl-12 before:content-[""] 
                                before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full 
                                before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                
                                <div className='absolute left-[-11px] top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-[#1a1a1a]'></div>

                                <div className='bg-[#2d2d2d] rounded-2xl p-6'>
                                    <div className='flex flex-col md:flex-row justify-between items-start mb-2 gap-2'>
                                        <h3 className='text-xl font-semibold'>{data.title}</h3>
                                        <span className='px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-xs md:text-sm whitespace-nowrap'>
                                            {data.duration}
                                        </span>
                                    </div>
                                    <p className='text-purple-400 mb-4'>{data.company}</p>
                                    
                                    <ul className='list-disc ml-4 space-y-2'>
                                        {/* Added Array.isArray check to prevent blank screen crash */}
                                        {Array.isArray(data.description) ? (
                                            data.description.map((point, i) => (
                                                <li key={i} className='text-gray-400 text-sm leading-relaxed'>
                                                    {point}
                                                </li>
                                            ))
                                        ) : (
                                            <li className='text-gray-400 text-sm'>{data.description}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;