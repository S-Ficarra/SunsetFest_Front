import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/footer/footer';
import '@testing-library/jest-dom';

// Mock the image imports since they are static assets
jest.mock('../assets/partnersLogos/Flibustier.png', () => 'FlibustierLogo');
jest.mock('../assets/partnersLogos/Gibson.png', () => 'GibsonLogo');
jest.mock('../assets/partnersLogos/Harley-Davidson.png', () => 'HDLogo');
jest.mock('../assets/partnersLogos/Jack-Daniels.png', () => 'JDLogo');
jest.mock('../assets/partnersLogos/Liquid-Death.png', () => 'LDLogo');
jest.mock('../assets/partnersLogos/newrock.png', () => 'NRLogo');
jest.mock('../assets/LogoSkullOnlysmall.png', () => 'SkullLogo');
jest.mock('../assets/FestivalDateImg.png', () => 'DateLogo');
jest.mock('../assets/socialsLogos/facebook.svg', () => 'FbLogo');
jest.mock('../assets/socialsLogos/instagram.svg', () => 'InstaLogo');
jest.mock('../assets/socialsLogos/x-twitter.svg', () => 'XLogo');
jest.mock('../assets/socialsLogos/youtube.svg', () => 'YoutLogo');
jest.mock('../assets/socialsLogos/spotify.svg', () => 'SpotLogo');
jest.mock('../assets/socialsLogos/discord.svg', () => 'DiscLogo');

describe('Footer Component', () => {
    test('renders all partner logos with correct links', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        
        // Assert that each partner logo is rendered and has the correct href
        expect(screen.getByAltText('Visitez le site de Flibustier Paris')).toBeInTheDocument();
        expect(screen.getByAltText('Visitez le site de New Rock')).toBeInTheDocument();
        expect(screen.getByAltText('Visitez le site de Harley Davidson')).toBeInTheDocument();
        expect(screen.getByAltText('Visitez le site de Gibson')).toBeInTheDocument();
        expect(screen.getByAltText('Visitez le site de Liquid Death')).toBeInTheDocument();
        expect(screen.getByAltText('Visitez le site de Jack Daniel\'s')).toBeInTheDocument();
        
        // Check if the images have correct hrefs
        expect(screen.getByAltText('Visitez le site de Flibustier Paris').closest('a')).toHaveAttribute('href', 'https://flibustierparis.com/');
        expect(screen.getByAltText('Visitez le site de New Rock').closest('a')).toHaveAttribute('href', 'https://www.newrock.com/fr/');
        expect(screen.getByAltText('Visitez le site de Harley Davidson').closest('a')).toHaveAttribute('href', 'https://www.harley-davidson.com/fr/fr/index.html');
        expect(screen.getByAltText('Visitez le site de Gibson').closest('a')).toHaveAttribute('href', 'https://www.gibson.com/fr-FR/');
        expect(screen.getByAltText('Visitez le site de Liquid Death').closest('a')).toHaveAttribute('href', 'https://liquiddeath.com/en-fr');
        expect(screen.getByAltText('Visitez le site de Jack Daniel\'s').closest('a')).toHaveAttribute('href', 'https://www.jackdaniels.com/fr-fr');
    });

    test('renders all social media links with correct images and hrefs', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        // Assert that each social media link is rendered with the correct image
        expect(screen.getByAltText('Notre Facebook')).toBeInTheDocument();
        expect(screen.getByAltText('Notre Instagram')).toBeInTheDocument();
        expect(screen.getByAltText('Notre X (Twitter)')).toBeInTheDocument();
        expect(screen.getByAltText('Notre chaine YouTube')).toBeInTheDocument();
        expect(screen.getByAltText('Notre playlist Spotify')).toBeInTheDocument();
        expect(screen.getByAltText('Notre channel Discord')).toBeInTheDocument();
        
        // Check if the images have correct hrefs
        expect(screen.getByAltText('Notre Facebook').closest('a')).toHaveAttribute('href', 'https://www.facebook.com/HardRockGlamMetal73');
        expect(screen.getByAltText('Notre Instagram').closest('a')).toHaveAttribute('href', 'https://www.instagram.com/glam_metal80s/');
        expect(screen.getByAltText('Notre X (Twitter)').closest('a')).toHaveAttribute('href', 'https://x.com/DAILYGLAMMETAL');
        expect(screen.getByAltText('Notre chaine YouTube').closest('a')).toHaveAttribute('href', 'https://www.youtube.com/@glammetalhardrock8286');
        expect(screen.getByAltText('Notre playlist Spotify').closest('a')).toHaveAttribute('href', 'https://open.spotify.com/playlist/6XrK1egRFz1hgXSO0X08QV?si=5c27a9a4606846f5');
        expect(screen.getByAltText('Notre channel Discord').closest('a')).toHaveAttribute('href', 'https://discord.gg/xRsbxFdH');
    });

    test('renders the footer links correctly', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        // Assert that footer links are rendered and have correct text
        expect(screen.getByText('CONTACT')).toBeInTheDocument();
        expect(screen.getByText('COOKIES')).toBeInTheDocument();
        expect(screen.getByText('MENTIONS LÉGALES')).toBeInTheDocument();
        expect(screen.getByText('PRESSE')).toBeInTheDocument();
    });

    test('links in the footer are rendered as NavLinks', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        // Check if NavLinks are used for footer navigation
        expect(screen.getByText('CONTACT').closest('a')).toHaveAttribute('href', '/contact');
        expect(screen.getByText('COOKIES').closest('a')).toHaveAttribute('href', '/cookies');
        expect(screen.getByText('MENTIONS LÉGALES').closest('a')).toHaveAttribute('href', '/mentionlegales');
        expect(screen.getByText('PRESSE').closest('a')).toHaveAttribute('href', '/presse');
    });
});
