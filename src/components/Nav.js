import React from "react";
import Logo from "../images/logo.svg";
import Search from "../images/search.svg";
import Notification from "../images/notification.svg";
import Profile from "../images/profile.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
        <>
        <div className="navbar">
            <div className="nav_container">
                <motion.div className="nav_left"
                    initial={{x: "-100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', stiffness: 70, delay: 0.5}}
                >
                    <a href="#"><img src={Logo} alt="" /></a>
                </motion.div>
                <motion.div className="nav_center"
                    initial={{y: "-5vw"}}
                    animate={{y: 0}}
                    transition={{type: 'spring', delay: 0.5}}
                >
                    <div className="span_nav">
                        <a href="#" className="active">Home</a>
                        <div className="underline"></div>
                    </div>
                    <a href="#shows">TV Shows</a>
                    <a href="#movies">Movies</a>
                    <a  href="#">Series</a>
                </motion.div>
                <motion.div className="nav_right"
                    initial={{x: "100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', stiffness: 70, delay: 0.5}}
                >
                    <a href="#"><img src={Search} alt="" /></a>
                    <a href="#"><img src={Notification} alt="" /></a>
                    <a href="#"><img src={Profile} alt="" /></a>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Navbar;
