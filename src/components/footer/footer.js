import React from "react";
import { NavLink } from 'react-router-dom';
import './footer.css'
import FlibustierLogo from '../../assets/partnersLogos/Flibustier.png'
import GibsonLogo from '../../assets/partnersLogos/Gibson.png'
import HDLogo from '../../assets/partnersLogos/Harley-Davidson.png'
import JDLogo from '../../assets/partnersLogos/Jack-Daniels.png'
import LDLogo from '../../assets/partnersLogos/Liquid-Death.png'
import NRLogo from '../../assets/partnersLogos/newrock.png'
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import DateLogo from '../../assets/FestivalDateImg.png'
import FbLogo from '../../assets/socialsLogos/facebook.svg'
import InstaLogo from '../../assets/socialsLogos/instagram.svg'
import XLogo from '../../assets/socialsLogos/x-twitter.svg'
import YoutLogo from '../../assets/socialsLogos/youtube.svg'
import SpotLogo from '../../assets/socialsLogos/spotify.svg'
import DiscLogo from '../../assets/socialsLogos/discord.svg'


function Footer () {
    return (
        <footer>
            <div className="PartnersLogoContainers">
                <div className="PartnersLogos">
                    <a href="https://flibustierparis.com/" target="blank">
                    <img src={FlibustierLogo} alt="Visitez le site de Flibustier Paris" />
                    </a>
                    <a href="https://www.newrock.com/fr/" target="blank">
                    <img src={NRLogo} alt="Visitez le site de New Rock" />
                    </a>
                    <a href="https://www.harley-davidson.com/fr/fr/index.html" target="blank">
                    <img src={HDLogo} alt="Visitez le site de Harley Davidson" />
                    </a>
                    <a href="https://www.gibson.com/fr-FR/" target="blank">
                    <img src={GibsonLogo} alt="Visitez le site de Gibson" />
                    </a>
                    <a href="https://liquiddeath.com/en-fr" target="blank">
                    <img src={LDLogo} alt="Visitez le site de Liquid Death" />
                    </a>
                    <a href="https://www.jackdaniels.com/fr-fr" target="blank">
                    <img src={JDLogo} alt="Visitez le site de Jack Daniel's" />
                    </a>
                </div>
            </div>

            <div className="FooterImageContainer">
                <div className="SkullDateSocialContainer">
                    <div className="SkullContainer">
                        <img src={SkullLogo} alt="The Sunset Fest Skull" />
                    </div>
                    <div className="DateContainer">
                        <img src={DateLogo} alt="21-22-23 JUIN 2025" />
                    </div>
                    <div className="SocialsContainer">
                        <a href="https://www.facebook.com/HardRockGlamMetal73" target="blank"><img src={FbLogo} alt="Notre Facebook" /></a>
                        <a href="https://www.instagram.com/glam_metal80s/" target="blank"><img src={InstaLogo} alt="Notre Instagram" /></a>
                        <a href="https://x.com/DAILYGLAMMETAL" target="blank"><img src={XLogo} alt="Notre X (Twitter)" /></a>
                        <a href="https://www.youtube.com/@glammetalhardrock8286" target="blank"><img src={YoutLogo} alt="Notre chaine YouTube" /></a>
                        <a href="https://open.spotify.com/playlist/6XrK1egRFz1hgXSO0X08QV?si=5c27a9a4606846f5" target="blank"><img src={SpotLogo} alt="Notre playlist Spotify" /></a>
                        <a href="https://discord.gg/xRsbxFdH" target="blank"><img src={DiscLogo} alt="Notre channel Discord" /></a>
                    </div>
                </div>
            </div>

            <div className="FooterLinksContainer">
                <div className="FooterLinks">
                    <NavLink>CONTACT</NavLink>
                    <span>|</span>
                    <NavLink>COOKIES</NavLink>
                    <span>|</span>
                    <NavLink>MENTIONS LÉGALES</NavLink>
                    <span>|</span>
                    <NavLink>PRESSE</NavLink>
                </div>
            </div>
        </footer>
    );
}

export default Footer;