import React from "react";
import './NewsPage.css'
import { useParams } from "react-router-dom";
import { useNews } from "../../hooks/Publications/useNews";
import NavBar from "../../components/navbar/navbar";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import { BASE_URL } from "../../App";



function NewsPage () {

    const { id } = useParams();
    const { news } = useNews(id);

    if (!news) {
        return <div>Chargement...</div>;
    };

    return (
        <>
            <NavBar />
            <section className="ImageContainer">
                <img src={`${BASE_URL}${news.image}`} alt={news.title} />    
                <div className="ImageBlackFilter"></div>
                <h1>{news.title.toUpperCase()}</h1>
            </section>
            <section className="ContentContainer">
                <div id="text" dangerouslySetInnerHTML={{ __html: news.text }}></div> 
            </section>
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
};
export default NewsPage;