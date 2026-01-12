import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />

            <div className="container">
                {/* Search */}
                <div className="home-header">
                    <h2>Browse Movies</h2>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search movies, shows..."
                        />
                        <button>Search</button>
                    </div>
                </div>

                <section className="home-section">
                    <h3 className="section-title">Trending Now</h3>
                    <div className="movie-grid">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
    
                    </div>
                </section>
                
                <section className="home-section">
                    <h3 className="section-title">New Releases</h3>
                    <div className="movie-grid">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </section>

                <section className="home-section">
                    <h3 className="section-title">Recommended For You</h3>
                    <div className="movie-grid">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
