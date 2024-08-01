import React, { useState }from "react";
import './fullProgram.css'
import FirstDay from "./firstDay/firstDay";
import SecondDay from "./secondDay/secondDay";
import ThirdDay from "./thirdDay/thirdDay";
import { useProgram } from "../../hooks/useProgram";


function FullProgram () {

    const id = 2023 

    const { performances } = useProgram(id)
    
    const [daySelected, setDaySelected] = useState('friday');
    const handleClick = (e, value) => {
        e.preventDefault()
        setDaySelected(value)
    }

    
    if (performances.length === 0) {
        return <div>chargement</div>
    }

    return (
        <div>
            <div className="ProgramButtonContainer">
                <button className="ProgramButton" id={daySelected === 'friday' ? 'Selected' : ''} onClick={(e) => {handleClick(e, 'friday')}}>Vendredi</button>
                <button className="ProgramButton button2" id={daySelected === 'saturday' ? 'Selected' : ''} onClick={(e) => {handleClick(e, 'saturday')}}>Samedi</button>
                <button className="ProgramButton" id={daySelected === 'sunday' ? 'Selected' : ''} onClick={(e) => {handleClick(e, 'sunday')}}>Dimanche</button>
            </div>
            {daySelected === 'friday' && <FirstDay performances={performances} />}
            {daySelected === 'saturday' && <SecondDay performances={performances} />}
            {daySelected === 'sunday' && <ThirdDay performances={performances} />}
        </div>
    );
};
export default FullProgram;