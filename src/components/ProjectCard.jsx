import React from 'react';

const ProjectCard = ({ title, description, image, tech }) => {
    return (
        <div className='group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-3 shadow-2xl'>

            {/* Image Container */}
            <div className='relative h-60 overflow-hidden'>
                       
                {/* Dark overlay that fades on hover */}
                <div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500' />
            </div>

            {/* Content Section */}
            <div className='p-8'>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors'>
                    {title}
                </h3>

                <p className='text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2'>
                    {description}
                </p>

                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2'>
                    {tech?.map((item, index) => (
                        <span
                            key={index}
                            className='text-[10px] uppercase tracking-widest font-bold bg-[#121212] text-purple-400 px-3 py-1.5 rounded-lg border border-purple-500/10'
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;