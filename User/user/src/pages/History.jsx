import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function History() {
    const [movies, setMovies] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/userapi/history/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then(res => setMovies(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Watch History</h2>

                <div className="movie-grid">
                    {movies.length === 0 ? (
                        <p>No watch history yet</p>
                    ) : (
                        movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default History;
