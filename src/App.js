import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import RecipeDetails from './RecipeDetails';
import HomePage from './HomePage';
import ContributorsPage from './ContributorsPage'; // Import the ContributorsPage component
import recipesData from './recipes.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      selectedRecipe: null,
    };
  }

  handleHomeClick = () => {
    this.setState({ currentPage: 'home', selectedRecipe: null });
  };

  handleRecipesClick = () => {
    this.setState({ currentPage: 'recipes', selectedRecipe: null });
  };

  handleRecipeClick = (recipe) => {
    this.setState({ currentPage: 'recipe', selectedRecipe: recipe });
  };

  handleBackToRecipes = () => {
    this.setState({ currentPage: 'recipes' });
  };

  handleBackToHome = () => {
    this.setState({ currentPage: 'home' });
  };

  handleContributorsClick = () => {
    this.setState({ currentPage: 'contributors', selectedRecipe: null });
  };

  render() {
    const { currentPage, selectedRecipe } = this.state;

    return (
      <div className="App">
        <NavigationBar
          onHomeClick={this.handleHomeClick}
          onRecipesClick={this.handleRecipesClick}
          onContributorsClick={this.handleContributorsClick}
        />
        {currentPage === 'home' && <HomePage onSearchClick={this.handleRecipesClick} />}
        {currentPage === 'recipes' && (
          <div className="recipe-grid">
            {recipesData.map((recipe) => (
              <div key={recipe.id} className="recipe-card" onClick={() => this.handleRecipeClick(recipe)}>
                <img src={recipe.imageUrl} alt={recipe.title} />
                <div className="recipe-title">{recipe.title}</div>
              </div>
            ))}
          </div>
        )}
        {currentPage === 'recipe' && selectedRecipe && (
          <RecipeDetails recipe={selectedRecipe} onBackToRecipes={this.handleBackToRecipes} onBackToHome={this.handleBackToHome} />
        )}
        {currentPage === 'contributors' && <ContributorsPage />}
      </div>
    );
  }
}

export default App;
