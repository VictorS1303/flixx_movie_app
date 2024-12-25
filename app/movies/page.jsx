import Navigation from '../components/Navigation.jsx'
import Section from '../components/Section.jsx'

const MoviesPage = () =>
{
    const navigationLinks = [
        { linkText: 'Home', href: '/' },
        { linkText: 'Movies', href: '/movies' },
        { linkText: 'TV Shows', href: '/tv_shows' },
    ];

    return (
        <>
            <Navigation navigationLinks={navigationLinks} />
            <Section>Movies Page</Section>
        </>
    );
}

export default MoviesPage;