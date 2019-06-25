import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-social">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="footer-legal">
            &copy; 2019 Podify - Powered by <a href="https://www.listennotes.com/" rel="noopener noreferrer" target="_blank">Listen Notes API</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;