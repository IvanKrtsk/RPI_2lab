import React, {useState} from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useTranslation} from "react-i18next";

function Header(){
    const { t,i18n } = useTranslation();
    const [language, setLanguage] = useState('en');

    const changeLanguage = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };
    return(
        <header className="header" id="head">
            <div className="header_inner">
                <nav className="navigation">
                    <NavLink to="/">
                        <button className="navigation_link">{t("Home")}</button>
                    </NavLink>
                    <NavLink to="series">
                        <button className="navigation_link">{t("Series")}</button>
                    </NavLink>
                    <button className="navigation_link">{t("TodayBest")}</button>
                    <Link to="/#aboutID" smooth={true}>
                        <button className="navigation_link" >{t("AboutUs")}</button>
                    </Link>
                    <Button variant="outline-light" onClick={changeLanguage}>{t("lang")}</Button>{' '}
                </nav>
            </div>
        </header>
    );
}

export default Header;