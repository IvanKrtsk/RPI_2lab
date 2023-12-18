import React, {useState, useEffect} from "react";
import "./homepage.css"
import image1 from "../../pictures/homepage/first.jpg"
import image2 from "../../pictures/homepage/second.jpg"
import image3 from "../../pictures/homepage/third.jpg"
import image4 from "../../pictures/homepage/fourth.jpg"
import image5 from "../../pictures/homepage/fifth.jpg"
import image6 from "../../pictures/homepage/sixth.jpg"

function Homepage(){
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];

    const titles = [
        "Санта-Барбара",
        "Саздаэ-Сан",
        "Доктор Кто",
        "Симпсоны",
        "Улица Сезам",
        "След"
    ];

    const times = [
        "1984 - 1993",
        "1969 - наши дни",
        "1963 - наши дни",
        "1987 - наши дни",
        "1969 - наши дни",
        "2000 - 2015"
    ]

    useEffect(() => {
        let index = Math.floor(Math.random() * images.length)
        setImage(images[index])
        setTitle(titles[index])
        setTime(times[index])
    }, []);

    return(
        <main>
            <div className="intro">
                <div className="intro_inner" style={{backgroundImage: `url(${image})`}}>
                    <h1 className="intro_title">{title}</h1>
                    <h2 className="intro_subtitle">{time}</h2>
                    <button className="get_started_button">About</button>
                </div>
            </div>
            <div className="second_slide">
                <div className="about_project">
                    Портал содержит сведения о самых длинных сериалах
                </div>
                <div className="space_container">Developers</div>
                <div className="second_icons_container">
                    <img src="assets/images/Icon1.jpg" width="80" height="80" />
                    <img src="assets/images/Icon2.jpg" width="80" height="80" />
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
                        <a href="https://github.com/IvanKrtsk" target="_blank">
                            <button className="see_more_button">View GitHub</button>
                        </a>
                        <a href="https://github.com/StepanDemidovets" target="_blank">
                            <button className="see_more_button">View GitHub</button>
                        </a>
                        <a href="https://github.com/SmnVadim" target="_blank">
                            <button className="see_more_button">View GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Homepage;