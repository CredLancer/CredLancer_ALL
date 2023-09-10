import React from "react";
import Slider from "react-slick";
import { cards } from "../../Data/Data";
import CardsItem from "./CardsItem";
import "./cards.css";


const Cards = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
        <div className="CardContainer">
        <Slider {...settings}>
              {props.data}
          </Slider>
        </div>
        </>
    )
};

export default Cards;