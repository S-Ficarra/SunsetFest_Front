import React, { useEffect, useState } from "react";
import { updateCountdown } from "../../services/utils";
import './countdown.css'


function Countdown ({endingTime}) {

    const [countdown, setCountdown] = useState(updateCountdown(endingTime));

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCountdown(updateCountdown(endingTime));
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [endingTime]);

    return (
        <section className="SectionContainer">
            <div className="CountdownContainer">
                <div className="CountdownItem"><h2>{countdown.days}</h2><p> Jours</p></div> 
                <div className="CountdownItem"><h2>{countdown.hours}</h2><p> Heures</p></div>
                <div className="CountdownItem"><h2>{countdown.minutes}</h2><p> Minutes</p></div>
                <div className="CountdownItem"><h2>{countdown.seconds}</h2><p> Secondes</p></div>
            </div>
        </section>
    );
}
export default Countdown; 