import React from "react";
import "./Site1.css";
// import "./style.css";
import {NavBar} from "./NavBar/NavBar";
import {Header} from "./Header/Header";
import {Popular} from "./Popular/Popular";
import {TitleHere1} from "./TitleHere1/TitleHere1";
import {Statistic} from "./Statistic/Statistic";
import {TitleHere2} from "./TilteHere2/TitleHere2";
import {Review} from "./Review/Review";
import {TitleHere3} from "./TitleHere3/TitleHere3";
import {Footer} from "./Footer/Footer";

export function Site1(props) {
    return(
        <div className={"container"}>
            <NavBar/>
            <Header/>
            <Popular/>
            <TitleHere1/>
            <Statistic/>
            <TitleHere2/>
            <Review/>
            <TitleHere3/>
            <Footer/>
        </div>
    )
}