import React from "react";
// import Banner from "../images/banner.svg";
import Star from "../images/star.svg";
import Zack from "../images/zack.jpg";

const Main = () => {
  return (
        <div className="main">       
          <div className="main_container">
            <div className="main_left">
              <div className="main_p">
                <p>Zack Snyder's <br /> Justice League</p>
              </div>
              <div className="main_rating">
                <p>2021</p>
                <p>18+</p>
                <p>4h 2min</p>
                <p>8.8</p>
                <img src={Star} alt="" />
              </div>
              <div className="main_info">
              <p><br /><br /> Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.</p>
              </div>
              <div className="main_btns">
                <a className="play" href="#">Watch</a>
                <a className="more" href="#">More information</a>
              </div>
              
            </div>
            <div className="main_right">
              <img src={Zack} alt="" />
            </div>
          </div>
       </div>
  )
}

export default Main;
