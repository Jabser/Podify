import React, { Component } from 'react';

import Logo from '../images/logo.png';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-start">
          <div className="container">
            <div>
              <h2>Start listening</h2>
              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, libero molestias.</h5>
            </div>
            <div className="footer-cta">
              <button type="button" className="btn btn-primary me-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={14} width={14} ><g><line x1={0.5} y1={1.5} x2={0.5} y2={12.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={5.7} y1={3.5} x2={5.7} y2={10.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={3.1} y1={5} x2={3.1} y2={9} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={13.5} y1={1.5} x2={13.5} y2={12.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={10.9} y1={3.5} x2={10.9} y2={10.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={8.3} y1={5} x2={8.3} y2={9} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
                
                Explore our catalog
              </button>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={Logo} alt="logo" />
              </div>
              <div className="col-md-3">
                <h5>Company</h5>
                <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Jobs</a></li>
                  <li><a href="/">News</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Listen</h5>
                <ul>
                  <li><a href="/">Episodes</a></li>
                  <li><a href="/">Trending</a></li>
                  <li><a href="/">Channels</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Useful links</h5>
                <ul>
                  <li><a href="/">Support</a></li>
                  <li><a href="/">Login</a></li>
                  <li><a href="/">Sign up</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-legal">
              <div className="privacy-links">
                <a href="/" rel="noopener noreferrer">Legal</a>
                <a href="/" rel="noopener noreferrer">Privacy Policy</a>
                <a href="/" rel="noopener noreferrer">Cookies</a>
              </div>
              <div className="podify-legal">
                &copy; 2019 - 2022 Podify - Powered by the <a href="https://www.listennotes.com/" rel="noopener noreferrer" target="_blank">Listen Notes API</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;