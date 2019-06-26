import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../sass/manage.scss'
import axios from 'axios';

class Create extends Component {

  constructor(props) {
    super(props);

    this.onChangePodcastTitle = this.onChangePodcastTitle.bind(this);
    this.onChangePodcastDescription = this.onChangePodcastDescription.bind(this);
    this.onChangePodcastItunes = this.onChangePodcastItunes.bind(this);
    this.onChangePodcastWeb = this.onChangePodcastWeb.bind(this);
    this.onChangePodcastPlay = this.onChangePodcastPlay.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      podcast_picture: '',
      podcast_title: '',
      podcast_description: '',
      podcast_itunes: '',
      podcast_web: '',
      podcast_play: '',
      podcast_rating_like: '0',
      podcast_rating_dislike: '0'
    }
  }

  onChangePodcastTitle(e) {
    this.setState({
      podcast_title: e.target.value
    });
  }

  onChangePodcastDescription(e) {
    this.setState({
      podcast_description: e.target.value
    });
  }

  onChangePodcastItunes(e) {
    this.setState({
      podcast_itunes: e.target.value
    });
  }

  onChangePodcastWeb(e) {
    this.setState({
      podcast_web: e.target.value
    });
  }

  onChangePodcastPlay(e) {
    this.setState({
      podcast_play: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Following podcast created:`);
    console.log(`Title: ${this.state.podcast_title}`);
    console.log(`Description: ${this.state.podcast_description}`);
    console.log(`Itunes: ${this.state.podcast_itunes}`);
    console.log(`Web: ${this.state.podcast_web}`);
    console.log(`Play: ${this.state.podcast_play}`);

    const newPodcast = {
      podcast_picture: this.state.podcast_picture,
      podcast_title: this.state.podcast_title,
      podcast_description: this.state.podcast_description,
      podcast_itunes: this.state.podcast_itunes,
      podcast_web: this.state.podcast_web,
      podcast_play: this.state.podcast_play,
      podcast_rating_like: this.state.podcast_rating_like,
      podcast_rating_dislike: this.state.podcast_rating_dislike
    }

    axios.post('http://localhost:3020/podcasts/add', newPodcast)
      .then(res => console.log(res.data));

    this.setState({
      podcast_picture: '',
      podcast_title: '',
      podcast_description: '',
      podcast_itunes: '',
      podcast_web: '',
      podcast_play: '',
      podcast_rating_like: '0',
      podcast_rating_dislike: '0'
    })
  }

  render() {
    return (
      <div className="create">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            {/* Title */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text"
                id="title"
                value={this.state.podcast_title}
                onChange={this.onChangePodcastTitle}
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text"
                id="description"
                value={this.state.podcast_description}
                onChange={this.onChangePodcastDescription}
              />
            </div>

            {/* Itunes */}
            <div className="form-group">
              <label htmlFor="itunes">Itunes</label>
              <input type="text"
                id="itunes"
                value={this.state.podcast_itunes}
                onChange={this.onChangePodcastItunes}
              />
            </div>

            {/* Web */}
            <div className="form-group">
              <label htmlFor="web">Web</label>
              <input type="text"
                id="web"
                value={this.state.podcast_web}
                onChange={this.onChangePodcastWeb}
              />
            </div>

            {/* Play */}
            <div className="form-group">
              <label htmlFor="play">Play Link</label>
              <input type="text"
                id="play"
                value={this.state.podcast_play}
                onChange={this.onChangePodcastPlay}
              />
            </div>

            {/* Rating - Like */}


            {/* Rating - Dislike */}


            {/* Picture */}


            {/* Submit to DB */}
            <div className="form-group">
              <button type="submit">Create Podcast</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Create;