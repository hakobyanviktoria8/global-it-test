import React from "react";
import "./Popular.css";

export function Popular(props) {
    return(
        <div className="popularMewnu">
            <h2>Popular Menu</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam minus officiis optio qui sapiente amet.
            </p>
            <div className="popularMewnu-carts">
                <div className="cart">
                    <div className="cart_img">
                        <img src={require("../img/img1.png")} alt=""/>
                    </div>
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="cart">
                    <div className="cart_img">
                        <img src={require("../img/img2.png")} alt=""/>
                    </div>
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="cart">
                    <div className="cart_img">
                        <img src={require("../img/img3.png")} alt=""/>
                    </div>
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}