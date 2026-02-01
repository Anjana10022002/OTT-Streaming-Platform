// import { Link } from "react-router-dom";

// function MovieCard({ movie }) {
//     return (
//         <Link to={`/movie/${movie.id}`} className="movie-card">
//             <img
//                 src={movie.thumbnail}
//                 alt={movie.title}
//             />
//             <div className="movie-title-overlay">
//                 {movie.title}
//             </div>
//         </Link>
//     );
// }

// export default MovieCard;


import { Link } from "react-router-dom";

function MovieCard({ movie, showRemove, onRemove }) {
    return (
        <div className="movie-card-wrapper">
            <Link to={`/movie/${movie.id}`} className="movie-card">
                <img src={movie.thumbnail} alt={movie.title} />
                <div className="movie-title-overlay">
                    {movie.title}
                </div>
            </Link>

            {showRemove && (
                <button
                    className="remove-btn"
                    onClick={() => onRemove(movie.id)}
                >
                    ❌ Remove
                </button>
            )}
        </div>
    );
}

export default MovieCard;
