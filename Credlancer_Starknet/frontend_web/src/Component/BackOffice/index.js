import React, { useEffect, useState } from "react";
import Header from "../Commun/Header/header";
import Footer from "../Commun/Footer/footer";
import Cards from "../Commun/Cards/Cards";

import IconCards from "../Commun/Cards/IconCards";
import { cards,completecards } from "../Data/Data";
import "../Homepage/home.css"
import "./index.css";
import ReactStars from "react-rating-stars-component";

import toast, { Toaster } from 'react-hot-toast';

const BackOfficePage = () => {
    const [selectedMenu, setSelectedMenu] = useState("My Info")
    const [selectedRowMenu, setSelectedRowMenu] = useState("Projects")


    const [surveyDao, setSureyDao] = useState(false);
    const [daoStarts, setDaoStarts] = useState(10);

    const [startwareStarts, setStartwareStarts] = useState(10);

    const [surveyStartware, setSureyStartware] = useState(false);

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
            showToast()
            let params = {
                to: "aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns",
                amount: stars,
            }
            await window.wallet.features['standard:transfer'].transfer(params);
        } catch (error) {
            console.error(error);
        }
    }

    const showToast = () => {
        return toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                Submit Success!
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Thank you for taking the time to provide your valuable feedback. Your input helps us enhance the platform and create a better experience for everyone involved!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.remove(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))
    }

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
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

                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", }}>
                                    <button className="btn_survey" style={{ backgroundColor: aleoConnected ? "#71DCCC" : "#4B9C9B" }} onClick={() => handleAleoConnect()}>{aleoConnected ? " Connected " : "Survey with Aleo"}</button>
                                </div>
                                {
                                    //surveyCard  
                                }
                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                    <div className="but_div">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignContent: "center",
                                                alignItems: "center",
                                                marginTop:"16px"
                                            }}
                                        >
                                            <button className="btn_developer_dao" >DEVELOPER DAO</button>
                                        </div>

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center",
                                            marginTop:"24px"
                                        }} >
                                            <span style={{ fontSize: "16px", fontWeight: 600, minWidth: "80px" }}>
                                                Rating:
                                            </span>
                                            <ReactStars
                                                count={10}
                                                onChange={(value) => {
                                                    setDaoStarts(value)
                                                }}
                                                size={14}
                                                value={10}
                                                activeColor="#ffd700"
                                            />
                                        </div>

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center",
                                        }} >
                                        <button className="btn_survey_submit" style={{ backgroundColor: surveyDao ? "#71DCCC" : "#4B9C9B" }} onClick={surveyDao ? null : () => {
                                            if (!aleoConnected) {
                                                handleAleoConnect();
                                                return
                                            }
                                            setSureyDao(true)
                                            submitSurvey(daoStarts)
                                        }}>{surveyDao ? "Done" : "Submit"}</button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                    <div className="but_div">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignContent: "center",
                                                alignItems: "center",
                                                marginTop:"16px"
                                            }}
                                        >
                                            <button className="btn_developer_dao" >Startware</button>
                                        </div>

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center",
                                            marginTop:"24px"
                                        }} >
                                            <span style={{ fontSize: "16px", fontWeight: 600, minWidth: "80px" }}>
                                                Rating:
                                            </span>
                                            <ReactStars
                                                count={10}
                                                onChange={(value) => {
                                                    setStartwareStarts(value)
                                                }}
                                                size={14}
                                                value={10}
                                                activeColor="#ffd700"
                                            />
                                        </div>

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center",
                                        }} >
                                        <button className="btn_survey_submit" style={{ backgroundColor: surveyStartware ? "#71DCCC" : "#4B9C9B" }} onClick={surveyStartware ? null : () => {
                                           if (!aleoConnected) {
                                            handleAleoConnect();
                                            return
                                        }
                                        setSureyStartware(true)
                                        submitSurvey(startwareStarts)
                                        }}>{surveyStartware ? "Done" : "Submit"}</button>
                                        </div>
                                    </div>
                                </div> 

                            </div>
                        </> : <div className="mainContainer">
                           
                            <Cards cards={cards} title={"Complete"} />
                            <IconCards cards={completecards} title={"Members"} />
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