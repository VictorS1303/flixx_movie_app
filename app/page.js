import Navigation from '@/app/components/Navigation.jsx'
import MovieCard from '@/app/components/MovieCard.jsx'

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
    </>
  );
}
