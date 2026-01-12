import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

function Watchlist() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="page-header">
                    <h2>Your Watchlist</h2>
                    <p className="page-subtitle">
                        Movies and shows you’ve saved to watch later
                    </p>
                </div><br></br>
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

export default Watchlist;
