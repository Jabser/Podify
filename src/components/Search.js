import React, { Component } from 'react';

class Search extends Component {
  render () {
    return (
      <div className="search">
        <form action="">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search..." id="inputDefault" autoFocus />
          </div>
        </form>
        <div className="search-genres">
            <a className="btn btn-link" href="https://listennotes.com">Business</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Comedy</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Crypto</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">Politics</a>
            <i className="fas fa-circle"></i>
            <a className="btn btn-link" href="https://listennotes.com">History</a>
          </div>
      </div>
    )
  }
}

export default Search;