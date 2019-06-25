import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-md navbar-light flex-row">
          <button class="navbar-toggler ml-lg-0" type="button" data-toggle="collapse" data-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <nav class="navbar p-0 navbar-expand-md navbar-light">
          <div class="collapse navbar-collapse px-3" id="navbarContent">
            <ul class="navbar-nav mx-md-auto mx-0 w-50 align-items-start nav-fill">
              <li className="nav-item">
                <NavLink className="nav-link" exact={true} activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/popular">Popular</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/genres">Genres</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/card">card</NavLink>
              </li>
            </ul>
            <span class="navbar-text d-none d-md-block">
              <NavLink to="/create" className="btn btn-navbar btn-add my-2 my-sm-0">Add Podcast</NavLink>
              <span className="btn-separator">
                |
              </span>
              <NavLink to="/login" className="btn btn-navbar my-2 my-sm-0">Login</NavLink>
            </span>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;