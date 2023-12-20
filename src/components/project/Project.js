import React from 'react';
import './style.css'
import 'react-vertical-timeline-component/style.min.css'
import Timeline from "./Timeline/Timeline";
import Gallery from "./Gallery/Gallery";
import VideosList from "./Videos/VideoList";
import OwnMap from "./Map/Map";


const Project = () => {
    return (
        <div className='wrapper'>
            <h1 className='blac'></h1>
            <h4 className='blac'>()</h4>
            <img className='blac' alt="" className='avatar'/>
            <Timeline/>
            {/*<Gallery className='blac' />*/}
            {/*<VideosList className='blac' />*/}
            {/*<OwnMap className='blac' />*/}
        </div>
    );
};

export default Project;

/*
{props.info.full_name}
{props.info.life_dates}
{props.info.main_photo}
 */