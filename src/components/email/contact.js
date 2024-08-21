import React, { useState } from "react";
import { SendContactEmail } from "../../controllers/email.controller";
import './contact.css'


function Contact () {

    const [emailSent, setEmailSent] = useState(false)
    const [formState, setFormState] = useState({
        name: '',
        firstName: '',
        email: '',
        object: '',
        message: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormState({
            ...formState,
            [id]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await SendContactEmail(formState);
            setEmailSent(true);
        } catch (error) {
            alert(error.message); 
        };

    };

    if (emailSent) {
        return(
            <div className="Sucess">
                <p>Merci pour votre message!</p>
                <p>Nous vous recontacterons dans les meilleurs délais</p>
            </div>
        );
    };


    return (
        <>
        <div className="TitleContainer">
            <h1>CONTACTEZ NOUS</h1>
        </div>
        <section className="FormSection">
            <div className="FormContainer">
                <form onSubmit={handleSubmit}>
                    <div className="FormHead">
                        <div className="FormField">
                            <label htmlFor="name"></label>
                            <input id="name" type="text" placeholder="VOTRE NOM" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="firstName"></label>
                            <input id="firstName" type="text" placeholder="VOTRE PRÉNOM" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="email"></label>
                            <input id="email" type="email" placeholder="VOTRE E-MAIL" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="subject"></label>
                            <input id="subject" type="text" placeholder="L'OBJET DE VOTRE DEMANDE" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                    </div>
                    <div className="FormBottom">
                        <div className="FormField">
                            <label htmlFor="message"></label>
                            <textarea id="message" placeholder="VOTRE MESSAGE" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                    </div>
                    <div className="ParagraphContainer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at dicta accusamus similique numquam! Modi cum inventore eaque impedit perspiciatis non nemo unde eligendi, tenetur veritatis? Qui natus quasi quod.
                        </p>
                    </div>
                    <div className="ButtonContainer">
                        <button className="BlackBlueButtonSmall">ENVOYER</button>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
}
export default Contact;