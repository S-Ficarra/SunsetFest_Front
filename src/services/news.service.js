import { NewsDto } from "../dto/news.dto";
import { BASE_URL } from "../App";


export const NewsService = {

    async fetchAllNews() {
        const response = await fetch (`${BASE_URL}news`);
        const data = await response.json();
        return data
            .filter(news => news._status === true)
            .map(news => new NewsDto (
                news._id,
                news._user,
                news._createdAt,
                news._modifiedAt,
                news._status,
                news._type,
                news._content
            ));
    },

    async fetchNews(newsId) {
        const response = await fetch (`${BASE_URL}news/${newsId}`);
        const news = await response.json();
        return new NewsDto (
            news._id,
            news._user,
            news._createdAt,
            news._modifiedAt,
            news._status,
            news._type,
            news._content
        );
    },

};