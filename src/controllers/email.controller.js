import { EmailService } from "../services/email.service";


export const SendContactEmail = async (contactEmail) => {

    let { response, data } = await EmailService.sendContactEmail(contactEmail);

    if (response.status === 200) {
        return data.message;
    } else {
        throw new Error(data.message);
    };

};

export const SendPressEmail = async (pressEmail) => {

    let { response, data } = await EmailService.sendPressEmail(pressEmail);

    if (response.status === 200) {
        return data.message;
    } else {
        throw new Error(data.message);
    };

};