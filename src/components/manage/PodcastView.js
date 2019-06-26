import React, { Component } from 'react';
import '../../sass/card.scss';
import '../../sass/manage.scss'
import axios from 'axios';

const Podcast = props => (
  <div id="card">
    <img src={props.podcast.podcast_picture} alt="podcast logo" className="logo" />
    <div className="links">
      <a href={props.podcast.podcast_itunes} className="apple"><i className="fab fa-apple"></i>ITUNES</a>
      <a href={props.podcast.podcast_web} className="weblink"><i className="fas fa-link"></i>WEB</a>
    </div>
    <div className="episode">
      <h1>{props.podcast.podcast_title}</h1>
      <h2><span>by</span> {props.podcast.podcast_author}</h2>
    </div>
    <div className="play">
      <audio src={props.podcast.podcast_play} />
      <div className="fbx">
        <div className="fas fa-play-circle" />
        <div id="timeline">
          <div id="handle"/> 
        </div>
      </div>
    </div>
    <div className="rating">
      <div className="like">
        <i className="fas fa-thumbs-up"></i>
        <p>{props.podcast.podcast_rating_like}</p>
      </div>
      <div className="dislike">
        <i className="fas fa-thumbs-down"></i>
        <p>{props.podcast.podcast_rating_dislike}</p>
      </div>
    </div>
    <div className="desc">
      <p>
        {props.podcast.podcast_description}
      </p>
    </div>
  </div>
)

class PodcastView extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { podcasts: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3020/podcasts/')
      .then(response => {
        this.setState({ podcasts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidUpdate() {
    axios.get('http://localhost:3020/podcasts/')
      .then(response => {
        this.setState({ podcasts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  podcastView() {
    return this.state.podcasts.map(function (currentPodcast, i) {
      return <Podcast podcast={currentPodcast} key={i} />;
    });
  }

  render() {
    return (
      <div className="podcast-view">
        {this.podcastView()}
      </div>
    )
  }
}

export default PodcastView;