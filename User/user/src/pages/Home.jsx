import MovieCard from "../components/MovieCard";

function Home() {
    return (
        <div className="container">
            <h2>Browse Movies</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    );
}
export default Home;
