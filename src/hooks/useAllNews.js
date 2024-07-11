import { useState, useEffect } from 'react';
import { NewsService } from '../services/news.service';
import { NewsViewModel } from '../viewModels/news.viewModel';

export const useAllNews = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        NewsService.fetchAllNews().then(newsDtos => {
            console.log(newsDtos);
            const newsModels = newsDtos.map(dto => NewsViewModel.transformNewsDtoToNewsModel(dto));
            setNews(newsModels);
        });
    }, []);

    return { news };
};