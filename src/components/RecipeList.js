import React from 'react';
import { Link } from 'react-router-dom';
export const RecipeList = ({ recipes }) => {
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div> {recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
};

//jesli mamy dynamiczna  stala to uzymay template!
