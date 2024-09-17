import React from "react";
import './lineUp.css'
import { Link } from "react-router-dom";
import { useAllBands } from "../../hooks/useAllBands";
import { BASE_URL } from "../../App";

function LineUp () {

    const { bands } = useAllBands();

    return (
        <section className="LineUpSection">
            <div className="AllBandContainer">
                {bands.map((band) => (
                    <Link to={`/lineup/${band.id}/${encodeURIComponent(band.name.replace(/\s/g, ''))}`} key={band.id}>
                    <div className="BandContainer" >
                        <img src={`${BASE_URL}${band.thumbnailImage}`} alt={band.name} />
                        <div className="BlackFilter"></div>
                        <h2>{band.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
export default LineUp;