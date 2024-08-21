import React from "react";
import NavBar from '../../components/navbar/navbar'
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import Contact from "../../components/email/contact";


function ContactPage () {

    return (
        <>
        <NavBar />
        <Contact />
        <div className="Separator">
            <img src={SkullLogo} alt="Notre logo" />
        </div>
        <TicketInfoPanel />
        <Footer />
        </>
    );
}
export default ContactPage;