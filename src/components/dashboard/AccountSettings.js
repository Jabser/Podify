import React, { Component } from 'react';

class AccountSettings extends Component {
  render() {
    return (
      <div className="account-settings">
        <h3>My Account Settings</h3>
        <ul class="list-group account-settings">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span className="parent w-25">
              Name
              <span className="child">
                Jakob
              </span>
            </span>
            <a href="" className="account-edit"><i class="fas fa-pencil-alt"></i></a>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Username
            <a href="" className="account-edit"><i class="fas fa-pencil-alt"></i></a>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Email
            <a href="" className="account-edit"><i class="fas fa-pencil-alt"></i></a>
          </li>
        </ul>
      </div>
    )
  }
}

export default AccountSettings;