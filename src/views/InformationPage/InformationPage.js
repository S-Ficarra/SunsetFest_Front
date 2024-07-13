import React from "react";
import './InformationPage.css'
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import NavBar from "../../components/navbar/navbar";
import Informations from "../../components/informations/informations";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import Countdown from "../../components/countdown/countdown";
import endingTime from '../../services/fakeDatas/countdown.json'


function InformationPage () {

    return(
        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>INFORMATIONS</h1>
        </div>
        <Informations />
        <div className="Separator">
            <img src={SkullLogo} alt="Notre logo" />
        </div>
        <TicketInfoPanel />
        <Footer />
        </>
    );
};
export default InformationPage;