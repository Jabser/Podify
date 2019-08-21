import React, { Component } from 'react';
import '../sass/home.scss';
import Logo from '../images/podify-logo.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <img src={Logo} alt="Logo duuh" className="img-fluid logo mx-auto d-block" />
          {/* <h1 className="text-center">Search for Podcasts</h1> */}
          <form action="">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search for podcasts" id="inputDefault" autoFocus />
            </div>
          </form>


          <br/><br/><br/><br/>


          <form action="">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search..." />
              {/* <div className="input-group-append">
                <button className="btn btn-secondary" type="button">Search</button>
              </div> */}
              {/* <span class="input-group-append">
                <button class="btn btn-outline-secondary border-left-0" type="button">
                    <i class="fa fa-search"></i>
                </button>
              </span> */}
              <span class="input-group-append">
                <div class="input-group-text"><i class="fa fa-search"></i></div>
              </span>
            </div>
          </form>
          {/* <div className="search-genres">
            <a className="btn btn-link" href="https://listennotes.com">Business</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Comedy</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Crypto</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Politics</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">History</a>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Home;