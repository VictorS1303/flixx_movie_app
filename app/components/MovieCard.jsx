'use client'

import Image from 'next/image';

const MovieCard = ({ children, movie }) =>
{
    // Ensure movie is defined before accessing its properties
    const posterUrl = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/images/poster/default_poster.png'; // Fallback image if no poster is available

    return (
        <article className="bg-blue-600 h-fit w-[350px] cursor-pointer">
            <div className="relative flex flex-col h-full">
                {/* Image section */}
                <div className="flex-grow">
                    <Image
                        src={posterUrl}
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
