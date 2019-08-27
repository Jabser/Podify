import React, { Component } from 'react';

class MyAccount extends Component {
  render() {
    return (
      <div className="my-account">
        <div className="spacer"></div>
        <ul className="list-group">
          <li className="list-group-item account-img">
            <img src="https://uinames.com/api/photos/female/4.jpg" className="img-fluid d-block mx-auto rounded-circle" alt="" />
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="title">
              Username
            </span>
            <span className="value">
              Undefined
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="title">
              Name
            </span>
            <span className="value">
              Undefined
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
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