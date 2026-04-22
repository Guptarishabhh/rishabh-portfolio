import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../Data/ProjectsData';

// FIXED: Correct path to your assets folder
import profile from '../assets/proj1.jpg'; 

const Projects = () => {
    // If you have specific images for each project, import them individually at the top
    // and replace 'profile' with those variable names below.
    const displayProjects = projectsData && projectsData.length > 0 ? projectsData : [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A professional portfolio built with React and Tailwind CSS.",
            image: profile, // This uses the imported image above
            tech: ["React", "Tailwind", "Framer"]
        },
        {
            id: 2,
            title: "Full-Stack Dating App",
            description: "A dating platform with real-time chat and user profiles.",
            image: profile,
            tech: ["Node.js", "MongoDB", "React"]
        },
        {
            id: 3,
            title: "WordPress Blog",
            description: "Custom theme development for a modern tech blog.",
            image: profile,
            tech: ["PHP", "WordPress", "MySQL"]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='projects'
            className='py-24 bg-[#121212]'
        >
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        My <span className='text-purple-500'>Projects</span>
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        A selection of my recent work, ranging from full-stack applications to modern web designs.
                    </p>
                    <div className='h-1 w-20 bg-purple-500 mx-auto mt-6 rounded-full' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                    {displayProjects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;