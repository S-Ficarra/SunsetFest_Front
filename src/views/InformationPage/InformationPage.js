import React from "react";
import './InformationPage.css'
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import NavBar from "../../components/navbar/navbar";
import Informations from "../../components/informations/informations";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import Faqs from "../../components/faqs/faqs";


function InformationPage () {

    return(
        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>INFORMATIONS</h1>
        </div>
        <Informations />
        <div className="SecondTitleContainer">
            <h1>FAQS</h1>
        </div>
        <Faqs />
        <div className="Separator">
            <img src={SkullLogo} alt="Notre logo" />
        </div>
        <TicketInfoPanel />
        <Footer />
        </>
    );
};
export default InformationPage;