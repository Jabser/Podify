import React from 'react';
import { useLocation } from 'react-router-dom';
import '../sass/404.scss';

const NoMatch = () => {
  const location = useLocation();
  return (
    <div className="no-match">
      <div className="container">
        <h1>That page doesn't exist: {location.pathname.replace('/','')}</h1>
        <a href='/' type="button" className="btn btn-primary me-3">
          Take me home
        </a>
      </div>
    </div>
  );
}

export default NoMatch;