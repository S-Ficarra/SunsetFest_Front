import { useState, useEffect } from "react";
import { GetNews } from "../controllers/news.controller";

export const useNews = (newsId) => {
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const newsModel = await GetNews(newsId)
            setNews(newsModel);
        }

        fetchNews();
    }, [newsId]);

    return { news };
};