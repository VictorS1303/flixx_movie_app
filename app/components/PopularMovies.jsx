import Section from './Section.jsx'
import MovieCard from './MovieCard.jsx'

const PopularMovies = () =>
{
    return (
        <Section>
            <div className="mt-16">
                <header className="text-center text-3xl text-extrabold uppercase">
                    <h2>Popular Movies</h2>
                </header>
                <div className="container popular-movies-cards-container h-[600px] overflow-x-scroll mt-8 flex flex-wrap gap-4 justify-center">
                    <MovieCard>
                        <div className="text-left ml-4">
                            <h2 className="text-lg mb-1 font-semibold">Title: <span className="movie-title font-normal">Archer</span></h2>
                            <p className="font-semibold">Released: <span className="release-date font-normal">7/20-2023</span></p>
                        </div>
                    </MovieCard>
                    <MovieCard>
                        <div className="text-left ml-4">
                            <h2 className="text-lg mb-1 font-semibold">Title: <span className="movie-title font-normal">Archer</span></h2>
                            <p className="font-semibold">Released: <span className="release-date font-normal">7/20-2023</span></p>
                        </div>
                    </MovieCard>
                    <MovieCard>
                        <div className="text-left ml-4">
                            <h2 className="text-lg mb-1 font-semibold">Title: <span className="movie-title font-normal">Archer</span></h2>
                            <p className="font-semibold">Released: <span className="release-date font-normal">7/20-2023</span></p>
                        </div>
                    </MovieCard>
                    <MovieCard>
                        <div className="text-left ml-4">
                            <h2 className="text-lg mb-1 font-semibold">Title: <span className="movie-title font-normal">Archer</span></h2>
                            <p className="font-semibold">Released: <span className="release-date font-normal">7/20-2023</span></p>
                        </div>
                    </MovieCard>
                </div>
            </div>
        </Section>
    );
}

export default PopularMovies;