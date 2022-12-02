import { useRef, useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router';
//Styles
import './Create.css';

import React from 'react';

export const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setTime] = useState(0);
  const [newIngredient, setNewIngredient] = useState('');
  // to ingidient ktory bedzie dodawany w input
  const [ingredients, setIngredients] = useState([]);
  //arrayka ze wszystkimi skladnikami
  const ingredientInput = useRef(null);
  const history = useHistory();

  const { postData, data, error } = useFetch(
    'http://localhost:3131/recipes',
    'POST'
  );
  //musimy dac jako argument post bo inaczej bedzie uzywal get by default pirszwy argument to url do ktorego ma sie fun odnosic
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes ',
    });
  };

  ///w postData wysyylamy obiekt identyczny jak mmay na serwerze(sprawdz) ni emusimy id wysylac bo to jest z automatu robione za nas
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredient) => [...prevIngredient, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
    //skad PrevIngrdient??
  };
  // ing is true sytuacja kiedy w inpucie nie ma zadnej wartosci wiec jest null ddlatego sprawdzamy ing &&

  //!ingredients.includes(ing) - spawdza czy array [] zawwiera to co przed chwila zostalo wpisane do inpu [], czyli to takie zapytanie czy ta value juz jest w arrray i byl a uzyta ( nie chcemy zeby value w array sie powtarzaly dlatego dajemy !), wiec jesli ta value jest juz w array to ten kod sie juz nie odpali

  //powrot na homepage po wypelnieniu formularza

  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data]);

  //nasluchuje na zmiene w data po post requwst jaesli tak zmiana bedzie to wykona sie fun , ktora powoduje powrot do homepag
  //musimu dac if(data) bo jak nie to sie wykonowa odrazu za pierwszym razemi wyrzuci nas przy pierwdzym renderze (zabezpieczeni)
  return (
    <div className='create'>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Recipe title:</h2>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>
              add
            </button>
          </div>
        </label>
        <p>
          current ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
        <label>
          <h2>Recipe method:</h2>
          <textarea
            type='text'
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>
        <label>
          <h2>Cooking time(minutes):</h2>
          <input
            type='text'
            value={cookingTime}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

//ref

//przyklad wyzej jak chcemy miec focus na inpucie
//dzieki uzycui reg mamy bezposredni dostep do elementu dom i dzieki temu mozemy uzyc metody focus
