'use client'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieCard from './MovieCard.jsx'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const ImageGallery = () =>
{
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Scrollbar, A11y]} // Add necessary modules
                pagination={false}  // Disable pagination
                spaceBetween={10}  // Adds space between slides
                slidesPerView={1}  // Adjusts the number of slides per view
                loop={true}  // Loops through the slides
                grabCursor={true}
            >
                {/* Wrap MovieCard components inside SwiperSlide */}
                <SwiperSlide>
                    <div className="flex justify-center gap-24">
                        <MovieCard>
                            This is a movie 1
                        </MovieCard>
                        <MovieCard>
                            This is a movie 2
                        </MovieCard>
                        <MovieCard>
                            This is a movie 3
                        </MovieCard>
                        <MovieCard>
                            This is a movie 4
                        </MovieCard>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-center gap-24">
                        <MovieCard>
                            This is a movie 1
                        </MovieCard>
                        <MovieCard>
                            This is a movie 2
                        </MovieCard>
                        <MovieCard>
                            This is a movie 3
                        </MovieCard>
                        <MovieCard>
                            This is a movie 4
                        </MovieCard>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ImageGallery;
