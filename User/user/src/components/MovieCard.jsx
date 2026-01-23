import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card">
            <img
                src={movie.banner_url}
                alt={movie.title}
            />
            <div className="movie-title-overlay">
                {movie.title}
            </div>
        </Link>
    );
}

export default MovieCard;
