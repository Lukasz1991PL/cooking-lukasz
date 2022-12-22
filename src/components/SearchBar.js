import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

export const SearchBar = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();

  // Query Parameter Example

  // For example, in `https://www.google.com/search?q=abstract%20api`, we have a standard Google search, with the user input `abstract%20api` being passed as a variable via the query parameter `q=`. We can pass multiple variables with the `&` symbol separating parameters, forming a query string

  ///dynamicznie za pomoca tego co uzytkownik wpisalw search bar odsyla nas konketej storn : sprawdz useHistory plus qparameter

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`search?q${term}`);
  };
  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          required
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

//ma za zadanie odeslac usera na torne z konkretna recepta
