import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/app.scss';

import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import Signup from './views/Signup';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoMatch from './components/404';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route component={NoMatch} />
          </Routes>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
