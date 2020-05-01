import React from 'react';
import logo from '../../Pictures/Logo.jpg'
const Logo = () => {
  return (
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo"/>
      </a>
  );
}

export default Logo;
