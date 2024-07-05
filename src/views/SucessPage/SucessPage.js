import React from "react";
import './SucessPage.css'
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";

function SucessPage () {

    return(
        <>
            <NavBar />
            <div className="ParagraphContainer">
                <p>Merci pour votre message!</p>
                <p>Nous vous recontacterons dans les meilleurs délais</p>
            </div>
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>


    );
}
export default SucessPage;