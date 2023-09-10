import React from "react";
import "./myprofile.css"
import Cards from "../../Commun/Cards/Cards";
import CardsItems from "../../Commun/Cards/CardsStyle";
import { cards } from "../../Data/Data";
import ReactRoundedImage from "react-rounded-image"
import { Link } from "react-router-dom";
import Video from "./Video";


const Header = () => {
    return (
        <>
        <div className="ProfileHeading">
            <div className="SubProfileHeadiing">
                My profile
                <Link style={{fontSize: "20px", color:'black'}} to="/Edit">EDIT</Link>
            </div>

        </div>
        </>
    )
}

const MyProfile = () => {
    return (
        <>
        <div className="ProfileContainer">
            <Header/>
            <div className="Part1">
                <div className="descriptionPart">
                    <div class="flex" style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", color: 'white', marginBottom:'15px'}}>
                        <h2>Lancer Jane</h2>
                    </div>
                    <div className=" ImgText" style={{marginBottom: '20px'}}>
                            <div style={{display: 'flex', justifyContent:'center', height: 'Hug(100px)', width: '70%'}}>
                                <img src={"./Images/Profile.svg"}  style={{width: '150px', height: 'auto'}}></img>
                            </div>
                        <div className="textDesc">
                            <h3>Web3 Builder &  Full-Stack Developer</h3>
                            <p>Experienced Senior Developer eager to bring authenticity & data privacy to professional networks.</p>
                        </div>
                    </div>
                    <div  style={{ display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height:'50px'}}>
                        <Link className="PinkButton" to={"/Discord"}>Discord & Twitter Connected</Link>
                        </div>
                </div>
                <div className="videoPart">
                    <Video Children={"<FontAwesomeIcon icon={faCircle} />"} titre={"video"} IMG={"./Images/ImgQuest2.svg"}/>
                </div>
            </div>
            <Cards cards={cards} title="Most Recent"/>
        </div>
        </>
    )
}


export default MyProfile

/*      <div style={{display:'flex', justifyContent:'space-between', with:'200px', backgroundColor: 'black'}}>
                        <h2>Video intro</h2>
                        <p>icon</p>
                    </div>
                    <div className="containerVideo">
                        <div style={{ display:'flex', backgroundColor: 'green', height: '100%', width:'100%'}}>
                            <img style={{border: ' 2px solid rgb(2, 2, 2)', width: '100%', height: "100%"}} src="./Images/ImgQuest2.svg"></img>
                        </div>
                    </div>*/