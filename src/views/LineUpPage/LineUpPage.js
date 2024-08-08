import React from "react";
import './LineUpPage.css'
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import LineUp from "../../components/band/lineUp";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'


function LineUpPage () {
    return (
        <>
            <NavBar />
            <div className="TitleContainer">
                <h1>LINE-UP</h1>
            </div>
            <div className="ButtonContainer">
                <Link to='/programme'><button className="BlackPinkButtonSmall">VOIR LE PROGRAMME DU FESTIVAL</button></Link>
            </div>
            <LineUp />
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
}
export default LineUpPage;