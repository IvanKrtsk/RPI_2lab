import React from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';

function Header(){
    return(
        <header className="header" id="head">
            <div className="header_inner">
                <nav className="navigation">
                    <NavLink to="/">
                        <button className="navigation_link">Home</button>
                    </NavLink>
                    <NavLink to="series">
                        <button className="navigation_link">Series</button>
                    </NavLink>
                    <button className="navigation_link">Today's best</button>
                    <Link to="/#aboutID" smooth={true}>
                        <button className="navigation_link" >About us</button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;