import React from "react";
import NavBar from "../../components/navbar/navbar";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import Press from "../../components/email/press";


function PressPage () {


    return (
        <>
        <NavBar />
        <Press />
        <div className="Separator">
            <img src={SkullLogo} alt="Notre logo" />
        </div>
        <TicketInfoPanel />
        <Footer />
        </>
    );
}
export default PressPage;