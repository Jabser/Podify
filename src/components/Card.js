import React, { Component } from 'react';
import podlogo from '../images/moerkeland-logo.jpg';
import '../sass/card.scss'


 class Card extends Component {
  render() {
    return (
      <div id="Card">
        <img src={podlogo} alt="podcast logo" className="logo"/>
        <div className="links">
          <a href="/" className="apple"><i className="fab fa-apple"></i>ITUNES</a>
          <a href="/" className="weblink"><i className="fas fa-link"></i>WEB</a>
        </div>
        <div className="episode">
          <h1>EPISODE 56</h1>
          <h2><span>by</span> MØRKELAND</h2>
        </div>
        <div className="play">
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
          <audio src=""></audio>
        </div>
        <div className="rating">
          <div className="like">
            <i className="fas fa-thumbs-up"></i>
            <p>398</p>
          </div>
          <div className="like">
            <i className="fas fa-thumbs-down"></i>
            <p>34</p>
          </div>
        </div>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ias dicta animi laudantium placeat debitis quo cumque!</p>
        </div>
      </div>
    )
  }
}

export default Card