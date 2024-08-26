import React, { useState, useEffect } from "react";
import HeroVideoDesktop from '../../assets/OfficialPromoVideo.mp4'
import HeroImageMobile from '../../assets/HeroMobileImage.jpg'
import HeroLogo from '../../assets/HeroLogoAndDate.png'
import './hero.css'


function Hero () {

    const [isMobile, setIsMobile] = useState(false);

    const updateMedia = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        updateMedia();
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (
        <section className="HeroSection">
            <div className="HeroMainContainer">
                <div className="HeroLogoContainer">
                    <img src={HeroLogo} alt="The Sunset Strip Festival" />
                </div>
                {isMobile ? (
                    <img className="HeroMobile" src={HeroImageMobile} alt="HeroMobile" />
                ) : (
                    <video autoPlay={true} muted={true} loop={true}>
                        <source src={HeroVideoDesktop} type="video/mp4" />
                    </video>
                )}
            </div>
        </section>
    );
}

export default Hero;