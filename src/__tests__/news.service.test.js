import { NewsService } from '../services/news.service';
import { NewsDto } from '../dto/news.dto';
import { BASE_URL } from '../App';

// Mock the NewsDto class
jest.mock('../dto/news.dto', () => ({
    NewsDto: jest.fn().mockImplementation((id, user, createdAt, modifiedAt, status, type, content) => ({
        id,
        user,
        createdAt,
        modifiedAt,
        status,
        type,
        content,
    })),
}));

// Mock the BASE_URL constant
jest.mock('../App', () => ({
    BASE_URL: 'https://api.example.com/'
}));

describe('NewsService', () => {
    beforeEach(() => {
        // Reset mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch and transform all news correctly', async () => {
        // Arrange
        const mockNews = [
            {
                _id: '1',
                _user: 'User1',
                _createdAt: '2024-01-01T00:00:00Z',
                _modifiedAt: '2024-01-01T00:00:00Z',
                _status: true,
                _type: 'type1',
                _content: 'News content 1',
            },
            {
                _id: '2',
                _user: 'User2',
                _createdAt: '2024-01-01T00:00:00Z',
                _modifiedAt: '2024-01-01T00:00:00Z',
                _status: false,
                _type: 'type2',
                _content: 'News content 2',
            }
        ];

        global.fetch = jest.fn().mockResolvedValue({
            status: 200,
            json: jest.fn().mockResolvedValue(mockNews),
        });

        // Act
        const news = await NewsService.fetchAllNews();

        // Assert
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}news`);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(news).toHaveLength(1); // Only the active news should be returned
        expect(news[0]).toEqual(new NewsDto(
            '1',
            'User1',
            '2024-01-01T00:00:00Z',
            '2024-01-01T00:00:00Z',
            true,
            'type1',
            'News content 1'
        ));
    });

    it('should handle empty API response for fetch all news', async () => {
        // Arrange
        global.fetch = jest.fn().mockResolvedValue({
            status: 200,
            json: jest.fn().mockResolvedValue([]),
        });

        // Act
        const news = await NewsService.fetchAllNews();

        // Assert
        expect(news).toHaveLength(0); // No news should be returned
    });

    it('should fetch and transform a single news item correctly', async () => {
        // Arrange
        const mockNews = {
            _id: '1',
            _user: 'User1',
            _createdAt: '2024-01-01T00:00:00Z',
            _modifiedAt: '2024-01-01T00:00:00Z',
            _status: true,
            _type: 'type1',
            _content: 'News content 1',
        };

        global.fetch = jest.fn().mockResolvedValue({
            status: 200,
            json: jest.fn().mockResolvedValue(mockNews),
        });

        // Act
        const news = await NewsService.fetchNews('1');

        // Assert
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}news/1`);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(news).toEqual(new NewsDto(
            '1',
            'User1',
            '2024-01-01T00:00:00Z',
            '2024-01-01T00:00:00Z',
            true,
            'type1',
            'News content 1'
        ));
    });

});
