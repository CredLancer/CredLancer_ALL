import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CardsItems from "./CardsStyle";
import "./cards.css"


const Cards = (props) => {
    const Data = props.cards.map((data) => {
        console.log(data);
        return (
            <CardsItems button={data.text} issue={data.issue} hours={data.hours} skills={data.Skills} Img={data.Img}>
            </CardsItems>
        );
      });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        <>
        <div className="SlideContainer">
        <div style={{display: 'flex', padding: '0px 15px', backgroundColor: "#29116C", marginBottom: '20px', color: "white", justifyContent: "space-between", alignItems:'center'}}>
                <h1>{props.title}</h1>
                <Link to={"/SeeAll"} style={{fontSize: '15px'}}>See All</Link>
            </div>
            <div style={{margin: '0px 30px 30px 30px'}}>
            <Slider {...settings}>
                {Data}
            </Slider>
            </div>
        </div>
        </>
    )
}

export default Cards