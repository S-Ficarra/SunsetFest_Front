import React from "react";
import { convertToBase64 } from "../../services/utils";
import './informations.css'
import { useAllInformations } from "../../hooks/useAllInformations";

function Informations () {

    const { informations } = useAllInformations();

    return (
        <section className="InformationSection">
            {informations.map((information, index) => (
                <div className="InformationContainer" key={information.id}>
                    {index % 2 === 0 ? (
                        <>
                            <div className="InformationImgContainer">
                                <img src={convertToBase64(information.image.data)} alt="" />
                            </div>
                            <div className="InformationContentContainer">
                                <h1 className="right-align">{information.title.toUpperCase()}</h1>
                                <div className="TextContainer">
                                    <p>{information.text}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="InformationContentContainer">
                                <h1 className="left-align">{information.title.toUpperCase()}</h1>
                                <div className="TextContainer">
                                    <p>{information.text}</p>
                                </div>
                            </div>
                            <div className="InformationImgContainer">
                                <img src={convertToBase64(information.image.data)} alt="" />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </section>
    );
};
export default Informations;