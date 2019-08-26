import React, { Component } from 'react';
import '../sass/home.scss';
import Logo from '../images/podify-logo.png';
import Search from '../components/Search';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <img src={Logo} alt="Logo duuh" className="img-fluid logo mx-auto d-block" />
          <h1 className="home-header">Search for Podcasts</h1>
          <Search />
        </div>
      </div>
    )
  }
}

export default Home;