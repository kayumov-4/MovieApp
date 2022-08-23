import React from "react";
import Logo from "../images/logo.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_div">
                    <a href="#"><img src={Logo} alt="" /></a>
                    <a href="#"><br /> Voice over and Subtitle <br />Media Center <br />Privacy <br />Contact us</a>
                    <a href="#">Voice Description <br />Investor Relations <br />Legal Provisions</a>
                    <a href="#">Help Center <br />Job Opportunities <br />Cookies Preferences</a>
                    <a href="#">Gift Cards <br />Terms of Use <br />Corporate Informations</a>
                </div>
                
            </div>
        </div>  
    );
}
 
export default Footer;