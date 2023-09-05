import React, { Component } from 'react';
import '../sass/home.scss';

import HomeCover from '../images/home-featured.png';
import HomeInfo from '../components/home/HomeInfo';
import HomeSearch from '../components/home/HomeSearch';

import HomeVideo from '../video/home-video.mp4';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="video-wrapper">
          <video muted autoPlay loop>
            <source src={ HomeVideo } />
            Your browser does not support the video tag.
          </video>

          <div class="video-content">
            <div className="home">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <h1>
                      Find and listen
                      <br/>
                      to your favorite
                      <br/>
                      podcasts!
                    </h1>
                    <h4>
                      The best podcast websites communicate a feel and make it easy for visitors to discover your podcast
                    </h4>
                    <div className="col-md-12 text-start home-cta">
                      <a href='/episodes' type="button" className="btn btn-primary me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={14} width={14} ><g><line x1={0.5} y1={1.5} x2={0.5} y2={12.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={5.7} y1={3.5} x2={5.7} y2={10.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={3.1} y1={5} x2={3.1} y2={9} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={13.5} y1={1.5} x2={13.5} y2={12.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={10.9} y1={3.5} x2={10.9} y2={10.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><line x1={8.3} y1={5} x2={8.3} y2={9} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
                        
                        Start Listening
                      </a>
                      <a href='/channels' type="button" className="btn btn-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={14} width={14} ><g><path d="M6.15.53a.39.39,0,0,0-.4,0,.26.26,0,0,0-.06.34C6.92,3,7.18,5.9,5.5,7.5A5.52,5.52,0,0,1,4,5.5,3.89,3.89,0,0,0,2,9a4.7,4.7,0,0,0,5,4.5c3.22,0,4.89-2,5-4.5C12.13,6,10,2.31,6.15.53Z" fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5,9a2,2,0,0,1-2,2" fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
                        Explore channels
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 home-featured">
                    <a href='/'>
                      <img src={HomeCover} alt="home cover" className='home-cover' />
                    </a>
                    {/* <button type='button' className='btn btn-text btn-play'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height={14} width={14} ><g><circle cx={7} cy={7} r={6.5} fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /><polygon points="5.5 4.5 9.5 7 5.5 9.5 5.5 4.5" fill="none" stroke="#212529" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeSearch />
        <HomeInfo />
        <div className="home-ending"></div>
      </div>
    )
  }
}

export default Home;