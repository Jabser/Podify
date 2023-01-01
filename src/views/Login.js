import React, { Component } from 'react';
import '../sass/login.scss'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-img">
          <h1>Test</h1>
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
              <label for="exampleInputEmail1" class="col-form-label-lg mt-4">Email address</label>
              <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="col-form-label-lg mt-4">Password</label>
              <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;