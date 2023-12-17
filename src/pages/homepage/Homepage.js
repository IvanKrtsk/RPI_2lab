import React, {useState, useEffect} from "react";
import "./homepage.css"
import image1 from "./first.jpg"
import image2 from "./second.jpg"
function Homepage(){
    const [image, setImage] = useState('');

    const images = [
        image1,
        image2
    ];

    useEffect(() => {
        setImage(images[Math.floor(Math.random() * images.length)]);
    }, []);

    return(
        <main>
            <div className="intro">
                <div className="intro_inner" style={{backgroundImage: `url(${image})`}}>
                    <h1 className="intro_title">"Serial name"</h1>
                    <h2 className="intro_subtitle">Serial of the day</h2>
                    <button className="get_started_button">View information</button>
                </div>
            </div>
            <div className="second_slide">
                <div className="space_container">Developers</div>
                <div className="second_icons_container">
                    <img src="assets/images/Icon1.jpg" width="80" height="76" />
                    <img src="assets/images/Icon2.jpg" width="92" height="88" />
                    <img src="assets/images/Icon3.jpg" width="80" height="80" />
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
                        <button className="see_more_button">View GitHub</button>
                        <button className="see_more_button">View GitHub</button>
                        <button className="see_more_button">View GitHub</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Homepage;