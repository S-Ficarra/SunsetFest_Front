import { useState, useEffect } from "react";
import { GetCountdown } from "../controllers/countdown.controller";

export const useCountdown = (id) => {

    const [endingTime, setEndingTime] = useState()

    useEffect(() => {
        const fetchCountdowns = async () => {
            const countdown = await GetCountdown(id);                           
            setEndingTime(countdown.endingDateAndTime)
        };

        fetchCountdowns();
    }, [id]);
    

    return { endingTime }

}