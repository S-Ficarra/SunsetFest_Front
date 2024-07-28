import React from "react";
import { convertToBase64 } from "../../../services/utils";
import './lineUpHomePage.css'
import { Link } from "react-router-dom";
import { useAllBands } from "../../../hooks/useAllBands";

function LineUpHomePage () {

    const { bands } = useAllBands();

    return (
        <section className="LineUpHomePageSection">
            <div className="SecondTitleContainer">
                <h1>LINE-UP</h1>
                <p>Plus de 30 groupes internationaux</p>
            </div>
            <div className="AllBandContainer">
                {bands.slice(0, 8).map((band) => (
                    <div className="BandContainer" key={band.id}>
                        <img src={convertToBase64(band.thumbnailImage.data)} alt={band.name} />
                        <div className="BlackFilter"></div>
                        <h2>{band.name}</h2>
                    </div>
                ))}
            </div>
            <Link to='/lineup'><button>VOIR LE LINE-UP COMPLET</button></Link>
        </section>
    );
};
export default LineUpHomePage;