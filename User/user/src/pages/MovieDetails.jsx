import React from "react";
import BackButton from "../components/BackButton";

function MovieDetails() {
    return (
        <div className="container">
            <BackButton />
            <div className="movie-details-page">
                <div className="movie-poster">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8O-2z5c1HeUS7ToIaVHIlAmvy_MTAVnJnhYyvN7FyNJBxjZaNqFmV9xWWBb8f26rRgfTc9GQlWMWVQPdmS56NfRD4pYIxO0B-pZ_vV2t1cnSikgDOPc0k8eufiQXX4Ud3bLangQIR_Og/s1600/horizon.jpg"
                        height={450} width={300} alt="Movie Poster"
                    />
                </div>

                <div className="movie-info">
                    <h2>Movie Title</h2>

                    <div className="movie-meta">
                        <span>2024</span>
                        <span>•</span>
                        <span>Action / Adventure</span>
                        <span>•</span>
                        <span>2h 18m</span>
                    </div>

                    <p className="movie-description">
                        This is the full description of the movie. It gives an
                        overview of the storyline, main characters, and what
                        makes the movie interesting for viewers.
                    </p>

                    <div className="movie-actions">
                        <button className="btn primary">▶ Watch Now</button>
                        <button className="btn secondary">＋ Add to Watchlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
