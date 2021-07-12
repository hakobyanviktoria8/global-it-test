import React from "react";
import "./TitleHere1.css";

export function TitleHere1(props) {
    return(
        <div className="titleHere1">
            <div className="titleHere1-div">
                <div className="titleHere1-img">
                    <img src={require("../img/img1.png")} alt=""/>
                </div>
                <div className="titleHere1-text">
                    <h2>Title Here</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquam minus
                        officiis optio qui sapiente?
                    </p>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </div>
    )
}