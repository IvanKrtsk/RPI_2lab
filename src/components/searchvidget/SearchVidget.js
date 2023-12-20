import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "./searchvidget.css";
import {useTranslation} from "react-i18next";

const SearchVidget = ({ onSearch }) => {
    const { t,i18n } = useTranslation();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '70px'}}>
            <MDBCol md="12">
                <input
                    className="form-control"
                    type="text"
                    placeholder={t("Search")}
                    aria-label="Search"
                    onChange={e => onSearch(e.target.value)}
                    style={{ width: '240px', height: '40px', fontSize: '30px', margin: '0 auto'}}
                />
            </MDBCol>
        </div>
    );
}

export default SearchVidget;


/*const SearchVidget = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px'}}>
            <MDBCol md="12">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </MDBCol>
        </div>
    );
}

export default SearchVidget;*/