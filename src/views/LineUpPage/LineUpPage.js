import React from "react";
import './LineUpPage.css'
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