import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../Data/ProjectsData';
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id='projects'
            className='py-24 bg-[#121212]'
        >
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        My <span className='text-purple-500'>Projects</span>
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        A selection of my recent work, including my new full-stack E-commerce application.
                    </p>
                    <div className='h-1 w-20 bg-purple-500 mx-auto mt-6 rounded-full' />
                </div>

                {/* Grid Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <ProjectCard 
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                tech={project.tech}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className='text-center mt-12 '>
                    <a href="#" className='inline-flex items-center px-6 py-3 border border-purple
                    rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'>
                        <span>View more projects</span>
                        <FaArrowRight className='ml-2 ' />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;