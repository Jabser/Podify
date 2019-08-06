import React, { Component } from 'react';
import '../sass/universalPlayer.scss';

import PocastCover from '../images/moerkeland-logo.jpg';

class UniversalPlayer extends Component {
  render() {
    return (
      <div className="universal-player">
        <div className="container player">
          <div className="row">



            <div className="col-3">
              {/* Info (Name, cover art, these also work as direct links etc.) */}
              <div className="info">
                <img src={PocastCover} alt="podcast cover" />
                <div className="info-links">
                  <a href="http://localhost:3000/universalPlayer" className="info-name">Podcast Name #136</a>
                  <a href="http://localhost:3000/universalPlayer" className="info-author">Post Malone</a>
                </div>
              </div>
            </div>



            <div className="col-6">
              {/* Controls (play, pause, progress bar etc.) */}
              <div className="controls">
                <div className="buttons">
                  <button className="btn btn-link"><i class="fas fa-step-backward"></i></button>

                  <button className="btn btn-link"><i className="far fa-pause-circle fa-2x"></i></button>

                  <button className="btn btn-link"><i class="fas fa-step-forward"></i></button>
                </div>
                <div className="progress-container row">
                  <div className="col-1">
                    <span className="left-timer">34:09</span>
                  </div>
                  <div className="col-10">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <span className="right-timer">105:54</span>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-3">
              {/* Volume controls */}
              <div className="volume">
                <button className="btn btn-link"><i class="fas fa-volume-up"></i></button>
                <button className="btn btn-link"><i class="fas fa-cog"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UniversalPlayer;