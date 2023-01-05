import React, { Component } from 'react';
import '../../sass/login.scss'

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="signup-img">
          
        </div>
        <div className="signup-form">
          <form>
            <h1>
              Sign-up
            </h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad in laboriosam.
            </h4>
            <div class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Name" autoFocus />
            </div>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password again" />
            </div>
            <div className="user-btns">
              <a href="/" type="button" className="btn btn-primary me-3">
                Create account
              </a>
            </div>

            <a href="/login" class="form-text text-muted extra-option">Already have an account? <span>Login here</span></a>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;