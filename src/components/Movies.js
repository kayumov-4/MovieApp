import React from "react";
import img1 from "../images/1.svg"
import img2 from "../images/2.svg"
import img3 from "../images/3.svg"
import img4 from "../images/4.svg"
import img5 from "../images/5.svg"
import img6 from "../images/6.svg"

// import venom from "../images/venom.jpg"
import { motion } from "framer-motion";
import Genres from "./Genres";
import Actors from "./Actors";


const Movies = () => {
    return (
        <div className="movies">
            <div className="movies_container">
                <motion.div className="movies_top_1"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, delay: 1.5 }}
                >
                    <div className="m_info_1" id="shows">
                        <a href="#shows">Trending TV Shows</a>
                    </div>
                </motion.div>
                <motion.div className="movies_bottom_1"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, delay: 1.5 }}
                >

                    <a href="#"><img src={img1} alt="" /></a>
                    <a href="#"><img src={img2} alt="" /></a>
                    <a href="#"><img src={img3} alt="" /></a>
                    <a href="#"><img src={img4} alt="" /></a>
                    <a href="#"><img src={img5} alt="" /></a>
                    <a href="#"><img src={img6} alt="" /></a>
                </motion.div>
                <motion.div className="movies_top_2"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, delay: 1.5 }}
                >
                    <div className="m_info_2" id="movies">
                        <a href="#">Trending Movies</a>
                    </div>
                </motion.div>
                <motion.div className="movies_bottom_2"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', delay: 1.5 }}
                >
                    <a href="#"><img src={img1} alt="" /></a>
                    <a href="#"><img src={img2} alt="" /></a>
                    <a href="#"><img src={img3} alt="" /></a>
                    <a href="#"><img src={img4} alt="" /></a>
                    <a href="#"><img src={img5} alt="" /></a>
                    <a href="#"><img src={img6} alt="" /></a>
                </motion.div>

                <motion.div className="movies_footer"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', delay: 1.5 }}
                >
                    <a className="footer_sub" href="#">See more</a>
                </motion.div>

                <Genres />
                <Actors />
            </div>
        </div>
    );
}

export default Movies;