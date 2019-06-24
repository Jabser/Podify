import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="about-card">
            <h1>Access Podcasts Instantly</h1>
            <p>
              With over 700.000 podcasts from a wide variety of people.
            </p>
            <NavLink to="/popular" className="about-link">Browse the most popular </NavLink>
          </div>
          <div className="about-card">
            <div className="row">
              <div className="col-6">
                <h1>Empty empty</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt doloribus porro, laudantium molestiae delectus mollitia reiciendis rem neque nihil aliquid temporibus autem excepturi, incidunt sequi. Officiis cumque sint eveniet!
                </p>
              </div>
              <div className="col-6">
                
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="row">
              <div className="col-6">

              </div>
              <div className="col-6">
                <h1>Empty empty</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt doloribus porro, laudantium molestiae delectus mollitia reiciendis rem neque nihil aliquid temporibus autem excepturi, incidunt sequi. Officiis cumque sint eveniet!
                </p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="row">
              <div className="col-6">
                <h1>Empty empty</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt doloribus porro, laudantium molestiae delectus mollitia reiciendis rem neque nihil aliquid temporibus autem excepturi, incidunt sequi. Officiis cumque sint eveniet!
                </p>
              </div>
              <div className="col-6">

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