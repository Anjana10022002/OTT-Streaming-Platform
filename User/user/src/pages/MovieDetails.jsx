import React from "react";
import { useEffect, useNavigate } from "react";
import BackButton from "../components/BackButton";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = React.useState(null);
    const navigate = useNavigate();

    function fetchMovieDetails() {
        axios.get(`http://127.0.0.1:8000/userapi/movieDetails/${id}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => {
                setMovie(response.data);
                console.log("Fetched movie details:", response.data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            }); [id, navigate]
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    return (
        <div className="container">
            <BackButton />
            <div className="movie-details-page">
                <div className="movie-poster">
                    <img
                        src={movie.thumbnail}
                        alt={movie.title}
                    />
                </div>

                <div className="movie-info">
                    <h2>{movie.title}</h2>

                    {/* <div className="movie-meta">
                        <span>{movie.year}</span>
                        <span>•</span>
                        <span>{movie.genre}</span>
                        <span>•</span>
                        <span>{movie.duration}</span>
                    </div> */}

                    <p className="movie-description">
                        {movie.description}
                    </p>

                    <div className="movie-actions">
                        <button className="btn primary">▶ Watch Now</button>
                        <button className="btn secondary">+ Add to Watchlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
