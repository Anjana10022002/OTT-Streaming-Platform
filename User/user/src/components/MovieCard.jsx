import { Link } from "react-router-dom";

function MovieCard() {
    return (
        <Link to="/movie/1" className="movie-card">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8O-2z5c1HeUS7ToIaVHIlAmvy_MTAVnJnhYyvN7FyNJBxjZaNqFmV9xWWBb8f26rRgfTc9GQlWMWVQPdmS56NfRD4pYIxO0B-pZ_vV2t1cnSikgDOPc0k8eufiQXX4Ud3bLangQIR_Og/s1600/horizon.jpg"
                alt="movie"
            />
            <div className="movie-title-overlay">
                Inception
            </div>
        </Link>
    );
}

export default MovieCard;
