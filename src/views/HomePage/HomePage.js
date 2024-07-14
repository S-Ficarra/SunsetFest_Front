import React from 'react';
import '../../App.css'
import './HomePage.css';
import NavBar from '../../components/navbar/navbar'
import TicketInfoPanel from '../../components/ticketsInfoPanel/ticketInfoPanel';
import Footer from '../../components/footer/footer';
import WMRTS from '../../assets/when metal ruled the strip.png'
import TRGJ from '../../assets/the rock greatest joyride.png'
import Hero from '../../components/hero/hero';
import Countdown from '../../components/countdown/countdown';
import endingTime from '../../services/fakeDatas/countdown.json'
import LineUpHomePage from '../../components/band/lineUpHomePage/lineUpHomePage';


function HomePage () {
    return (
            <>
                <NavBar />
                <Hero />
                <Countdown endingTime={endingTime.endingTime}/>
                <div className='HomePageSloganContainer'>
                    <img src={WMRTS} alt="" />
                </div>
                <LineUpHomePage />
                <div className='HomePageSloganContainer'>
                    <img src={TRGJ} alt="" />
                </div>
                <TicketInfoPanel />
                <Footer />
            </>
    );
}

export default HomePage;