import React from 'react'
import film1 from "../images/film1.svg"
import film2 from "../images/film2.svg"
import film3 from "../images/film3.svg"
import film4 from "../images/film4.svg"
import film5 from "../images/film5.svg"
import film6 from "../images/film6.svg"
import film7 from "../images/film7.svg"
import film8 from "../images/film8.svg"
import { motion } from "framer-motion";
export default function Genres() {
    return (
        <div className="genres">
            <div className="genres_txt">
                <a href="#">Popular Genres</a>
            </div>
            <motion.div className="film_genres_1"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', delay: 1.5 }}
            >
                <div className="film_genre1">
                    <a href="#"><img src={film1} alt="" /></a>
                    <p>Romance</p>
                </div>
                <div className="film_genre2">
                    <a href="#"><img src={film2} alt="" /></a>
                    <p>Drama</p>
                </div>
                <div className="film_genre3">
                    <a href="#"><img src={film3} alt="" /></a>
                    <p>Historical</p>
                </div>
                <div className="film_genre4">
                    <a href="#"><img src={film4} alt="" /></a>
                    <p>Action</p>
                </div>
            </motion.div>
            <motion.div className="film_genres_2"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', delay: 1.5 }}
            >
                <div className="film_genre5">
                    <a href="#"><img src={film5} alt="" /></a>
                    <p>Sci-fi</p>
                </div>
                <div className="film_genre6">
                    <a href="#"><img src={film6} alt="" /></a>

                </div>
                <div className="film_genre7">
                    <a href="#"><img src={film7} alt="" /></a>
                    <p>Comedy</p>
                </div>
                <div className="film_genre8">
                    <a href="#"><img src={film8} alt="" /></a>
                    <p>Documentary</p>
                </div>
            </motion.div>
        </div>

    )
}

