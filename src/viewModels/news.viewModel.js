import { NewsModel } from "../models/news.model";

export const NewsViewModel = {

    transformNewsDtoToNewsModel (newsDto) {
        return new NewsModel (
            newsDto.id,
            newsDto.status,
            newsDto.type,
            newsDto.content._title,
            newsDto.content._text,
            newsDto.content._image
        );
    }
};