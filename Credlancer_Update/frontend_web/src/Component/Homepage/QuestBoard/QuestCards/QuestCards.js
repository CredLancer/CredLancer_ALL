import React from "react";
import Slider from "react-slick";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Container, SubDiv, LeftDiv, RightDiv, ImgDiv } from "./Item";
import  DisplayTime from "../Time/Time"
import { Questcards } from "../../../Data/Data";
import  "./questCards.css"

 
const   Children = Questcards.map((data) => (
    <Item Children={data.file} titre={data.title} IMG={data.img}>
    </Item>
))
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
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
const QuestCards = () => {
    return (
      <>
        <div className="Appp">
          <Slider {...settings}>
              {Children}
          </Slider>
          <div className="Prez" > 
            <Container style={{margin: '0px 0px'}}>
                <SubDiv>
                    <LeftDiv>
                        ETH
                    </LeftDiv>
                    <DisplayTime/>
                    <RightDiv>
                        | GMT
                    </RightDiv>
                </SubDiv>
                <ImgDiv>
                <img style={{width: '98%', height:'auto'}} src="./Images/ImgQuest2.svg" alt='' />
                </ImgDiv>
            </Container>
            <div className="SubPrez">
            <h2>What are Soul Bound Credentials?</h2>
            <p>Soul Bound Credentials are 
            non-transferable digital proof 
            of skills, contributions, or 
            quest completions.</p>
            <p>They cannot be transferred.</p>
                <Link style={{fontSize:'20px'}} to={"/About"}><button>Read More</button></Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default QuestCards