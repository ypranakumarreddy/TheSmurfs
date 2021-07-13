import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
    <>
       <nav className="navbar">
           <div className="nav-container">
               <NavLink exact to="/" className="nav-logo">
                   20191COM0224
               </NavLink>

               <ul className="nav-menu">
                   <li className="nav-item">
                       <NavLink exact to="/" className="nav-links">
                              HOME
                       </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" className="nav-links">
                             ABOUT
                       </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact" className="nav-links">
                             CONTACT US
                       </NavLink>
                    </li>
               </ul><hr></hr>
           </div>
       </nav>
    </>
    );
}
export default NavBar;