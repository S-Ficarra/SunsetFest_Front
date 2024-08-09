import { BASE_URL } from "../App";
import { CountdownDto } from "../dto/countdown.dto.js";

export const CountdownService = {


    async fetchCountdown (countdownId) {
        const response = await fetch (`${BASE_URL}countdowns/${countdownId}`);
        const data = await response.json();       
        if (response.status === 200) {
            return new CountdownDto (
                data._id,
                data._name,
                data._endingDateAndTime
            );
        } else {
            return {response, data}; 
        };    
    }

}