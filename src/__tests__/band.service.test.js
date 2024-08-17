import { bandService } from '../services/band.service';
import { BandDto } from '../dto/band.dto';
import { BASE_URL } from '../App';

// Mock the BandDto class
jest.mock('../dto/band.dto', () => ({
    BandDto: jest.fn().mockImplementation((id, name, country, text, socials, thumbnailImage, bannerImage, user, createdAt, modifiedAt) => ({
        id,
        name,
        country,
        text,
        socials,
        thumbnailImage,
        bannerImage,
        user,
        createdAt,
        modifiedAt
    }))
}));

// Mock the BASE_URL constant
jest.mock('../App', () => ({
    BASE_URL: 'https://api.example.com/'
}));

describe('bandService', () => {
    beforeEach(() => {
        // Reset any previous mocks before each test
        jest.resetAllMocks();
    });

    it('should fetch and transform all bands correctly', async () => {
        // Arrange
        const mockBands = [
            {
                _id: '1',
                _name: 'Band One',
                _country: 'Country A',
                _text: 'Some text',
                _socials: { facebook: 'fb.com/bandone' },
                _thumbnailImage: { data: 'thumbnail-data-1' },
                _bannerImage: { data: 'banner-data-1' },
                _user: 'User1',
                _createdAt: '2024-01-01T00:00:00Z',
                _modifiedAt: '2024-01-01T00:00:00Z'
            },
            {
                _id: '2',
                _name: 'Band Two',
                _country: 'Country B',
                _text: 'Some other text',
                _socials: { twitter: 'twitter.com/bandtwo' },
                _thumbnailImage: { data: 'thumbnail-data-2' },
                _bannerImage: { data: 'banner-data-2' },
                _user: 'User2',
                _createdAt: '2024-01-01T00:00:00Z',
                _modifiedAt: '2024-01-01T00:00:00Z'
            }
        ];

        const mockResponse = {
            json: jest.fn().mockResolvedValue(mockBands)
        };

        global.fetch = jest.fn().mockResolvedValue(mockResponse);

        // Act
        const bands = await bandService.fetchAllBands();

        // Assert
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}bands`);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(bands).toHaveLength(2);
        expect(bands[0]).toEqual(new BandDto(
            '1',
            'Band One',
            'Country A',
            'Some text',
            { facebook: 'fb.com/bandone' },
            { data: 'thumbnail-data-1' },
            { data: 'banner-data-1' },
            'User1',
            '2024-01-01T00:00:00Z',
            '2024-01-01T00:00:00Z'
        ));
        expect(bands[1]).toEqual(new BandDto(
            '2',
            'Band Two',
            'Country B',
            'Some other text',
            { twitter: 'twitter.com/bandtwo' },
            { data: 'thumbnail-data-2' },
            { data: 'banner-data-2' },
            'User2',
            '2024-01-01T00:00:00Z',
            '2024-01-01T00:00:00Z'
        ));
    });

    it('should handle fetch errors for fetchAllBands', async () => {
        // Arrange
        global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(bandService.fetchAllBands()).rejects.toThrow('Fetch error');
    });

    it('should fetch and transform a single band correctly', async () => {
        // Arrange
        const mockBand = {
            _id: '1',
            _name: 'Band One',
            _country: 'Country A',
            _text: 'Some text',
            _socials: { facebook: 'fb.com/bandone' },
            _thumbnailImage: { data: 'thumbnail-data-1' },
            _bannerImage: { data: 'banner-data-1' },
            _user: 'User1',
            _createdAt: '2024-01-01T00:00:00Z',
            _modifiedAt: '2024-01-01T00:00:00Z'
        };

        const mockResponse = {
            json: jest.fn().mockResolvedValue(mockBand)
        };

        global.fetch = jest.fn().mockResolvedValue(mockResponse);

        // Act
        const band = await bandService.fetchBand('1');

        // Assert
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}bands/1`);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(band).toEqual(new BandDto(
            '1',
            'Band One',
            'Country A',
            'Some text',
            { facebook: 'fb.com/bandone' },
            { data: 'thumbnail-data-1' },
            { data: 'banner-data-1' },
            'User1',
            '2024-01-01T00:00:00Z',
            '2024-01-01T00:00:00Z'
        ));
    });

    it('should handle fetch errors for fetchBand', async () => {
        // Arrange
        global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

        // Act & Assert
        await expect(bandService.fetchBand('1')).rejects.toThrow('Fetch error');
    });
});
