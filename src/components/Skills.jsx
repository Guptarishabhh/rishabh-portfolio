import React from 'react'
import { motion } from 'framer-motion'
import { Atom, Server, Database, Cloud, Wrench } from 'lucide-react';
import { SiWordpress } from "react-icons/si";

const Skill = () => {
    const skills = [
        { 
            title: "Frontend Development", 
            icon: Atom, 
            description: "Building responsive and interactive user interfaces with modern frameworks.",
            tags: ["React", "Next.js", "Tailwind", "HTML/CSS"]
        },
        { 
            title: "Backend Development", 
            icon: Server, 
            description: "Designing scalable server-side logic and RESTful APIs.",
            tags: ["Node.js", "Express", "PhP"]
        },
        { 
            title: "Database Management 📁", 
            icon: Database, 
            description: "Designing and optimizing databases for performance and scalability.",
            tags: ["MongoDB", "MYSQL", "SQL"]
        },
        { 
            title: "WordPress Development", 
            icon: SiWordpress, 
            description: "Custom themes and plugin development.",
            tags: ["PHP", "Elementor", "CMS"]
        },
        { 
            title: "Frameworks 🚀", 
            icon: Cloud, 
            description: "Frameworks simplifies development by providing predefined architecture and Reusable components.",
            tags: ["React", "Jquery", "Bootstrap", "Wordpress"]
        },
        { 
            title: "Presentation Tools ", 
            icon: Wrench, 
            description: "Essential tools and technologies I use in my development workflow.",
            tags: ["Git", "Github", "VS CODE"]
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='py-20 bg-[#121212]'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4 text-white'>
                    My <span className='text-purple-500'>Skills</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Technologies I work with to bring ideas to life
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {skills.map((skill, index) => (
                        <div key={index} className='bg-[#262626] rounded-2xl p-8 hover:-translate-y-2 hover:bg-[#2d2d2d] transition-all duration-300 cursor-pointer flex items-start border border-white/5'>
                            
                            {/* Icon Column */}
                            <div className="flex-shrink-0 mr-6 mt-1">
                                <skill.icon className='w-10 h-10 text-purple-500' strokeWidth={1.5} />
                            </div>
                            
                            {/* Content Column */}
                            <div className="flex flex-col">
                                <h3 className='text-2xl font-bold text-gray-100 mb-2'>
                                    {skill.title}
                                </h3>
                                
                                <p className='text-lg text-gray-400 mb-5 leading-relaxed'>
                                    {skill.description}
                                </p>

                                <div className='flex flex-wrap gap-2'>
                                    {skill.tags.map((tech) => (
                                        <span key={tech} className='text-[13px] uppercase tracking-wider
                                         font-bold bg-[#2d2d2d] text-purple-400 px-3 py-1
                                          rounded-full border border-purple-500/20'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Skill