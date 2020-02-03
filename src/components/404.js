import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/404.scss';
import Cover from '../images/404/cover.svg';

function NoMatch({ location }) {
  return (
    <div className="no-match">
      <div className="container">
        <img src={Cover} className="img-fluid" alt="404 cover" />
        <h1>That page doesn't exist: <code>{location.pathname}</code></h1>
        <NavLink to="/" className="btn btn-back btn-lg">Take me home</NavLink>
      </div>
    </div>
  );
}

export default NoMatch;