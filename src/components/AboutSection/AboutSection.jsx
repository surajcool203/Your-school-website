import React from 'react';
import './AboutSection.css';
import { motion } from 'framer-motion';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

function AboutSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='about'>
        <div className='container'>
            <div className='flex-column-reverse flex-lg-row row'>
                <motion.div
                    className='col-lg-6 d-flex justify-content-center'
                    initial={{opacity:0 , x:350 }}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:1 }}
                    >   
                    <h2 className='section-title text-capitalize fw-bold'>About <span className='text-purple'>Us</span></h2>
                    </motion.div>
                <motion.div 
                    className='col-lg-6 d-flex flex-column justify-content-center align-items-start'
                    initial={{opacity:0 , x:-300 }}
                    whileInView={{opacity:1, x:0 }}
                    transition={{duration:1 }}
                >
                    {/* <h2 className='section-title text-capitalize fw-bold'>About <span className='text-purple'>Us</span></h2> */}
                    <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
To create a learning environment that fosters academic excellence, critical thinking, and ethical values
To empower students with the knowledge, skills, and values needed to thrive in a dynamic world
At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.State-of-the-art Spacious and well-equipped classrooms,Library with a vast collection of books and digital resources ,Sports facilities including a playground, gymnasium, and swimming pool
</p>
                    <BurgerBtn btnTitle='More About Us'/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection;