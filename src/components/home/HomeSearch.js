import React, { Component } from 'react'
import '../../sass/home.scss';

class HomeSearch extends Component {
  render() {
    return (
      <div className="home-search">
        <section>
          <div className="container">
            <div className="search-form">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="45" width="45"><g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
              <h2>Get started</h2>
              <h4>
                Search through Podcasts, Episodes, Channels & more.
              </h4>
              <form action="">
                <div class="form-group">
                  <input class="form-control form-control-lg" type="text" placeholder="Search..." id="inputLarge" spellcheck="false" data-ms-editor="true" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeSearch;