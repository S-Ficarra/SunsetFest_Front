import React from "react";
import { convertToBase64 } from "../../services/utils";
import './lineUp.css'
import { Link } from "react-router-dom";
import { useAllBands } from "../../hooks/useAllBands";

function LineUp () {

    const { bands } = useAllBands();

    return (
        <section className="LineUpSection">
            <div className="AllBandContainer">
                {bands.map((band) => (
                    <Link to={`/lineup/${band.id}/${encodeURIComponent(band.name.replace(/\s/g, ''))}`}>
                    <div className="BandContainer">
                        <img src={convertToBase64(band.bannerImage.data)} alt={band.name} />
                        <div className="BlackFilter"></div>
                        <h2>{band.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default LineUp;