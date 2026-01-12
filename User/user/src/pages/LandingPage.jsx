import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landing-page">
            <div className="landing-center">
                <img src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4" alt="OTT Preview" />

                <h1>Unlimited Movies, Shows & Entertainment</h1>
                <p>Watch anywhere. Cancel anytime.</p>

                <div className="landing-actions">
                    <Link to="/register" className="btn primary">Sign Up</Link>
                    <Link to="/login" className="btn secondary">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
