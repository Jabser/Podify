import React, { Component } from 'react';

import Logo from '../images/logo.png';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="row">
              <div className="col-md-3">
                <img src={Logo} alt="logo" />
              </div>
              <div className="col-md-3">
                <h5>Company</h5>
                <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Jobs</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Listen</h5>
                <ul>
                  <li><a href="">Episodes</a></li>
                  <li><a href="">Trending</a></li>
                  <li><a href="">Channels</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Useful links</h5>
                <ul>
                  <li><a href="">Support</a></li>
                  <li><a href="">Login</a></li>
                  <li><a href="">Sign up</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-legal">
            <div className="privacy-links">
              <a href="" rel="noopener noreferrer">Legal</a>
              <a href="" rel="noopener noreferrer">Privacy Policy</a>
              <a href="" rel="noopener noreferrer">Cookies</a>
            </div>
            <div className="podify-legal">
              &copy; 2019 - 2022 Podify - Powered by the <a href="https://www.listennotes.com/" rel="noopener noreferrer" target="_blank">Listen Notes API</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;