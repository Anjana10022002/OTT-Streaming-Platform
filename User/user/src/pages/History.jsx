import Navbar from "../components/Navbar";

function History() {
    return (
        <div className="container">
            <Navbar />
            <div className="page-header">
                <h2>Watch History</h2>
                <p className="page-subtitle">
                    Movies you’ve watched recently
                </p>
            </div>

            <div className="history-table">
                <div className="history-row header">
                    <span>Thumbnail</span>
                    <span>Title</span>
                    <span>Watched On</span>
                </div>

                <div className="history-row">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8O-2z5c1HeUS7ToIaVHIlAmvy_MTAVnJnhYyvN7FyNJBxjZaNqFmV9xWWBb8f26rRgfTc9GQlWMWVQPdmS56NfRD4pYIxO0B-pZ_vV2t1cnSikgDOPc0k8eufiQXX4Ud3bLangQIR_Og/s1600/horizon.jpg"
                        alt="movie"
                    />
                    <span>Movie Title</span>
                    <span>4 Jan 2026, 8:30 PM</span>
                </div>

                <div className="history-row">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8O-2z5c1HeUS7ToIaVHIlAmvy_MTAVnJnhYyvN7FyNJBxjZaNqFmV9xWWBb8f26rRgfTc9GQlWMWVQPdmS56NfRD4pYIxO0B-pZ_vV2t1cnSikgDOPc0k8eufiQXX4Ud3bLangQIR_Og/s1600/horizon.jpg"
                        alt="movie"
                    />
                    <span>Movie Title</span>
                    <span>13 Jan 2026, 9:10 PM</span>
                </div>
            </div>
        </div>
    );
}

export default History;
