import { useFetch } from '../../hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';
//Styles
import './Recipe.css';

export const Recipe = () => {
  const { id } = useParams();
  const url = 'http://localhost:3131/recipes/' + id;
  const { error, isPending, data: recipe } = useFetch(url);
  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes{recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
};

//najpier trzeba pozykac id dzieki useParams (jest zmienne)
//useParams zwraca nam obiekt z tym co wpisalimsy w roocie po : (czyli w naszym wpydaku recipies/:id -spawdz komponent app)
//tworzym url ze zmiennym id po slasu -rozne rooty wiec rozne przekierowanie
