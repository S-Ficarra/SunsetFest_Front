import { useState, useEffect } from 'react';
import { FaqsService } from '../services/faqs.service';
import { FaqsViewModel } from '../viewModels/faqs.viewModel';

export const useAllFaqs = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        FaqsService.fetchAllFaqs().then(faqDto => {
            const faqsModel = faqDto.map(dto => FaqsViewModel.transformFaqsDtoToFaqsModel(dto));
            setFaqs(faqsModel);
        });
    }, []);

    return { faqs };
};