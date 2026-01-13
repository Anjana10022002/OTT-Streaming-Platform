import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Home() {
    return (
        <>
            {/* Navbar on top */}
            <Navbar />

            {/* Hero / Carousel */}
            <section className="hero-carousel">
                <img
                    src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78"
                    alt="Featured Movie"
                    className="hero-carousel-bg"
                />

                <div className="hero-carousel-overlay"></div>

                <div className="hero-carousel-content">
                    <h1>SAND DUST</h1>
                    <p>
                        A gripping adventure across harsh lands, survival,
                        courage, and destiny.
                    </p>

                    <div className="hero-carousel-actions">
                        <Link to="/movie/1" className="btn primary">
                            ▶ Play Now
                        </Link>
                        <button className="btn secondary">
                            + Add to Watchlist
                        </button>
                    </div>
                </div>
            </section>

            <main className="container">
                <div className="home-header">

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
                    <h3 className="section-title" >New Releases</h3>
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
            </main>
        </>
    );
}

export default Home;
