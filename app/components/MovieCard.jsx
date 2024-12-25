import Image from 'next/image'
import testPoster from '../../public/images/poster/test_poster.png'

const MovieCard = ({ children }) =>
{
    return (
        <article className="bg-blue-600 min-h-[700px] h-fit min-w-[450px] w-fit">
            <div className="container image-container h-[90%]">
                <Image
                    src={testPoster}
                    style={{ objectFit: 'cover', height: '100%' }}
                    alt="test_image"
                />
            </div>

            {children}
        </article>
    );
}

export default MovieCard;