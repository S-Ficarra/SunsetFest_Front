import { GetAllStages } from '../controllers/stage.controller';
import { StageService } from '../services/stage.service';
import { StageMapper } from '../mappers/stage.mapper';

// Mock the StageMapper class
jest.mock('../mappers/stage.mapper', () => ({
    StageMapper: {
        transformStageDtoToModel: jest.fn()
    }
}));

describe('GetAllStages', () => {
    beforeEach(() => {
        // Reset any previous mocks
        jest.resetAllMocks();
    });

    it('should fetch stages and transform them correctly', async () => {
        // Arrange
        const mockStageDtos = [
            {
                id: '1',
                name: 'Stage 1',
                longitude: 10.0,
                latitude: 20.0,
                capacity: 100,
                type: 'Outdoor'
            },
            {
                id: '2',
                name: 'Stage 2',
                longitude: 15.0,
                latitude: 25.0,
                capacity: 200,
                type: 'Indoor'
            }
        ];

        const mockStageModels = [
            { id: '1', name: 'Stage 1 Model' },
            { id: '2', name: 'Stage 2 Model' }
        ];

        // Mock StageService.fetchAllStages to return mockStageDtos
        jest.spyOn(StageService, 'fetchAllStages').mockResolvedValue(mockStageDtos);

        // Mock StageMapper.transformStageDtoToModel to return mockStageModels
        StageMapper.transformStageDtoToModel.mockImplementation(dto => ({
            id: dto.id,
            name: `${dto.name} Model`
        }));

        // Act
        const stages = await GetAllStages();

        // Assert
        expect(StageService.fetchAllStages).toHaveBeenCalledTimes(1);
        expect(StageMapper.transformStageDtoToModel).toHaveBeenCalledTimes(2);
        expect(StageMapper.transformStageDtoToModel).toHaveBeenCalledWith(mockStageDtos[0]);
        expect(StageMapper.transformStageDtoToModel).toHaveBeenCalledWith(mockStageDtos[1]);
        expect(stages).toEqual(mockStageModels);
    });

    it('should handle errors from StageService.fetchAllStages', async () => {
        // Arrange
        jest.spyOn(StageService, 'fetchAllStages').mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(GetAllStages()).rejects.toThrow('Fetch error');
    });
});
