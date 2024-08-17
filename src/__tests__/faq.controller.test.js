import { GetAllFaqs } from '../controllers/faqs.controller';
import { FaqsService } from '../services/faqs.service';
import { FaqsMapper } from '../mappers/faqs.mapper';

// Mock the FaqsMapper class
jest.mock('../mappers/faqs.mapper', () => ({
    FaqsMapper: {
        transformFaqsDtoToFaqsModel: jest.fn()
    }
}));

describe('GetAllFaqs', () => {
    beforeEach(() => {
        // Reset any previous mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch FAQs and transform them correctly', async () => {
        // Arrange
        const mockFaqsDtos = [
            {
                id: '1',
                user: 'User1',
                createdAt: '2024-01-01T00:00:00Z',
                modifiedAt: '2024-01-01T00:00:00Z',
                status: true,
                type: 'type1',
                question: 'What is test?',
                answer: 'Test answer',
            },
            {
                id: '2',
                user: 'User2',
                createdAt: '2024-01-01T00:00:00Z',
                modifiedAt: '2024-01-01T00:00:00Z',
                status: false,
                type: 'type2',
                question: 'What is another test?',
                answer: 'Another test answer',
            }
        ];

        const mockFaqsModels = [
            { id: '1', question: 'What is test?', answer: 'Test answer' },
            { id: '2', question: 'What is another test?', answer: 'Another test answer' }
        ];

        // Mock FaqsService.fetchAllFaqs to return mockFaqsDtos
        jest.spyOn(FaqsService, 'fetchAllFaqs').mockResolvedValue(mockFaqsDtos);

        // Mock FaqsMapper.transformFaqsDtoToFaqsModel to return mockFaqsModels
        FaqsMapper.transformFaqsDtoToFaqsModel.mockImplementation(dto => ({
            id: dto.id,
            question: dto.question,
            answer: dto.answer
        }));

        // Act
        const faqs = await GetAllFaqs();

        // Assert
        expect(FaqsService.fetchAllFaqs).toHaveBeenCalledTimes(1);
        expect(FaqsMapper.transformFaqsDtoToFaqsModel).toHaveBeenCalledTimes(2);
        expect(FaqsMapper.transformFaqsDtoToFaqsModel).toHaveBeenCalledWith(mockFaqsDtos[0]);
        expect(FaqsMapper.transformFaqsDtoToFaqsModel).toHaveBeenCalledWith(mockFaqsDtos[1]);
        expect(faqs).toEqual(mockFaqsModels);
    });

    it('should handle errors from FaqsService.fetchAllFaqs', async () => {
        // Arrange
        jest.spyOn(FaqsService, 'fetchAllFaqs').mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(GetAllFaqs()).rejects.toThrow('Fetch error');
    });
});
