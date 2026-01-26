import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Watchlist() {
    const [movies, setMovies] = useState([]);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        if (!userId) return;

        axios.get(`http://127.0.0.1:8000/userapi/watchlist/${userId}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(res => {
            console.log("Watchlist movies:", res.data);
            setMovies(res.data);
        })
        .catch(err => console.error(err));
    }, [userId]);

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
                                movie={movie}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Watchlist;
