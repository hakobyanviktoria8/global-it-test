import React from "react";
import "./Footer.css";

export function Footer(props) {
    return(
        <div className="footer">
            <div className="footer-one">
                <h4>Title Here</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing sapiente elit.
                    Aliquam minus officiis sit ametconsectetur adipisicing sapiente elit. optio qui sapiente.
                </p>
                <div className="icons">
                    <a href="#" className="icon"><img src={require("../img/facebook.png")} alt=""/></a>
                    <a href="#" className="icon"><img src={require("../img/twitter.png")} alt=""/></a>
                    <a href="#" className="icon"><img src={require("../img/whatsapp.png")} alt=""/></a>
                    <a href="#" className="icon"><img src={require("../img/instagram.png")} alt=""/></a>
                </div>
            </div>
            <div className="footer-two">
                <h4>About</h4>
                <h5>History</h5>
                <h5>Our Team</h5>
                <h5>Brand Guidelines</h5>
                <h5>Terms&Condition</h5>
                <h5>Privacy Policy</h5>
            </div>
            <div className="footer-three">
                <h4>Services</h4>
                <h5>History</h5>
                <h5>Our Team</h5>
                <h5>Brand Guidelines</h5>
                <h5>Terms&Condition</h5>
                <h5>Privacy Policy</h5>
            </div>
            <div className="footer-fore">
                <h4>Other</h4>
                <h5>Contact Us</h5>
                <h5>Help</h5>
                <h5>Privacy </h5>
            </div>
        </div>
    )
}