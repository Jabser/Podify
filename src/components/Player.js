import React from 'react';
import '../sass/player.scss'
import Audiofile from '../audio/bensound-creepy.mp3';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = { play: false };
  };

  componentWillReceiveProps() {
    this.setState({ play: true });
  };

  componentDidMount() {
    this.audio.addEventListener("timeupdate", () => {
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
      this.positionHandle(position);
    });
  };

  positionHandle = (position) => {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };

  mouseMove = (e) => {
    this.positionHandle(e.pageX);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
 };

  mouseUp = (e) => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = (e) => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };

  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  };


  render() {
    return <div>
      <audio src={Audiofile}
        ref={(audio) => { this.audio = audio }}
      />
      <div className="fbx">
        <div onClick={this.play} className={!this.state.play ? "fas fa-play-circle" : "fas fa-pause-circle"} />
        <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
          <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} /> 
        </div>
      </div>
    </div>
  }
}
