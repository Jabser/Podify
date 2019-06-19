import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../images/podify-logo.png';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-md navbar-light flex-row">
          <a class="navbar-brand mx-md-auto mr-auto" href="/">
            <img src={Logo} height="60" alt="" />
          </a>
          <span class="navbar-text d-none d-md-block">
            <button className="btn btn-navbar my-2 my-sm-0" type="submit">Login</button>
            <button className="btn btn-navbar my-2 my-sm-0" type="submit">Sign Up</button>
          </span>
          <button class="navbar-toggler ml-lg-0" type="button" data-toggle="collapse" data-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <nav class="navbar p-0 navbar-expand-md navbar-light">
          <div class="collapse navbar-collapse px-3" id="navbarContent">
            <ul class="navbar-nav mx-md-auto mx-0 w-50 align-items-start nav-fill">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Popular</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Genres</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/card">card</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;