import React from "react";
import './NavBar.css';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import BurgerBtn from "./BurgerBtn/BurgerBtn";


function NavBar() {
    return(
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <motion.a
                    className='navbar-brand text-light'
                    href='./'
                    initial={{opacity:0 }}
                    whileInView={{opacity:1 }}
                    transition={{duration:1 }} 
                >
                    <img className="img-fluid rounded-circle mb-2 mx-2" href='#' src={require('../assets/logo.jpg')} style={{width:'80px' , height:'80px'}}/>
                        <span className="text-uppercase fw-bold text-white">Springdale Public School
                        </span>
                </motion.a>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"
                className="p-3 p-lg-0 mt-2 mt-lg-0">
                    <motion.ul 
                        className="navbar-nav me-auto justify-content-end w-100"
                        initial={{opacity:0 }}
                        whileInView={{opacity:1}}
                        transition={{duration:1 }}
                        >
                            <Nav.Link href='#' className="text-light text-uppercase">Home</Nav.Link>
                            <Nav.Link href='#about' className="text-light text-uppercase">About</Nav.Link>
                            <Nav.Link href='#academics' className="text-light text-uppercase">Academics</Nav.Link>
                            <Nav.Link href='#admission' className="text-light text-uppercase">Admission</Nav.Link>
                            <Nav.Link href='#faculty' className="text-light text-uppercase">Faculty</Nav.Link>
                            <Nav.Link href='#students' className="text-light text-uppercase">Students</Nav.Link>
                            <Nav.Link href='#gallery' className="text-light text-uppercase">Gallery</Nav.Link>
                            <Nav.Link href='#contact' className="text-light text-uppercase">Contact</Nav.Link>
                    </motion.ul> 
                    <motion.div
                        className="ms-0 ms-lg-2 mt-3 mt-lg-0"
                        initial={{opacity:0 }}
                        whileInView={{opacity:1}}
                        transition={{duration:1 }}
                    >
                        <BurgerBtn btnTitle=' Join Now'/>
                    </motion.div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;