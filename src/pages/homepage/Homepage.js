import React, {useState, useEffect} from "react";
import "./homepage.css"
import {images, titles, times} from "../../dataArrays/data"

function Homepage(){
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        let index = Math.floor(Math.random() * images.length)
        setImage(images[index])
        setTitle(titles[index])
        setTime(times[index])
    }, [images, titles, times]);

    return(
        <main>
            <div className="intro">
                <div className="intro_inner" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
                    <div className="bg_container">
                        <h1 className="intro_title">{title}</h1>
                        <h2 className="intro_subtitle">{time}</h2>
                    </div>
                    <button className="get_started_button">About</button>
                </div>
            </div>
            <div className="second_slide" id="aboutID">
                <div className="space_container2"></div>
                <div className="space_container">Developers</div>
                <div className="second_icons_container">
                    <img src="" width="80" height="80" alt="Icon1"/>
                    <img src="" width="80" height="80" alt="Icon2"/>
                    <img src="" width="80" height="80" alt="Icon3"/>
                </div>
                <div className="second_title">
                    <div className="second_title_container">
                        <b>Krotsyuk Ivan</b>
                        <b>Demidovets Stepan</b>
                        <b>Symonik Vadim</b>
                    </div>
                </div>
                <div className="second_buttons">
                    <div className="second_buttons_container">
                        <a href="https://github.com/IvanKrtsk" target="_blank" rel="noreferrer">
                            <button className="see_more_button">View GitHub</button>
                        </a>
                        <a href="https://github.com/StepanDemidovets" target="_blank" rel="noreferrer">
                            <button className="see_more_button">View GitHub</button>
                        </a>
                        <a href="https://github.com/SmnVadim" target="_blank" rel="noreferrer">
                            <button className="see_more_button">View GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="lspaceContainer"></div>
            </div>
        </main>
    );
}

export default Homepage;