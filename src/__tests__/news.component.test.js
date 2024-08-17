import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Necessary for tests using links
import AllNews from '../components/news/allNews';
import { useAllNews } from '../hooks/Publications/useAllNews';
import { convertToBase64 } from '../services/utils';

// Mock the useAllNews hook
jest.mock('../hooks/Publications/useAllNews');

// Mock the convertToBase64 function
jest.mock('../services/utils', () => ({
  convertToBase64: jest.fn(),
}));

describe('AllNews Component', () => {
    beforeEach(() => {
      // Mock the data returned by useAllNews
      useAllNews.mockReturnValue({
        allNews: [
          { id: '1', title: 'News 1', image: { data: 'image-data-1' } },
          { id: '2', title: 'News 2', image: { data: 'image-data-2' } },
        ],
      });
  
      // Mock the convertToBase64 function
      convertToBase64.mockImplementation((data) => `data:${data}`);
    });
  
    test('renders news items correctly', () => {
      render(
        <Router>
          <AllNews />
        </Router>
      );
  
      // Check that the component renders the news titles
      expect(screen.getByText(/News 1/i)).toBeInTheDocument();
      expect(screen.getByText(/News 2/i)).toBeInTheDocument();
  
      // Check that the images are rendered correctly
      expect(screen.getByAltText('News 1')).toHaveAttribute('src', 'data:image-data-1');
      expect(screen.getByAltText('News 2')).toHaveAttribute('src', 'data:image-data-2');
    });
  
    test('generates correct links for each news item', () => {
      render(
        <Router>
          <AllNews />
        </Router>
      );
  
      // Check that the links are generated correctly
      expect(screen.getByText(/News 1/i).closest('a')).toHaveAttribute('href', '/actualites/1/News-1');
      expect(screen.getByText(/News 2/i).closest('a')).toHaveAttribute('href', '/actualites/2/News-2');
    });
  
    test('handles no news items', () => {
      // Mock to return an empty list of news
      useAllNews.mockReturnValue({ allNews: [] });
  
      render(
        <Router>
          <AllNews />
        </Router>
      );
  
      // Check that no news items are displayed
      expect(screen.queryByText(/News 1/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/News 2/i)).not.toBeInTheDocument();
    });
  });
