import React, { Component } from 'react';

class AccountSettings extends Component {
  render() {
    return (
      <div className="account-settings">
        <h3>Account Settings</h3>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Change Email</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Change Password</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">View Account Data</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Delete Account</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default AccountSettings;