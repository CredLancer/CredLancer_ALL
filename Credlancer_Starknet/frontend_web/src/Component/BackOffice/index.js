import React, { useEffect, useState } from "react";
import Header from "../Commun/Header/header";
import Footer from "../Commun/Footer/footer";
import Cards from "../Commun/Cards/Cards";
import { cards } from "../Data/Data";
import "../Homepage/home.css"
import "./index.css";
import ReactStars from "react-rating-stars-component";

const BackOfficePage = () => {
    const [selectedMenu, setSelectedMenu] = useState("My Info")
    const [selectedRowMenu, setSelectedRowMenu] = useState("Projects")

    const [daoStarts, setDaoStarts] = useState(10);

    const [startwareStarts, setStartwareStarts] = useState(10);

    const [aleoConnected, setAleoConnected] = useState(false)

    async function connectWallet() {
        await window.wallet.features['standard:cancelPre'].cancelPre();
        return await window.wallet.features["standard:connect"].connect();
    }

    function walletConnected() {
        return window.wallet.connected
    }

    const handleAleoConnect = async () => {
        try {
            if (aleoConnected) {
                return
            }
            if (!window.wallet) {
                window.open("https://chrome.google.com/webstore/detail/soter-aleo-wallet/kfpmpkkjaohgchlokcohbaokindffdjk", "_blank")
                return;
            }
            await connectWallet();
            setAleoConnected(walletConnected())
        } catch (error) {
            console.error(error);
        }
    };

    const submitSurvey = async (stars) => {
        try {
            if (!aleoConnected) {
                handleAleoConnect();
                return
            }
            let params = {
                to: "aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns",
                amount: stars,
            }
            await window.wallet.features['standard:transfer'].transfer(params);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>
            <Header buttonText="My.ETH" />
            <div className="Background flex flex-row" >
                <div className="basis-1/5 menu_bar">
                    <div className={`menu_list ${selectedMenu === "My Info" && 'active'}`} onClick={() => setSelectedMenu("My Info")}>My Info</div>
                    <div className={`menu_list ${selectedMenu === "My Groups" && 'active'}`} onClick={() => setSelectedMenu("My Groups")}>My Groups</div>
                    <div className={`menu_list ${selectedMenu === "Project Board" && 'active'}`} onClick={() => setSelectedMenu("Project Board")}>Project Board</div>
                    <div className={`menu_list ${selectedMenu === "Messages" && 'active'}`} onClick={() => setSelectedMenu("Messages")}>Messages</div>
                    <div className={`menu_list ${selectedMenu === "Survey" && 'active'}`} onClick={() => setSelectedMenu("Survey")}>Survey</div>
                </div>
                <div className="basis-4/5 row_button_group">
                    <div className="grid grid-cols-3 h-[45px] align-top">
                        <div className={`row_button ${selectedRowMenu === "Background" && 'row_active'}`} onClick={() => setSelectedRowMenu("Background")}>Background</div>
                        <div className={`row_button ${selectedRowMenu === "Projects" && 'row_active'}`} onClick={() => setSelectedRowMenu("Projects")}>Projects</div>
                        <div className={`row_button ${selectedRowMenu === "Analytics" && 'row_active'}`} onClick={() => setSelectedRowMenu("Analytics")}>Analytics</div>
                    </div>
                    {
                        selectedMenu === "Survey" ? <>
                            <div className="p-10 bg-white h-full overflow-y-scroll">
                                <p className="font-medium text-lg">The Anonymous Rating Survey!</p>
                                <p className="font-thin title_one">We value your feedback on your experience with your employer or freelancer. Please reate your overall experience on a scale of 1 to 10 considering factors like <span className="font-medium title-two">Quality, Communication, & Speed</span></p>
                                <div className="ml-10">
                                    <p className="font-medium">Quality</p>
                                    <p className="title_one">The qulality of assignments proposed</p><br />

                                    <p className="font-medium">Communication</p>
                                    <p className="title_one">The clarity of dialogue back and forth related to project requirements</p><br />

                                    <p className="font-medium">Speed</p>
                                    <p className="title_one">The speed of proposal, final project review, submission or payout, according to agreed timeline</p><br />
                                </div>
                                <p className="title_one">Rest assured, your rating is completely private and confidential! Your specific scores will not be revealed to the other party.</p>
                                <br />
                                <button className="btn_survey" onClick={() => handleAleoConnect()}>{aleoConnected ? " Connected " : "Survey with Aleo"}</button>
                                <div className="but_div">
                                    <button className="btn_developer_dao">DEVELOPER DAO</button>
                                    <p className="inline-flex align-middle mt-3">Rating:
                                        <ReactStars
                                            count={10}
                                            onChange={(value) => {
                                                setDaoStarts(value)
                                            }}
                                            size={14}
                                            value={10}
                                            activeColor="#ffd700"
                                        />
                                    </p>
                                    <button className="btn_survey_submit" onClick={() => submitSurvey(daoStarts)}>Submit</button>
                                </div>
                                <div className="but_div">
                                    <button className="btn_developer_startware">Startware</button>
                                    <p className="inline-flex align-middle mt-3">Rating:
                                        <ReactStars
                                            count={10}
                                            onChange={(value) => {
                                                setStartwareStarts(value)
                                            }}
                                            size={14}
                                            value={10}
                                            activeColor="#ffd700"
                                        />
                                    </p>
                                    <button className="btn_survey_submit" onClick={() => submitSurvey(startwareStarts)}>Submit</button>
                                </div>
                            </div>
                        </> : <div className="mainContainer">
                            <Cards cards={cards} title={"Complete"} />
                            <Cards cards={cards} title={"In Progress"} />
                            <Cards cards={cards} title={"Pending"} />
                        </div>
                    }

                </div>
            </div>
            <Footer />
        </>
    )

}

export default BackOfficePage