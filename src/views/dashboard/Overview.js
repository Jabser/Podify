import React, { Component } from 'react';
import '../../sass/dashboard.scss';

import MyAccount from '../../components/dashboard/MyAccount';
import AccountSettings from '../../components/dashboard/AccountSettings'
import Library from '../../components/dashboard/Library';
import CurationTools from '../../components/dashboard/CurationTools';

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="container-fluid">
          <div>
            <div className="row">
              <div className="col-8">
                <h1 className="dashboard-header">Dashboard - Overview</h1>
              </div>
              <div className="col-4">
                <form action="" className="dashboard-search">
                  <div className="form-group">
                    <input type="text" class="form-control" placeholder="Search library..." id="dashboardSearch" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Library />
              <hr/>
              <CurationTools />
            </div>
            <div className="col-4">
              <MyAccount />
              <hr/>
              <AccountSettings />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;