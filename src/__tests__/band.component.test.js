import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LineUp from '../components/band/lineUp';
import { useAllBands } from '../hooks/useAllBands'; 
import { convertToBase64 } from '../services/utils';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the useAllBands hook
jest.mock('../hooks/useAllBands', () => ({
    useAllBands: jest.fn()
}));

// Mock the convertToBase64 function
jest.mock('../services/utils', () => ({
    convertToBase64: jest.fn()
}));

describe('LineUp Component', () => {
    beforeEach(() => {
        // Reset any previous mocks before each test
        jest.resetAllMocks();
    });

    it('should render a list of bands with links and images', () => {
        // Arrange
        const mockBands = [
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

        // Mock the useAllBands hook to return mockBands
        useAllBands.mockReturnValue({ bands: mockBands });

        // Mock convertToBase64 to return the image data directly
        convertToBase64.mockImplementation(data => `data:image/png;base64,${data}`);

        // Act
        render(
            <Router>
                <LineUp />
            </Router>
        );

        // Assert
        expect(screen.getByAltText('Band One')).toBeInTheDocument();
        expect(screen.getByAltText('Band Two')).toBeInTheDocument();
        expect(screen.getByText('Band One')).toBeInTheDocument();
        expect(screen.getByText('Band Two')).toBeInTheDocument();
        
        const link1 = screen.getByRole('link', { name: /Band One/i });
        const link2 = screen.getByRole('link', { name: /Band Two/i });

        expect(link1).toHaveAttribute('href', '/lineup/1/BandOne');
        expect(link2).toHaveAttribute('href', '/lineup/2/BandTwo');
    });
});
