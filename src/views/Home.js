import React, { Component } from 'react';
import '../sass/home.scss';
import Logo from '../images/podify-logo.png';
import PodcastView from '../components/manage/PodcastView';
import '../sass/card.scss';
// import '../../sass/player.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <img src={Logo} alt="Logo duuh" className="img-fluid logo mx-auto d-block" />
          <h1 className="text-center">Search for podcasts</h1>
          <form action="">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="ex. genre" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Search</button>
              </div>
            </div>
          </form>
          <div className="search-genres">
            <a className="btn btn-link" href="https://listennotes.com">Business</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Comedy</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Crypto</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Politics</a>
            <i class="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">History</a>
          </div>
          <PodcastView />
        </div>
      </div>
    )
  }
}

export default Home;