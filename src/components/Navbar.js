import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './Navbar.css';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1> Cooking with Lukasz</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
};
