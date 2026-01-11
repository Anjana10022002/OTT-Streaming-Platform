function MovieCard() {
    return (
        <div style={{ border: "1px solid #e5e7eb", padding: "16px" }}>
            <img src="https://via.placeholder.com/200x280" alt="movie" />
            <h4>Movie Title</h4>
            <p>Short description of the movie</p>
            <button className="btn">View</button>
        </div>
    );
}
export default MovieCard;
