import { NewsModel } from "../models/news.model";

export const NewsMapper = {

    transformNewsDtoToNewsModel (newsDto) {
        return new NewsModel (
            newsDto.id,
            newsDto.content._title,
            newsDto.content._text,
            newsDto.content._image,
            newsDto._createdAt
        );
    }
};