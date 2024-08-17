import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FullProgram from '../components/program/fullProgram';
import { useProgram } from '../hooks/useProgram';

// Mock child components
jest.mock('../components/program/firstDay/firstDay', () => () => <div>FirstDay Component</div>);
jest.mock('../components/program/secondDay/secondDay', () => () => <div>SecondDay Component</div>);
jest.mock('../components/program/thirdDay/thirdDay', () => () => <div>ThirdDay Component</div>);

// Mock the useProgram hook
jest.mock('../hooks/useProgram', () => ({
  useProgram: jest.fn(),
}));

describe('FullProgram Component', () => {
    beforeEach(() => {
      // Mock the useProgram function to return performance data
      useProgram.mockReturnValue({
        performances: [
          { _id: '1', _timeFrame: { _startingTime: '2023-08-18T14:00:00Z' }, _stage: { _id: '1' }, _band: { _name: 'Band 1', _thumbnailImage: { data: 'image-data-1' } } },
          { _id: '2', _timeFrame: { _startingTime: '2023-08-19T16:00:00Z' }, _stage: { _id: '2' }, _band: { _name: 'Band 2', _thumbnailImage: { data: 'image-data-2' } } },
          { _id: '3', _timeFrame: { _startingTime: '2023-08-20T18:00:00Z' }, _stage: { _id: '3' }, _band: { _name: 'Band 3', _thumbnailImage: { data: 'image-data-3' } } },
        ],
      });
    });
  
    test('renders loading state when performances are not yet loaded', () => {
      // Mock to return an empty list (simulating loading)
      useProgram.mockReturnValue({ performances: [] });
      
      render(<FullProgram />);
      
      // Check that the loading text is displayed
      expect(screen.getByText(/chargement/i)).toBeInTheDocument();
    });
  
    test('renders correct day component based on selected day', () => {
      render(<FullProgram />);
  
      // Check that by default, Friday is selected and the FirstDay component is displayed
      expect(screen.getByText(/FirstDay Component/i)).toBeInTheDocument();
      
      // Simulate a click on the Saturday button
      fireEvent.click(screen.getByText(/samedi/i));
      
      // Check that the SecondDay component is displayed
      expect(screen.getByText(/SecondDay Component/i)).toBeInTheDocument();
  
      // Simulate a click on the Sunday button
      fireEvent.click(screen.getByText(/dimanche/i));
  
      // Check that the ThirdDay component is displayed
      expect(screen.getByText(/ThirdDay Component/i)).toBeInTheDocument();
    });
  
    test('highlights the correct day button based on selected day', () => {
      render(<FullProgram />);
  
      // Check that by default, the Friday button is selected
      const fridayButton = screen.getByText(/vendredi/i);
      expect(fridayButton).toHaveAttribute('id', 'Selected');
  
      // Simulate a click on the Saturday button
      fireEvent.click(screen.getByText(/samedi/i));
  
      // Check that the Saturday button is now selected
      const saturdayButton = screen.getByText(/samedi/i);
      expect(saturdayButton).toHaveAttribute('id', 'Selected');
      expect(fridayButton).not.toHaveAttribute('id', 'Selected');
    });
  });
