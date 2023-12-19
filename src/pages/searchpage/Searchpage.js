import "./searchpage.css";
import santa_barbara from "./../../pictures/homepage/Santa_Barbara.jpg";
import sazdae from "./../../pictures/homepage/Sazdae.jpg";
import doctor_who from "./../../pictures/homepage/Doctor_Who.jpg";
import simpsons from "./../../pictures/homepage/Simpsons.jpg";
import street_sizam from "./../../pictures/homepage/Street_Sizam.jpg";
import track from "./../../pictures/homepage/Track.jpg";
import SearchVidget from "../../components/searchvidget/SearchVidget";
import React, { useState } from "react";
import {useTranslation} from "react-i18next";
function Searchpage() {
    const [search, setSearch] = useState("");
    const { t,i18n } = useTranslation();

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">{t("Series")}</h2>
                <SearchVidget onSearch={setSearch}/>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={santa_barbara} alt="Project img" className="project__img"/>
                            <h3 className="project__title">{t("SantaBarbara")}</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={sazdae} alt="Project img" className="project__img"/>
                            <h3 className="project__title">{t("Sazae-san")}</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={doctor_who} alt="Project img" className="project__img"/>
                            <h3 className="project__title">{t("DoctorWho")}</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={simpsons} alt="Project img" className="project__img"/>
                            <h3 className="project__title">{t("Simpsons")}</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={street_sizam} alt="Project img" className="project__img"/>
                            <h3 className="project__title">{t("StreetSizam")}</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={track} alt="Project img" className="project__img"/>
                            <h3 className="project__title">{t("Track")}</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Searchpage;

/*function Searchpage(){
const projects = [
        { name: "Santa Barbara", russianName: "Санта Барбара", img: santa_barbara },
        { name: "Sazdae", russianName: "Саздэ", img: sazdae },
        { name: "Doctor Who", russianName: "Доктор Кто", img: doctor_who },
        { name: "Simpsons", russianName: "Симпсоны", img: simpsons },
        { name: "Street Sizam", russianName: "Улица Сизам", img: street_sizam },
        { name: "Track", russianName: "Трек", img: track },
    ];

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.russianName.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <SearchVidget/>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={santa_barbara} alt="Project img" className="project__img"/>
                                <h3 className="project__title">Santa Barbara</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={sazdae} alt="Project img" className="project__img"/>
                                <h3 className="project__title">Sazdae</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={doctor_who} alt="Project img" className="project__img"/>
                                <h3 className="project__title">Doctor Who</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={simpsons} alt="Project img" className="project__img"/>
                            <h3 className="project__title">Simpsons</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={street_sizam} alt="Project img" className="project__img"/>
                            <h3 className="project__title">Street Sizam</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={track} alt="Project img" className="project__img"/>
                            <h3 class="project__title">Track</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </main>

        <main className="section">
            <div className="container">
                <h2 className="title-1">{t("Series")}</h2>
                <SearchVidget onSearch={setSearch}/>
                <ul className="projects">
                    {filteredProjects.map((project, index) => (
                        <li key={index} className="project">
                            <a href="./project-page.html">
                                <img src={project.img} alt="Project img" className="project__img"/>
                                <h3 className="project__title" stylesheet="text-align">{project.name}</h3>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Searchpage;*/