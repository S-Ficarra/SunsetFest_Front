import { FaqsDto } from "../../dto/faqs.dto";
import { BASE_URL } from "../../App";

export const FaqsService = {

    async fetchAllFaqs () {
        const response = await fetch (`${BASE_URL}faqs`)
        const data = await response.json();
        return data
            .filter(faqs => faqs._status === true)
            .map(faqs => new FaqsDto (
                faqs._id,
                faqs._user,
                faqs._createdAt,
                faqs._modifiedAt,
                faqs._status,
                faqs._type,
                faqs._question, 
                faqs._answer
            ));
    }
    
};