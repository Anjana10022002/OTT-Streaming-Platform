import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/userapi/movieID/${id}/`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then(res => {
            setMovie(res.data);
        })
        .catch(err => {
            console.error("Error fetching movie:", err);
        });
    }, [id]);

    function addToWatchlist() {
        axios.post(
            "http://127.0.0.1:8000/userapi/watchlist/add/",
            { movie_id: id },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        )
        .then(res => {
            alert(res.data.message);
        })
        .catch(err => {
            console.error("Watchlist error:", err);
        });
    }

    function playMovie() {
        axios.post(
            "http://127.0.0.1:8000/userapi/history/add/",
            { movie_id: id },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        )
        .then(() => {
            navigate(`/watch/${id}`);
        })
        .catch(err => {
            console.error("History error:", err);
        });
    }

    function addToWatchlist() {
        axios.post(
            "http://127.0.0.1:8000/userapi/watchlist/add/",
            { movie_id: id },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        )
        .then(res => alert(res.data.message))
        .catch(err => console.error(err));
    }

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <BackButton />

            <div className="movie-details-page">
                <div className="movie-poster">
                    <img
                        src={movie.thumbnail}
                        alt={movie.title}
                        height={450}
                    />
                </div>

                <div className="movie-info">
                    <h2>{movie.title}</h2>

                    <p className="movie-description">
                        {movie.description}
                    </p>

                    <div className="movie-actions">
                        <button
                            className="btn primary"
                            onClick={playMovie}
                        >
                            ▶ Play
                        </button>

                        <button
                            className="btn secondary"
                            onClick={addToWatchlist}
                        >
                            + Add to Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
