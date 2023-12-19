import React from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';


function Footer(){
    return(
        <footer className = "footer">
            <div className="footer_container">
                <div className="footer_inner">
                    <div className="footer_left">
                        © The longest series
                    </div>
                    <div className = "navigate">
                        <nav className="navigate1">
                            <Link to="/#head" smooth={true}>
                                <button className="nav_link">Home</button>
                            </Link>
                            <NavLink to="/series">
                                <button className="nav_link">All series</button>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;