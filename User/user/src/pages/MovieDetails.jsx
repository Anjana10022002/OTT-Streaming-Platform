// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import BackButton from "../components/BackButton";
// import axios from "axios";

// function MovieDetails() {
//     const { id } = useParams();
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         axios.get(`http://127.0.0.1:8000/userapi/movieID/${id}/`, {
//             headers: {
//                 Authorization: `Token ${localStorage.getItem("token")}`,
//             },
//         })
//         .then(res => setMovie(res.data))
//         .catch(err => console.error(err));
//     }, [id]);

//     if (!movie) return null;

//     return (
//         <div className="container">
//             <BackButton />
//             <div className="movie-details-page">
//                 <img src={movie.thumbnail} alt={movie.title} />
//                 <h2>{movie.title}</h2>
//                 <p>{movie.description}</p>
//             </div>
//         </div>
//     );
// }

// export default MovieDetails;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/userapi/movieID/${id}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(res => setMovie(res.data))
        .catch(err => console.error(err));
    }, [id]);

    function addToWatchlist() {
        console.log("Adding to watchlist:", id);
        axios.post(
            "http://127.0.0.1:8000/userapi/watchlist/add/",
            { movie_id: id },
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            }
        )
        .then(() => setMessage("Added to watchlist"))
        .catch(() => setMessage("Already in watchlist"));
    }

    if (!movie) {
        return <div className="container">Loading...</div>;
    }

    return (
        <div className="movie-detail-container">
            <BackButton />

            <div
                className="movie-hero"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${movie.thumbnail})`
                }}
            >
                <div className="movie-hero-content">
                    <h1>{movie.title}</h1>
                    <p className="movie-description">{movie.description}</p>

                    <div className="movie-actions">
                        <button className="btn primary">
                            ▶ Watch Now
                        </button>

                        <button
                            className="btn secondary"
                            onClick={addToWatchlist}
                        >
                            + Add to Watchlist
                        </button>
                    </div>

                    {message && <p className="status-msg">{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
