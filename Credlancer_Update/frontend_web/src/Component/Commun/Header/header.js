import React from "react";
import { Link } from "react-router-dom";
import  "./header.css"

const   Header = (props) => {
  const buttonText = props.buttonText;
    return (
        <>
          <header>
            <div className='container flex test'>
              <div className='logo'>
                <Link to={"/"} ><img src='./Images/LogoCC.svg' alt='' /></Link>
              </div>
              <div className="Search">
                .
                <input type="text" placeholder="Search"/>
                #
              </div>
                <div className='button testt'>
                <Link to={"/ConnectWallet"}><button className='btn1'>{buttonText}</button></Link>
              </div>
            </div>
          </header>
        </>
      )
    }
    
export default Header
