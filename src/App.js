import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './sass/app.scss';

import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
