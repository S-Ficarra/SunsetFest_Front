import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import FestivalMap from "../../components/map/festivalMap/festivalMap";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'


function MapPage () {
    return (
        <>
            <NavBar />
            <div className="TitleContainer">
                <h1>CARTE</h1>
            </div>
            <FestivalMap />
            <div className="ButtonContainer">
                <Link to='/programme'><button className="BlackPinkButtonSmall">VOIR LE PROGRAMME DU FESTIVAL</button></Link>
            </div>
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
}
export default MapPage;