import React from "react";
import './informations.css'
import { useAllInformations } from "../../hooks/Publications/useAllInformations";
import { BASE_URL } from "../../App";


function Informations () {

    const { allInformations } = useAllInformations();

    return (
        <section className="InformationSection">
            {allInformations.map((information, index) => (
                <div className="InformationContainer" key={information.id}>
                    {index % 2 === 0 ? (
                        <>
                            <div className="InformationImgContainer">
                                <img src={`${BASE_URL}${information.image}`} alt={information.title} />
                            </div>
                            <div className="InformationContentContainer">
                                <h1 className="right-align">{information.title.toUpperCase()}</h1>
                                <div className="TextContainer">
                                <div id="text" dangerouslySetInnerHTML={{ __html: information.text }}></div> 
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="InformationContentContainer">
                                <h1 className="left-align">{information.title.toUpperCase()}</h1>
                                <div className="TextContainer">
                                    <div id="text" dangerouslySetInnerHTML={{ __html: information.text }}></div> 
                                </div>
                            </div>
                            <div className="InformationImgContainer">
                                <img src={`${BASE_URL}${information.image}`} alt={information.title} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </section>
    );
};
export default Informations;