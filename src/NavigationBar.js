import React from 'react';
import './NavigationBar.css';

function NavigationBar({ onHomeClick, onRecipesClick, onContributorsClick }) {
    const handleNavigation = (page) => {
        switch (page) {
            case 'home':
                onHomeClick();
                break;
            case 'recipes':
                onRecipesClick();
                break;
            case 'contributors':
                onContributorsClick();
                break;
            default:
                break;
        }
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://th.bing.com/th/id/OIP.ydb_RO_p3LaL3J0A3vv8RAHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" />
                <span className="logo-text">FlavorFusion</span>
            </div>
            <div className="nav-links">
                <button onClick={() => handleNavigation('home')}>Home</button>
                <button onClick={() => handleNavigation('recipes')}>Recipes</button>
                <button onClick={() => handleNavigation('contributors')}>Contributors</button>
            </div>
        </div>
    );
}

export default NavigationBar;
