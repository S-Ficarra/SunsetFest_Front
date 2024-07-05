import React from "react";
import './ContactPage.css'
import NavBar from "../../components/navbar/navbar";
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'


function ContactPage () {


    return (
        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>CONTACTEZ NOUS</h1>
        </div>
        <section className="FormSection">
            <div className="FormContainer">
                <form action="http://localhost:3001/sucess">
                    <div className="FormHead">
                        <div className="FormField">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder="VOTRE NOM" required/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="firstName"></label>
                            <input type="text" placeholder="VOTRE PRÉNOM" required/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="email"></label>
                            <input type="email" placeholder="VOTRE E-MAIL" required/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="object"></label>
                            <input type="text" placeholder="L'OBJET DE VOTRE DEMANDE" required/>
                        </div>
                    </div>
                    <div className="FormBottom">
                        <div className="FormField">
                            <label htmlFor="message"></label>
                            <textarea placeholder="VOTRE MESSAGE" required/>
                        </div>
                    </div>
                    <div className="ParagraphContainer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at dicta accusamus similique numquam! Modi cum inventore eaque impedit perspiciatis non nemo unde eligendi, tenetur veritatis? Qui natus quasi quod.
                        </p>
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
export default ContactPage;