function MovieCard() {
    return (
        <div style={{ border: "1px solid #e5e7eb", padding: "16px" }}>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8O-2z5c1HeUS7ToIaVHIlAmvy_MTAVnJnhYyvN7FyNJBxjZaNqFmV9xWWBb8f26rRgfTc9GQlWMWVQPdmS56NfRD4pYIxO0B-pZ_vV2t1cnSikgDOPc0k8eufiQXX4Ud3bLangQIR_Og/s1600/horizon.jpg" alt="movie" height={150} width={100} />
            <h4>Movie Title</h4>
            <p>Short description of the movie</p>
            <button className="btn" href="/MovieDetails">View</button>
        </div>
    );
}
export default MovieCard;
