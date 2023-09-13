import React, { useState } from "react";
import Header from "../Commun/Header/header";
import Footer from "../Commun/Footer/footer";
import Cards from "../Commun/Cards/Cards";
import { cards } from "../Data/Data";
import "../Homepage/home.css"
import "./index.css";

const BackOfficePage = () => {
    const [selectedMenu, setSelectedMenu] = useState("My Info")
    const [selectedRowMenu, setSelectedRowMenu] = useState("Quest Creds")

    return (
        <>
        <Header buttonText="My.ETH"/>
            <div className="Background flex flex-row" >
                <div className="basis-1/5 menu_bar">
                    <div className={`menu_list ${selectedMenu === "My Info" && 'active' }`} onClick={() => setSelectedMenu("My Info")}>My Info</div>
                    <div className={`menu_list ${selectedMenu === "Community" && 'active' }`} onClick={() => setSelectedMenu("Community")}>Community</div>
                    <div className={`menu_list ${selectedMenu === "Quest Board" && 'active' }`} onClick={() => setSelectedMenu("Quest Board")}>Quest Board</div>
                    <div className={`menu_list ${selectedMenu === "Messages" && 'active' }`} onClick={() => setSelectedMenu("Messages")}>Messages</div>
                    <div className={`menu_list ${selectedMenu === "Wallet" && 'active' }`} onClick={() => setSelectedMenu("Wallet")}>Wallet</div>
                </div>
                <div className="basis-4/5 row_button_group">
                    <div className="grid grid-cols-3 h-[45px] align-top">
                        <div className={`row_button ${selectedRowMenu === "Profile Creds" && 'row_active'}`} onClick={() => setSelectedRowMenu("Profile Creds")}>Profile Creds</div>
                        <div className={`row_button ${selectedRowMenu === "Quest Creds" && 'row_active'}`} onClick={() => setSelectedRowMenu("Quest Creds")}>Quest Creds</div>
                        <div className={`row_button ${selectedRowMenu === "Analytics Creds" && 'row_active'}`} onClick={() => setSelectedRowMenu("Analytics Creds")}>Analytics Creds</div>
                    </div>
                    <div className="mainContainer">
                        <Cards cards={cards} title={"Complete"}/>
                        <Cards cards={cards} title={"In Progress"}/>
                        <Cards cards={cards} title={"Pending"}/>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )

}

export default BackOfficePage