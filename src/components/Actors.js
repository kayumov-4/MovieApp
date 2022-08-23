import React from 'react';
import { motion } from "framer-motion";
import act1 from "../images/act1.svg"
import act2 from "../images/act2.svg"
import act3 from "../images/act3.svg"
import act4 from "../images/act4.svg"
import act5 from "../images/act5.svg"
import act6 from "../images/act6.svg"
import '../styles/style.scss'
const Actors = () => {
    return (
                <div className="actors">
                    <div className="actors_container">
                        <motion.div className="actors_txt"
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', delay: 1.5 }}
                        >
                            <a href="#">Popular Actors And Directors</a>
                        </motion.div>
                        <motion.div className="actors_img"
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', delay: 1.5 }}
                        >
                            <div className="actor1">
                                <a href="#"><img src={act1} alt="" /></a>
                                <p>Samantha Bowen</p>
                            </div>
                            <div className="actor2">
                                <a href="#"><img src={act2} alt="" /></a>
                                <p>Rhys Birch</p>
                            </div>
                            <div className="actor3">
                                <a href="#"><img src={act3} alt="" /></a>
                                <p>James Holloway</p>
                            </div>
                            <div className="actor4">
                                <a href="#"><img src={act4} alt="" /></a>
                                <p>Joshua Walton</p>
                            </div>
                            <div className="actor5">
                                <a href="#"><img src={act5} alt="" /></a>
                                <p>Patrick Elliott</p>
                            </div>
                            <div className="actor6">
                                <a href="#"><img src={act6} alt="" /></a>
                                <p>Morgan O'Neill</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

    );
}

export default Actors;
