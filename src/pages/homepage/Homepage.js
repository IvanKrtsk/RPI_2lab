import React, {useState, useEffect} from "react";
import "./homepage.css";
import {images, titles, times} from "../../dataArrays/data";
import {Button} from "react-bootstrap"
import {useTranslation} from "react-i18next";
//import "../../../node_modules/bootstrap-css-only/css/bootstrap.min.css";


function Homepage(){
    const { t,i18n } = useTranslation();
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        let index = Math.floor(Math.random() * images.length)
        setImage(images[index])
        setTitle(titles[index])
        setTime(times[index])
    }, [images, titles, times]);


    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupShown = sessionStorage.getItem('popupShown');

        if (!popupShown) {
            setShowPopup(true);
        }
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        sessionStorage.setItem('popupShown', 'true');
    };

    useEffect(() => {
        if (!showPopup) {
            sessionStorage.removeItem('popupShown');
        }
    }, [showPopup]);

    return(
        <main>
            {showPopup && (
                <div className="popup">
                    <div>
                        {<a>This is a portal about the longest series in the history of cinema</a>}
                    </div>
                    <button className="popup_button" onClick={handleClose}>Close</button>
                </div>
            )}
            <div className="intro">
                <div className="intro_inner" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
                    <div className="bg_container">
                        <h1 className="intro_title">{title}</h1>
                        <h2 className="intro_subtitle">{time}</h2>
                    </div>
                    <Button style={{outlineColor:'white'}} className="get_started_button" as="input" type="button" value={t("About")}/>
                </div>
            </div>
            <div className="second_slide" id="aboutID">
                <div className="space_container2"></div>
                <div className="space_container">{t("Devs")}</div>
                <div className="second_icons_container">
                    <img src="" width="80" height="80" alt="Icon1"/>
                    <img src="" width="80" height="80" alt="Icon2"/>
                    <img src="" width="80" height="80" alt="Icon3"/>
                </div>
                <div className="second_title">
                    <div className="second_title_container">
                        <b>{t("Krot")}</b>
                        <b>{t("Dem")}</b>
                        <b>{t("Sym")}</b>
                    </div>
                </div>
                <div className="second_buttons">
                    <div className="second_buttons_container">
                        <a href="https://github.com/IvanKrtsk" target="_blank" rel="noreferrer">
                            <Button className="see_more_button">{t("ViewGit")}</Button>
                        </a>
                        <a href="https://github.com/StepanDemidovets" target="_blank" rel="noreferrer">
                            <Button className="see_more_button">{t("ViewGit")}</Button>
                        </a>
                        <a href="https://github.com/SmnVadim" target="_blank" rel="noreferrer">
                            <Button className="see_more_button">{t("ViewGit")}</Button>
                        </a>
                    </div>
                </div>
                <div className="lspaceContainer"></div>
            </div>
        </main>
    );
}

export default Homepage;