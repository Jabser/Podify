import React, { Component } from 'react';
import '../../sass/login.scss'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-img">
          
        </div>
        <div className="login-form">
          <form>
            <h1>
              Login
            </h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad in laboriosam.
            </h4>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Enter email" autoFocus />
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password" />
              <a href="/forgot" class="form-text text-muted">Forgot your password?</a>
            </div>
            <div className="user-btns">
              <a href="/" type="button" className="btn btn-primary me-3">
                Login
              </a>
            </div>

            <a href="/signup" class="form-text text-muted extra-option">Don't have an account? <span>Create one here</span></a>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;