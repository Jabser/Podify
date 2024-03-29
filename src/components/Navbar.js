import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="headers">
        <div className="container-fluid sub-header">
          <header className='navbar justify-content-end'>
            <ul className="nav col-12 col-md-auto mb-2 mb-md-0 navbar-links">
              <li>
                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </header>
        </div>
        <div className="container-fluid main-header">
          <header className="navbar d-flex align-items-center justify-content-center justify-content-md-between py-3">
            <NavLink to="/" className="navbar-brand d-flex align-items-center col-md-3 mb-2 mb-md-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={14} width={14} ><g><line x1={0.5} y1={1.5} x2={0.5} y2={12.5} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><line x1={5.7} y1={3.5} x2={5.7} y2={10.5} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><line x1={3.1} y1={5} x2={3.1} y2={9} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><line x1={13.5} y1={1.5} x2={13.5} y2={12.5} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><line x1={10.9} y1={3.5} x2={10.9} y2={10.5} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><line x1={8.3} y1={5} x2={8.3} y2={9} fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
              <span>PODIFY</span>
            </NavLink>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navbar-links">
              <li>
                <NavLink className="nav-link" exact={true} activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/trending">Trending</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/channels">Channels</NavLink>
              </li>
            </ul>

            <div className="col-md-3 text-end navbar-buttons">
              <NavLink to="/search" type="button" className="btn btn-outline-primary me-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="25" width="25"><g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line></g></svg></NavLink>
              <NavLink to="/login" type="button" className="btn btn-outline-primary me-3">Login</NavLink>
              <NavLink to="/signup" type="button" className="btn btn-primary">Sign-up</NavLink>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

export default Navbar;