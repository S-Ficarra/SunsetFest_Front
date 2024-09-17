import React from "react";
import {useBand} from '../../hooks/useBand'
import {usePerformance} from '../../hooks/usePerformance'
import './BandPage.css'
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import FbLogo from '../../assets/socialsLogos/facebook.svg'
import InstaLogo from '../../assets/socialsLogos/instagram.svg'
import XLogo from '../../assets/socialsLogos/x-twitter.svg'
import YoutLogo from '../../assets/socialsLogos/youtube.svg'
import SpotLogo from '../../assets/socialsLogos/spotify.svg'
import WebLogo from '../../assets/socialsLogos/globe-solid.svg'
import { BASE_URL } from "../../App";


function BandPage () {

    const { id } = useParams();
    const { band } = useBand(id)
    const { performance } = usePerformance(id)


    if (!band || !performance) {
        return <div>Chargement...</div>;
    }

    const date = new Date(performance.timeFrame);
    const day = date.toLocaleDateString('fr-FR', { weekday: 'long' });
    const time = date.toLocaleTimeString('fr-FR', { hour: '2-digit'});


    return (
        <>
            <NavBar />
            <div className="BandHeader">
                <img src={`${BASE_URL}${band.bannerImage}`} alt={band.name} />
                <div className="HeaderBlackFilter"></div>
                <div className="BandHeaderTextContainer">
                    <h1>{band.name.toUpperCase()}</h1>
                    <p>{band.country}</p>
                </div>
            </div>
            <section className="SpotifySection">
            <iframe src={band.spotifyIntegrationLink} title="Spotify Player" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </section>
            <section className="BandTextSection">
                <div id="text" dangerouslySetInnerHTML={{ __html: band.text }}></div> 
            </section>
            <section className="PerformanceSection">
                <div className="PerformanceStage"></div>
                <h2>SCENE {performance.stage.toUpperCase()}</h2>
                <div className="PerformanceDay"></div>
                <h2>{day.toUpperCase()}</h2>
                <div className="PerformanceTime"></div>
                <h2>{time.toUpperCase()}</h2>
            </section>
            <section className="SocialsSection">
                <div className="SocialsBandContainer">
                    <a href={band.facebook} target="blank"><img src={FbLogo} alt="Notre Facebook" /></a>
                    <a href={band.instagram} target="blank"><img src={InstaLogo} alt="Notre Instagram" /></a>
                    <a href={band.twitter} target="blank"><img src={XLogo} alt="Notre X (Twitter)" /></a>
                    <a href={band.youtube} target="blank"><img src={YoutLogo} alt="Notre chaine YouTube" /></a>
                    <a href={band.spotify} target="blank"><img src={SpotLogo} alt="Notre playlist Spotify" /></a>
                    <a href={band.website} target="blank"><img src={WebLogo} alt="Notre channel Discord" /></a>
                </div>
            </section>
            
            <section className="YoutubeSection">
                <iframe src={band.youtubeIntegrationLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
            </section>
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
}
export default BandPage;