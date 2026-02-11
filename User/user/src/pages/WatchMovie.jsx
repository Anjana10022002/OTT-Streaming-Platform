// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// function WatchMovie() {
//     const { id } = useParams();
//     const token = localStorage.getItem("token");

//     useEffect(() => {
//         axios.post(
//             "http://127.0.0.1:8000/userapi/history/add/",
//             { movie_id: id },
//             {
//                 headers: {
//                     Authorization: `Token ${token}`,
//                 },
//             }
//         ).catch(err => console.error(err));
//     }, [id]);

//     return (
//         <div className="watch-page">
//             <video
//                 src={`http://127.0.0.1:8000/media/videos/${id}.mp4`}
//                 controls
//                 autoPlay
//             />
//         </div>
//     );
// }

// export default WatchMovie;



import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WatchMovie() {
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const [movie, setMovie] = useState(null);

    /* ---- ADD TO HISTORY ---- */
    useEffect(() => {
        axios.post(
            "http://127.0.0.1:8000/userapi/history/add/",
            { movie_id: id },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        ).catch(err => console.error(err));
    }, [id]);

    /* ---- FETCH MOVIE DETAILS ---- */
    useEffect(() => {
        axios.get(
            `http://127.0.0.1:8000/userapi/movieID/${id}/`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        )
        .then(res => setMovie(res.data))
        .catch(err => console.error(err));
    }, [id]);

    if (!movie) return <p>Loading video...</p>;

    return (
        <div className="watch-page">
            <video controls autoPlay width="100%">
                <source
                    src={`http://127.0.0.1:8000${movie.video_file}`}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default WatchMovie;
