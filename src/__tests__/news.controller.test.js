import { GetAllNews, GetNews } from '../controllers/news.controller';
import { NewsService } from '../services/news.service';
import { NewsMapper } from '../mappers/news.mapper';

// Mock the NewsMapper class
jest.mock('../mappers/news.mapper', () => ({
    NewsMapper: {
        transformNewsDtoToNewsModel: jest.fn()
    }
}));

describe('GetAllNews', () => {
    beforeEach(() => {
        // Reset any previous mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch news and transform them correctly', async () => {
        // Arrange
        const mockNewsDtos = [
            {
                id: '1',
                createdAt: '2024-01-01T00:00:00Z',
                title: 'News 1',
                content: 'Content for news 1',
            },
            {
                id: '2',
                createdAt: '2024-01-02T00:00:00Z',
                title: 'News 2',
                content: 'Content for news 2',
            }
        ];

        const mockNewsModels = [
            { id: '2', title: 'News 2', content: 'Content for news 2', createdAt: '2024-01-02T00:00:00Z' },
            { id: '1', title: 'News 1', content: 'Content for news 1', createdAt: '2024-01-01T00:00:00Z' }
        ];

        // Mock NewsService.fetchAllNews to return mockNewsDtos
        jest.spyOn(NewsService, 'fetchAllNews').mockResolvedValue(mockNewsDtos);

        // Mock NewsMapper.transformNewsDtoToNewsModel to return mockNewsModels
        NewsMapper.transformNewsDtoToNewsModel.mockImplementation(dto => ({
            id: dto.id,
            title: dto.title,
            content: dto.content,
            createdAt: dto.createdAt
        }));

        // Act
        const news = await GetAllNews();

        // Assert
        expect(NewsService.fetchAllNews).toHaveBeenCalledTimes(1);
        expect(NewsMapper.transformNewsDtoToNewsModel).toHaveBeenCalledTimes(2);
        expect(NewsMapper.transformNewsDtoToNewsModel).toHaveBeenCalledWith(mockNewsDtos[0]);
        expect(NewsMapper.transformNewsDtoToNewsModel).toHaveBeenCalledWith(mockNewsDtos[1]);
        expect(news).toEqual(mockNewsModels);
    });

    it('should handle errors from NewsService.fetchAllNews', async () => {
        // Arrange
        jest.spyOn(NewsService, 'fetchAllNews').mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(GetAllNews()).rejects.toThrow('Fetch error');
    });
});

describe('GetNews', () => {
    beforeEach(() => {
        // Reset any previous mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch and transform a single news item correctly', async () => {
        // Arrange
        const mockNewsDto = {
            id: '1',
            createdAt: '2024-01-01T00:00:00Z',
            title: 'News 1',
            content: 'Content for news 1',
        };

        const mockNewsModel = {
            id: '1',
            title: 'News 1',
            content: 'Content for news 1',
            createdAt: '2024-01-01T00:00:00Z'
        };

        // Mock NewsService.fetchNews to return mockNewsDto
        jest.spyOn(NewsService, 'fetchNews').mockResolvedValue(mockNewsDto);

        // Mock NewsMapper.transformNewsDtoToNewsModel to return mockNewsModel
        NewsMapper.transformNewsDtoToNewsModel.mockImplementation(dto => ({
            id: dto.id,
            title: dto.title,
            content: dto.content,
            createdAt: dto.createdAt
        }));

        // Act
        const news = await GetNews('1');

        // Assert
        expect(NewsService.fetchNews).toHaveBeenCalledWith('1');
        expect(NewsMapper.transformNewsDtoToNewsModel).toHaveBeenCalledWith(mockNewsDto);
        expect(news).toEqual(mockNewsModel);
    });

    it('should handle errors from NewsService.fetchNews', async () => {
        // Arrange
        jest.spyOn(NewsService, 'fetchNews').mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(GetNews('1')).rejects.toThrow('Fetch error');
    });
});
