import { useFetch } from '../../hooks/useFetch';
//Styles
import './Home.css';

import React from 'react';

export const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3131/recipes');
  console.log('data:', data);
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='isPending'>Loading... </p>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
};
