import React from "react";
import "./Statistic.css";

export function Statistic(props) {
    return(
        <div className="statistic">
            <div className="statistic-div">
                <div className="statistic-text">
                    <h2>Statistics</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquam minus officiis optio qui sapiente?
                    </p>
                </div>
                <div className="statistic-circle">
                    <div className="circle">
                        <p>123</p>
                        <p>STORE</p>
                    </div>
                    <div className="circle">
                        <p>100</p>
                        <p>MENU</p>
                    </div>
                    <div className="circle">
                        <p>200</p>
                        <p>CHEF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}