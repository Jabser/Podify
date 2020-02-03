import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../sass/login.scss'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="loginbox">
            <h1>Login</h1>
            <form action="/">
              <input type="text" name="email" id="email" placeholder="Enter email..."/>
              <input type="password" name="password" id="password" placeholder="Enter password..." />
              <input type="submit" name="submit" id="submit" value="LOGIN"/>
            </form>
            <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;