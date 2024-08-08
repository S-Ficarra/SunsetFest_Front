import React, { useEffect, useState } from "react";
import { updateCountdown } from "../../services/utils";
import './countdown.css'


function Countdown ({endingTime}) {

    const [countdown, setCountdown] = useState(updateCountdown(endingTime));
    const [screenSize, setScreenSize] = useState(window.innerWidth);


    useEffect(() => {
        const intervalId = setInterval(() => {
          setCountdown(updateCountdown(endingTime));
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [endingTime]);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="SectionContainer">
          <div className="CountdownContainer">

            <div className="CountdownItem"><h2>{countdown.days}</h2><p> Jours</p></div>
            {screenSize > 600 && (
              <div className="CountdownItem"><h2>{countdown.hours}</h2><p> Heures</p></div>
            )}
            {screenSize > 900 && (
              <>
                <div className="CountdownItem"><h2>{countdown.minutes}</h2><p> Minutes</p></div>
                <div className="CountdownItem"><h2>{countdown.seconds}</h2><p> Secondes</p></div>
              </>
            )}
          </div>
        </section>
      );
}
export default Countdown; 