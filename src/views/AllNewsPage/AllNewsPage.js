import React from "react";
import './AllNewsPage.css'
import NavBar from "../../components/navbar/navbar";
import AllNews from "../../components/news/allNews";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'

function AllNewsPage () {
    return (
        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>ACTUALITÉS</h1>
        </div>
        <AllNews />
        <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
};
export default AllNewsPage;