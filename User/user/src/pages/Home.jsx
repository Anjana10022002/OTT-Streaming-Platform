import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useState, useEffect, use } from "react";


function Home() {
    const [movies, setMovies] = useState([]); 
    const navigate = useNavigate(); 


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

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <>
            <Navbar />
            <section className="hero-carousel">
                <img
                    src=""
                    alt="Featured Movie"
                    className="hero-carousel-bg"
                />

                <div className="hero-carousel-overlay"></div>

                <div className="hero-carousel-content">
                    <h1></h1>
                    <p>
                       
                    </p>

                    <div className="hero-carousel-actions">
                      
                        <Link to="/movie/1" className="btn primary">
                            ▶ Play Now
                        </Link>
                        <button className="btn secondary">
                            + Add to Watchlist
                        </button>
                    </div>
                </div>
            </section>


            <main className="container">
                <div className="home-header">

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search movies, shows..."
                        />
                        <button>Search</button>
                    </div>
                </div>

                <section className="home-section">
                    <h3 className="section-title">Trending Now</h3>
                    <div className="movie-grid">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                     </div>
                </section>
            </main>
        </>
    );
}

export default Home;