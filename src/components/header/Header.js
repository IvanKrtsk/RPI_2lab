import React from "react";
import "./style.css"

function Header(){
    return(
        <header className="header" id="head">
            <div className="header_inner">
                <nav className="navigation">
                    <button className="navigation_link">Home</button>
                    <button className="navigation_link">Series</button>
                    <button className="navigation_link">Today's best</button>
                    <button className="navigation_link">About us</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;