import React from 'react'
import { motion } from 'framer-motion'
import rishu from '../assets/rishu.jpg'
import { CodeXml, Lightbulb, Paintbrush } from 'lucide-react';

const About = () => {

    const aboutInfo = [
        {
            icons: Lightbulb,
            title: "Innovative",
            description: "I love creating unique solutions to complex problems with cutting-edge technologies."
        },
        {
            icons: Paintbrush,
            title: "Design Oriented",
            description: "Beautiful design and user experience are at the heart of everything I create."
        },
        {
            icons: CodeXml,
            title: "Clean Code",
            description: "I write maintainable, efficient code following best practices and modern patterns."
        }
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className=' w-full py-20 bg-[#1a1a1a]'
        >
            <div className='container mx-0  px-6'>

                {/*-------heading-------*/}

                <h2 className='text-3xl font-bold  text-center mb-4 '>
                    About
                    <span className='text-purple-500'>Me</span>
                </h2>
                <p className='text-gray-400 text-center mx-w-2xl mx-auto mb-16'>Get to know more
                    about my Background and Passion </p>
                {/*------image + my journey ------*/}

                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/*----image----*/}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden '>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={rishu} alt="rishu" />
                    </div>
                    {/*----text-content----*/}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2 '
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6 '>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I'm passionate full-stack Developer with over 1.5 years of experience
                                creating digital solutions for buissness around the world. My journey
                                started with basics HTML/CSS websites and has evolved in to building complex
                                web applications with modern Frameworks.
                            </p>
                            <p className='text-gray-300 mb-12'>When i m not coding , you can find me exploring new technologies,
                                contributions to open-source projects or sharing my knowlwdge through
                                tech and tutorials. I believe in continious learning and pushing the boundaries
                                of what's possible on the web.
                            </p>
                            {/*----cards-----*/}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-[#2d2d2d] rounded-2xl p-6 transition-transform duration-300
                                         hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-purple-500 text-5xl mb-4'>
                                                <data.icons size={50} />
                                            </div>
                                            <h3 className="text-white text-2xl font-bold mb-2 hover:text-purple-400 transition">{data.title}</h3>
                                            <p>{data.description}</p>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default About