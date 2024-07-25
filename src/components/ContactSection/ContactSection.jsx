import React from 'react';
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import BurgerBtn from '../BurgerBtn/BurgerBtn'

function ContactSection() {
  return (
    <div className='bg-purple text-black py-4 py-sm-5 ' id='contact'>
        <div className='container d-flex justify-content-around align-items-centre'>
            <motion.h2
                className='section-title fw-bold text-capitalize text-centre mb-4 mb-sm-5 '
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{duration:1 }}
            >
                Contact <span className='tect-light'>us</span>
            </motion.h2>
            <div className='d-flex flex-column '>
                <ul>
                    <li className='d-flex flex-row'><h5> Address</h5> <p className='mx-2'>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p></li>

                    <li className='d-flex flex-row'><h5> Phone</h5> <p className='mx-2'>+1 (123) 456-7890</p></li>

                    <li className='d-flex flex-row'><h5> Email</h5> <p className='mx-2'>info@springdale.edu</p></li>

                </ul>
            </div>
            <motion.form 
                className='contact-form w-50'
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1}}
            >   
                <Form.Group
                    className='mb-3'>
                        <Form.Label className='text-capitalize'>Full Name</Form.Label>
                        <Form.Control className='rounded-0' type='text'/>
                </Form.Group>

                <Form.Group
                    className='mb-3'>
                        <Form.Label className='text-capitalize'>Email Address</Form.Label>
                        <Form.Control className='rounded-0' type='text'/>
                </Form.Group>

                <Form.Group
                    className='mb-3'>
                        <Form.Label className='text-capitalize'>Your Message</Form.Label>
                        <Form.Control className='rounded-0' as='textarea' rows={3}/>
                </Form.Group>
                <BurgerBtn btnTitle = 'submit'/>
            </motion.form>
        </div>
    </div>
  )
}

export default ContactSection