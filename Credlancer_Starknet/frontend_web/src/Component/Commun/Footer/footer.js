import React from "react";
import { Link } from "react-router-dom"
import { nav } from "../../Data/Data";
import  "./footer.css"

const   Footer = () => {
    return (
        <>
          <footer>
              <div className="Footer">
                  <div className="footerImg">
                  <img src='./Images/LogoCC.svg' alt='' />
                  </div>
                  <div className='navv'>
                    <ul className="nav">
                    {nav.map((list, index) => (
                    <li key={index}>
                    <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
              </div>
          </footer>
        </>
      )
    }
    
export default Footer
