import React from 'react'
import './FacultySection.css';
import { motion } from 'framer-motion';
import Faculties from '../../assets/Faculties';
import FacultyCard from './FacultyCard';


function FacultySection() {
    return (
        <div className='bg-black text-light py-4 py-sm-5' id='faculty'>
            <div className='container'>
                <motion.h2
                    className='section-title text-center text-capitalize fw-bold mb-4 mb-sm-5'
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1 }}
                    transition={{suration: 1 }}
                > Faculty 
                </motion.h2>
                <div className='row g-4'>
                    {
                        Faculties.map((item) => <FacultyCard key= {item.id} FacultyName={item.FacultyName} Designation={item.Designation} Qualification={item.Qualification} Experience={item.Experience} />)
                    }

                </div>
            </div>
        </div>
      )
}

export default FacultySection