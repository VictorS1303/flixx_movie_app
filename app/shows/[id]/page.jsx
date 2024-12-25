import Navigation from '../../components/Navigation.jsx'
import Section from '../../components/Section.jsx'

const ShowPage = () =>
{
    const navigationLinks = [
        { linkText: 'Home', href: '/' },
        { linkText: 'TV Shows', href: '/shows' },
    ];

    return (
        <>
            <Navigation navigationLinks={navigationLinks} />
            <Section>Show Page</Section>
        </>
    );
}

export default ShowPage;