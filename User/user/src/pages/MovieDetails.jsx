import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import axios from "axios";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/userapi/movieID/${id}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(res => setMovie(res.data))
        .catch(err => console.error(err));
    }, [id]);

    if (!movie) return null;

    return (
        <div className="container">
            <BackButton />
            <div className="movie-details-page">
                <img src={movie.thumbnail} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieDetails;
