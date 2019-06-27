import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../sass/genres.scss'

//images
import business from '../images/business.jpg';
import truecrime from '../images/truecrime.jpg';
import comedy from '../images/comedy.jpg';
import programming from '../images/programming.jpg';
import politics from '../images/politics.jpg';
import crypto from '../images/crypto.jpg';
import sports from '../images/sports.jpg';
import culture from '../images/culture.jpg'

class Genres extends Component {
  render () {
    return (
      <div className="genres">
          <div className="genrebox">
            <div className="business">
              <Link to="/">              
                <img src={business} alt=""/>
                <div className="textbox">'
                  <p>BUSINESS</p>
                </div>
              </Link>
            </div>
            <div className="truecrime">
              <Link to="/">
                <img src={truecrime} alt=""/>
                <div className="textbox">
                  <p>TRUE CRIME</p>
                </div>
              </Link>
            </div>
            <div className="comedy">
              <Link to="/">
                <img src={comedy} alt=""/>
                <div className="textbox">
                  <p>COMEDY</p> 
                </div>
              </Link>
            </div>
            <div className="programming">
              <Link to="/">
                <img src={programming} alt=""/>
                <div className="textbox">
                  <p>PROGRAMMING</p>
                </div>
              </Link>
            </div>
            <div className="politics">
              <Link to="/">
                <img src={politics} alt=""/>
                <div className="textbox">
                  <p>POLITICS</p>
                </div>
              </Link>
            </div>
            <div className="crypto">
              <Link to="/">
                <img src={crypto} alt=""/>
                <div className="textbox">
                  <p>CRYPTO</p>
                </div>
              </Link>
            </div>
            <div className="sports">
              <Link to="/">
                <img src={sports} alt=""/>
                <div className="textbox">
                  <p>SPORTS</p>
                </div>
              </Link>
            </div>
            <div className="culture">
              <Link to="/">
                <img src={culture} alt=""/>
                <div className="textbox">
                  <p>CULTURE</p>
                </div>
              </Link>
            </div>
            <Link to="/" className="genrelink">See all genres</Link>
          </div>
          
        </div>
    )
  }
}

export default Genres;