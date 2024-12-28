'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import MovieCard from './MovieCard.jsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const ImageGallery = () =>
{
    const [movies, setMovies] = useState([]);
    const swiperRef = useRef(null);

    // Fetch movies data
    const fetchMovieData = async () =>
    {
        try
        {
            const response = await fetch(`${apiURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
            const data = await response.json();
            setMovies(data.results || []);
        } catch (error)
        {
            console.error('Failed to fetch movie data:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() =>
    {
        if (swiperRef.current)
            {
                const swiper = swiperRef.current.swiper;
                // You can call any custom methods on the Swiper instance here if needed
                console.log(swiper);
            }
        fetchMovieData();
    }, [swiperRef.current]);

    return (
        <div className="relative">
            <Swiper
                ref={swiperRef}  // Reference to the Swiper instance
                modules={[Navigation, Scrollbar, A11y]}
                navigation={{
                    prevEl: '.swiper-button-prev', // Link to custom button
                    nextEl: '.swiper-button-next', // Link to custom button
                }}
                spaceBetween={100}  // Ensure proper space between slides
                loop={true}
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,   // 1 slide on small screens
                        spaceBetween: 10,    // Space between slides on small screens
                    },
                    768: {
                        slidesPerView: 2,   // 2 slides on medium screens
                        spaceBetween: 20,    // Space between slides on medium screens
                    },
                    1024: {
                        slidesPerView: 3,   // 3 slides on large screens
                        spaceBetween: 30,    // Space between slides on large screens
                    },
                    1280: {
                        slidesPerView: 4,   // 4 slides on extra-large screens
                        spaceBetween: 100,    // Space between slides on extra-large screens
                    },
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="flex justify-center gap-4">
                            <Link href={`/movies/${movie.id}`}>
                                <MovieCard movie={movie}>
                                    <div className="flex justify-center gap-2">
                                        <FaStar className="text-yellow-300" size={20} />
                                        <h3 className="rating"></h3>
                                        {Number.isInteger(movie.vote_average)
                                            ? movie.vote_average
                                            : movie.vote_average.toFixed(1)}
                                        / 10
                                    </div>
                                </MovieCard>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <button className="swiper-button-prev">
                <FaChevronLeft size={30} />
            </button>
            <button className="swiper-button-next">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default ImageGallery;
