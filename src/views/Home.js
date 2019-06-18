import React, { Component } from 'react';
import '../sass/home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1 className="text-center">Search for podcasts</h1>
          <form action="">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="ex. genre" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Søg</button>
              </div>
            </div>
          </form>
          <div className="search-genres">
            <a className="btn btn-link" href="">Business</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="">Comedy</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="">Crypto</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="">Politics</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="">History</a>
            <i class="fas fa-circle"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;