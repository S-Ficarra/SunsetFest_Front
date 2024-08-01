import React from "react";
import NavBar from "../../components/navbar/navbar";
import FullProgram from "../../components/program/fullProgram";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'


function ProgramPage () {
    return (
        <>
            <NavBar />
            <div className="TitleContainer">
                <h1>PROGRAMME</h1>
            </div>
            <FullProgram />
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
}
export default ProgramPage;