import Navigation from '@/app/components/Navigation.jsx'
import Hero from '@/app/components/Hero.jsx'
import SearchContainer from '@/app/components/SearchContainer.jsx'

export default function Home()
{
  const navigationLinks = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Movies', href: '/movies' },
    { linkText: 'TV Shows', href: '/shows' },
  ];


  return (
    <>
      {/* Navigation */}
      <Navigation navigationLinks={navigationLinks} />
      <Hero/>
      <SearchContainer />
    </>
  );
}
