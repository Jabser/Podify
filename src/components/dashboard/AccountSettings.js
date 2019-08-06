import React, { Component } from 'react';

class AccountSettings extends Component {
  render() {
    return (
      <div className="account-settings">
        <h3>Account Settings</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Change Profile Picture</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Change Email</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Change Password</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">View Account Data</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <button className="btn btn-link">Delete Account</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default AccountSettings;