import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/app.scss';

import Home from './views/Home';
import Episodes from './views/Episodes';
import Trending from './views/Trending';
import Channels from './views/Channels';

import Pricing from './views/Pricing';
import About from './views/About';
import Contact from './views/Contact';

import Login from './views/user/Login';
import Signup from './views/user/Signup';
import Forgot from './views/user/Forgot';
import Search from './components/Search';

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
            <Route path='/episodes' element={<Episodes />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/channels' element={<Channels />} />

            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/search' element={<Search />} />

            <Route component={NoMatch} />
          </Routes>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
