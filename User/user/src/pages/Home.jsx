// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import MovieCard from "../components/MovieCard";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function Home() {
//     const [movies, setMovies] = useState([]);
//     const [searchText, setSearchText] = useState("");
//     const navigate = useNavigate();

//     /* ---------------- AUTH CHECK ---------------- */
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (!token) {
//             navigate("/login");
//         } else {
//             fetchMovies();
//         }
//     }, []);

//     /* ---------------- FETCH ALL MOVIES ---------------- */
//     function fetchMovies() {
//         axios.get("http://127.0.0.1:8000/userapi/movieList/", {
//             headers: {
//                 Authorization: `Token ${localStorage.getItem("token")}`,
//             },
//         })
//         .then((response) => {
//             setMovies(response.data);
//         })
//         .catch((error) => {
//             console.error("Error fetching movies:", error);
//         });
//     }

//     /* ---------------- SEARCH MOVIES ---------------- */
//     function searchMovies() {
//         if (!searchText.trim()) {
//             fetchMovies();   // reset to all movies
//             return;
//         }

//         axios.get(
//             `http://127.0.0.1:8000/userapi/movie/search?q=${searchText}`,
//             {
//                 headers: {
//                     Authorization: `Token ${localStorage.getItem("token")}`,
//                 },
//             }
//         )
//         .then((response) => {
//             setMovies(response.data);
//         })
//         .catch((error) => {
//             console.error("Search error:", error);
//         });
//     }

//     return (
//         <>
//             <Navbar />

//             {/* -------- HERO (unchanged) -------- */}
//             <section className="hero-carousel">
//                 <div className="hero-carousel-overlay"></div>
//                 <div className="hero-carousel-content">
//                     <div className="hero-carousel-actions">
//                         <Link to="/movie/1" className="btn primary">
//                             ▶ Play Now
//                         </Link>
//                         <button className="btn secondary">
//                             + Add to Watchlist
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* -------- MAIN -------- */}
//             <main className="container">

//                 {/* SEARCH */}
//                 <div className="home-header">
//                     <div className="search-box">
//                         <input
//                             type="text"
//                             placeholder="Search movies, shows..."
//                             value={searchText}
//                             onChange={(e) => setSearchText(e.target.value)}
//                         />
//                         <button onClick={searchMovies}>Search</button>
//                     </div>
//                 </div>

//                 {/* MOVIE LIST */}
//                 <section className="home-section">
//                     <h3 className="section-title">Trending Now</h3>

//                     <div className="movie-grid">
//                         {movies.length === 0 ? (
//                             <p>No movies found</p>
//                         ) : (
//                             movies.map((movie) => (
//                                 <MovieCard key={movie.id} movie={movie} />
//                             ))
//                         )}
//                     </div>
//                 </section>

//             </main>
//         </>
//     );
// }

// export default Home;


import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselMovies = movies.slice(0, 5);
    const [featuredIndex, setFeaturedIndex] = useState(0);

    useEffect(() => {
        if (movies.length === 0) return;

        const interval = setInterval(() => {
            setFeaturedIndex(prev =>
                prev >= movies.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [movies]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            fetchMovies();
        }
    }, []);

    function fetchMovies() {
        axios.get("http://127.0.0.1:8000/userapi/movieList/", {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            setMovies(response.data);
            console.log("Fetched movies:", response.data);
        })
        .catch((error) => {
            console.error("Error fetching movies:", error);
        });
    }

    function addToWatchlist(movieId) {
    axios.post(
        "http://127.0.0.1:8000/userapi/watchlist/add/",
        { movie_id: movieId },
        {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        }
    )
    .then(res => {
        alert(res.data.message); 
    })
    .catch(err => {
        console.error("Watchlist error:", err);
    });
}

    function searchMovies() {
        if (!searchText.trim()) {
            fetchMovies(); 
            return;
        }

        axios.get(
            `http://127.0.0.1:8000/userapi/movie/search/?q=${searchText}`,
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            }
        )
        .then((response) => {
            setMovies(response.data);
        })
        .catch((error) => {
            console.error("Search error:", error);
        });
    }

    return (
        <>
            <Navbar />
            
            {movies.length > 0 && featuredIndex < movies.length && (
                <section
                    className="hero-carousel"
                    style={{
                        backgroundImage: `url(http://127.0.0.1:8000${movies[featuredIndex].thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    <div className="hero-carousel-overlay"></div>

                    <div className="hero-carousel-content">
                        <h1>{movies[featuredIndex].title}</h1>
                        <p>{movies[featuredIndex].description?.slice(0, 120)}...</p>

                        <div className="hero-carousel-actions">
                            <Link
                                to={`/movie/${movies[featuredIndex].id}`}
                                className="btn primary"
                            >
                                ▶ Play Now
                            </Link>
                        </div>
                    </div>
                </section>
            )}


            <main className="container">

                <div className="home-header">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search movies, shows..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button onClick={searchMovies}>Search</button>
                    </div>
                </div>

                <section className="home-section">
                    <h3 className="section-title">Trending Now</h3>

                    <div className="movie-grid">
                        {movies.length === 0 ? (
                            <p>No movies found</p>
                        ) : (
                            movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))
                        )}
                    </div>
                </section>

            </main>
        </>
    );
}

export default Home;
