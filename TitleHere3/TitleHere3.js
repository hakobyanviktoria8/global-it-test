import React from "react";
import "./TitleHere3.css";

export function TitleHere3(props) {
    return(
        <div className="titleHere3">
            <h2>Title Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing sapiente elit.
                Aliquam minus officiis sit amet, optio qui sapiente.
            </p>
            <div className="titleHere3-email">
                <input type="email" placeholder="Your Email"/>
                    <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}