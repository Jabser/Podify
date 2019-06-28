import React, { Component } from 'react';
import '../../sass/manage.scss'
import axios from 'axios';

class Create extends Component {

  constructor(props) {
    super(props);

    this.onChangePodcastTitle = this.onChangePodcastTitle.bind(this);
    this.onChangePodcastDescription = this.onChangePodcastDescription.bind(this);
    this.onChangePodcastAuthor = this.onChangePodcastAuthor.bind(this);
    this.onChangePodcastItunes = this.onChangePodcastItunes.bind(this);
    this.onChangePodcastWeb = this.onChangePodcastWeb.bind(this);
    this.onChangePodcastPlay = this.onChangePodcastPlay.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      podcast_picture: 'http://localhost:3000/static/media/moerkeland-logo.1fc3ce2b.jpg',
      podcast_title: '',
      podcast_description: '',
      podcast_author: '',
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

  onChangePodcastAuthor(e) {
    this.setState({
      podcast_author: e.target.value
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
    console.log(`Author: ${this.state.podcast_author}`);
    console.log(`Itunes: ${this.state.podcast_itunes}`);
    console.log(`Web: ${this.state.podcast_web}`);
    console.log(`Play: ${this.state.podcast_play}`);

    const newPodcast = {
      podcast_picture: this.state.podcast_picture,
      podcast_title: this.state.podcast_title,
      podcast_description: this.state.podcast_description,
      podcast_author: this.state.podcast_author,
      podcast_itunes: this.state.podcast_itunes,
      podcast_web: this.state.podcast_web,
      podcast_play: this.state.podcast_play,
      podcast_rating_like: this.state.podcast_rating_like,
      podcast_rating_dislike: this.state.podcast_rating_dislike
    }

    axios.post('http://localhost:3020/podcasts/add', newPodcast)
      .then(res => console.log(res.data));

    this.setState({
      podcast_picture: 'http://localhost:3000/static/media/moerkeland-logo.1fc3ce2b.jpg',
      podcast_title: '',
      podcast_description: '',
      podcast_author: '',
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
          <div className="row">
            <div className="col-4">
              <h1>Add Podcast</h1>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi labore atque ipsum natus. Quam maiores excepturi enim nam, necessitatibus placeat molestiae illo quia! Aut voluptate explicabo, optio molestiae veniam impedit.
              </p>
            </div>
            <div className="col-8">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-6">
                    {/* Title */}
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type="text"
                        id="title"
                        value={this.state.podcast_title}
                        onChange={this.onChangePodcastTitle}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Episode */}
                    <div className="form-group">
                      <label htmlFor="episode">Episode</label>
                      <input type="number"
                        id="episode"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text"
                    id="description"
                    value={this.state.podcast_description}
                    onChange={this.onChangePodcastDescription}
                    className="form-control"
                  />
                </div>

                {/* Author */}
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input type="text"
                    id="author"
                    value={this.state.podcast_author}
                    onChange={this.onChangePodcastAuthor}
                    className="form-control"
                  />
                </div>

                <hr/>

                {/* Itunes */}
                <div className="form-group">
                  <label htmlFor="itunes"><i class="fab fa-apple fa-fw"></i> Itunes</label>
                  <input type="text"
                    id="itunes"
                    value={this.state.podcast_itunes}
                    onChange={this.onChangePodcastItunes}
                    className="form-control"
                  />
                </div>

                {/* Web */}
                <div className="form-group">
                  <label htmlFor="web"><i class="fas fa-link fa-fw"></i> Website</label>
                  <input type="text"
                    id="web"
                    value={this.state.podcast_web}
                    onChange={this.onChangePodcastWeb}
                    className="form-control"
                  />
                </div>

                {/* Play */}
                <div className="form-group">
                  <label htmlFor="play"><i class="fas fa-play-circle fa-fw"></i> Play Link (Listenotes)</label>
                  <input type="text"
                    id="play"
                    value={this.state.podcast_play}
                    onChange={this.onChangePodcastPlay}
                    className="form-control"
                  />
                </div>

                <hr/>

                {/* Rating - Like */}


                {/* Rating - Dislike */}


                {/* Picture */}
                <div className="form-group">
                  <label htmlFor="picture"><i class="far fa-images fa-fw"></i> Picture</label>
                  <input type="file" onChange={this.onChangeHandler} name="file" id="file" className="btn btn-upload"/>
                </div>

                <hr/>

                {/* Submit to DB */}
                <div className="form-group">
                  <button type="submit" className="btn btn-add">Create Podcast</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Create;