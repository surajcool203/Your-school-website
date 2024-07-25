import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';


function FacultyCard(props) {
  return (
    <motion.div
        className='col-lg-6'
        initial={{opacity: 0, y:100 }}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:1 }}
    >
        <Card
            className='bg-black text-light'
        >
            <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className='text-capitalize text-centre fw-bold my-3'>{props.FacultyName}</Card.Title>
            <Card.Text className='text-centre '>{props.Designation}</Card.Text>
            <Card.Text className='text-centre '>{props.Qualification}</Card.Text>
            <Card.Text className='text-centre '>{props.Experience}</Card.Text>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default FacultyCard;