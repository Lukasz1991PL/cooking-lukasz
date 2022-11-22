import './Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div classNamer='navbar'>
      <nav>
        <Link to='/'>
          <h1> Cooking with Lukasz</h1>
        </Link>
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
};
