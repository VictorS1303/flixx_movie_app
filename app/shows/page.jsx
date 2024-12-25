import Navigation from '../components/Navigation.jsx'
import Section from '../components/Section.jsx'

const ShowsPage = () =>
{
    const navigationLinks = [
        { linkText: 'Home', href: '/' },
        { linkText: 'Movies', href: '/movies' },
        { linkText: 'TV Shows', href: '/shows' },
    ];

    return (
        <>
            <Navigation navigationLinks={navigationLinks} />
            <Section>Shows Page</Section>
        </>
    );
}

export default ShowsPage;