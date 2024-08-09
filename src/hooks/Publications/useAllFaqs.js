import { useState, useEffect } from 'react';
import { GetAllFaqs } from '../../controllers/faqs.controller';

export const useAllFaqs = () => {

    const [allFaqs, setAllFaqs] = useState([]);

    useEffect(() => {
        const fetchAllFaqs = async () => {
            const faqsModel = await GetAllFaqs();
            setAllFaqs(faqsModel);
            }

        fetchAllFaqs();
    }, []);

    return { allFaqs };

};