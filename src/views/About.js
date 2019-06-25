import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/podify-logo.png';
import '../sass/about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <img src={Logo} alt="logo" className="img-fluid d-block mx-auto logo" />
          <div className="about-card">
            <h1>Access Podcasts Instantly</h1>
            <p>
              With over 700.000 podcasts from a wide variety of people.
            </p>
            <NavLink to="/popular" className="about-link">Start Exploring </NavLink>
            <div className="stats">
              <div className="row">
                <div className="col-6">
                  <h1>700.000+</h1>
                  <h3>Podcasts</h3>
                </div>
                <div className="col-6">
                  <h1>47.000.000+</h1>
                  <h3>Episodes</h3>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="about-card">
            <div className="row">
              <div className="col-6">
                <h1>Popular</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt doloribus porro, laudantium molestiae delectus mollitia reiciendis rem neque nihil aliquid temporibus autem excepturi, incidunt sequi. Officiis cumque sint eveniet!
                </p>
                <NavLink to="/popular" className="about-link">Browse the most popular </NavLink>
              </div>
              <div className="col-6">
                <i className="fas fa-fire-alt fa-10x"></i>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="row">
              <div className="col-6">
                <img src="https://steamcdn-a.akamaihd.net/store/about/cta_hero_steamworks_pt1.png" alt="about img" className="img-fluid" />
              </div>
              <div className="col-6">
                <h1>Library Management <span className="badge badge-secondary">Coming Soon</span></h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt doloribus porro, laudantium molestiae delectus mollitia reiciendis rem neque nihil aliquid temporibus autem excepturi, incidunt sequi. Officiis cumque sint eveniet!
                </p>
                <NavLink to="/popular" className="btn btn-link about-link disabled">Browse your library </NavLink>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="row">
              <div className="col-6">
                <h1>Curation Tools <span className="badge badge-secondary">Coming Soon</span></h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt doloribus porro, laudantium molestiae delectus mollitia reiciendis rem neque nihil aliquid temporibus autem excepturi, incidunt sequi. Officiis cumque sint eveniet!
                </p>
                <NavLink to="/popular" className="btn btn-link about-link disabled">Get started </NavLink>
              </div>
              <div className="col-6">
                <img src="https://steamcdn-a.akamaihd.net/store/about/cta_hero_community.png" alt="about img" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="about-card">
            <h1>And so much more to come...</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default About;