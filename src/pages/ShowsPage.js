import React from "react";
import venom2 from "../images/venom2.jpg";
import Navbar from "../components/Nav";
const ShowsPage = () => {
    return ( 
        <>
        <Navbar />
            <div className="shows">
                <div className="shows_container">
                    <h1>Shows Page</h1>
                    <div className="shows_top_1">
                        <div className="shows_p1">
                            <a href="#">Trending TV Shows</a>
                        </div>
                    </div>
                    <div className="shows_img_1">
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                    </div>
                    <div className="shows_top_2">
                        <div className="shows_p2">
                            <a href="#">Trending Movies</a>
                        </div>
                    </div>
                    <div className="shows_img_2">
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                        <a href="#"><img src={venom2} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ShowsPage;