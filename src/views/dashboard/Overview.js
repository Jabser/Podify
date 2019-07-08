import React, { Component } from 'react';
import '../../sass/dashboard.scss';

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="container-fluid">
          <h1>Dashboard - Overview</h1>
          <div className="row">
            <div className="col-3">
              <h3>My Account</h3>
              <div className="card">
                <div className="card-body">
                  
                </div>
              </div>
            </div>
            <div className="col-9">
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
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;