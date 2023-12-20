import React, {useState} from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import {useTranslation} from "react-i18next";


function Footer(){

    const { t,i18n } = useTranslation();

    return(
        <footer className = "footer">
            <div className="footer_container">
                <div className="footer_inner">
                    <div className="footer_left">{t("TLSeries")}</div>
                    <div className = "navigate">
                        <nav className="navigate1">
                            <NavLink to="/RPI_2lab">
                                <button className="nav_link">{t("Home")}</button>
                            </NavLink>
                            <NavLink to="/series">
                                <button className="nav_link">{t("AllSeries")}</button>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;