import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/app.scss';

import Home from './views/Home';
import Popular from './views/Popular';
import Genres from './views/Genres';
import About from './views/About';
import Login from './views/Login';
import Signup from './views/Signup';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/popular' component={Popular} />
          <Route path='/genres' component={Genres} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
