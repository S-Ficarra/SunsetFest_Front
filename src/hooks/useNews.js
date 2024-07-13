import { useState, useEffect } from "react";
import { NewsService } from "../services/news.service";
import { NewsViewModel } from "../viewModels/news.viewModel";

export const useNews = (newsId) => {
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const newsDto = await NewsService.fetchNews(newsId);
            const newsModel = NewsViewModel.transformNewsDtoToNewsModel(newsDto);
            setNews(newsModel);
        }

        fetchData();
    }, [newsId]);

    return { news };
};