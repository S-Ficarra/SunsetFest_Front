import { FaqsModel } from "../models/faqs.model";

export const FaqsViewModel = {

    transformFaqsDtoToFaqsModel (faqsDto) {
        return new FaqsModel (
            faqsDto.id,
            faqsDto.question,
            faqsDto.answer
        );
    }
    
};