import "./searchpage.css";
import santa_barbara from "./../../pictures/homepage/Santa_Barbara.jpg";
import sazdae from "./../../pictures/homepage/Sazdae.jpg";
import doctor_who from "./../../pictures/homepage/Doctor_Who.jpg";
import simpsons from "./../../pictures/homepage/Simpsons.jpg";
import street_sizam from "./../../pictures/homepage/Street_Sizam.jpg";
import track from "./../../pictures/homepage/Track.jpg";
import SearchVidget from "../../components/searchvidget/SearchVidget";
import React from "react";


function Searchpage(){
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
    );
}

export default Searchpage;