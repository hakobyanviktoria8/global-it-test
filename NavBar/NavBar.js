import React from "react";
import "./NavBar.css";

export function NavBar(props) {
    return(
        <div className="navBar">
            <a href="#">
                <div className="logo">
                    <img src={require("../img/logo.png")} alt=""/>
                    <span> YOUR LOGO</span>
                </div>
            </a>
            <div><a href="#">Home</a></div>
            <div><a href="#">Product</a></div>
            <div><a href="#">Promo</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Contact</a></div>
            <div className="search">
                <a href="#"><img src={require("../img/search.png")} alt=""/></a>
            </div>
        </div>
    )
}