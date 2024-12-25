import Image from 'next/image';
import heroBgImage from '@/public/images/hero/hero_bg.jpg';
import Section from './Section';
import ImageGallery from './Swiper.jsx'

const Hero = ({ imgSrc }) =>
{
    return (
        <>
            <Section>
                <div className="pt-24 pb-12">

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