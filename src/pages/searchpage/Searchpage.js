import "./searchpage.css";
import SearchVidget from "../../components/searchvidget/SearchVidget";
import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import santa_barbara from "./../../pictures/homepage/Santa_Barbara.jpg";
import sazdae from "./../../pictures/homepage/Sazdae.jpg";
import doctor_who from "./../../pictures/homepage/Doctor_Who.jpg";
import simpsons from "./../../pictures/homepage/Simpsons.jpg";
import street_sizam from "./../../pictures/homepage/Street_Sizam.jpg";
import track from "./../../pictures/homepage/Track.jpg";

function Searchpage() {
    const [search, setSearch] = useState("");
    const { t, i18n } = useTranslation();

    const series = [
        { name: t("SantaBarbara"), img: santa_barbara, link: "./series/santa_barbara" },
        { name: t("Sazae-san"), img: sazdae, link: "./series/sazdae" },
        { name: t("DoctorWho"), img: doctor_who, link: "./series/doctor_who" },
        { name: t("Simpsons"), img: simpsons, link: "./series/simpsons" },
        { name: t("StreetSizam"), img: street_sizam, link: "./series/street_sizam" },
        { name: t("Track"), img: track, link: "./series/track" }
    ];

    const filteredSeries = series.filter(serie => serie.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">{t("Series")}</h2>
                <SearchVidget onSearch={setSearch}/>
                <ul className="projects">
                    {filteredSeries.map((serie, index) => (
                        <li className="project" key={index}>
                            <a href={serie.link}>
                                <img src={serie.img} alt="Project img" className="project__img"/>
                                <h3 className="project__title">{serie.name}</h3>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Searchpage;