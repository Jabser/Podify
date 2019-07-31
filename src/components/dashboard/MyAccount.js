import React, { Component } from 'react';

class MyAccount extends Component {
  render() {
    return (
      <div className="my-account">
        <h3>My Account</h3>
        <ul class="list-group">
          <li class="list-group-item text-center account-img">
            <i class="far fa-user-circle fa-8x"></i>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span className="title">
              Username
            </span>
            <span className="value">
              Undefined
            </span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span className="title">
              Name
            </span>
            <span className="value">
              Undefined
            </span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span className="title">
              Email
            </span>
            <span className="value">
              Undefined
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default MyAccount;