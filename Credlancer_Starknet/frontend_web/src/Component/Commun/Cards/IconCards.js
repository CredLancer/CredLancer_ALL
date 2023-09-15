import React from "react"; 
import { Link } from "react-router-dom";
import IconCardsItems from "./IconCardsStyle";
import "./cards.css"


const IconCards = (props) => {
    const Data = props.cards.map((data) => {
        console.log(data);
        return (
            <IconCardsItems button={data.text} issue={data.issue} hours={data.hours} skills={data.Skills} Img={data.Img}>
            </IconCardsItems>
        );
      }); 
    return (
        <>
        <div className="SlideContainer">
        <div style={{display: 'flex', padding: '0px 15px', backgroundColor: "#29116C", marginBottom: '20px', color: "white", justifyContent: "space-between", alignItems:'center'}}>
                <h1>{props.title}</h1>
                <Link to={"/SeeAll"} style={{fontSize: '15px'}}>See All</Link>
            </div>
            <div style={{margin: '0px 30px 30px 30px', display: "flex"}} className="grid grid-cols-3 gap-40">
            {/* <Slider {...settings}> */}
                {Data}
            {/* </Slider> */}
            </div>
        </div>
        </>
    )
}

export default IconCards