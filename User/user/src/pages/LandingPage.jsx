import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="hero">
            <img
                src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
                alt="OTT Background"
                className="hero-bg"
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>Unlimited Movies, Shows & Entertainment</h1>
                <p>Watch anywhere. Cancel anytime.</p>

                <div className="hero-actions">
                    <Link to="/register" className="btn primary">Sign Up</Link>
                    <Link to="/login" className="btn secondary">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
