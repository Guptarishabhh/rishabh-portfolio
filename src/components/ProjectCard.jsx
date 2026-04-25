import React from 'react';

// Added demoLink and codeLink to the props destructuring
const ProjectCard = ({ title, description, image, tech, demoLink, codeLink }) => {
    return (
        <div className='group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-3 shadow-2xl'>

           {/* Image Container */}
            <div className='relative h-60 overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Dark overlay that fades on hover */}
                <div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500' />
            </div>

            {/* Content Section */}
            <div className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-5 group-hover:text-purple-400 
                transition-colors'>
                    {title}
                </h3>

                <p className='text-gray-400 text-lg mb-6 leading-relaxed line-clamp-2'>
                    {description}
                </p>

                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2'>
                    {tech?.map((item, index) => (
                        <span
                            key={index}
                            className='text-[12px] uppercase tracking-widest font-bold bg-[#121212]
                             text-purple-400 px-3 py-1.5 rounded-lg border border-purple-500/10 mb-4'
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Updated Action Buttons */}
                <div className='flex gap-2'>
                    <a 
                        href={demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex-1 text-center px-6 py-2 bg-purple-500 rounded-lg text-white
                        font-medium hover:bg-purple-700 transition duration-300'
                    >
                        View Demo
                    </a>
                    <a 
                        href={codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex-1 text-center px-4 py-2 border border-purple-500 text-white font-medium 
                        rounded-lg hover:bg-purple-500/20 transition duration-300'
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;