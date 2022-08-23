import React from "react";
import img1 from "../images/1.svg"
import img2 from "../images/2.svg"
import img3 from "../images/3.svg"
import img4 from "../images/4.svg"
import img5 from "../images/5.svg"
import img6 from "../images/6.svg"
import film1 from "../images/film1.svg"
import film2 from "../images/film2.svg"
import film3 from "../images/film3.svg"
import film4 from "../images/film4.svg"
import film5 from "../images/film5.svg"
import film6 from "../images/film6.svg"
import film7 from "../images/film7.svg"
import film8 from "../images/film8.svg"
import act1 from "../images/act1.svg"
import act2 from "../images/act2.svg"
import act3 from "../images/act3.svg"
import act4 from "../images/act4.svg"
import act5 from "../images/act5.svg"
import act6 from "../images/act6.svg"
// import venom from "../images/venom.jpg"
import { motion } from "framer-motion";


const Movies = () => {
    return (
        <div className="movies">
            <div className="movies_container">
                <motion.div className="movies_top_1"
                    initial={{x: "100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', stiffness: 70, delay: 1.5}}
                >
                    <div className="m_info_1" id="shows">
                        <a href="#shows">Trending TV Shows</a>
                    </div>
                </motion.div>
                <motion.div className="movies_bottom_1"
                    initial={{x: "100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', stiffness: 70, delay: 1.5}}
                >
                    <a href="#"><img src={img1} alt="" /></a>
                    <a href="#"><img src={img2} alt="" /></a>
                    <a href="#"><img src={img3} alt="" /></a>
                    <a href="#"><img src={img4} alt="" /></a>
                    <a href="#"><img src={img5} alt="" /></a>
                    <a href="#"><img src={img6} alt="" /></a>
                </motion.div>
                <motion.div className="movies_top_2"
                    initial={{x: "-100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', stiffness: 70, delay: 1.5}}
                >
                    <div className="m_info_2" id="movies">
                        <a href="#">Trending Movies</a>
                    </div>
                </motion.div>
                <motion.div className="movies_bottom_2"
                    initial={{x: "-100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', delay: 1.5}}
                >
                    <a href="#"><img src={img1} alt="" /></a>
                    <a href="#"><img src={img2} alt="" /></a>
                    <a href="#"><img src={img3} alt="" /></a>
                    <a href="#"><img src={img4} alt="" /></a>
                    <a href="#"><img src={img5} alt="" /></a>
                    <a href="#"><img src={img6} alt="" /></a>
                </motion.div>
                <motion.div className="movies_footer"
                    initial={{x: "-100vw"}}
                    animate={{x: 0}}
                    transition={{type: 'spring', delay: 1.5}}
                >
                    <a className="footer_sub" href="#">See more</a>
                </motion.div>
                <div className="genres">
                    <div className="genres_txt">
                        <a href="#">Popular Genres</a>
                    </div>
                    <motion.div className="film_genres_1"
                        initial={{x: "-100vw"}}
                        animate={{x: 0}}
                        transition={{type: 'spring', delay: 1.5}}
                    >
                        <div className="film_genre1">
                            <a href="#"><img src={film1}alt="" /></a>
                            <p>Romance</p>
                        </div>
                        <div className="film_genre2">
                            <a href="#"><img src={film2}alt="" /></a>
                            <p>Drama</p>
                        </div>
                        <div className="film_genre3">
                            <a href="#"><img src={film3}alt="" /></a>
                            <p>Historical</p>
                        </div>
                        <div className="film_genre4">
                            <a href="#"><img src={film4}alt="" /></a>
                            <p>Action</p>
                        </div>
                    </motion.div>
                    <motion.div className="film_genres_2"
                        initial={{x: "100vw"}}
                        animate={{x: 0}}
                        transition={{type: 'spring', delay: 1.5}}
                    >
                    <div className="film_genre5">
                            <a href="#"><img src={film5}alt="" /></a>
                            <p>Sci-fi</p>
                        </div>
                        <div className="film_genre6">
                            <a href="#"><img src={film6}alt="" /></a>
                           
                        </div>
                        <div className="film_genre7">
                            <a href="#"><img src={film7}alt="" /></a>
                            <p>Comedy</p>
                        </div>
                        <div className="film_genre8">
                            <a href="#"><img src={film8}alt="" /></a>
                            <p>Documentary</p>
                        </div>
                    </motion.div>   
                    <div className="actors">
                        <div className="actors_container">
                            <motion.div className="actors_txt"
                                initial={{x: "-100vw"}}
                                animate={{x: 0}}
                                transition={{type: 'spring', delay: 1.5}}
                                >
                                <a href="#">Popular Actors And Directors</a>
                            </motion.div>
                            <motion.div className="actors_img"
                                initial={{x: "100vw"}}
                                animate={{x: 0}}
                                transition={{type: 'spring', delay: 1.5}}
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
                </div>
            </div>
        </div>
    );
}
 
export default Movies;