import React from "react";
import { Link } from "react-router-dom"
import QuestCards from "./QuestCards/QuestCards";
import  "./questBoard.css"

const   Header = () => {
    return (
        <>
              <div className="QuestHeading">
                  <div className="SubQuestHeadiing">
                      <h1>Quest Board</h1>
                  </div>
                  <div className="SeeAll">
                          <Link style={{fontSize: "20px", color:'black'}} to="/SeeAll">See All</Link>
                  </div>
              </div>
        </>
      )
}
const   QuestBoard = () => {
    return (
        <>
        <div className="QuestContainer">
            <Header/>
            <QuestCards/>
        </div>
        </>
    )
}

export default QuestBoard