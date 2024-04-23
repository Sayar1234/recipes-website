import React from 'react';
import './RecipeDetails.css';

function RecipeDetails({ recipe, onBackToRecipes, onBackToHome }) {
    return (
        <div className="recipe-details-container">
            <div className="content">
                <div className="button-container">
                    <button onClick={onBackToRecipes}>Back to Recipes</button>
                    <button onClick={onBackToHome}>Back to Home</button>
                </div>
                <h2>{recipe.title}</h2>
                <div className="recipe-info">
                    <div>
                        <h3>Ingredients:</h3>
                        <ol>
                            {recipe.ingredients.split(',').map((ingredient, index) => (
                                <li key={index}>{ingredient.trim()}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h3>Procedure:</h3>
                        <ol>
                            {recipe.procedure.split('.').filter(step => step.trim() !== '').map((step, index) => (
                                <li key={index}>{step.trim()}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="video-container">
                    <div className="video-wrapper">
                        <iframe
                            src={`https://www.youtube.com/embed/${recipe.videoId}`}
                            title="YouTube video player"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
