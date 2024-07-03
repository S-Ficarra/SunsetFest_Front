import React from "react";
import BandData from '../../services/fakeDatas/bands.json'
import { convertToBase64 } from "../../services/utils";
import './lineUp.css'
import { Link } from "react-router-dom";

function LineUp () {
    return (
        <section className="LineUpSection">
            <div className="AllBandContainer">
                {BandData.map((band) => (
                    <Link to={`/lineup/${encodeURIComponent(band._name.replace(/\s/g, ''))}`}>
                    <div className="BandContainer">
                        <img src={convertToBase64(band._bannerImage.data)} alt={band._name} />
                        <div className="BlackFilter"></div>
                        <h2>{band._name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default LineUp;