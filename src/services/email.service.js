import { BASE_URL } from "../App";

export const EmailService = {

    async sendContactEmail (contactEmail) {  
            
        const response = await fetch (`${BASE_URL}sendemail/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactEmail)
        });
        
        const data = await response.json();
        return {response, data};

    },

    async sendPressEmail (pressEmail) {          
            
        const response = await fetch (`${BASE_URL}sendemail/press`, {
            method: 'POST',
            body: pressEmail
        });
        
        const data = await response.json();
        return {response, data};

    },

};