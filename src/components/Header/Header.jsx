import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/review'>OrderReview</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>contact</Link>
      <Link to='/roots'>Roots</Link>
    </nav>
  );
};

export default Header;