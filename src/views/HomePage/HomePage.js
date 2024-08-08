import React from 'react';
import '../../App.css'
import './HomePage.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar'
import TicketInfoPanel from '../../components/ticketsInfoPanel/ticketInfoPanel';
import Footer from '../../components/footer/footer';
import WMRTS from '../../assets/when metal ruled the strip.png'
import TRGJ from '../../assets/the rock greatest joyride.png'
import Hero from '../../components/hero/hero';
import Countdown from '../../components/countdown/countdown';
import endingTime from '../../services/fakeDatas/countdown.json'
import LineUpHomePage from '../../components/band/lineUpHomePage/lineUpHomePage';
import NewsHomePage from '../../components/news/newsHomePage/newsHomePage';
import FestivalMap from '../../components/map/festivalMap/festivalMap';

function HomePage () {
    return (
            <>
                <NavBar />
                <Hero />
                <Countdown endingTime={endingTime.endingTime}/>
                <NewsHomePage />
                <div className='HomePageSloganContainer'>
                    <img src={WMRTS} alt="" />
                </div>
                <LineUpHomePage />
                <div className='HomePageSloganContainer'>
                    <img src={TRGJ} alt="" />
                </div>
                <div className="SecondTitleContainer">
                    <h1>CARTE</h1>
                    <p>Découvrez les points d'intérêt du festival</p>
                </div>
                <FestivalMap />
                <div className='ButtonContainer'>
                    <Link to='/carte'><button className='BlackPinkButtonSmall'>VOIR LA CARTE</button></Link>
                </div>
                <TicketInfoPanel />
                <Footer />
            </>
    );
}

export default HomePage;