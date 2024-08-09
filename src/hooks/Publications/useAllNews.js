import { useState, useEffect } from 'react';
import { GetAllNews } from '../../controllers/news.controller';

export const useAllNews = () => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        const fetchAllNews = async () => {
            const newsModels = await GetAllNews();
            setAllNews(newsModels);
        };

        fetchAllNews()
    }, []);

    return { allNews };
};