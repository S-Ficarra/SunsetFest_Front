import React from "react";
import HeroVideo from '../../assets/OfficialPromoVideo.mp4'
import HeroLogo from '../../assets/HeroLogoAndDate.png'
import './hero.css'


function Hero () {
    return (
        <section className="HeroSection">
            <div className="HeroMainContainer">
                <div className="HeroLogoContainer">
                    <img src={HeroLogo} alt="The Sunset Strip Festival" />
                </div>
                <video autoPlay={true} muted={true} loop={true}>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
        </section>
    );
}

export default Hero;