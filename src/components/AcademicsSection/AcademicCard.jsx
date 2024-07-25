import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';


function AcademicCard(props) {
  return (
    <motion.div 
        className='col-lg-4'
        initial={{opacity: 0 ,y:100}}
        whileInView={{opacity: 1,y:0 }}
        transition={{duration: 1 }}
        whileHover={{scale:1.1}}
    >
        <Card className={props.item}>
            <Card.Body className='d-flex flex-column align-items-centre justify-content-centre'>
            <h4 className='fw-bold mt-2'>{props.item}</h4>
            <h4 className=' mt-2'>{props.subjects}</h4>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default AcademicCard;