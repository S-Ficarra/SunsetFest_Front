import { GetAllBands, GetBand } from '../controllers/band.controller';
import { bandService } from '../services/band.service';
import { BandMapper } from '../mappers/band.mapper';

// Mock the BandMapper class
jest.mock('../mappers/band.mapper', () => ({
    BandMapper: {
        transformBandDtoToBandModel: jest.fn()
    }
}));

// Mock the bandService
jest.mock('../services/band.service', () => ({
    bandService: {
        fetchAllBands: jest.fn(),
        fetchBand: jest.fn()
    }
}));

describe('Band Controller', () => {
    beforeEach(() => {
        // Reset any previous mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch and transform all bands correctly', async () => {
        // Arrange
        const mockBandDtos = [
            {
                id: '1',
                name: 'Band One',
                thumbnailImage: { data: 'image-data-1' }
            },
            {
                id: '2',
                name: 'Band Two',
                thumbnailImage: { data: 'image-data-2' }
            }
        ];

        const mockBandModels = [
            { id: '1', name: 'Band One Model' },
            { id: '2', name: 'Band Two Model' }
        ];

        // Mock bandService.fetchAllBands to return mockBandDtos
        bandService.fetchAllBands.mockResolvedValue(mockBandDtos);

        // Mock BandMapper.transformBandDtoToBandModel to return mockBandModels
        BandMapper.transformBandDtoToBandModel.mockImplementation(dto => ({
            id: dto.id,
            name: `${dto.name} Model`
        }));

        // Act
        const bands = await GetAllBands();

        // Assert
        expect(bandService.fetchAllBands).toHaveBeenCalledTimes(1);
        expect(BandMapper.transformBandDtoToBandModel).toHaveBeenCalledTimes(2);
        expect(BandMapper.transformBandDtoToBandModel).toHaveBeenCalledWith(mockBandDtos[0]);
        expect(BandMapper.transformBandDtoToBandModel).toHaveBeenCalledWith(mockBandDtos[1]);
        expect(bands).toEqual(mockBandModels);
    });

    it('should handle errors from bandService.fetchAllBands', async () => {
        // Arrange
        bandService.fetchAllBands.mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(GetAllBands()).rejects.toThrow('Fetch error');
    });

    it('should fetch and transform a single band correctly', async () => {
        // Arrange
        const mockBandDto = {
            id: '1',
            name: 'Band One',
            thumbnailImage: { data: 'image-data-1' }
        };

        const mockBandModel = { id: '1', name: 'Band One Model' };

        // Mock bandService.fetchBand to return mockBandDto
        bandService.fetchBand.mockResolvedValue(mockBandDto);

        // Mock BandMapper.transformBandDtoToBandModel to return mockBandModel
        BandMapper.transformBandDtoToBandModel.mockImplementation(dto => ({
            id: dto.id,
            name: `${dto.name} Model`
        }));

        // Act
        const band = await GetBand('1');

        // Assert
        expect(bandService.fetchBand).toHaveBeenCalledWith('1');
        expect(bandService.fetchBand).toHaveBeenCalledTimes(1);
        expect(BandMapper.transformBandDtoToBandModel).toHaveBeenCalledWith(mockBandDto);
        expect(band).toEqual(mockBandModel);
    });

    it('should handle errors from bandService.fetchBand', async () => {
        // Arrange
        bandService.fetchBand.mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(GetBand('1')).rejects.toThrow('Fetch error');
    });
});
