import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Link to="/pizza">
            <button>Want pizza? Click here to start!</button>
        </Link>
    );
}

export default Home;