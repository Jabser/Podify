import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/404.scss';

function NoMatch({ location }) {
  return (
    <div className="no-match">
      <div className="container">
        <i class="far fa-frown fa-10x"></i>
        <h1 className="display-1">404</h1>
        <h1>That page doesn't exist: <code>{location.pathname}</code></h1>
        <NavLink to="/" className="btn btn-back btn-lg">Take me home</NavLink>
      </div>
    </div>
  );
}

export default NoMatch;