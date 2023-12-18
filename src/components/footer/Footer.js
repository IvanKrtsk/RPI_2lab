import React from "react";
import "./style.css"

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
                            <a className="nav_link">Home</a>
                            <a className="nav_link">All series</a>
                            <a className="nav_link">Best</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;