import React from "react";
import MyProfile from "./MyProfile/MyProfile";
import Header from "../Commun/Header/header";
import Footer from "../Commun/Footer/footer";
import Cards from "../Commun/Cards/Cards";
import { cards } from "../Data/Data";
import "../Homepage/home.css"
import "./lancerProfile.css";

const LancerProfile = () => {
    return (
        <>
        <Header buttonText="My.ETH"/>
            <div className="Background" >
                <div className="mainContainer">
                    <MyProfile/>
                    <Cards cards={cards} title={"Background"}/>
                    <Cards cards={cards} title={"Quest Creds"}/>
                    <Cards cards={cards} title={"Opportunities"}/>
                </div>
            </div>
        <Footer/>
        </>
    )

}

export default LancerProfile