import Image from 'next/image';
import testPoster from '../../public/images/poster/test_poster.png';

const MovieCard = ({ children, imgSrc = testPoster }) => {
    return (
        <article className="bg-blue-600 h-fit w-[350px]">
            <div className="relative flex flex-col h-full">
                {/* Image section */}
                <div className="flex-grow">
                    <Image
                        src={imgSrc}
                        alt="Movie Poster"
                        layout="responsive"
                        width={350}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
                {/* Children section */}
                <div className="container movie-card-bottom-container text-center py-3">
                    {children}
                </div>
            </div>
        </article>
    );
};

export default MovieCard;
