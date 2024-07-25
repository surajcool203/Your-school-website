import React from 'react';
import './AcademicSection.css';
import { motion } from 'framer-motion';
import Curriculum from '../../assets/Curriculum';
import AcademicCard from './AcademicCard';

function AcademicSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='academics'>
        <div className='container'>
            <motion.h2
                className='section-title text-center text-capitalize fw-bold mb-4 mb-sm-5'
                initial={{opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{duration: 1 }}
            >
                Academics
            </motion.h2>
            <div className='row d-flex align-items-centre g-4 '>
              {
                Curriculum.map((item) => <AcademicCard key={item.id}
                subjects = {item.subjects} item = {item.item} />)
              }
            </div>
        </div>

    </div>
  )
}

export default AcademicSection;