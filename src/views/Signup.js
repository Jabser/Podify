import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="container">
          <div className="signupbox">
            <h1>CREATE AN ACCOUNT</h1>
            <form action="/">
              <label htmlFor="name">YOUR NAME:</label>
              <input type="text" name="name" id="name" placeholder="ex. Jakob Jakobsen"/>
              <label htmlFor="email">YOUR EMAIL:</label>
              <input type="text" name="email" id="email" placeholder="ex. jakob@mail.com"/>
              <label htmlFor="password">YOUR PASSWORD:</label>
              <input type="password" name="password" id="password" placeholder="************"/>
              <input type="submit" name="submit" id="submit" value="Signup"/>
            </form>
            <p>Already have an account? <NavLink to='/login'>Login here</NavLink></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;