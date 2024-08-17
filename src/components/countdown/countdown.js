import React, { useEffect, useState } from "react";
import { updateCountdown } from "../../services/utils";
import './countdown.css'
import { useScreenSize } from "../../hooks/useScreenSize";
import { useCountdown } from "../../hooks/useCountdown";


function Countdown () {
  
  const { screenSize } = useScreenSize();
  const { endingTime } = useCountdown(2) 
  const [timeLeft, setTimeLeft] = useState(updateCountdown(endingTime)); 

  useEffect(() => {
        if (!endingTime) return;

        setTimeLeft(updateCountdown(endingTime));
          const intervalId = setInterval(() => {
            setTimeLeft(updateCountdown(endingTime));
        }, 1000);

        return () => clearInterval(intervalId);
  }, [endingTime]);


    return (
        <section className="SectionContainer">
          <div className="CountdownContainer">

            <div className="CountdownItem"><h2>{timeLeft.days}</h2><p> Jours</p></div>
            {screenSize > 600 && (
              <div className="CountdownItem"><h2>{timeLeft.hours}</h2><p> Heures</p></div>
            )}
            {screenSize > 900 && (
              <>
                <div className="CountdownItem"><h2>{timeLeft.minutes}</h2><p> Minutes</p></div>
                <div className="CountdownItem"><h2>{timeLeft.seconds}</h2><p> Secondes</p></div>
              </>
            )}
          </div>
        </section>
      );
}
export default Countdown; 