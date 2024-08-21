import { NewsService } from "../services/Publications/news.service";
import { NewsMapper } from "../mappers/news.mapper";

export const GetAllNews = async () => {

    const newsDtoArray = await NewsService.fetchAllNews();
    const newsModelArray = newsDtoArray.map(dto => NewsMapper.transformNewsDtoToNewsModel(dto));

    const sortedNews = [...newsModelArray].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return sortedNews;

};

export const GetNews = async (newsId) => {

    const newsDto = await NewsService.fetchNews(newsId);
    const newsModel = NewsMapper.transformNewsDtoToNewsModel(newsDto);

    return newsModel;

};