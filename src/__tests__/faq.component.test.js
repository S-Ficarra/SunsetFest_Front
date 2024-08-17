import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Faqs from '../components/faqs/faqs';

// Mock the useAllFaqs hook
jest.mock('../hooks/Publications/useAllFaqs', () => ({
  useAllFaqs: () => ({
    allFaqs: [
      { question: 'Question 1', answer: '<p>Answer 1</p>' },
      { question: 'Question 2', answer: '<p>Answer 2</p>' },
    ],
  }),
}));

describe('Faqs Component', () => {
  test('renders FAQs and toggles answers', () => {
    render(<Faqs />);

    // Check that the questions are displayed
    expect(screen.getByText('QUESTION 1')).toBeInTheDocument();
    expect(screen.getByText('QUESTION 2')).toBeInTheDocument();

    // Open the first question
    fireEvent.click(screen.getByText('QUESTION 1'));

    // Check that the 'selected' class is added to the container of the opened question
    expect(screen.getByText('QUESTION 1').closest('div')).toHaveClass('selected');
    // Check that the 'openFaq' class is added to the container of the answer
    expect(screen.getByText('Answer 1').closest('div').parentElement).toHaveClass('openFaq');

    // Check that the 'expended' class is added to the toggle button
    expect(screen.getByText('QUESTION 1').nextElementSibling).toHaveClass('expended');

    // Open the second question
    fireEvent.click(screen.getByText('QUESTION 2'));

    // Check that the 'selected' class is added to the container of the second question
    expect(screen.getByText('QUESTION 2').closest('div')).toHaveClass('selected');
    // Check that the 'openFaq' class is added to the container of the answer of the second question
    expect(screen.getByText('Answer 2').closest('div').parentElement).toHaveClass('openFaq');

    // Close the second question
    fireEvent.click(screen.getByText('QUESTION 2'));

    // Check that the 'selected' class is removed from the container of the second question
    expect(screen.getByText('QUESTION 2').closest('div')).not.toHaveClass('selected');
    // Check that the 'openFaq' class is removed from the container of the answer
    expect(screen.queryByText('Answer 2').closest('div')).not.toHaveClass('openFaq');
  });
});
