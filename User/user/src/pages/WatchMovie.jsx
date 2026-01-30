// function WatchMovie() {
//     return (
//         <div className="container">
//             <h2>Now Playing</h2>
//             <div style={{ background: "#000", height: "400px" }}></div>
//         </div>
//     );
// }

// export default WatchMovie;

import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function WatchMovie() {
    const { id } = useParams();
    const token = localStorage.getItem("token");

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

    return (
        <div className="watch-page">
            <video
                src={`http://127.0.0.1:8000/media/videos/${id}.mp4`}
                controls
                autoPlay
            />
        </div>
    );
}

export default WatchMovie;
