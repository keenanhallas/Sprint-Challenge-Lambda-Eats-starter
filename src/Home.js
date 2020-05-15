import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Link to="/pizza">
            <button>Click here to order pizza!</button>
        </Link>
    );
}

export default Home;