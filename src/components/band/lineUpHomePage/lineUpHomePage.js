import React from "react";
import './lineUpHomePage.css'
import { Link } from "react-router-dom";
import { useAllBands } from "../../../hooks/useAllBands";
import { useScreenSize } from "../../../hooks/useScreenSize";
import '../../../App.css'
import { BASE_URL } from "../../../App";


function LineUpHomePage () {

    const { bands } = useAllBands();
    const { screenSize } = useScreenSize()


    return (
        <section className="LineUpHomePageSection">
            <div className="SecondTitleContainer">
                <h1>LINE-UP</h1>
                <p>Plus de 30 groupes internationaux</p>
            </div>
            <div className="AllBandContainer">
                {screenSize < 600 && 
                    bands.slice(0, 4).map((band) => (
                        <div className="BandContainer" key={band.id}>
                            <img src={`${BASE_URL}${band.thumbnailImage}`} alt={band.name} />
                            <div className="BlackFilter"></div>
                            <h2>{band.name}</h2>
                        </div>
                    ))
                }

                {screenSize > 600 && screenSize < 1299 && 
                    bands.slice(0, 6).map((band) => (
                        <div className="BandContainer" key={band.id}>
                            <img src={`${BASE_URL}${band.thumbnailImage}`} alt={band.name} />
                            <div className="BlackFilter"></div>
                            <h2>{band.name}</h2>
                        </div>
                    ))
                }

                {screenSize >= 1300 && 
                    bands.slice(0, 8).map((band) => (
                        <div className="BandContainer" key={band.id}>
                            <img src={`${BASE_URL}${band.thumbnailImage}`} alt={band.name} />
                            <div className="BlackFilter"></div>
                            <h2>{band.name}</h2>
                        </div>
                    ))
                }
            </div>
            <div className="ButtonContainer">
                <Link to='/lineup'><button className="BlackPinkButtonSmall">VOIR LE LINE-UP COMPLET</button></Link>
            </div>
        </section>
    );
};
export default LineUpHomePage;