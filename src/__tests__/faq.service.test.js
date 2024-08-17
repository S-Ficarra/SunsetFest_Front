import { FaqsService } from '../services/faqs.service';
import { FaqsDto } from '../dto/faqs.dto';
import { BASE_URL } from '../App';

// Mock the FaqsDto class
jest.mock('../dto/faqs.dto', () => ({
    FaqsDto: jest.fn().mockImplementation((id, user, createdAt, modifiedAt, status, type, question, answer) => ({
        id,
        user,
        createdAt,
        modifiedAt,
        status,
        type,
        question,
        answer,
    })),
}));

// Mock the BASE_URL constant
jest.mock('../App', () => ({
    BASE_URL: 'https://api.example.com/'
}));

describe('FaqsService', () => {
    beforeEach(() => {
        // Reset mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch and transform FAQs correctly', async () => {
        // Arrange
        const mockFaqs = [
            {
                _id: '1',
                _user: 'User1',
                _createdAt: '2024-01-01T00:00:00Z',
                _modifiedAt: '2024-01-01T00:00:00Z',
                _status: true,
                _type: 'type1',
                _question: 'What is test?',
                _answer: 'Test answer',
            },
            {
                _id: '2',
                _user: 'User2',
                _createdAt: '2024-01-01T00:00:00Z',
                _modifiedAt: '2024-01-01T00:00:00Z',
                _status: false,
                _type: 'type2',
                _question: 'What is another test?',
                _answer: 'Another test answer',
            }
        ];

        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockFaqs),
        });

        // Act
        const faqs = await FaqsService.fetchAllFaqs();

        // Assert
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}faqs`);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(faqs).toHaveLength(1); // Only the active FAQ should be returned
        expect(faqs[0]).toEqual(new FaqsDto(
            '1',
            'User1',
            '2024-01-01T00:00:00Z',
            '2024-01-01T00:00:00Z',
            true,
            'type1',
            'What is test?',
            'Test answer'
        ));
    });

    it('should handle fetch errors gracefully', async () => {
        // Arrange
        global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(FaqsService.fetchAllFaqs()).rejects.toThrow('Fetch error');
    });

    it('should handle empty API response', async () => {
        // Arrange
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue([]),
        });

        // Act
        const faqs = await FaqsService.fetchAllFaqs();

        // Assert
        expect(faqs).toHaveLength(0); // No FAQs should be returned
    });
});
