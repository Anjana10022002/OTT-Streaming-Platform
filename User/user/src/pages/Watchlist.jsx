import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Watchlist() {
    const [movies, setMovies] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchWatchlist();
    }, []);

    function fetchWatchlist() {
        axios.get("http://127.0.0.1:8000/userapi/watchlist/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then(res => {
            setMovies(res.data);
        })
        .catch(err => console.error(err));
    }

    function removeFromWatchlist(movieId) {
        axios.post(
            "http://127.0.0.1:8000/userapi/watchlist/remove/",
            { movie_id: movieId },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        )
        .then(() => {
            fetchWatchlist();
        })
        .catch(err => console.error(err));
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="page-header">
                    <h2>Your Watchlist</h2>
                    <p className="page-subtitle">
                        Movies and shows you've saved to watch later
                    </p>
                </div>

                <div className="movie-grid">
                    {movies.length === 0 ? (
                        <p>No movies in watchlist</p>
                    ) : (
                        movies.map(movie => (
                            <MovieCard
                                key={movie.id}
                                movie={movie.movie}
                                showRemove
                                onRemove={() => removeFromWatchlist(movie.movie.id)}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Watchlist;
