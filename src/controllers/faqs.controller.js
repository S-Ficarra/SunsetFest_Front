import { FaqsService } from "../services/faqs.service";
import { FaqsMapper } from "../mappers/faqs.mapper";

export const GetAllFaqs = async () => {

    const faqsDtoArray = await FaqsService.fetchAllFaqs();
    const faqsModelArray = faqsDtoArray.map(dto => FaqsMapper.transformFaqsDtoToFaqsModel(dto)) 

    return faqsModelArray;

};