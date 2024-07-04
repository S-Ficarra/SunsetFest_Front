import React from "react";
import './BandPage.css'
import { useParams } from "react-router-dom";
import BandData from '../../services/fakeDatas/bands.json'
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import { convertToBase64 } from "../../services/utils";
import FbLogo from '../../assets/socialsLogos/facebook.svg'
import InstaLogo from '../../assets/socialsLogos/instagram.svg'
import XLogo from '../../assets/socialsLogos/x-twitter.svg'
import YoutLogo from '../../assets/socialsLogos/youtube.svg'
import SpotLogo from '../../assets/socialsLogos/spotify.svg'
import WebLogo from '../../assets/socialsLogos/globe-solid.svg'

function BandPage () {

    const { name } = useParams();
    const formattedName = name.replace(/([A-Z])/g, ' $1').trim();
    const band = BandData.find((band) => band._name === formattedName);

    return (
        <>
            <NavBar />
            <div className="BandHeader">
                <img src={convertToBase64(band._thumbnailImage.data)} alt={band._name} />
                <div className="HeaderBlackFilter"></div>
                <div className="BandHeaderTextContainer">
                    <h1>{band._name.toUpperCase()}</h1>
                    <p>{band._country}</p>
                </div>
            </div>
            <section className="SpotifySection">
            <iframe src={band._socials._spotifyIntegrationLink} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </section>
            <section className="BandTextSection">
                <p>{band._text}</p>
            </section>
            <section className="SocialsSection">
                <div className="SocialsContainer">
                    <a href={band._socials._facebook} target="blank"><img src={FbLogo} alt="Notre Facebook" /></a>
                    <a href={band._socials._instagram} target="blank"><img src={InstaLogo} alt="Notre Instagram" /></a>
                    <a href={band._socials._twitter} target="blank"><img src={XLogo} alt="Notre X (Twitter)" /></a>
                    <a href={band._socials._youtube} target="blank"><img src={YoutLogo} alt="Notre chaine YouTube" /></a>
                    <a href={band._socials._spotify} target="blank"><img src={SpotLogo} alt="Notre playlist Spotify" /></a>
                    <a href={band._socials._website} target="blank"><img src={WebLogo} alt="Notre channel Discord" /></a>
                </div>
            </section>
            <section className="YoutubeSection">
                <iframe src={band._socials._youtubeIntegrationLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
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