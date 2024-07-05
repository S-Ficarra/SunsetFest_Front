import React from "react";
import './PressPage.css'
import NavBar from "../../components/navbar/navbar";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'


function PressPage () {


    return (
        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>PRESSE</h1>
        </div>
        <section className="FormSection">
            <div className="ParagraphContainer">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro blanditiis totam similique ullam! Veniam nobis quae assumenda nulla dolorem iusto sint ut ipsa. Itaque eaque cumque amet distinctio adipisci?
                </p>    
                <p>
                Dolore explicabo magnam praesentium atque vitae nam quia? Minus aliquid laudantium harum tempora itaque veniam velit maiores magni soluta, odit porro praesentium nobis laboriosam nostrum dolorum corporis numquam omnis reiciendis!
                </p>
            </div>
            <div className="FormContainer">
                <form action="http://localhost:3001/sucess">
                    <div className="FormHead">
                        <div className="FormField">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder="NOM DU JOURNALISTE" required/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="firstName"></label>
                            <input type="text" placeholder="NOM DE VOTRE MÉDIA" required/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="email"></label>
                            <input type="email" placeholder="VOTRE E-MAIL"/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="url"></label>
                            <input type="url" placeholder="LIEN PRINCIPAL DE VOTRE MÉDIA" required/>
                        </div>
                    </div>
                    <div className="FormFieldBottom">
                        <label htmlFor="file"></label>
                        <input type="file" placeholder="LIEN PRINCIPAL DE VOTRE MÉDIA" required/>
                        <p>Veuillez joindre votre carte de presse</p>
                    </div>
                    <button>ENVOYER</button>
                </form>
            </div>
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
        </section>
        <TicketInfoPanel />
        <Footer />
        </>
    );
}
export default PressPage;