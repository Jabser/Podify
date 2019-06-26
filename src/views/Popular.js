import React, { Component } from 'react';
import Logo from '../images/moerkeland-logo.jpg'
import '../sass/popular.scss'

class Popular extends Component {
  render () {
    return (
      <div className="popular">
        <div className="container">

          <h1>POPULAR PODCAST</h1>

          <div className="toppod">
            <img src={Logo} alt=""/>
            <div className="links">
              <a href="/" className="apple"><i className="fab fa-apple"></i>ITUNES</a>
              <a href="/" className="weblink"><i className="fas fa-link"></i>WEB</a>
            </div>
            <div className="podcast">
              <h2>MØRKELAND</h2> 
            </div>
            <div className="description"> Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Saepe, alias. Nisi totam sed, soluta beatae error 
              inventore voluptates facilis dolores, quasi ipsum at esse itaque ipsam 
              accusamus odio quam necessitatibus!</div>
            
            <div className="buttons">
              <button>LISTEN</button>
              <button>SAVE</button>
            </div>
          </div>

          <div className="toppod">
            <img src={Logo} alt=""/>
            <div className="links">
              <a href="/" className="apple"><i className="fab fa-apple"></i>ITUNES</a>
              <a href="/" className="weblink"><i className="fas fa-link"></i>WEB</a>
            </div>
            <div className="podcast">
              <h2>MØRKELAND</h2> 
            </div>
            <div className="description"> Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Saepe, alias. Nisi totam sed, soluta beatae error 
              inventore voluptates facilis dolores, quasi ipsum at esse itaque ipsam 
              accusamus odio quam necessitatibus!</div>
            
            <div className="buttons">
              <button>LISTEN</button>
              <button>SAVE</button>
            </div>
          </div>

          <div className="toppod">
            <img src={Logo} alt=""/>
            <div className="links">
              <a href="/" className="apple"><i className="fab fa-apple"></i>ITUNES</a>
              <a href="/" className="weblink"><i className="fas fa-link"></i>WEB</a>
            </div>
            <div className="podcast">
              <h2>MØRKELAND</h2> 
            </div>
            <div className="description"> Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Saepe, alias. Nisi totam sed, soluta beatae error 
              inventore voluptates facilis dolores, quasi ipsum at esse itaque ipsam 
              accusamus odio quam necessitatibus!</div>
            
            <div className="buttons">
              <button>LISTEN</button>
              <button>SAVE</button>
            </div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default Popular;