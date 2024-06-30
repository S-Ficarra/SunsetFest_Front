import React from "react";
import { Link } from "react-router-dom";
import './ticketInfoPanel.css'


function TicketInfoPanel () {
    return (
        <section className="TicketsInfoPanel">
            <div className="TopSeparator"></div>
            <div className="FullContainer">
                <div className="TicketContainer">
                    <h2>BILLETERIE</h2>
                    <a href="https://weezevent.com/fr/" target="blank">
                    <button>achetez vos billets</button>
                    </a>
                </div>

                <div className="InfoContainer">
                    <h2>INFORMATIONS & FAQS</h2>
                    <Link>
                    <button>voir les informations</button>
                    </Link>
                </div>
            </div>
            <div className="BottomSeparator"></div>
        </section>
    );
}

export default TicketInfoPanel;

