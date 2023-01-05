import React, { Component } from "react";
import '../../sass/login.scss'

class Forgot extends Component {
  render() {
    return (
      <div className="forgot">
        <div className="forgot-img">
          
        </div>
        <div className="forgot-form">
          <form>
            <h1>
              Forgot your password?
            </h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad in laboriosam.
            </h4>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Enter your email" autoFocus />
            </div>
            <div className="user-btns">
              <a href="/" type="button" className="btn btn-primary me-3">
                Reset password
              </a>
            </div>

            <a href="/login" class="form-text text-muted extra-option">Already have an account? <span>Login here</span></a>
            <br />
            <a href="/signup" class="form-text text-muted extra-option">Don't have an account? <span>Create one here</span></a>
          </form>
        </div>
      </div>
    )
  }
}

export default Forgot;