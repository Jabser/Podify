import React, { Component } from 'react';
import '../sass/home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <img src={Logo} alt="Podify logo" className="img-fluid logo mx-auto d-block" />
          <h1 className="home-header">Search for Podcasts</h1>
          <Search />
        </div>
      </div>
    )
  }
}

export default Home;