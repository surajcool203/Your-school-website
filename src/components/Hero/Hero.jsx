import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';


function Hero() {
  return (
    <header className='h-100 min-vh-100 d-flex align-items-center'>
        <div className='container'>
            <div className='row'>
                <motion.div
                className='col-md-6 d-flex flex-column
                justify-content-start align-items-center align-items-sm-start'
                initial={{opacity:0, x:-300}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 1 }}
                >
                    <h2 className='hero-subtitle text-light text-center text-sm-start text-uppercase'>Welcome to </h2>
                    <h1 className='hero-title text-light text-centre text-sm-start fw-bold text-uppercase lh-1'>Springdale Public School</h1>
                    <p className='text-center text-sm-start text-light'>, where we nurture young minds for a brighter future.</p>
                    <div>
                        <button className='btn btn-light btn-lg rounded-0 text-capitalize me-3'>Get Started</button>
                        <button className='btn btn-outline-light btn-lg rounded-0 text-capitalize'>Take Admission</button>
                    </div>
                </motion.div>
            </div>
        </div>
    </header>
  )
}

export default Hero;