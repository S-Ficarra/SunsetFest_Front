import React, { useState } from "react";
import './press.css'
import { SendPressEmail } from "../../controllers/email.controller";


function Press () {


    const [emailSent, setEmailSent] = useState(false)
    const [formState, setFormState] = useState({
        journalistName: '',
        mediaName: '',
        email: '',
        mediaLink: '',
        pdf: null,
    })
    console.log(formState);
    


    const handleChange = (e) => {
        const { id, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];
            if (file) {
                setFormState({
                    ...formState,
                    pdf: file,
                });
            }
        } else {
            setFormState({
                ...formState,
                [id]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();
            formData.append("journalistName", formState.journalistName);
            formData.append("mediaName", formState.mediaName);
            formData.append("email", formState.email);
            formData.append("mediaLink", formState.mediaLink);
            formData.append("pdf", formState.pdf);


            await SendPressEmail(formData);
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
                <form onSubmit={handleSubmit}>
                    <div className="FormHead">
                        <div className="FormField">
                            <label htmlFor="journalistName"></label>
                            <input id="journalistName" type="text" placeholder="NOM DU JOURNALISTE" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="mediaName"></label>
                            <input id="mediaName" type="text" placeholder="NOM DE VOTRE MÉDIA" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="email"></label>
                            <input id="email" type="email" placeholder="VOTRE E-MAIL" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="FormField">
                            <label htmlFor="mediaLink"></label>
                            <input id="mediaLink" type="url" placeholder="LIEN PRINCIPAL DE VOTRE MÉDIA" required onChange={(e) => {handleChange(e)}}/>
                        </div>
                    </div>
                    <div className="FormFieldBottom">
                        <label htmlFor="pdf"></label>
                        <input id="pdf" type="file" required onChange={(e) => {handleChange(e)}}/>
                        <p>Veuillez joindre votre carte de presse</p>
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
export default Press;