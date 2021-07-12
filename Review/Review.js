import React from "react";
import "./Review.css";

export function Review(props) {
    return(
        <div className="review">
            <div className="cart_img">
                <img src={require("../img/review.jpg")} alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing dolor
                sit amet, consectetur adipisicing elit. Aliquam is
                minus officiis optio quiipsum dolor amet.
            </p>
            <h3>Phoebe Frazier</h3>
        </div>
    )
}