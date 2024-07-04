import React from "react";
import './ContactPage.css'
import NavBar from "../../components/navbar/navbar";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";

function ContactPage () {
    return (

        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>CONTACTEZ NOUS</h1>
        </div>
        <TicketInfoPanel />
        <Footer />
        
        </>



    );
}
export default ContactPage;