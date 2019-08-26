import React, { Component } from 'react';
import '../sass/home.scss';
import Logo from '../images/podify-logo.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <img src={Logo} alt="Logo duuh" className="img-fluid logo mx-auto d-block" />
          <h1 className="home-header">Search for Podcasts</h1>
          <form action="">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search..." id="inputDefault" autoFocus />
            </div>
          </form>


          <div className="search-genres">
            <a className="btn btn-link" href="https://listennotes.com">Business</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Comedy</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Crypto</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Politics</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">History</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;