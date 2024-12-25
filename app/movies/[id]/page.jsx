import Navigation from '../../components/Navigation.jsx'
import Section from '../../components/Section.jsx'

const MoviePage = () =>
{
    const navigationLinks = [
        { linkText: 'Home', href: '/' },
        { linkText: 'Movies', href: '/movies' },
    ];

    return (
        <>
            <Navigation navigationLinks={navigationLinks} />
            <Section>Movie Page</Section>
        </>
    );
}

export default MoviePage;