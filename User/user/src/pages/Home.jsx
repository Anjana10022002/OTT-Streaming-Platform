import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="home-header">
                    <h2></h2>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search movies..."
                        />
                        <button>Search</button>
                    </div>
                </div>

                <div className="movie-grid">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    );
}

export default Home;
