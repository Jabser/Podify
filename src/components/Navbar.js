import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Logo from '../images/podify-logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link className="navbar-brand" to="/">
          <img src={Logo} width="60%" height="30" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/card">card</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Sign Up</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;