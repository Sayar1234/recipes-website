import React from 'react';
import './HomePage.css';

function HomePage({ onSearchClick }) {
    return (
        <div className="home-page-container">
            <div className="background-image"></div>
            <div className="content">
                <h1>Welcome to FlavorFusion!</h1>
                <p>Explore delicious recipes and cook like a chef.</p>
                <button onClick={onSearchClick}>Search for Recipes</button>
            </div>
        </div>
    );
}

export default HomePage;
