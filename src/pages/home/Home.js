import { useFetch } from '../../hooks/useFetch';
//Styles
import './Home.css';

import React from 'react';
import { RecipeList } from '../../components/RecipeList';

export const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3131/recipes');
  console.log('data:', data);
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='isPending'>Loading... </p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
//na poczatku data ma null ddlatego musi byc jak wyz`ej (w recipeList jest data.map)
