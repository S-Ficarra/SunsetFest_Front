import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing context
import '@testing-library/jest-dom';

// Mock the image imports since they are static assets
jest.mock('../assets/LogoTexteOnlysmall.png', () => 'LogoTexteOnlysmall');

// Mock the HamburgerMenu component
jest.mock('../components/navbar/hamburgermenu/hamburgermenu', () => () => <div>Hamburger Menu</div>);

describe('NavBar Component', () => {
    test('renders the logo with correct link', () => {
        render(
            <Router>
                <NavBar />
            </Router>
        );

        // Assert that the logo is rendered and has the correct link
        expect(screen.getByAltText('Retour à l\'accueil')).toBeInTheDocument();
        expect(screen.getByAltText('Retour à l\'accueil').closest('a')).toHaveAttribute('href', '/');
    });

    test('renders all menu links with correct text', () => {
        render(
            <Router>
                <NavBar />
            </Router>
        );

        // Assert that all menu links are rendered with the correct text
        expect(screen.getByText('ACTUALITÉS')).toBeInTheDocument();
        expect(screen.getByText('LINE-UP')).toBeInTheDocument();
        expect(screen.getByText('BILLETS')).toBeInTheDocument();
        expect(screen.getByText('INFORMATIONS')).toBeInTheDocument();
        expect(screen.getByText('CARTE')).toBeInTheDocument();
    });

    test('menu links have correct hrefs', () => {
        render(
            <Router>
                <NavBar />
            </Router>
        );

        // Check if menu links have correct href attributes
        expect(screen.getByText('ACTUALITÉS').closest('a')).toHaveAttribute('href', '/actualites');
        expect(screen.getByText('LINE-UP').closest('a')).toHaveAttribute('href', '/lineup');
        expect(screen.getByText('BILLETS').closest('a')).toHaveAttribute('href');
        expect(screen.getByText('INFORMATIONS').closest('a')).toHaveAttribute('href', '/informations');
        expect(screen.getByText('CARTE').closest('a')).toHaveAttribute('href', '/carte');
    });

    test('renders the HamburgerMenu component', () => {
        render(
            <Router>
                <NavBar />
            </Router>
        );

        // Assert that the HamburgerMenu component is rendered
        expect(screen.getByText('Hamburger Menu')).toBeInTheDocument();
    });
});
