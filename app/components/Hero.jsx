import Image from 'next/image';
import heroBgImage from '@/public/images/hero/hero_bg.jpg';
import Section from './Section';
import ImageGallery from './Swiper.jsx'
const apiURL = process.env.NEXT_PUBLIC_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

const Hero = ({ imgSrc }) =>
{

    const fetchMovieData = async () =>
    {
        const response = await fetch(`${apiURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        const data = await response.json()

        console.log(data)
    }

    fetchMovieData() 
    
    return (
        <>
            <Section>
                <div className="pt-36 pb-12">
                    {/* Background Image */}
                    <div>
                        <Image
                            src={heroBgImage}
                            layout="fill"
                            objectFit="cover"
                            alt="hero_background"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="relative">
                        <header className="relative z-10">
                            <h1 className="uppercase text-center text-white text-3xl font-extrabold tracking-wider mb-8">Now Playing</h1>
                        </header>
                        {/* Swiper Gallery */}
                        <ImageGallery />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Hero;